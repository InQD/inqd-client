import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { cx } from 'styles'
import QuizCard from 'components/QuizCard'
import SettingHeader from 'components/SettingHeader'

import QuizTextarea from './QuizTextarea'
import QuizCategory from './QuizCategory'
import styles from './createQuiz.module.scss'

const CreateQuiz = () => {
  const [category, setCategory] = useState('인성')
  const [text, setText] = useState('')
  const [isStar, setIsStar] = useState(false)

  const navigate = useNavigate()

  const handleClickSubmit = () => {
    navigate('/setting')
  }

  const handleClickIsStar = () => {
    setIsStar((prevState) => !prevState)
  }

  const getText = (value: string) => {
    setText(value)
  }

  const getCategory = (value: string) => {
    switch (value) {
      case '인성':
        return setCategory('인성')
      case '기술':
        return setCategory('기술')
      default:
        throw new Error(`unknown category : ${value}`)
    }
  }

  const getStyles = () => {
    switch (category) {
      case '인성':
        return styles.personality
      case '기술':
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
        <div className={styles.display}>
          <QuizCard category={category} isStar={isStar} src=''>
            {text}
          </QuizCard>
        </div>
        <QuizCategory getCategory={getCategory} />

        {/* 필수질문 지정 */}
        <section className={styles.essential}>
          <label className={styles.essentialLabel}>
            필수 질문으로 지정
            <input type='checkbox' name='essential-question' onClick={handleClickIsStar} />
            <div className={cx(styles.checkmark, getStyles())} />
          </label>
        </section>

        {/* 문제 텍스트 에어리어 */}
        <QuizTextarea getText={getText} />
      </main>
    </div>
  )
}

export default CreateQuiz
