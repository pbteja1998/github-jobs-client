import { useQuery } from 'react-query'
import { Button, JobView, Input, JobViewSkeleton } from '../components'
import { Job } from '../types'

export default function Home() {
  const { isLoading, error, data } = useQuery('jobsData', () =>
    fetch(
      'https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions.json?page=1&search=code'
    ).then((res) => res.json())
  )

  if (error) return 'An error has occurred.'
  const jobs: Job[] = data

  return (
    <>
      <div className='grid justify-center max-w-full grid-cols-1 px-6 mx-auto transform -translate-y-1/2 md:grid-cols-3'>
        <Input
          icon={
            <svg width='24' height='24' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z'
                fill='#5964E0'
                fillRule='nonzero'
              />
            </svg>
          }
          label='Title Filter'
          placeholder='Filter by title...'
          className='pr-4 rounded-l-md'
        >
          <div className='flex items-center md:hidden'>
            <div>
              <svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'>
                <path
                  className='fill-current text-dark-grey dark:text-white'
                  d='M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z'
                  fill='#6E8098'
                  fillRule='nonzero'
                />
              </svg>
            </div>
            <div className='ml-6 inline-flex items-center justify-center w-12 h-12 p-3.5 bg-violet'>
              <svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z'
                  fill='#FFFFFF'
                  fillRule='nonzero'
                />
              </svg>
            </div>
          </div>
        </Input>
        <Input
          icon={
            <svg width='17' height='24' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z'
                fill='#5964E0'
                fillRule='nonzero'
              />
            </svg>
          }
          className='hidden border-l border-r border-dark-grey border-opacity-20 md:flex'
          label='Location Filter'
          placeholder='Filter by location...'
        />

        <Input
          className='hidden md:flex rounded-r-md'
          label='Full Time'
          isCheckbox={true}
        >
          <>
            <p className='ml-4 text-base font-bold font-brand leading-button text-very-dark-blue dark:text-white'>
              Full Time
            </p>
            <Button primary={true} className='ml-7 mr-1.5'>
              Search
            </Button>
          </>
        </Input>
      </div>

      <div className='grid grid-cols-1 px-6 pt-4 gap-x-3 xl:gap-x-8 gap-y-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {isLoading ? (
          <>
            <JobViewSkeleton />
            <JobViewSkeleton />
            <JobViewSkeleton />
            <JobViewSkeleton />
            <JobViewSkeleton />
            <JobViewSkeleton />
          </>
        ) : (
          jobs.map((job: Job) => <JobView key={job.id} job={job} />)
        )}
      </div>
      <div className='pb-16 mt-8 text-center'>
        <Button disabled={isLoading} primary={true}>
          Load More
        </Button>
      </div>
    </>
  )
}

// export async function getServerSideProps() {
//   const res = await fetch(
//     `https://jobs.github.com/positions.json?page=2&search=code`
//   )
//   const data = await res.json()
//   return { props: { jobs: data } }
// }
