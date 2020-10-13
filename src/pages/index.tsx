import { Button, JobView } from '../components'
import { Job } from '../types'

export default function Home({ jobs }: { jobs: Job[] }) {
  return (
    <>
      <div className='grid grid-cols-1 px-6 pt-20 gap-x-3 xl:gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'>
        {jobs.map((job: Job) => (
          <JobView key={job.id} job={job} />
        ))}
      </div>
      <div className='mt-8 mb-16 text-center'>
        <Button primary={true}>Load More</Button>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(
    `https://jobs.github.com/positions.json?page=2&search=code`
  )
  const data = await res.json()
  return { props: { jobs: data } }
}
