const lights = document.getElementsByClassName('light')
const play = document.getElementById('play')
const stop = document.getElementById('stop')
const btn = document.getElementById('submit')
const title = document.getElementById('title')

const on = function() {
  for(let light of lights) {
    light.removeAttribute("style")
    light.style.animationPlayState = "running"
    light.style.WebkitAnimationPlayState = "running"
  }
}

const off = function() {
  title.style.animation = "none"

  for(let light of lights)  {
    light.style.animation = "none"
    light.style.background = "#563260"
  }
}

function convert() {
  let speed = document.getElementById('quantity').value
  for(let light of lights)  {
    light.style.animationDuration = speed + "s"
  }
}


play.addEventListener('click', on)
stop.addEventListener('click', off)


function ready(callbackFunc) {
  if (document.readyState !== 'loading') {
      callbackFunc()
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', callbackFunc)
  } else {
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState === 'complete') {
        callbackFunc()
      }
    })
  }
}

ready(function() {
  off()
})


