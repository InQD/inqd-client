import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './complete.module.scss'

import QuizCard from 'components/QuizCard'
import { getTodayDate, getTodayDay } from 'utils/date'

import { HomeIcon } from 'assets/svgs'

interface IProps {}

const Complete = () => {
  const navigate = useNavigate()
  const todayDate = getTodayDate()
  const todayDay = getTodayDay()

  const handleClickHome = () => {
    navigate('/')
  }

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <header className={styles.completeHeader}>
          <p className={styles.title}>면접 완료</p>
          <hr />
          <p className={styles.date}>
            {todayDate}({todayDay}) / 6문항
          </p>
        </header>
        <div className={styles.contentsWrapper}>
          <QuizCard category='인성' isStar>
            var let const의 차이점에 대해 설명해주세요.
          </QuizCard>
        </div>
      </div>
      <footer className={styles.completeFooter}>
        <button type='button' className={styles.homeButton} onClick={handleClickHome}>
          <HomeIcon />
        </button>
      </footer>
    </div>
  )
}

export default Complete
