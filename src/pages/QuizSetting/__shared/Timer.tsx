import { ChangeEvent, useState } from 'react'
import styles from './timer.module.scss'

const Timer = () => {
  const [minutes, setMinutes] = useState<number>()
  const [seconds, setSeconds] = useState<number>()

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

  return (
    <div className={styles.timerTime}>
      <input
        type='number'
        name='minutes'
        className={styles.time}
        value={minutes || '00'}
        min='0'
        max='60'
        placeholder='00'
        onChange={handleChangeMinutes}
      />
      :
      <input
        type='number'
        name='seconds'
        className={styles.time}
        value={seconds || '00'}
        min='0'
        max='60'
        step='5'
        placeholder='00'
        onChange={handleChangeSeconds}
      />
    </div>
  )
}

export default Timer
