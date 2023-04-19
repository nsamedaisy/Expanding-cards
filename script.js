const image = document.querySelectorAll('.imgs');

image.forEach(imgs => {
  imgs.addEventListener('click', () => {
    removeActiveClasses()
    imgs.classList.add('active')
  })
})

  function removeActiveClasses() {
    image.forEach(imgs => {
      imgs.classList.remove('active')
    })
  }

// const anotherimage = document.querySelector('.container')
// const newImage = document.createElement('.imgs');
// const src = "./img6.jpeg";
// anotherimage.appendChild(newImage);
