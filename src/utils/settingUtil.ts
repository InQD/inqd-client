import data from 'assets/json/interview_list.json'

// Input maxLength 제한
export const maxLengthCheck = (object: EventTarget & HTMLInputElement) => {
  if (object.value.length > object.maxLength) {
    object.value = object.value.slice(0, object.maxLength)
  }
}

// JSON 인성/기술질문 count
export const techQuizCount = () => {
  return data.filter((item) => item.category === '기술').length
}

export const personalQuizCount = () => {
  return data.filter((item) => item.category === '인성').length
}
