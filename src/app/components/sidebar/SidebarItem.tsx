'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
  icon: React.ReactNode,
  path: string,
  title: string
}

export default function SidebarItem ({ icon, path, title }: Props) {
  const pathName = usePathname()
  return (
    <li>
      <Link
        href={path}
        className={`relative px-4 py-3 flex items-center space-x-4 rounded-xl bg-gradient-to-r hover:bg-sky-800 hover:text-white transition-all
          ${path === pathName ? 'from-sky-600 to-cyan-400 text-white' : ''}
        `}
      >
        {icon}
        <span className='group-hover:text-white'>
          {title}
        </span>
      </Link>
    </li>
  )
}
