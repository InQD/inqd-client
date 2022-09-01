import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './settingHeader.module.scss'

import { LeftArrowIcon } from 'assets/svgs'

interface Props {
  handleClickSubmit: () => void
  buttonText: ReactNode
  src?: string
}

const SettingHeader = ({ handleClickSubmit, buttonText, src = '/setting' }: Props) => {
  return (
    <div className={styles.container}>
      <NavLink to={src} className={styles.leftArrow}>
        <LeftArrowIcon />
      </NavLink>
      <button type='button' className={styles.saveButton} onClick={handleClickSubmit}>
        {buttonText}
      </button>
    </div>
  )
}

export default SettingHeader
