console.log("slide in/out");

const images = document.querySelectorAll('.img');

function handleScroll(e){
  console.log(window.scrollY);
  console.dir(window.innerHeight);
  images.forEach(image=>{
    if ((window.innerHeight + window.scrollY)- image.height /2 > image.offsetTop){
      console.log('action :)');
    }
  })
}
window.addEventListener('scroll', handleScroll);