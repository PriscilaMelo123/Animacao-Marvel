const video = document.querySelector('.buy');
const frame = document.querySelector('.trailer')
console.log(video)
video.addEventListener('click', () => {
    frame.classList.toggle('mostrarVideo')
})