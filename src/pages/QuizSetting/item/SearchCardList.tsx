import styles from './searchCardList.module.scss'
import QuizCard from 'components/QuizCard'
import { IQuizList } from 'types/quiz'

interface Props {
  searchData: IQuizList[]
}

const searchCardList = ({ searchData }: Props) => {
  return (
    <ul className={styles.listWrapper}>
      {searchData.map((item) => {
        if (!item) return null
        return (
          <li key={item.id}>
            <QuizCard category={item.category} isStar={item.isStar} src={`/editQuiz/${item.id}`}>
              {item.contents}
            </QuizCard>
          </li>
        )
      })}
    </ul>
  )
}

export default searchCardList
