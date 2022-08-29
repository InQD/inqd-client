import styles from './questionTextarea.module.scss'
import { useState } from 'react'

const QuestionTextarea = () => {
  const [textCount, setTextCount] = useState(0)
  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextCount(e.currentTarget.value.length)
  }

  return (
    <section className={styles.question}>
      <label className={styles.questionLabel}>
        내용 추가
        <textarea
          className={styles.textarea}
          name='question'
          maxLength={200}
          rows={20}
          required
          onChange={handleChangeTextarea}
        />
        <span className={styles.characterLimit}>{textCount} / 200</span>
      </label>
    </section>
  )
}

export default QuestionTextarea
