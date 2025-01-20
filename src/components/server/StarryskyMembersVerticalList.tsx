import { Fragment } from 'react'

export default function StarryskyMembersVerticalList() {
  const bandMembers = ['Tai', 'Sasha', 'Yuki', 'Logan', 'Neku']

  return (
    <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
      <span className="font-mono text-slate-500 dark:text-zinc-50">
        Starrysky
      </span>
      <span className="mt-6 flex gap-6 font-bold text-slate-900 dark:text-zinc-500">
        {bandMembers.map((bandMember, bandMemberIndex) => (
          <Fragment key={bandMember}>
            {bandMemberIndex !== 0 && (
              <span aria-hidden="true" className="text-slate-400">
                /
              </span>
            )}
            {bandMember}
          </Fragment>
        ))}
      </span>
    </div>
  )
}
