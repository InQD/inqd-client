import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'

import Main from 'pages/Main'
import CreateQuiz from 'pages/CreateQuiz'

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/createQuiz' element={<CreateQuiz />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
