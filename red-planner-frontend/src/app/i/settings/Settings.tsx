'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Field } from '@/components/ui/field'

import { TypeUserForm } from '@/types/auth.types'

import { useInitialData } from './useInitialData'
import { useUpdateSettings } from './useUpdateSettings'

export default function Settings() {
  const { register, handleSubmit, reset } = useForm<TypeUserForm>({ mode: 'onChange' })
  const { isPending, mutate } = useUpdateSettings()
  useInitialData(reset)

  const onSubmit: SubmitHandler<TypeUserForm> = data => {
    mutate({ ...data, password: data.password || undefined })
  }

  return (
    <form className='w-2/4' onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-2 gap-10'>
        <div>
          <Field
            id='email'
            label='Email:'
            placeholder='Enter email:'
            type='email'
            extra='mb-4'
            {...register('email', { required: 'Email is required!' })}
          />
          <Field
            id='name'
            label='Name:'
            placeholder='Enter name:'
            extra='mb-4'
            {...register('name')}
          />
          <Field
            id='password'
            label='Password:'
            placeholder='Enter password:'
            type='password'
            extra='mb-10'
            {...register('password')}
          />
        </div>
        <div>
          <Field
            id='work-interval'
            label='Work interval (min.):'
            placeholder='Enter work interval (min.):'
            isNumber
            extra='mb-4'
            {...register('workInterval', { valueAsNumber: true })}
          />
          <Field
            id='break-interval'
            label='Break interval (min.):'
            placeholder='Enter break interval (min.):'
            isNumber
            extra='mb-4'
            {...register('breakInterval', { valueAsNumber: true })}
          />
          <Field
            id='intervals-count'
            label='Intervals count (max 10):'
            placeholder='Enter intervals count (max 10):'
            isNumber
            extra='mb-6'
            {...register('intervalsCount', { valueAsNumber: true })}
          />
        </div>
      </div>
      <Button type='submit' disabled={isPending}>
        Save
      </Button>
    </form>
  )
}
