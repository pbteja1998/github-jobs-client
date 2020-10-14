import { ReactNode } from 'react'
import classNames from 'classnames'
import JobView from './JobView'

export default function Button({
  className = '',
  children,
  primary = false,
  onClick = () => {},
  block = false,
}: {
  className?: string
  children: ReactNode
  primary?: boolean
  onClick?: () => void
  block?: boolean
}) {
  return (
    <>
      <button
        className={classNames(
          className,
          'font-brand font-bold text-base leading-button h-12 bg-violet hover:bg-light-violet rounded-button',
          primary
            ? 'text-white'
            : 'text-violet bg-opacity-10 hover:bg-opacity-35',
          block ? 'w-full' : 'w-35'
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}
