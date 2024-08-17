import { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.contants'

export const metadata: Metadata = {
  title: 'Dashboard',
  ...NO_INDEX_PAGE,
}

export default function DashboardPage() {
  return <div>Dashboard</div>
}
