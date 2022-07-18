const ele = document.querySelector('.price-input')
// const priceEle = document.querySelectorAll('.price-value')
const timeEle = document.querySelectorAll('.time-box')
const priceEle = document.querySelectorAll('.price-box')
const test = () => {
  console.log(ele.checked)
  timeEle.forEach((item) => {
    // item.innerHTML = ele.checked == true ? 'Year' : 'Month'
    ele.checked == true ? item.classList.add('change') : item.classList.remove('change')
  })
  priceEle.forEach((item) => {
    // item.innerHTML = ele.checked == true ? 'Year' : 'Month'
    ele.checked == true ? item.classList.add('change') : item.classList.remove('change')
  })
}
ele.addEventListener('change', test)
