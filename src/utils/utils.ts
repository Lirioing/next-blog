// date 1:new Date()     2:日期字符串       3:日期时间字符串  4:时间戳
// type 1:格式化日期      2:格式化日期时间   3:格式化周几      4:格式化成时间戳
export function formatDate (date: any, type: number): any {
  date = typeof date === 'number' ? String(date) : date // 时间戳如果是number类型转化成string类型
  // 匹配日期时间
  let matchDateTime = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2})$/g
  // 匹配日期
  let matchDate = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/g
  // 匹配时间戳
  let matchTimeStamp = /[0-9]{13}|[0-9]{10}/g
  if (typeof date !== 'object') {
    if (date.match(matchDate)) {
      // console.log("匹配日期")
      date = new Date(Date.parse(date.replace(/-/g, '/')))
    } else if (date.match(matchDateTime)) {
      // console.log("匹配日期时间")
      date = date.replace(/-/g, '/')
      date = new Date(date)
    } else if (date.match(matchTimeStamp)) {
      // console.log("匹配时间戳")
      date = new Date(Number(date))
    }
  }
  // 格式化日期/日期时间：yyyy-MM-dd/yyyy-MM-dd HH:mm:ss
  function formatdate (date: any, type: number): string {
    function addzero (value: number): string {
      let str = ''
      if (value < 10) {
        str = '0' + value
      } else {
        str = String(value)
      }
      return str
    }
    let year = date.getFullYear()
    let month = addzero(date.getMonth() + 1)
    let weekday = addzero(date.getDate())
    let hour = addzero(date.getHours())
    let minute = addzero(date.getMinutes())
    let second = addzero(date.getSeconds())
    if (type == 1) {
      return (year + '-' + month + '-' + weekday)
    } else {
      return (year + '-' + month + '-' + weekday + ' ' + hour + ':' + minute + ':' + second)
    }
  }
  // 格式化周几
  function formatweek (date: any): string {
    let week = ''
    if (date.getDay() == 0) week = '星期日'
    if (date.getDay() == 1) week = '星期一'
    if (date.getDay() == 2) week = '星期二'
    if (date.getDay() == 3) week = '星期三'
    if (date.getDay() == 4) week = '星期四'
    if (date.getDay() == 5) week = '星期五'
    if (date.getDay() == 6) week = '星期六'
    return week
  }
  // 格式化时间戳
  function formattimestamp (date: any): number {
    let timestamp = date.getTime()
    return timestamp
  }
  let result = null
  switch (type) {
    case 1:
      result = formatdate(date, 1)
      break
    case 2:
      result = formatdate(date, 2)
      break
    case 3:
      result = formatweek(date)
      break
    case 4:
      result = formattimestamp(date)
      break
  }
  return result
}
