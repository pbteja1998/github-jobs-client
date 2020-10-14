import classNames from 'classnames'
import { Button } from '.'

export default function JobDetailsViewSkeleton() {
  const randomWidth = () => {
    const number = Math.floor(Math.random() * 12) + 1
    if (number <= 6) {
      return 'w-12/12'
    }
    return 'w-11/12'
  }
  return (
    <div className='animate-pulse'>
      {/* Mobile Hero Section */}
      <div className='w-11/12 mx-auto transform -translate-y-6 bg-white rounded-md dark:bg-very-dark-blue md:hidden min-h-52'>
        <div
          className={
            'text-white font-brand font-bold mx-auto grid w-12 h-12 p-2 transform -translate-y-1/2 place-items-center rounded-2xl bg-gray-400'
          }
        ></div>
        <div className='px-6 text-center'>
          <div>
            <h2 className='inline-block w-7/12 h-6 text-xl font-bold leading-6 bg-gray-400 rounded text-very-dark-blue dark:text-white font-brand' />
            <p className='mt-3 text-base font-normal bg-gray-400 font-brand text-dark-grey leading-button' />
          </div>
          <Button className='mt-6 bg-gray-400' />
        </div>
      </div>

      {/* Desktop Hero Section */}
      <div className='hidden w-11/12 mx-auto overflow-hidden transform -translate-y-8 bg-white rounded-md md:flex min-h-35 max-w-183'>
        <div
          className={'grid place-items-center flex-1 text-white bg-gray-400'}
        >
          <p className='w-8 h-8 text-6xl bg-gray-700 rounded font-brand' />
        </div>
        <div className='flex items-center justify-between px-10 py-10.5 bg-white dark:bg-very-dark-blue flex-4'>
          <div className='pr-1.5 font-brand w-full'>
            <h2 className='w-3/5 h-6 text-2xl font-bold leading-7 bg-gray-400 rounded text-very-dark-blue dark:text-white' />
            <p className='mt-3 font-normal bg-gray-400 text-normal leading-button text-dark-grey' />
          </div>
          <div>
            <Button className='bg-gray-400' />
          </div>
        </div>
      </div>
      <div className='w-11/12 px-6 py-10 mx-auto overflow-hidden bg-white rounded-md dark:bg-very-dark-blue max-w-183'>
        <div className='flex flex-col md:items-center md:flex-row md:justify-between'>
          <div className='w-full'>
            <div className='flex items-center text-base font-normal font-brand leading-button text-dark-grey'>
              <p className='w-4/12 h-4 bg-gray-400 rounded' />
            </div>
            <h2 className='w-7/12 h-5 mt-2 text-xl font-bold leading-6 bg-gray-400 rounded font-brand text-very-dark-blue dark:text-white' />
            <p className='w-3/12 h-4 mt-2 text-sm font-bold bg-gray-400 rounded text-violet leading-1' />
          </div>
          <div>
            <Button className='w-full mt-8 bg-gray-400 md:w-35' />
          </div>
        </div>

        <div>
          <article className='mt-8 text-base font-normal leading-7 prose description font-brand text-dark-grey dark:text-grey'>
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
          </article>
        </div>
      </div>
      <div className='w-11/12 px-8 pt-14.5 mx-auto mt-8 overflow-auto text-white rounded-md pb-15 font-brand bg-violet max-w-183'>
        <h2 className='w-3/12 h-4 text-xl font-bold bg-gray-400 rounded' />
        <div>
          <article className='mt-6 text-base font-normal leading-7 prose text-white how-to-apply font-brand'>
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
            <p
              className={classNames('h-3 bg-gray-400 rounded', randomWidth())}
            />
          </article>
        </div>
      </div>
      <div className='w-full h-24 p-6 mt-10 bg-white dark:bg-very-dark-blue font-brand md:px-10'>
        <div className='flex justify-between mx-auto max-w-183'>
          <div className='hidden w-full md:block'>
            <h2 className='w-5/12 h-4 text-xl font-bold leading-6 bg-gray-400 rounded text-very-dark-blue dark:text-white' />
            <p className='w-3/12 h-4 mt-2 text-base font-normal leading-5 bg-gray-400 rounded text-dark-grey' />
          </div>

          <Button className='w-full bg-gray-400 md:w-35' />
        </div>
      </div>
    </div>
  )
}
