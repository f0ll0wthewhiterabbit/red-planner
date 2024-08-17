'use client'

import { useIsFetching, useIsMutating } from '@tanstack/react-query'

import Loader from '@/components/ui/loader'

export function DashboardLoader() {
  const isMutating = useIsMutating()
  const isFetching = useIsFetching()

  return isMutating || isFetching ? (
    <div className='fixed top-layout right-layout z-50'>
      <Loader />
    </div>
  ) : null
}
