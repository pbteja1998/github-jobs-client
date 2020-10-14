import classNames from 'classnames'
import { Job } from '../../types'
import { getRandomColor } from '../../utils'
import { Button } from '../../components'

export default function DetailsPage({ job }: { job: Job }) {
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
    </>
  )
}

export async function getServerSideProps({ params }) {
  console.log({ params })
  const res = await fetch(`https://jobs.github.com/positions/${params.id}.json`)
  const data = await res.json()
  return { props: { job: data } }
}
