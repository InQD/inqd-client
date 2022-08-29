import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from './quizSetting.module.scss'

import SettingHeader from 'components/SettingHeader'
import TodayCount from './item/TodayCount'
import Toggle from './__shared/Toggle'
import Timer from './__shared/Timer'
import Search from './__shared/Search'
import QuizCard from 'components/QuizCard'
import { getSearchValue } from 'states/setting'

import data from 'assets/json/interview_list.json'

const QuizSetting = () => {
  const [isTimerOpen, setIsTimerOpen] = useState(false)
  const searchValue = useSelector(getSearchValue)
  const searchData = useMemo(
    () => (searchValue ? data.filter((item) => item.contents.toLowerCase().includes(searchValue)) : data),
    [searchValue]
  )

  const handleClickSubmit = () => {}

  const handleClickDropdown = () => {}

  const activeToggleTimer = () => {
    setIsTimerOpen((prev) => !prev)
  }

  return (
    <section className={styles.container}>
      <SettingHeader handleClickSubmit={handleClickSubmit} buttonText='저장' />

      <div className={styles.contents}>
        {/* -----Setting Timer----- */}
        <section className={styles.timer}>
          <div className={styles.settingBox}>
            <p>타이머 설정</p>
            {isTimerOpen && <Timer />}
            <Toggle activeToggle={activeToggleTimer} />
          </div>
        </section>

        {/* -----Setting Today Quiz Count----- */}
        <section className={styles.todayQuizCount}>
          <div className={styles.settingBox}>
            <p>오늘의 면접 질문 개수</p>
            <div>
              <span>10개</span>
              <button type='button' className={styles.dropdownToggle} onClick={handleClickDropdown}>
                ▼
              </button>
            </div>
          </div>
          <div className={styles.settingBoxChild}>
            <TodayCount />
          </div>
        </section>

        {/* -----Setting Edit Quiz----- */}
        <section className={styles.quizEdit}>
          <div className={styles.settingBox}>
            <p>면접 질문 편집</p>
            <div>
              <span>총 10개</span>
              <button type='button' className={styles.dropdownToggle} onClick={handleClickDropdown}>
                ▼
              </button>
            </div>
          </div>

          <div className={styles.settingBoxChild}>
            <Search />
          </div>

          <div className={styles.settingBoxChild}>
            <div className={styles.searchListBox}>
              <div className={styles.listWrapper}>
                {searchData.map((item) => {
                  if (!item) return null
                  return (
                    <QuizCard key={item.id} category={item.category} isStar={item.isStar} src={`/editQuiz/${item.id}`}>
                      {item.contents}
                    </QuizCard>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}

export default QuizSetting
