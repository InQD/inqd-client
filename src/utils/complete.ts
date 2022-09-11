import { IQuizList, ITodayQuizList } from 'types/quiz'

// 날짜 추출 함수
export const getTodayDate = () => {
  return new Date().toLocaleDateString()
}

// 요일 추출 함수
export const getTodayDay = () => {
  return ['일', '월', '화', '수', '목', '금', '토'][new Date().getDay()]
}

// 랜덤 데이터 추출 함수 (제한된 퀴즈목록, 총 뽑을 개수)
export const getRandomData = (data: IQuizList[], count: number) => {
  const array: ITodayQuizList[] = []
  const randomArray: number[] = []
  const max = data.length < count ? data.length : count

  for (;;) {
    if (array.length === max) break
    const randomNum = Math.floor(Math.random() * data.length)
    // eslint-disable-next-line no-continue
    if (randomArray.includes(randomNum)) continue
    randomArray.push(randomNum)
    array.push({ ...data[randomNum], isDone: false })
  }

  return array
}

// 오늘의 퀴즈 리스트 (1/2) 조건 추출 함수. 인성/기술/필수 조건에 따라 정리됨
export const getSortedTodayQuizList = (data: IQuizList[]) => {
  const personalData = data.filter((item) => item.category === '인성')
  const starPersonalData = personalData.filter((item) => item.isStar)
  const notStarPersonalData = personalData.filter((item) => !item.isStar)
  const techData = data.filter((item) => item.category === '기술')
  const starTechData = techData.filter((item) => item.isStar)
  const notStarTechData = techData.filter((item) => !item.isStar)

  return { starP: starPersonalData, nStarP: notStarPersonalData, starT: starTechData, nStarT: notStarTechData }
}

// 오늘의 퀴즈 리스트 (2/2) 제한된 개수 랜덤 추출 함수. 설정값에 따라 추출됨.
export const getTotalTodayQuizList = (data: IQuizList[], todayPNum: number, todayTNum: number) => {
  const sortedData = getSortedTodayQuizList(data)
  const resultArray: ITodayQuizList[] = []
  const starPLen = sortedData.starP.length
  const starTLen = sortedData.starT.length

  if (todayPNum <= starPLen) {
    resultArray.push(...getRandomData(sortedData.starP, todayPNum))
  } else {
    resultArray.push(
      ...getRandomData(sortedData.starP, starPLen),
      ...getRandomData(sortedData.nStarP, todayPNum - starPLen)
    )
  }

  if (todayTNum <= starTLen) {
    resultArray.push(...getRandomData(sortedData.starT, todayTNum))
  } else {
    resultArray.push(
      ...getRandomData(sortedData.starT, starTLen),
      ...getRandomData(sortedData.nStarT, todayTNum - starTLen)
    )
  }

  return resultArray
}
