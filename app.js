const items = ['elem1', 'elem2', 'elem3', 'elem4', 'elem5', 'elem6', 'elem7', 'elem8', 'elem9', 'elem10', 'elem11', 'elem12', 'elem13', 'elem14', 'elem15', 'elem16', 'elem17', 'elem18']
const elementHeight = 40
let activeElementIndex = 0

const wrapper = document.getElementById('elementWrapper')

const elements = items.map(element => `<div class="elements-item">${element}</div>`).join('')

wrapper.innerHTML = elements

function setActiveClass () {
  const allElements = document.querySelectorAll('.elements-item')
  for(let i = 0; i < allElements.length; i++) {
    allElements[i].classList.remove('active')

    const isScrollWrapper = elementHeight * (activeElementIndex + 1) >= wrapper.clientHeight / 2
    allElements[i].style.transform = `translateY(-${isScrollWrapper ? wrapper.clientHeight / 2 : 0}px)`

    i === activeElementIndex && allElements[i].classList.add('active')
  }
}

function changeActiveElementIndex (key) {
  (key.keyCode === 40 && activeElementIndex < items.length - 1) && activeElementIndex++
  (key.keyCode === 38 && activeElementIndex) && activeElementIndex--

  setActiveClass()
}

setActiveClass()
document.addEventListener('keydown', changeActiveElementIndex)
