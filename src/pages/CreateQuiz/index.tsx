import styles from './createQuiz.module.scss'
import cx from 'classnames'
import QuestionTextarea from './QuestionTextarea'
import { useState } from 'react'

const CreateQuiz = () => {
  const [disabled, setDisabled] = useState(false)
  const handleClickDisable = () => {
    setDisabled((prev) => !prev)
  }

  return (
    <div className={styles.createQuiz}>
      <header className={styles.header}>Header Area</header>
      <main className={styles.main}>
        <div className={styles.display}>Display Area</div>

        {/* 카테고리 */}
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

        {/* 필수질문 지정 */}
        <section className={styles.essential}>
          <label className={styles.essentialLabel}>
            필수 질문으로 지정
            <input type='checkbox' name='essential-question' />
            <div className={styles.checkmark} />
          </label>
        </section>

        {/* 질문 텍스트 에어리어 */}
        <QuestionTextarea />
      </main>
    </div>
  )
}

export default CreateQuiz
