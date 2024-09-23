import React, { ElementRef, HTMLAttributes } from 'react'
import { FieldPath, FieldValues, UseFormRegister } from 'react-hook-form'

export function Form(props: HTMLAttributes<ElementRef<'form'>>) {
  return <form {...props} className="flex flex-col items-start gap-y-6" />
}

export function FormItem<FormValues extends FieldValues>({
  name,
  label,
  placeholder,
  register,
  className
}: {
  name: FieldPath<FormValues>
  label: string
  placeholder: string
  register: UseFormRegister<FormValues>
  className?: string
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2">
        <div className="flex w-full rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
          <input
            type="text"
            {...register(name)}
            id={name}
            className="block w-full rounded-md border-0 px-2.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder={placeholder}
          />
        </div>
      </div>
    </div>
  )
}
