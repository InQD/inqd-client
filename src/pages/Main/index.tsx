import { useEffect, useState } from 'react'
import styles from './main.module.scss'
import { cx } from 'styles'

import { SettingIcon, UpArrowIcon } from 'assets/svgs'
import logoImg from '../../assets/images/logo.png'

import data from 'assets/json/interview_list.json'

import { NavLink, useNavigate } from 'react-router-dom'
import { getTotalTodayQuizList } from 'utils/complete'
import { useDispatch, useSelector } from 'react-redux'
import { getTodayPersonalNum, getTodayTechNum } from 'states/setting'
import { ITodayQuizList } from 'types/quiz'
import { setTodayQuiz } from 'states/quiz'

/**
 * @desc 인터뷰를 매개변수로 받아 스타일을 지정하는 유틸 함수
 *  */
const getAnimation = (interview: Object | boolean) => {
  switch (interview) {
    case false:
      return styles.fadein
    case interview:
      return ''
    default:
      throw new Error(`unknown info : ${interview}`)
  }
}

const Main = () => {
  // 기능 확장시 setInterviewQuestions 사용
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [interviewQuestions] = useState(data)
  const haveQuestion = interviewQuestions ?? false

  const todayPersonalNum = useSelector(getTodayPersonalNum)
  const todayTechNum = useSelector(getTodayTechNum)
  const [completeData, setCompleteData] = useState<ITodayQuizList[]>([])

  const handleClickStart = () => {
    dispatch(setTodayQuiz(completeData.map((item) => item.id)))
    navigate('/complete') // 추후 /quiz로 변환
  }

  useEffect(() => {
    setCompleteData(getTotalTodayQuizList(data, todayPersonalNum, todayTechNum))
  }, [todayPersonalNum, todayTechNum])

  return (
    <section className={styles.main}>
      <header className={styles.header}>
        <div className={cx(styles.floatingMessage, getAnimation(haveQuestion))}>
          <p>
            면접 질문이 없어요! <br />
            설정에서 질문을 등록해주세요.
          </p>
          <UpArrowIcon className={styles.upArrowIcon} />
        </div>

        <NavLink to='setting'>
          <SettingIcon className={styles.settingIcon} />
        </NavLink>
      </header>

      <main className={cx(styles.logoInfo, { [styles.fillColor]: haveQuestion })}>
        <div className={styles.logoTitle}>
          <p className={styles.topText}>InQD 인큐디</p>
          <h1>인터뷰 헬퍼</h1>
          <p className={styles.bottomText}>Interview Question Dispenser</p>
        </div>
        <img className={styles.logo} src={logoImg} alt='로고' />
      </main>

      <footer className={cx(styles.footer, { [styles.fillColor]: haveQuestion })}>
        <button type='button' onClick={handleClickStart}>
          면접 시작!
        </button>
      </footer>
    </section>
  )
}

export default Main
