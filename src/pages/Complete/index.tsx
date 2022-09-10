import { useNavigate } from 'react-router-dom'
import styles from './complete.module.scss'

import QuizCard from 'components/QuizCard'
import { getTodayDate, getTodayDay, getTodayQuizList } from 'utils/complete'

import { HomeIcon } from 'assets/svgs'

import data from 'assets/json/interview_list.json'

const Complete = () => {
  const navigate = useNavigate()
  const todayDate = getTodayDate()
  const todayDay = getTodayDay()

  const handleClickHome = () => {
    navigate('/')
  }

  const completeData = getTodayQuizList(data, 2, 3)

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
          {completeData.map((item) => (
            <QuizCard key={item.id} category={item.category} isStar={item.isStar}>
              {item.contents}
            </QuizCard>
          ))}
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
