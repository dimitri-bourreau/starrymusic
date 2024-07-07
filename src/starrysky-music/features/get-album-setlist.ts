import Album from '@/starrysky-music/types/album.type'
import espille from '@/starrysky-music/album/timeshift-fr/setlist/01-espille.music.json'
import timeshift from '@/starrysky-music/album/timeshift-fr/setlist/02-timeshift.music.json'
import interlude1Timeshift from '@/starrysky-music/album/timeshift-fr/setlist/03-bis-interlude-1.music.json'
import reverse from '@/starrysky-music/album/timeshift-fr/setlist/04-re-verse.music.json'
import newMagicalGirl from '../album/timeshift-fr/setlist/05-new-magical-girl.json'
import Music from '@/starrysky-music/types/music.type'

const getAlbumSetlist = (title: Album['title']): Music[] => {
  switch (title) {
    case "TIMESHIFT - L'album qui s'écoute à l'envers":
      return [espille, timeshift, interlude1Timeshift, reverse, newMagicalGirl]
    default:
      console.error(`Failed to get setlist for album named ${title}`)
      return []
  }
}

export default getAlbumSetlist
