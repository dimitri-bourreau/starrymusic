export default interface Album {
  title: string
  year: number
  image: string
  links: {
    youTube: string | null
    deezer: string | null
    spotify: string | null
    appleMusic: string | null
    bandCamp: string | null
    other: string[] | null
  }
}
