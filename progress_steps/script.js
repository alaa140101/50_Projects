const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1
let currentWidth = 0

next.addEventListener('click', ()=> {
  currentActive++

  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  update()
})

prev.addEventListener('click', ()=> {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }

  update()
})

function update(params) {

  // Add Remove active class
  circles.forEach( (circle, index) => {
    if (index < currentActive) {
      circle.classList.add('active')
    }else{
      circle.classList.remove('active')
    }
  })  

  // Update disabled Btns
  if (currentActive == circles.length) {
    next.disabled = true
  }else if(currentActive === 1) {
    prev.disabled = true
  }else{
    next.disabled = false
    prev.disabled = false
  }

    // Update progress bar [(currentActive - 1)&(circles.length - 1) because we started from zero in the array]
  currentWidth = (currentActive - 1) / (circles.length - 1) *100 
  progress.style.width = currentWidth + '%'

}