export interface IQuizList {
  id: number
  category: string
  contents: string
  isStar: boolean
}

export interface ITodayQuizList extends IQuizList {
  isDone: boolean
}
