import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './complete.module.scss'

import { getTodayDate, getTodayDay } from 'utils/complete'
import QuizCard from 'components/QuizCard'
import { getTodayQuiz } from 'states/quiz'

import { HomeIcon } from 'assets/svgs'
import data from 'assets/json/interview_list.json'

const Complete = () => {
  const navigate = useNavigate()
  const todayDate = getTodayDate()
  const todayDay = getTodayDay()
  const todayQuizNumList = useSelector(getTodayQuiz)

  const handleClickHome = () => {
    navigate('/')
  }

  const todayQuizList = data.filter((item) => todayQuizNumList.includes(item.id))

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
          {todayQuizList.map((item) => (
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
