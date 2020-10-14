import { ReactNode } from 'react'
import classNames from 'classnames'

export default function Button({
  className = '',
  children,
  primary = false,
  onClick = () => {},
}: {
  className?: string
  children: ReactNode
  primary?: boolean
  onClick?: () => void
}) {
  return (
    <>
      <button
        className={classNames(
          className,
          'font-brand font-bold text-base leading-button h-12 w-35 bg-violet hover:bg-light-violet rounded-button',
          primary
            ? 'text-white'
            : 'text-violet bg-opacity-10 hover:bg-opacity-35'
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}
