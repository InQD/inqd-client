import { ChangeEvent, useMemo, useState } from 'react'
import styles from './todayCount.module.scss'
import { cx } from 'styles'

import { maxLengthCheck, personalQuizCount, techQuizCount } from 'utils/settingUtil'

const TodayCount = () => {
  const [todayPersonalCount, setTodayPersonalCount] = useState(0)
  const [todayTechCount, setTodayTechCount] = useState(0)

  const personalAllCount = useMemo(() => personalQuizCount(), [])
  const techAllCount = useMemo(() => techQuizCount(), [])

  const handleClickAllPersonal = () => {
    setTodayPersonalCount(personalAllCount)
  }

  const handleClickAllTech = () => {
    setTodayTechCount(techAllCount)
  }

  const handleChangePersonalInput = (e: ChangeEvent<HTMLInputElement>) => {
    const num = Number(e.currentTarget.value)
    setTodayPersonalCount(num)
    if (num > personalAllCount) setTodayPersonalCount(personalAllCount)
  }

  const handleChangeTechInput = (e: ChangeEvent<HTMLInputElement>) => {
    const num = Number(e.currentTarget.value)
    setTodayTechCount(num)
    if (num > techAllCount) setTodayTechCount(techAllCount)
  }

  const handleInputMaxLength = (e: ChangeEvent<HTMLInputElement>) => {
    maxLengthCheck(e.target)
  }

  return (
    <div className={styles.todayButtonWrapper}>
      <div>
        <button type='button' className={styles.todayButton} onClick={handleClickAllPersonal}>
          인성 질문
        </button>
        <input
          type='number'
          name='personalCount'
          className={styles.quizCountInput}
          min={0}
          max={personalAllCount}
          value={todayPersonalCount || ''}
          maxLength={personalAllCount}
          onInput={handleInputMaxLength}
          onChange={handleChangePersonalInput}
        />
      </div>
      <div>
        <button type='button' className={cx(styles.tech, styles.todayButton)} onClick={handleClickAllTech}>
          기술 질문
        </button>
        <input
          type='number'
          name='techCount'
          className={styles.quizCountInput}
          min={0}
          max={techAllCount}
          value={todayTechCount || ''}
          maxLength={5}
          onInput={handleInputMaxLength}
          onChange={handleChangeTechInput}
        />
      </div>
    </div>
  )
}

export default TodayCount
