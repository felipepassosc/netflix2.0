const interval = setInterval(() => {
  var container = document.querySelector('.PlayerControlsNeo__button-control-row')
  if (container) {
    clearInterval(interval)

    var velocidade = document.createElement('div')

    velocidade.setAttribute('class', 'valocidade')

    container.appendChild(velocidade)

    velocidade.innerHTML = '2x'
    velocidade.style.fontSize = '2rem'

    velocidade.addEventListener('click', () => {
      document.querySelectorAll('video').forEach((video) => {
        video.playbackRate = 2
      })
    })

    // var video = document.querySelectorAll('video')[0]
    // console.log(video.currentTime)
    // if (video.currentTime >= tempo) {
    //   video.pause()
    //   console.log(video.currentTime)
    // }
  }
}, 1000)
