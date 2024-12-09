import Link from 'next/link'
import clsx from 'clsx'

interface MediaLinksProps {
  className?: string
  links: {
    href: string | null
    label: string
  }[]
}

const MediaLink = ({ href, label }: { href: string | null; label: string }) => {
  if (!href) return <></>
  return (
    <Link
      href={href}
      className="block text-pink-600 hover:underline dark:text-pink-500"
    >
      {label}
    </Link>
  )
}

const MediaLinks = ({ links, className }: MediaLinksProps) => {
  return (
    <div className={clsx(className)}>
      {links.map(({ href, label }) =>
        !href ? (
          <></>
        ) : (
          <MediaLink key={`${href}${label}`} href={href} label={label} />
        ),
      )}
    </div>
  )
}

export default MediaLinks
