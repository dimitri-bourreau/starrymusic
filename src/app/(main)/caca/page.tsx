'use client'

import { createContext, useContext, useMemo, useReducer, useRef } from 'react'

interface PlayerState {
  playing: boolean
  muted: boolean
  duration: number
  currentTime: number
  episode: Episode | null
}

interface PublicPlayerActions {
  play: (episode?: Episode) => void
  pause: () => void
  toggle: (episode?: Episode) => void
  seekBy: (amount: number) => void
  seek: (time: number) => void
  playbackRate: (rate: number) => void
  toggleMute: () => void
  isPlaying: (episode?: Episode) => boolean
}

type PlayerAPI = PlayerState & PublicPlayerActions

const enum ActionKind {
  SET_META = 'SET_META',
  PLAY = 'PLAY',
  PAUSE = 'PAUSE',
  TOGGLE_MUTE = 'TOGGLE_MUTE',
  SET_CURRENT_TIME = 'SET_CURRENT_TIME',
  SET_DURATION = 'SET_DURATION',
}

type Action =
  | { type: ActionKind.SET_META; payload: Episode }
  | { type: ActionKind.PLAY }
  | { type: ActionKind.PAUSE }
  | { type: ActionKind.TOGGLE_MUTE }
  | { type: ActionKind.SET_CURRENT_TIME; payload: number }
  | { type: ActionKind.SET_DURATION; payload: number }

const AudioPlayerContext = createContext<PlayerAPI | null>(null)

function audioReducer(state: PlayerState, action: Action): PlayerState {
  switch (action.type) {
    case ActionKind.SET_META:
      return { ...state, episode: action.payload }
    case ActionKind.PLAY:
      return { ...state, playing: true }
    case ActionKind.PAUSE:
      return { ...state, playing: false }
    case ActionKind.TOGGLE_MUTE:
      return { ...state, muted: !state.muted }
    case ActionKind.SET_CURRENT_TIME:
      return { ...state, currentTime: action.payload }
    case ActionKind.SET_DURATION:
      return { ...state, duration: action.payload }
  }
}

function AudioProvider({ children }: { children: React.ReactNode }) {
  let [state, dispatch] = useReducer(audioReducer, {
    playing: false,
    muted: false,
    duration: 0,
    currentTime: 0,
    episode: null,
  })
  let playerRef = useRef<React.ElementRef<'audio'>>(null)

  let actions = useMemo<PublicPlayerActions>(() => {
    return {
      play(episode) {
        if (episode) {
          dispatch({ type: ActionKind.SET_META, payload: episode })

          if (
            playerRef.current &&
            playerRef.current.currentSrc !== episode.audio.src
          ) {
            let playbackRate = playerRef.current.playbackRate
            playerRef.current.src = episode.audio.src
            playerRef.current.load()
            playerRef.current.pause()
            playerRef.current.playbackRate = playbackRate
            playerRef.current.currentTime = 0
          }
        }

        playerRef.current?.play()
      },
      pause() {
        playerRef.current?.pause()
      },
      toggle(episode) {
        this.isPlaying(episode) ? actions.pause() : actions.play(episode)
      },
      seekBy(amount) {
        if (playerRef.current) {
          playerRef.current.currentTime += amount
        }
      },
      seek(time) {
        if (playerRef.current) {
          playerRef.current.currentTime = time
        }
      },
      playbackRate(rate) {
        if (playerRef.current) {
          playerRef.current.playbackRate = rate
        }
      },
      toggleMute() {
        dispatch({ type: ActionKind.TOGGLE_MUTE })
      },
      isPlaying(episode) {
        return episode
          ? state.playing && playerRef.current?.currentSrc === episode.audio.src
          : state.playing
      },
    }
  }, [state.playing])

  let api = useMemo<PlayerAPI>(
    () => ({ ...state, ...actions }),
    [state, actions],
  )

  return (
    <>
      <AudioPlayerContext.Provider value={api}>
        {children}
      </AudioPlayerContext.Provider>
      <audio
        ref={playerRef}
        onPlay={() => dispatch({ type: ActionKind.PLAY })}
        onPause={() => dispatch({ type: ActionKind.PAUSE })}
        onTimeUpdate={(event) => {
          dispatch({
            type: ActionKind.SET_CURRENT_TIME,
            payload: Math.floor(event.currentTarget.currentTime),
          })
        }}
        onDurationChange={(event) => {
          dispatch({
            type: ActionKind.SET_DURATION,
            payload: Math.floor(event.currentTarget.duration),
          })
        }}
        muted={state.muted}
      />
    </>
  )
}

function useAudioPlayer(episode?: Episode) {
  let player = useContext(AudioPlayerContext)

  return useMemo<PlayerAPI>(
    () => ({
      ...player!,
      play() {
        player!.play(episode)
      },
      toggle() {
        player!.toggle(episode)
      },
      get playing() {
        return player!.isPlaying(episode)
      },
    }),
    [player, episode],
  )
}

interface Episode {
  id: number
  title: string
  published: Date
  description: string
  content: string
  audio: {
    src: string
    type: string
  }
}

function EpisodePlayButton({
  episode,
  playing,
  paused,
  ...props
}: React.ComponentPropsWithoutRef<'button'> & {
  episode: Episode
  playing: React.ReactNode
  paused: React.ReactNode
}) {
  let player = useAudioPlayer(episode)

  return (
    <button
      type="button"
      onClick={() => player.toggle()}
      aria-label={`${player.playing ? 'Pause' : 'Play'} episode ${
        episode.title
      }`}
      {...props}
    >
      {player.playing ? playing : paused}
    </button>
  )
}

export default function Page() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <AudioProvider>
        <EpisodePlayButton
          episode={{
            id: 1,
            title: 'caca',
            content: '',
            description: '',
            published: new Date(),
            audio: { src: '/caca.mp3', type: 'mp3' },
          }}
          className="flex items-center gap-x-3 text-2xl font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
          playing={
            <>
              <span aria-hidden="true">🎁</span>
            </>
          }
          paused={
            <>
              <span aria-hidden="true">🎁</span>
            </>
          }
        />
      </AudioProvider>
    </div>
  )
}
