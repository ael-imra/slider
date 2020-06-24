window.addEventListener('load',() => {
    let chevronLeft = document.querySelector('.fa-chevron-left');
    let chevronRight = document.querySelector('.fa-chevron-right');
    let allSlide = document.getElementsByClassName('slides');
  
    chevronLeft.addEventListener('click',()=>{
      for (let i = 0;i < allSlide.length;i++)
      {
        if (allSlide[i].getAttribute('id') === 'slideright')
        {
          allSlide[i - 2].removeAttribute('id');
          allSlide[i - 2].setAttribute('class', 'slides d-none');
          allSlide[i].setAttribute('id', 'slidecenter');
          allSlide[i - 1].setAttribute('id', 'slideleft');
          allSlide[i + 1].setAttribute('id', 'slideright');
          allSlide[i + 1].setAttribute('class', 'slides');
          break;
        }
      }
    });
    chevronRight.addEventListener('click',()=>{
      for (let i = 0;i < allSlide.length;i++)
      {
        if (allSlide[i].getAttribute('id') === 'slideleft')
        {
          allSlide[i + 2].removeAttribute('id');
          allSlide[i + 2].setAttribute('class', 'slides d-none');
          allSlide[i].setAttribute('id', 'slidecenter');
          allSlide[i - 1].setAttribute('id', 'slideleft');
          allSlide[i + 1].setAttribute('id', 'slideright');
          allSlide[i - 1].setAttribute('class', 'slides');
          break;
        }
      }
    });
  });