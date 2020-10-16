import { useEffect, useRef, useState } from 'react'
import { useMutation } from 'react-query'
import { Button, JobView, Input, JobViewSkeleton, Modal } from '../components'
import { Job } from '../types'

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [fullTime, setFullTime] = useState(false)

  const modalRef = useRef()

  const [final, setFinal] = useState({
    finalDescription: '',
    finalLocation: '',
    finalFullTime: false,
  })
  const [page, setPage] = useState(1)
  const [jobs, setJobs] = useState<Job[]>([])
  const [loadMoreDisabled, setLoadMoreDisabled] = useState(false)

  const [mutate, { isLoading, error, data }] = useMutation(() =>
    fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://jobs.github.com/positions.json?page=${page}&description=${final.finalDescription}&location=${final.finalLocation}&full_time=${final.finalFullTime}`
      )}`
    )
      .then((res) => res.json())
      .then((data) => JSON.parse(data.contents))
  )

  useEffect(() => {
    setJobs([])
    mutate().then((data) => {
      setJobs(data)
      setDescription('')
      setLocation('')
      setFullTime(false)
    })
  }, [final])

  useEffect(() => {
    mutate().then((data) =>
      setJobs((prev: Job[]) => {
        // [...prev, ...data] and remove duplicates
        const allJobs = [...prev]
        data.forEach((_job) => {
          if (!allJobs.some((job) => job.id === _job.id)) {
            allJobs.push(_job)
          }
        })
        // if we do not get any more jobs even after increasing page
        // disable load more button
        if (page > 1 && prev.length === allJobs.length) {
          setLoadMoreDisabled(true)
        }
        return allJobs
      })
    )
  }, [page])

  useEffect(() => {
    function handler(event: MouseEvent) {
      if (
        !event.defaultPrevented &&
        !(modalRef.current as any)?.contains(event.target)
      ) {
        if (modalOpen) {
          setModalOpen(false)
        }
      }
    }
    window.addEventListener('click', handler)
    return () => window.removeEventListener('click', handler)
  }, [modalOpen, modalRef])

  if (error) return 'An error has occurred.'

  return (
    <>
      <Modal
        modalRef={modalRef}
        className='md:hidden'
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
      >
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
          className='flex pl-1 border-b border-dark-grey border-opacity-20 md:hidden'
          label='Location Filter'
          placeholder='Filter by location...'
          value={location}
          setValue={setLocation}
        />
        <Input
          className='flex pl-1 md:hidden'
          label='Full Time'
          isCheckbox={true}
          checkboxValue={fullTime}
          setCheckboxValue={setFullTime}
        >
          <>
            <p className='ml-4 text-base font-bold font-brand leading-button text-very-dark-blue dark:text-white'>
              Full Time Only
            </p>
          </>
        </Input>
        <div className='px-6 pb-6 dark:bg-very-dark-blue'>
          <Button
            primary={true}
            className='w-full cursor-pointer'
            onClick={() => {
              setLoadMoreDisabled(false)
              setPage(1)
              setFinal({
                finalDescription: description,
                finalLocation: location,
                finalFullTime: fullTime,
              })
              setModalOpen(false)
            }}
          >
            Search
          </Button>
        </div>
      </Modal>

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
          placeholder='Filter by text...'
          className='pr-4 rounded-l-md rounded-r-md md:rounded-r-none'
          value={description}
          setValue={setDescription}
        >
          <div className='flex items-center md:hidden'>
            <div
              className='cursor-pointer'
              onClick={(e) => {
                e.preventDefault()
                setModalOpen(true)
              }}
            >
              <svg width='20' height='20' xmlns='http://www.w3.org/2000/svg'>
                <path
                  className='fill-current text-dark-grey dark:text-white'
                  d='M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z'
                  fill='#6E8098'
                  fillRule='nonzero'
                />
              </svg>
            </div>
            <div
              className='cursor-pointer ml-6 inline-flex items-center justify-center w-12 h-12 p-3.5 bg-violet'
              onClick={() => {
                setLoadMoreDisabled(false)
                setPage(1)
                setFinal({
                  finalDescription: description,
                  finalLocation: location,
                  finalFullTime: fullTime,
                })
              }}
            >
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
          value={location}
          setValue={setLocation}
        />

        <Input
          className='hidden cursor-auto md:flex rounded-r-md'
          label='Full Time'
          isCheckbox={true}
          checkboxValue={fullTime}
          setCheckboxValue={setFullTime}
        >
          <>
            <p className='ml-4 text-base font-bold font-brand leading-button text-very-dark-blue dark:text-white'>
              Full Time Only
            </p>
            <Button
              primary={true}
              className='ml-auto mr-2'
              onClick={() => {
                setLoadMoreDisabled(false)
                setPage(1)
                setFinal({
                  finalDescription: description,
                  finalLocation: location,
                  finalFullTime: fullTime,
                })
              }}
            >
              Search
            </Button>
          </>
        </Input>
      </div>

      <div className='mb-6 -mt-6 space-x-2 text-center'>
        {final.finalDescription && (
          <span className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-violet text-white'>
            {final.finalDescription}
            <button
              type='button'
              className='flex-shrink-0 -mr-0.5 ml-1.5 inline-flex text-white focus:outline-none focus:text-white hover:text-opacity-75 focus:text-opacity-75'
              aria-label='Remove large badge'
              onClick={() => {
                setLoadMoreDisabled(false)
                setPage(1)
                setFinal({ ...final, finalDescription: '' })
              }}
            >
              <svg
                className='w-2 h-2'
                stroke='currentColor'
                fill='none'
                viewBox='0 0 8 8'
              >
                <path
                  strokeLinecap='round'
                  strokeWidth='1.5'
                  d='M1 1l6 6m0-6L1 7'
                />
              </svg>
            </button>
          </span>
        )}
        {final.finalLocation && (
          <span className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-violet text-white'>
            {final.finalLocation}
            <button
              type='button'
              className='flex-shrink-0 -mr-0.5 ml-1.5 inline-flex text-white focus:outline-none focus:text-white hover:text-opacity-75 focus:text-opacity-75'
              aria-label='Remove large badge'
              onClick={() => {
                setLoadMoreDisabled(false)
                setPage(1)
                setFinal({ ...final, finalLocation: '' })
              }}
            >
              <svg
                className='w-2 h-2'
                stroke='currentColor'
                fill='none'
                viewBox='0 0 8 8'
              >
                <path
                  strokeLinecap='round'
                  strokeWidth='1.5'
                  d='M1 1l6 6m0-6L1 7'
                />
              </svg>
            </button>
          </span>
        )}

        {final.finalFullTime && (
          <span className='inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-violet text-white'>
            Only Full Time
            <button
              type='button'
              className='flex-shrink-0 -mr-0.5 ml-1.5 inline-flex text-white focus:outline-none focus:text-white hover:text-opacity-75 focus:text-opacity-75'
              aria-label='Remove large badge'
              onClick={() => {
                setLoadMoreDisabled(false)
                setPage(1)
                setFinal({ ...final, finalFullTime: false })
              }}
            >
              <svg
                className='w-2 h-2'
                stroke='currentColor'
                fill='none'
                viewBox='0 0 8 8'
              >
                <path
                  strokeLinecap='round'
                  strokeWidth='1.5'
                  d='M1 1l6 6m0-6L1 7'
                />
              </svg>
            </button>
          </span>
        )}
      </div>

      <div className='grid grid-cols-1 px-6 pt-4 gap-x-3 xl:gap-x-8 gap-y-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {jobs?.map((job: Job) => (
          <JobView key={job.id} job={job} />
        ))}
        {isLoading && (
          <>
            <JobViewSkeleton />
            <JobViewSkeleton />
            <JobViewSkeleton />
            <JobViewSkeleton />
            <JobViewSkeleton />
            <JobViewSkeleton />
          </>
        )}
      </div>
      <div className='mt-8 mb-20 text-center md:mb-10'>
        <Button
          disabled={isLoading || loadMoreDisabled}
          primary={true}
          onClick={() => setPage((page) => page + 1)}
        >
          Load More
        </Button>
      </div>
    </>
  )
}
