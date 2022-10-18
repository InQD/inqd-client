import styles from './quizTextarea.module.scss'
import { ChangeEvent, useState } from 'react'

interface Props {
  getText: (value: string) => void
}

const Quizextarea = ({ getText }: Props) => {
  const [textCount, setTextCount] = useState(0)
  const handleChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextCount(e.currentTarget.value.length)
    getText(e.currentTarget.value)
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
