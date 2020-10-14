import classNames from 'classnames'
import { Job } from '../../types'
import { formatDate, getRandomColor } from '../../utils'
import { Button } from '../../components'

export default function DetailsPage({ job }: { job: Job }) {
  console.log({ job })
  return (
    <>
      <div className='w-11/12 mx-auto transform -translate-y-6 bg-white rounded-md md:hidden min-h-52'>
        <div
          className={classNames(
            'text-white font-brand font-bold mx-auto grid w-12 h-12 p-2 transform -translate-y-1/2 place-items-center rounded-2xl',
            getRandomColor()
          )}
        >
          {job.company[0]}
        </div>
        <div className='text-center'>
          <div>
            <h2 className='text-xl font-bold leading-6 text-very-dark-blue font-brand'>
              {job.company}
            </h2>
            <p className='mt-3 text-base font-normal font-brand text-dark-grey leading-button'>
              {job.company_url.split('/')[2]}
            </p>
          </div>
          <Button
            className='mt-6'
            onClick={() => window.open(job.company_url, '_blank')}
          >
            Company Site
          </Button>
        </div>
      </div>
      <div className='hidden w-11/12 mx-auto overflow-hidden transform -translate-y-8 bg-white rounded-md md:flex min-h-35 max-w-183'>
        <div
          className={classNames(
            'grid place-items-center flex-1 text-white',
            getRandomColor()
          )}
        >
          <p className='text-6xl font-brand'>{job.company[0]}</p>
        </div>
        <div className='flex justify-between px-10 py-10.5 bg-white flex-4'>
          <div className='font-brand'>
            <h2 className='text-2xl font-bold leading-7 text-very-dark-blue'>
              {job.company}
            </h2>
            <p className='mt-3 font-normal text-normal leading-button text-dark-grey'>
              {job.company_url.split('/')[2]}
            </p>
          </div>
          <div>
            <Button onClick={() => window.open(job.company_url, '_blank')}>
              Company Site
            </Button>
          </div>
        </div>
      </div>
      <div className='w-11/12 px-6 py-10 mx-auto overflow-hidden bg-white rounded-md max-w-183'>
        <div>
          <div className='flex items-center text-base font-normal font-brand leading-button text-dark-grey'>
            <p>{formatDate(new Date(job.created_at))} ago</p>
            <div className='flex items-center ml-5'>
              <p className='text-4xl'>&middot;</p>
              <p className='ml-3'>{job.type}</p>
            </div>
          </div>
          <h2 className='mt-2 text-xl font-bold leading-6 font-brand text-very-dark-blue'>
            {job.company}
          </h2>
          <p className='mt-2 text-sm font-bold text-violet leading-1'>
            {job.location}
          </p>
        </div>
        <div>
          <Button className='mt-8' primary={true} block={true}>
            Apply Now
          </Button>
        </div>
        <div>
          <article
            className='mt-8 text-base font-normal leading-7 prose description font-brand text-dark-grey'
            dangerouslySetInnerHTML={{
              __html: job.description || '',
            }}
          />
        </div>
      </div>
      <div className='w-11/12 px-8 pt-14.5 mx-auto mt-8 overflow-auto text-white rounded-md pb-15 font-brand bg-violet max-w-183'>
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
      <div className='w-full h-24 p-6 mt-10 bg-white'>
        <Button primary={true} block={true}>
          Apply Now
        </Button>
      </div>
    </>
  )
}

export async function getServerSideProps({ params }) {
  console.log({ params })
  const res = await fetch(`https://jobs.github.com/positions/${params.id}.json`)
  const data = await res.json()
  return { props: { job: data } }
}
