import { DashboardLoader } from '../dashboard-loader'
import { DashboardProfile } from '../dashboard-profile'

export function DashboardHeader() {
  return (
    <header>
      <DashboardLoader />
      <DashboardProfile />
    </header>
  )
}
