import { useState } from 'react'
import { cx } from 'styles'
import styles from './toggle.module.scss'

interface Props {
  activeToggle: () => void
  isCheckedState: boolean
}

const Toggle = ({ activeToggle, isCheckedState }: Props) => {
  const [isChecked, setIsChecked] = useState(isCheckedState)

  const handleChangeToggle = () => {
    setIsChecked((prev) => !prev)
    activeToggle()
  }

  return (
    <div className={cx(styles.toggleContainer, { [styles.isCheckedBackground]: isChecked })}>
      <input
        type='checkbox'
        name='timerToggle'
        className={styles.toggleInput}
        checked={isChecked}
        onChange={handleChangeToggle}
      />
      <button type='button' onClick={handleChangeToggle}>
        <div className={cx(styles.toggleCircle, { [styles.isCheckedCircle]: isChecked })} />
      </button>
    </div>
  )
}

export default Toggle
