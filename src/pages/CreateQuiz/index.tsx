import styles from './createQuiz.module.scss'
import QuizTextarea from './QuizTextarea'
import QuizCategory from './QuizCategory'

const CreateQuiz = () => {
  return (
    <div className={styles.createQuiz}>
      <header className={styles.header}>Header Area</header>
      <main className={styles.main}>
        <div className={styles.display}>Display Area</div>
        <QuizCategory />
        {/* 필수질문 지정 */}
        <section className={styles.essential}>
          <label className={styles.essentialLabel}>
            필수 질문으로 지정
            <input type='checkbox' name='essential-question' />
            <div className={styles.checkmark} />
          </label>
        </section>

        {/* 문제 텍스트 에어리어 */}
        <QuizTextarea />
      </main>
    </div>
  )
}

export default CreateQuiz
