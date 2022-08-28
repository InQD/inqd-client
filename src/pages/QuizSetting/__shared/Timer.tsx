import { ChangeEvent, useState } from 'react'
import styles from './timer.module.scss'

const Timer = () => {
  const [minutes, setMinutes] = useState<number>()
  const [seconds, setSeconds] = useState<number>()

  const handleChangeMinutes = (e: ChangeEvent<HTMLInputElement>) => {
    setMinutes(Number(e.currentTarget.value))
  }

  const handleChangeSeconds = (e: ChangeEvent<HTMLInputElement>) => {
    setSeconds(Number(e.currentTarget.value))
  }

  return (
    <div className={styles.timerTime}>
      <input
        type='number'
        name='minutes'
        className={styles.time}
        value={minutes || ''}
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
        value={seconds || ''}
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