import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { cx } from 'styles'
import styles from './quizCard.module.scss'

import { RightArrowIcon2 } from 'assets/svgs'

interface Props {
  category: string
  isStar: boolean
  src?: string
  children: ReactNode
}

const QuizCard = ({ category, isStar, src, children }: Props) => {
  const navigate = useNavigate()
  const isStarText = isStar ? 'νμ' : ''
  const isGreen = category === 'μΈμ±'

  const handleClickNavigate = () => {
    if (src) navigate(src)
  }

  return (
    <button type='button' className={styles.card} onClick={handleClickNavigate} disabled={!src}>
      <div className={cx(styles.point, { [styles.isGreen]: isGreen })}>{isStarText}</div>
      <p>{children}</p>
      <span className={styles.rightArrow}>
        <RightArrowIcon2 />
      </span>
    </button>
  )
}

export default QuizCard
