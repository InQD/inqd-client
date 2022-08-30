import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { cx } from 'styles'
import styles from './quizCard.module.scss'

import { RightArrowIcon2 } from 'assets/svgs'

interface Props {
  category: string
  isStar: boolean
  src: string
  children: ReactNode
}

const QuizCard = ({ category, isStar, src = '', children }: Props) => {
  const navigate = useNavigate()
  const isStarText = isStar ? '필수' : ''
  const isGreen = category === '인성'

  const handleClickNavigate = () => {
    navigate(src)
  }

  return (
    <button type='button' className={styles.card} onClick={handleClickNavigate}>
      <div className={cx(styles.point, { [styles.isGreen]: isGreen })}>{isStarText}</div>
      <p>{children}</p>
      <span className={styles.rightArrow}>
        <RightArrowIcon2 />
      </span>
    </button>
  )
}

export default QuizCard
