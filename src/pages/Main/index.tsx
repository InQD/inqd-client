import styles from './main.module.scss'
import { SettingIcon, UpArrowIcon } from 'assets/svgs'
import logoImg from '../../assets/images/logo.png'

const Main = () => {
  return (
    <section className={styles.main}>
      <header className={styles.header}>
        <div className={styles.floatingMessage}>
          <p>
            면접 질문이 없어요! <br />
            설정에서 질문을 등록해주세요.
          </p>
          <UpArrowIcon className={styles.upArrowIcon} />
        </div>
        <SettingIcon className={styles.settingIcon} />
      </header>

      <main className={styles.logoInfo}>
        <div className={styles.logoTitle}>
          <p className={styles.topText}>InQD 인큐디</p>
          <h1>인터뷰 헬퍼</h1>
          <p className={styles.bottomText}>Interview Question Dispenser</p>
        </div>
        <img className={styles.logo} src={logoImg} alt='로고' />
      </main>

      <footer className={styles.footer}>
        <button type='button'>면접 시작!</button>
      </footer>
    </section>
  )
}

export default Main
