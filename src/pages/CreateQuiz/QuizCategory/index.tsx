import { useState } from 'react'
import styles from './quizCategory.module.scss'
import cx from 'classnames'

const QuizCategory = () => {
  const [disabled, setDisabled] = useState(false)
  const handleClickDisable = () => {
    setDisabled((prev) => !prev)
  }
  return (
    <section className={styles.category}>
      <p>카테고리</p>
      <button
        type='button'
        className={cx(`${styles.personality} ${styles.button}`, { [styles.disabled]: disabled })}
        disabled={!disabled}
        onClick={handleClickDisable}
      >
        인성 질문
      </button>
      <button
        type='button'
        className={cx(`${styles.technical} ${styles.button}`, { [styles.disabled]: !disabled })}
        disabled={disabled}
        onClick={handleClickDisable}
      >
        기술 질문
      </button>
    </section>
  )
}

export default QuizCategory
