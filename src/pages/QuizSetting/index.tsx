import { useMemo, useState, MouseEvent } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { cx } from 'styles'
import styles from './quizSetting.module.scss'

import SettingHeader from 'components/SettingHeader'
import TodayCount from './item/TodayCount'
import Toggle from './__shared/Toggle'
import Timer from './__shared/Timer'
import Search from './__shared/Search'
import QuizCard from 'components/QuizCard'
import { getSearchValue, getTimerToggle, setTimerToggle, setTodayPersonalNum, setTodayTechNum } from 'states/setting'

import data from 'assets/json/interview_list.json'
import { DownIcon, PlusIcon } from 'assets/svgs'

interface IsDrop {
  [key: string]: boolean
  today: boolean
  quiz: boolean
}

const QuizSetting = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const searchValue = useSelector(getSearchValue)
  const timerToggleState = useSelector(getTimerToggle)

  const [isDrop, setIsDrop] = useState<IsDrop>({ today: false, quiz: false })
  const [isTimerOpen, setIsTimerOpen] = useState(timerToggleState)
  const [todayPersonal, setTodayPersonal] = useState(2)
  const [todayTech, setTodayTech] = useState(3)

  const searchData = useMemo(
    () => (searchValue ? data.filter((item) => item.contents.toLowerCase().includes(searchValue)) : data),
    [searchValue]
  )

  const handleClickSubmit = () => {
    dispatch(setTodayPersonalNum(todayPersonal))
    dispatch(setTodayTechNum(todayTech))
    dispatch(setTimerToggle(isTimerOpen))
    navigate('/')
  }

  const handleClickDropdown = (e: MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget
    setIsDrop((prev) => ({ ...prev, [name]: !prev[name] }))
  }

  const activeToggleTimer = () => {
    setIsTimerOpen((prev) => !prev)
  }

  const timerLayout = useMemo(() => isTimerOpen && <Timer />, [isTimerOpen])

  return (
    <section className={styles.container}>
      <SettingHeader handleClickSubmit={handleClickSubmit} buttonText='저장' />

      <div className={styles.contents}>
        {/* -----Setting Timer----- */}
        <section className={styles.timer}>
          <div className={styles.settingBox}>
            <p>타이머 설정</p>
            {timerLayout}
            <Toggle activeToggle={activeToggleTimer} isCheckedState={isTimerOpen} />
          </div>
        </section>

        {/* -----Setting Today Quiz Count----- */}
        <section className={styles.todayQuizCount}>
          <div className={styles.settingBox}>
            <p>오늘의 면접 질문 개수</p>
            <div className={styles.rightWrapper}>
              <span>{todayPersonal + todayTech}개</span>
              <button
                type='button'
                name='today'
                className={cx(styles.dropdownToggle, { [styles.upDown]: isDrop.today })}
                onClick={handleClickDropdown}
              >
                <DownIcon />
              </button>
            </div>
          </div>
          <div className={cx(styles.settingBoxChild, { [styles.open]: isDrop.today })}>
            <TodayCount setTodayPersonal={setTodayPersonal} setTodayTech={setTodayTech} />
          </div>
        </section>

        {/* -----Setting Edit Quiz----- */}
        <section className={styles.quizEdit}>
          <div className={styles.settingBox}>
            <p>면접 질문 편집</p>
            <div className={styles.rightWrapper}>
              <span>총 {data.length}개</span>
              <button
                type='button'
                name='quiz'
                className={cx(styles.dropdownToggle, { [styles.upDown]: isDrop.quiz })}
                onClick={handleClickDropdown}
              >
                <DownIcon />
              </button>
            </div>
          </div>

          <div className={cx(styles.settingBoxChild, { [styles.open]: isDrop.quiz })}>
            <Search />
          </div>

          <div className={cx(styles.settingBoxChild, { [styles.open]: isDrop.quiz })}>
            <div className={styles.searchAddWrapper}>
              <div className={styles.searchListBox}>
                <div className={styles.listWrapper}>
                  {searchData.map((item) => {
                    if (!item) return null
                    return (
                      <QuizCard
                        key={item.id}
                        category={item.category}
                        isStar={item.isStar}
                        src={`/editQuiz/${item.id}`}
                      >
                        {item.contents}
                      </QuizCard>
                    )
                  })}
                </div>
              </div>
              <NavLink to='/createQuiz' className={styles.addLink}>
                <PlusIcon />
              </NavLink>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default QuizSetting
