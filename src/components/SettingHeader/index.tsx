import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './settingHeader.module.scss'

import { LeftArrowIcon } from 'assets/svgs'

interface Props {
  handleClickSubmit: () => void
  buttonText: ReactNode
}

const SettingHeader = ({ handleClickSubmit, buttonText }: Props) => {
  const navigate = useNavigate()

  const handleClickPrevPage = () => {
    navigate(-1)
  }
  return (
    <div className={styles.container}>
      <button type='button' className={styles.leftArrow} onClick={handleClickPrevPage}>
        <LeftArrowIcon />
      </button>
      <button type='button' className={styles.saveButton} onClick={handleClickSubmit}>
        {buttonText}
      </button>
    </div>
  )
}

export default SettingHeader
