import { ChangeEvent, Dispatch, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { cx } from 'styles'
import styles from './todayCount.module.scss'

import { maxLengthCheck, personalQuizCount, techQuizCount } from 'utils/settingUtil'
import { getTodayPersonalNum, getTodayTechNum } from 'states/setting'

interface Props {
  setTodayPersonal: Dispatch<React.SetStateAction<number>>
  setTodayTech: Dispatch<React.SetStateAction<number>>
}

const TodayCount = ({ setTodayPersonal, setTodayTech }: Props) => {
  const todayPersonalNum = useSelector(getTodayPersonalNum)
  const todayTechNum = useSelector(getTodayTechNum)

  const [todayPersonalCount, setTodayPersonalCount] = useState(todayPersonalNum)
  const [todayTechCount, setTodayTechCount] = useState(todayTechNum)

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

  useEffect(() => {
    setTodayPersonal(todayPersonalCount)
    setTodayTech(todayTechCount)
  }, [setTodayPersonal, setTodayTech, todayPersonalCount, todayTechCount])

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
          value={todayPersonalCount || '0'}
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
          value={todayTechCount || '0'}
          maxLength={5}
          onInput={handleInputMaxLength}
          onChange={handleChangeTechInput}
        />
      </div>
    </div>
  )
}

export default TodayCount
