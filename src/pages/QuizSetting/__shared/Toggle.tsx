import { useState } from 'react'
import { cx } from 'styles'
import styles from './toggle.module.scss'

interface Props {
  activeToggle: () => void
}

const Toggle = ({ activeToggle }: Props) => {
  const [isChecked, setIsChecked] = useState(false)

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
