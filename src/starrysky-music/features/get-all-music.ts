import espille from '../album/timeshift-fr/setlist/01-espille.music.json'
import timeshift from '../album/timeshift-fr/setlist/02-timeshift.music.json'
import interlude1Timeshift from '../album/timeshift-fr/setlist/03-bis-interlude-1.music.json'
import reverse from '../album/timeshift-fr/setlist/04-re-verse.music.json'
import newMagicalGirl from '../album/timeshift-fr/setlist/05-new-magical-girl.json'
import anOldColor from '../album/timeshift-fr/setlist/06-an-old-color.json'
import Music from '@/starrysky-music/types/music.type'

const getallMusic = (): Music[] => {
  return [
    espille,
    timeshift,
    interlude1Timeshift,
    reverse,
    newMagicalGirl,
    anOldColor,
  ]
}

export default getallMusic
