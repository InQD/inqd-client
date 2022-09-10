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

// 오늘의 질문 추출 함수. 면접 시작을 눌렀을때 최초 한번 실행. store에 저장 후 그 데이터로 사용.
export const getTodayQuizList = (data: IQuizList[], todayPNum: number, todayTNum: number) => {
  const resultArray: ITodayQuizList[] = []

  const personalData = data.filter((item) => item.category === '인성')
  const starPersonalData = personalData.filter((item) => item.isStar)
  const notStarPersonalData = personalData.filter((item) => !item.isStar)
  const starPLen = starPersonalData.length
  if (todayPNum <= starPLen) {
    resultArray.push(...getRandomData(starPersonalData, todayPNum))
  } else {
    resultArray.push(
      ...getRandomData(starPersonalData, starPLen),
      ...getRandomData(notStarPersonalData, todayPNum - starPLen)
    )
  }

  const techData = data.filter((item) => item.category === '기술')
  const starTechData = techData.filter((item) => item.isStar)
  const notStarTechData = techData.filter((item) => !item.isStar)
  const starTLen = starTechData.length
  if (todayTNum <= starTLen) {
    resultArray.push(...getRandomData(starTechData, todayTNum))
  } else {
    resultArray.push(...getRandomData(starTechData, starTLen), ...getRandomData(notStarTechData, todayTNum - starTLen))
  }

  return resultArray
}
