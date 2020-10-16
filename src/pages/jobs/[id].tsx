import classNames from 'classnames'
import { Job } from '../../types'
import { formatDate, getRandomColor } from '../../utils'
import { Button, JobDetailsViewSkeleton } from '../../components'
import { useQuery } from 'react-query'
import { useRouter } from 'next/router'

export default function DetailsPage() {
  const router = useRouter()
  const jobId = router.query.id
  const { isLoading, error, data } = useQuery(`job-${jobId}-data`, () =>
    fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://thingproxy.freeboard.io/fetch/https://jobs.github.com/positions/${jobId}.json`
      )}`
    )
      .then((response) => {
        if (response.ok) return response.json()
        throw new Error('Network response was not ok.')
      })
      .then((data) => JSON.parse(data.contents))
  )

  if (isLoading) return <JobDetailsViewSkeleton />
  if (error) return 'An error has occurred.'
  const job: Job = data
  return (
    <>
      {/* Mobile Hero Section */}
      <div className='w-11/12 mx-auto transform -translate-y-6 bg-white rounded-md dark:bg-very-dark-blue md:hidden min-h-52'>
        <div
          className={classNames(
            'text-white font-brand font-bold mx-auto grid w-12 h-12 p-2 transform -translate-y-1/2 place-items-center rounded-2xl',
            getRandomColor(job.company)
          )}
        >
          {job.company?.[0]}
        </div>
        <div className='px-6 text-center'>
          <div>
            <h2 className='text-xl font-bold leading-6 text-very-dark-blue dark:text-white font-brand'>
              {job.company}
            </h2>
            <p className='mt-3 text-base font-normal font-brand text-dark-grey leading-button'>
              {job.company_url?.split('/')?.[2]}
            </p>
          </div>
          <Button
            disabled={!job.company_url}
            className='mt-6'
            onClick={() => window.open(job.company_url, '_blank')}
          >
            Company Site
          </Button>
        </div>
      </div>

      {/* Desktop Hero Section */}
      <div className='hidden w-11/12 mx-auto overflow-hidden transform -translate-y-8 bg-white rounded-md md:flex min-h-35 max-w-183'>
        <div
          className={classNames(
            'grid place-items-center flex-1 text-white',
            getRandomColor(job.company)
          )}
        >
          <p className='text-6xl font-brand'>{job.company[0]}</p>
        </div>
        <div className='flex items-center justify-between px-10 py-10.5 bg-white dark:bg-very-dark-blue flex-4'>
          <div className='pr-1.5 font-brand'>
            <h2 className='text-2xl font-bold leading-7 text-very-dark-blue dark:text-white'>
              {job.company}
            </h2>
            <p className='mt-3 font-normal text-normal leading-button text-dark-grey'>
              {job.company_url?.split('/')?.[2]}
            </p>
          </div>
          <div>
            <Button
              disabled={!job.company_url}
              onClick={() => window.open(job.company_url, '_blank')}
            >
              Company Site
            </Button>
          </div>
        </div>
      </div>
      <div className='w-11/12 px-6 py-10 mx-auto overflow-hidden bg-white rounded-md dark:bg-very-dark-blue max-w-183'>
        <div className='flex flex-col md:items-center md:flex-row md:justify-between'>
          <div>
            <div className='flex items-center text-base font-normal font-brand leading-button text-dark-grey'>
              <p>{formatDate(new Date(job.created_at))}</p>
              <div className='flex items-center ml-5'>
                <p className='text-4xl'>&middot;</p>
                <p className='ml-3'>{job.type}</p>
              </div>
            </div>
            <h2 className='mt-2 text-xl font-bold leading-6 font-brand text-very-dark-blue dark:text-white'>
              {job.title}
            </h2>
            <p className='mt-2 text-sm font-bold text-violet leading-1'>
              {job.location}
            </p>
          </div>
          <div>
            <a href='#how-to-apply'>
              <Button className='w-full mt-8 md:w-35' primary={true}>
                Apply Now
              </Button>
            </a>
          </div>
        </div>

        <div>
          <article
            className='mt-8 text-base font-normal leading-7 prose description font-brand text-dark-grey dark:text-grey'
            dangerouslySetInnerHTML={{
              __html: job.description || '',
            }}
          />
        </div>
      </div>
      <div
        id='how-to-apply'
        className='w-11/12 px-8 pt-14.5 mx-auto mb-24 md:mb-16 mt-8 overflow-auto text-white rounded-md pb-15 font-brand bg-violet max-w-183'
      >
        <h2 className='text-xl font-bold'>How to Apply</h2>
        <div>
          <article
            className='mt-6 text-base font-normal leading-7 prose text-white how-to-apply font-brand'
            dangerouslySetInnerHTML={{
              __html: job.how_to_apply || '',
            }}
          />
        </div>
      </div>
    </>
  )
}
