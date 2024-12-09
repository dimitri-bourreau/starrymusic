'use client'

import { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image'
import posterImage from '@/images/poster.jpg'

interface MainLayoutProps {
  children: ReactNode
  sideNavigation: ReactNode // Allows us to have side nav as server component
}

export const ClientMainLayout = ({
  children,
  sideNavigation,
}: MainLayoutProps) => {
  const pathName = usePathname()

  return (
    <main className="flex flex-col sm:flex-row">
      <div className="hidden w-full sm:block sm:w-1/4">{sideNavigation}</div>

      <div className="relative sm:w-3/4">
        <div
          className={clsx(
            { hidden: pathName === '/' },
            'md:hidden',
            'mt-5 flex items-center justify-center',
          )}
        >
          <Link
            href={'/'}
            className="overflow-hidden rounded-lg bg-slate-200 shadow-xl shadow-slate-200 sm:rounded-xl lg:rounded-2xl dark:shadow-slate-800"
            aria-label="Retour à l'accueil"
          >
            <Image
              className="w-24 rounded"
              src={posterImage}
              alt="Retour à l'accueil"
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
              priority
            />
          </Link>
        </div>
        <div className="w-full">{children}</div>
      </div>
    </main>
  )
}
