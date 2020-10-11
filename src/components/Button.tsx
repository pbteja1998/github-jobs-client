import { ReactNode } from 'react'
import classNames from 'classnames'

export default function Button({
  children,
  primary = false,
}: {
  children: ReactNode
  primary?: boolean
}) {
  return (
    <>
      <button
        className={classNames(
          'font-brand font-bold text-base leading-button h-12 w-35 bg-violet hover:bg-light-violet rounded-button',
          primary
            ? 'text-white'
            : 'text-violet bg-opacity-10 hover:bg-opacity-35'
        )}
      >
        {children}
      </button>
    </>
  )
}
