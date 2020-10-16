import classNames from 'classnames'
import React, { ReactElement, ReactNode } from 'react'

export default function Input({
  className = '',
  label,
  placeholder = '',
  icon,
  isCheckbox = false,
  checkboxValue = false,
  children,
  value = '',
  setValue = () => {},
  setCheckboxValue = () => {},
}: {
  className?: string
  label: string
  placeholder?: string
  icon?: ReactElement
  isCheckbox?: boolean
  checkboxValue?: boolean
  children?: ReactNode
  value?: string
  setValue?: (val: string) => void
  setCheckboxValue?: (val: boolean) => void
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
            'focus:shadow-none font-brand text-base',
            isCheckbox
              ? 'cursor-pointer border-0 form-checkbox bg-very-dark-blue bg-opacity-10 dark:bg-white dark:bg-opacity-10 text-violet dark:text-violet ml-5 h-6 w-6 transition duration-150 ease-in-out'
              : 'text-very-dark-blue dark:text-white form-input border-0 block w-full h-full pl-16 leading-button sm:text-sm sm:leading-5 dark:bg-very-dark-blue',
            children && !isCheckbox && '-mr-20'
          )}
          placeholder={placeholder}
          value={value}
          checked={checkboxValue}
          onChange={(e) => {
            isCheckbox
              ? setCheckboxValue(e.target.checked)
              : setValue(e.target.value)
          }}
        />
        {children}
      </div>
    </div>
  )
}
