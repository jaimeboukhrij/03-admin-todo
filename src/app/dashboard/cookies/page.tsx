import { TabBar } from '@/app/components/cookies/TabBar'
import { cookies } from 'next/headers'

export const metadata = {
  title: 'Cookies Page',
  description: 'Cookies Page'
}
export default function CookiesPage () {
  const cookiesStore = cookies()
  const cookieTab = cookiesStore.get('selectedTab')?.value ?? '1'
  return (
    <div className=' flex flex-col gap-4'>
      <h1 className='text-4xl font-semibold'>Tabs</h1>
      <TabBar currentTab={Number(cookieTab)} />
    </div>
  )
}
