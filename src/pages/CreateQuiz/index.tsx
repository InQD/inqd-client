import styles from './createQuiz.module.scss'
import QuizTextarea from './QuizTextarea'
import QuizCategory from './QuizCategory'
import SettingHeader from 'components/SettingHeader'
import { cx } from 'styles'
import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

const CreateQuiz = () => {
  const [category, setCategory] = useState('personality')
  const navigate = useNavigate()

  const handleClickSubmit = () => {
    navigate('/setting')
  }

  const getCategory = (value: string) => {
    switch (value) {
      case '인성':
        return setCategory('personality')
      case '기술':
        return setCategory('technical')
      default:
        throw new Error(`unknown category : ${value}`)
    }
  }

  const getStyles = () => {
    switch (category) {
      case 'personality':
        return styles.personality
      case 'technical':
        return styles.technical
      default:
        throw new Error(`unknown category : ${category}`)
    }
  }

  return (
    <div className={styles.createQuiz}>
      <header className={styles.header}>
        <SettingHeader handleClickSubmit={handleClickSubmit} buttonText='추가' />
      </header>
      <main className={styles.main}>
        <div className={styles.display}>Display Area</div>
        <QuizCategory getCategory={getCategory} />

        {/* 필수질문 지정 */}
        <section className={styles.essential}>
          <label className={styles.essentialLabel}>
            필수 질문으로 지정
            <input type='checkbox' name='essential-question' />
            <div className={cx(styles.checkmark, getStyles())} />
          </label>
        </section>

        {/* 문제 텍스트 에어리어 */}
        <QuizTextarea />
      </main>
    </div>
  )
}

export default CreateQuiz
