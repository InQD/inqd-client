import { useState } from 'react'
import { cx } from 'styles'
import styles from './toggle.module.scss'

const Toggle = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleToggleClick = () => {
    setIsChecked((prev) => !prev)
  }

  return (
    <div className={cx(styles.toggleContainer, { [styles.isCheckedBackground]: isChecked })}>
      <input
        type='checkbox'
        name='timerToggle'
        className={styles.toggleInput}
        checked={isChecked}
        onClick={handleToggleClick}
      />
      <button type='button' onClick={handleToggleClick}>
        <div className={cx(styles.toggleCircle, { [styles.isCheckedCircle]: isChecked })} />
      </button>
    </div>
  )
}

export default Toggle
