export const convertData = (date) => {
  const initialDateStr = date

  const initialDate = new Date(initialDateStr)

  const year = initialDate.getFullYear()
  const month = (initialDate.getMonth() + 1).toString().padStart(2, "0")
  const day = initialDate.getDate().toString().padStart(2, "0")

  const formattedDate = `${year}-${month}-${day}`

  console.log(formattedDate)
  return formattedDate
}
