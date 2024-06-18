const monthNameEl = document.getElementById('month-name')
const dayNameEl = document.getElementById('day-name')
const dayNumEl = document.getElementById('day-number')
const yearNameEl = document.getElementById('year-name')

const date = new Date()
//const month = date.getMonth()
monthNameEl.innerText = date.toLocaleString('en', {
  month: 'long',
})
dayNameEl.innerText = date.toLocaleString('en', {
  weekday: 'long',
})
dayNumEl.innerText = date.toLocaleString('en', {
  day: '2-digit',
})
yearNameEl.innerText = date.toLocaleString('en', {
  year: 'numeric',
})
