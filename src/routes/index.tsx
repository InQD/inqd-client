import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'

import Main from 'pages/Main'
import QuizSetting from 'pages/QuizSetting'

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='setting' element={<QuizSetting />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
