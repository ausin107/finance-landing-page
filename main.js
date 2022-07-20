// Change Price Function
const isCheck = document.querySelector('.price-input')
const timeEle = document.querySelectorAll('.time-box')
const priceEle = document.querySelectorAll('.price-box')
const changePrice = () => {
  timeEle.forEach((item) => {
    isCheck.checked == true ? item.classList.add('change') : item.classList.remove('change')
  })
  priceEle.forEach((item) => {
    isCheck.checked == true ? item.classList.add('change') : item.classList.remove('change')
  })
}
isCheck.addEventListener('change', changePrice)
//Reveal website onScroll function
const allItem = document.querySelectorAll('.animation-container')
const reveal = () => {
  allItem.forEach((item) => {
    let windowHeight = window.innerHeight
    if (item.getBoundingClientRect().top < windowHeight - 150) {
      item.classList.add('showItem')
    } else {
      item.classList.remove('showItem')
    }
  })
}

window.addEventListener('scroll', reveal)
//Show Back to Top icon Function
const iconEle = document.querySelector('.back-top-icon ')
const pointEle = document.querySelector('.item-checkpoint')
const showIcon = () => {
  if (pointEle?.getBoundingClientRect().top < 0) {
    iconEle.classList.add('showIcon')
  } else {
    iconEle.classList.remove('showIcon')
  }
}
const toTop = () => {
  window.scrollTo({
    behavior: `smooth`,
    left: 0,
    top: 0,
  })
}
window.addEventListener('scroll', showIcon)
iconEle.addEventListener('click', toTop)
//Show Dropdown Menu
const btnEle = document.querySelector('.dropdown-devices')
const dropdownMenu = document.querySelector('.dropdown-child')
const showDropdown = () => {
  dropdownMenu.classList.toggle('show-menu')
  dropdownMenu.classList.toggle('close-menu')
}
btnEle.addEventListener('click', showDropdown)
//Open and Close SideBar
const closeBtn = document.querySelector('.close-btn')
const openBtn = document.querySelector('.open-btn')
const closeBg = document.querySelector('.close-bg')
const sideBarEle = document.querySelector('.sidebar')
const insideSideBar = document.querySelector('.menu-left')
const toggleSideBar = (event) => {
  event.stopPropagation()
  sideBarEle.classList.toggle('hidden-sidebar')
}
openBtn.addEventListener('click', toggleSideBar)
closeBtn.addEventListener('click', toggleSideBar)
closeBg.addEventListener('click', toggleSideBar)
// stop bubble effect
insideSideBar.addEventListener('click', function (event) {
  event.stopPropagation()
})
