import classNames from 'classnames'
import { Job } from '../types'
import { formatDate } from '../utils'

export default function JobView({ job }: { job: Job }) {
  const getColor = () => {
    const number = Math.floor(Math.random() * 12 + 1)
    switch (number) {
      case 1:
        return 'bg-logo-1'
      case 2:
        return 'bg-logo-2'
      case 3:
        return 'bg-logo-3'
      case 4:
        return 'bg-logo-4'
      case 5:
        return 'bg-logo-5'
      case 6:
        return 'bg-logo-6'
      case 7:
        return 'bg-logo-7'
      case 8:
        return 'bg-logo-8'
      case 9:
        return 'bg-logo-9'
      case 10:
        return 'bg-logo-10'
      case 11:
        return 'bg-logo-11'
      case 12:
        return 'bg-logo-12'
      default:
        return 'bg-black'
    }
  }
  return (
    <>
      <div className='p-8 pt-0 mx-auto mt-12 bg-white rounded-md min-w-card min-h-card'>
        <div
          className={classNames(
            'text-white font-brand font-bold absolute grid w-12 h-12 p-2 transform -translate-y-1/2 border place-items-center rounded-2xl',
            getColor()
          )}
        >
          {job.company[0]}
        </div>
        <div className='flex items-center pt-12 text-base font-normal leading-5 text-dark-grey font-brand'>
          <p>{formatDate(new Date(job.created_at))} ago</p>
          <p className='ml-6 text-4xl'>&middot;</p>
          <p className='ml-3'>{job.type}</p>
        </div>
        <div className='mt-3'>
          <h2 className='text-lg font-bold leading-6 font-brand text-very-dark-blue'>
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
      </div>
    </>
  )
}
