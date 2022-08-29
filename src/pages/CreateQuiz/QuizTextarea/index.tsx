import styles from './quizTextarea.module.scss'
import { useState } from 'react'

const Quizextarea = () => {
  const [textCount, setTextCount] = useState(0)
  const handleChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextCount(e.currentTarget.value.length)
  }

  return (
    <section className={styles.quizArea}>
      <label className={styles.quizAreaLabel}>
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

export default Quizextarea