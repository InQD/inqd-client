import { useState } from 'react'
import styles from './quizCategory.module.scss'
import { cx } from 'styles'

interface Props {
  getCategory: (value: string) => void
}

const QuizCategory = ({ getCategory }: Props) => {
  const [disabled, setDisabled] = useState(false)
  const handleClickCategory = (e: React.MouseEvent<HTMLButtonElement>) => {
    setDisabled((prev) => !prev)
    getCategory(e.currentTarget.value)
  }
  return (
    <section className={styles.category}>
      <p>카테고리</p>
      <button
        type='button'
        className={cx(styles.personality, styles.button, { [styles.disabled]: disabled })}
        value='인성'
        onClick={handleClickCategory}
      >
        인성 질문
      </button>
      <button
        type='button'
        className={cx(styles.technical, styles.button, { [styles.disabled]: !disabled })}
        value='기술'
        onClick={handleClickCategory}
      >
        기술 질문
      </button>
    </section>
  )
}

export default QuizCategory
