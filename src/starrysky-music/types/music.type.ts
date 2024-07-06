export default interface Music {
  title: string
  album: string
  year: number
  duration: string
  credits: {
    music: string | null
    lyrics: string | null
    'lead-vocals': string | null
    extra: string[] | null
  } | null
  lyrics: string[][] | null
  links: {
    youTube: string | null
    deezer: string | null
    spotify: string | null
    appleMusic: string | null
    bandCamp: string | null
    other: string[] | null
  }
  languageVariant: 'FR' | 'EN' | null
}
