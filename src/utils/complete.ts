export const getTodayDate = () => {
  return new Date().toLocaleDateString()
}

export const getTodayDay = () => {
  const week = ['일', '월', '화', '수', '목', '금', '토']
  const num = new Date().getDay()
  return week[num]
}
