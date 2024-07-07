import espille from '../album/timeshift-fr/setlist/01-espille.music.json'
import timeshift from '../album/timeshift-fr/setlist/02-timeshift.music.json'
import echoFromThePast from '../album/timeshift-fr/setlist/03-echo-from-the-past.music.json'
import reverse from '../album/timeshift-fr/setlist/04-re-verse.music.json'
import newMagicalGirl from '../album/timeshift-fr/setlist/05-new-magical-girl.json'
import anOldColor from '../album/timeshift-fr/setlist/06-an-old-color.json'
import l from '../album/timeshift-fr/setlist/07-l.json'
import reProg from '../album/timeshift-fr/setlist/08-reprog.json'
import egaruocLaer from '../album/timeshift-fr/setlist/09-egaruoc laer.json'
import Music from '@/starrysky-music/types/music.type'

const getallMusic = (): Music[] => {
  return [
    espille,
    timeshift,
    echoFromThePast,
    reverse,
    newMagicalGirl,
    anOldColor,
    l,
    reProg,
    egaruocLaer,
  ]
}

export default getallMusic
