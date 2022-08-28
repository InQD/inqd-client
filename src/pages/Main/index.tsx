import styles from './main.module.scss'

const Main = () => {
  // setInterviewQuestions : 추후 기능에 따라 확장시 사용
  const [interviewQuestions] = useState(null)
  const haveQuestion = interviewQuestions ?? null
  return (
    <section className={styles.main}>
      <header className={styles.header}>
        <div className={cx(styles.floatingMessage, getAnimation(haveQuestion))}>
          <p>
            면접 질문이 없어요! <br />
            설정에서 질문을 등록해주세요.
          </p>
          <UpArrowIcon className={styles.upArrowIcon} />
        </div>

        <SettingIcon className={styles.settingIcon} />
      </header>

      <main className={cx(styles.logoInfo, { [styles.fillColor]: haveQuestion })}>
        <div className={styles.logoTitle}>
          <p className={styles.topText}>InQD 인큐디</p>
          <h1>인터뷰 헬퍼</h1>
          <p className={styles.bottomText}>Interview Question Dispenser</p>
        </div>
        <img className={styles.logo} src={logoImg} alt='로고' />
      </main>

      <footer className={cx(styles.footer, { [styles.fillColor]: haveQuestion })}>
        <button type='button'>면접 시작!</button>
      </footer>
    </section>
  )

  return <section className={styles.mainContainer}>Main</section>
}

export default Main
