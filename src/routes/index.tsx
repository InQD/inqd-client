import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'

import Main from 'pages/Main'
import QuizSetting from 'pages/QuizSetting'
import CreateQuiz from 'pages/CreateQuiz'
import Complete from 'pages/Complete'

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='setting' element={<QuizSetting />} />
          <Route path='createQuiz' element={<CreateQuiz />} />
          <Route path='complete' element={<Complete />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
