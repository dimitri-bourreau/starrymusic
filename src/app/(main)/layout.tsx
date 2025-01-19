import { Fragment, ReactNode, Suspense } from 'react'
import SideNavigation from '@/components/client/SideNavigation'
import { ClientMainLayout } from '@/components/client/ClientMainLayout'

export default async function MainLayout({
  children,
}: {
  children: ReactNode
}) {
  const bandMembers = ['Tai', 'Sasha', 'Yuki', 'Logan', 'Neku']

  const SuspensedSideNavigation = () => (
    <Suspense>
      <SideNavigation />
    </Suspense>
  )

  return (
    <ClientMainLayout sideNavigation={<SuspensedSideNavigation />}>
      <div className="flex">
        <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
          <span className="font-mono text-slate-500 dark:text-zinc-50">
            Starrysky
          </span>
          <span className="mt-6 flex gap-6 font-bold text-slate-900 dark:text-zinc-500">
            {bandMembers.map((host, hostIndex) => (
              <Fragment key={host}>
                {hostIndex !== 0 && (
                  <span aria-hidden="true" className="text-slate-400">
                    /
                  </span>
                )}
                {host}
              </Fragment>
            ))}
          </span>
        </div>
        <div className="w-full px-4 py-5 pt-10 sm:px-6 lg:px-8">{children}</div>
      </div>
    </ClientMainLayout>
  )
}
