import { ReactNode } from 'react'
import classNames from 'classnames'

export default function Button({
  disabled = false,
  className = '',
  children,
  primary = false,
  onClick = () => {},
  block = false,
}: {
  disabled?: boolean
  className?: string
  children?: ReactNode
  primary?: boolean
  onClick?: () => void
  block?: boolean
}) {
  return (
    <>
      <button
        disabled={disabled}
        className={classNames(
          className,
          'font-brand text-base font-bold leading-button h-12 bg-violet hover:bg-light-violet rounded-button',
          primary
            ? 'text-white'
            : 'text-violet dark:text-white dark:bg-white dark:bg-opacity-10 bg-opacity-10 hover:bg-opacity-35',
          block ? 'w-full' : 'w-35',
          disabled && 'cursor-not-allowed opacity-50'
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}
