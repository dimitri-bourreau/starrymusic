import clsx from 'clsx'
import ExternalLinks from '@/components/server/ExternalLinks'
import PictureTitleAndSubtitle from '../server/PictureTitleAndSubtitle'
import InternalLinks from '../server/InternalLinks'

export default function SideNavigation() {
  return (
    <div
      className={clsx(
        'w-full sm:w-1/4',
        'flex flex-col justify-between gap-4',
        'bg-slate-50 dark:bg-black',
        'h-screen px-4 pb-5 pt-10',
        'sm:sticky sm:top-0 sm:min-h-screen',
        'lg:border-x lg:border-slate-200 dark:border-slate-800',
      )}
    >
      <PictureTitleAndSubtitle />
      <InternalLinks />
      <ExternalLinks />
    </div>
  )
}
