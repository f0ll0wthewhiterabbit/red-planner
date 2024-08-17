import { Metadata } from 'next'

import { Heading } from '@/components/ui/heading'

import { NO_INDEX_PAGE } from '@/constants/seo.contants'

import { Statistics } from './Statistics'

export const metadata: Metadata = {
  title: 'Statistics',
  ...NO_INDEX_PAGE,
}

export default function DashboardPage() {
  return (
    <div>
      <Heading title='Statistics' />
      <Statistics />
    </div>
  )
}
