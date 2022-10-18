import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './timer.module.scss'

import { getTimerTime } from 'states/setting'
import { maxLengthCheck } from 'utils/settingUtil'

interface Props {
  setTime: Dispatch<SetStateAction<number>>
}

const Timer = ({ setTime }: Props) => {
  const timerTimeState = useSelector(getTimerTime)
  const minState = Math.floor(timerTimeState / 60)
  const secState = timerTimeState % 60
  const [minutes, setMinutes] = useState<number>(minState)
  const [seconds, setSeconds] = useState<number>(secState)

  const handleChangeMinutes = (e: ChangeEvent<HTMLInputElement>) => {
    const min = Number(e.currentTarget.value)
    setMinutes(min)
    if (min > 59) setMinutes(0)
  }

  const handleChangeSeconds = (e: ChangeEvent<HTMLInputElement>) => {
    const sec = Number(e.currentTarget.value)
    setSeconds(sec)
    if (sec > 59) setSeconds(0)
  }

  const handleInputMaxLength = (e: ChangeEvent<HTMLInputElement>) => {
    maxLengthCheck(e.target)
  }

  useEffect(() => {
    setTime(minutes * 60 + seconds)
  }, [minutes, seconds, setTime])

  return (
    <div className={styles.timerTime}>
      <input
        type='number'
        name='minutes'
        className={styles.time}
        min='0'
        max='60'
        value={minutes}
        placeholder='00'
        maxLength={2}
        onInput={handleInputMaxLength}
        onChange={handleChangeMinutes}
      />
      :
      <input
        type='number'
        name='seconds'
        className={styles.time}
        value={seconds}
        min='0'
        max='60'
        step='5'
        placeholder='00'
        maxLength={2}
        onInput={handleInputMaxLength}
        onChange={handleChangeSeconds}
      />
    </div>
  )
}

export default Timer
