'use client'

import { useState } from 'react'
import clsx from 'clsx'

import { TinyWaveFormIcon } from '@/components/TinyWaveFormIcon'

export function AboutSection(props: React.ComponentPropsWithoutRef<'section'>) {
  let [isExpanded, setIsExpanded] = useState(false)

  return (
    <section {...props}>
      <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-slate-900">
        <TinyWaveFormIcon
          colors={['fill-violet-300', 'fill-pink-300']}
          className="h-2.5 w-2.5"
        />
        <span className="ml-2.5">Starrysky</span>
      </h2>
      <p
        className={clsx(
          'mt-2 text-base leading-7 text-slate-700',
          !isExpanded && 'lg:line-clamp-4',
        )}
      >
        Starrysky, parfait équilibre entre métal progressif et j-pop, est un groupe culte de l’Internet français. Starrysky s’est créé sa propre identité avec des albums forts, marquants, et conceptuels. Le dernier, Timeshift, utilise notamment des sons retournés dans le temps. Ils travaillent officiellement aux côtés de Genshin Impact pour qui ils ont composé des titres originaux. Starrysky est un groupe qui marque par son génie dans la composition, par ses nombreuses références à l’univers pop japonais et au rock progressif, et aussi par leur authenticité et leur disponibilité sur les réseaux et à leurs concerts.
      </p>
      {!isExpanded && (
        <button
          type="button"
          className="mt-2 hidden text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900 lg:inline-block"
          onClick={() => setIsExpanded(true)}
        >
          Lire plus
        </button>
      )}
    </section>
  )
}
