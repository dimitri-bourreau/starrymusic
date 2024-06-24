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
}
