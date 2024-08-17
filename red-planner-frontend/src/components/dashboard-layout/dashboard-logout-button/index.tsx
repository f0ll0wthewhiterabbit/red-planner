'use client'

import { useMutation } from '@tanstack/react-query'
import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { authService } from '@/services/auth.service'

export function DashboardLogoutButton() {
  const router = useRouter()
  const { mutate } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => authService.logout(),
    onSuccess: () => router.push('/auth'),
  })

  const handleClick = () => {
    mutate()
  }

  return (
    <div className='absolute top-1 right-1'>
      <button
        className='opacity-20 hover:opacity-100 transition-opacity duration-300'
        type='button'
        onClick={handleClick}
      >
        <LogOut size={20} />
      </button>
    </div>
  )
}
