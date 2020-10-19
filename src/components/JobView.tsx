import classNames from 'classnames'
import { Job } from '../types'
import { formatDate, getRandomColor } from '../utils'
import Link from 'next/link'
import { Button } from '.'

export default function JobView({ job }: { job: Job }) {
  return (
    <>
      <div className='relative p-8 pt-0 mx-auto bg-white rounded-md shadow dark:bg-very-dark-blue w-76 md:w-full min-h-card'>
        <div
          className={classNames(
            'text-white font-brand font-bold absolute grid w-12 h-12 p-2 transform -translate-y-1/2 place-items-center rounded-2xl',
            getRandomColor(job.company)
          )}
        >
          {job.company[0]}
        </div>
        <div className='flex items-center pt-12 text-base font-normal leading-5 text-dark-grey font-brand'>
          <p>{formatDate(new Date(job.created_at))}</p>
          <p className='ml-6 text-4xl'>&middot;</p>
          <p className='ml-3'>{job.type}</p>
        </div>
        <div className='mt-3'>
          <h2 className='text-lg font-bold leading-6 font-brand text-very-dark-blue dark:text-white'>
            {job.title}
          </h2>
        </div>
        <div>
          <p className='mt-3 text-base font-normal leading-5 font-brand text-dark-grey'>
            {job.company}
          </p>
        </div>
        <div>
          <p className='mt-10 text-sm font-bold font-brand text-violet'>
            {job.location}
          </p>
        </div>
        <Link href={`/jobs/${job.id}`}>
          <div
            title='View Details'
            className='absolute top-0 right-0 flex p-3 space-x-2 text-center cursor-pointer md:p-4 hover:bg-gray-100'
          >
            <svg
              className='w-5 h-5 fill-current text-violet'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
              <path
                fillRule='evenodd'
                d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                clipRule='evenodd'
              />
            </svg>
            <span className='text-sm font-semibold tracking-wider uppercase text-violet'>
              View Details
            </span>
          </div>
        </Link>
      </div>
    </>
  )
}
