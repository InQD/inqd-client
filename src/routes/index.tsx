import { Routes, Route } from 'react-router-dom'
import styles from './routes.module.scss'

import Main from 'pages/Main'

const App = () => {
  return (
    <div className={styles.container}>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
