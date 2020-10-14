import classNames from 'classnames'
import React, { ReactElement, ReactNode } from 'react'

export default function Input({
  className = '',
  label,
  placeholder = '',
  icon,
  isCheckbox = false,
  children,
}: {
  className?: string
  label: string
  placeholder?: string
  icon?: ReactElement
  isCheckbox?: boolean
  children?: ReactNode
}) {
  return (
    <div className={'text-center'}>
      <label htmlFor={`${label}-id`} className='sr-only'>
        {label}
      </label>
      <div
        className={classNames(
          'relative h-20 shadow-sm w-full max-w-76 md:max-w-full inline-flex items-center bg-white dark:bg-very-dark-blue',
          className
        )}
      >
        {icon && (
          <div className='absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none'>
            {React.cloneElement(icon, { className: 'text-violet' })}
          </div>
        )}

        <input
          id={`${label}-id`}
          type={isCheckbox ? 'checkbox' : 'text'}
          className={classNames(
            '',
            isCheckbox
              ? 'border-0 form-checkbox bg-very-dark-blue bg-opacity-10 dark:bg-very-light-white dark:text-violet ml-5 h-6 w-6 text-violet dark:text-violet transition duration-150 ease-in-out'
              : 'dark:text-white form-input border-0 block w-full h-full pl-16 leading-button sm:text-sm sm:leading-5 dark:bg-very-dark-blue'
          )}
          placeholder={placeholder}
        />
        {children}
      </div>
    </div>
  )
}
