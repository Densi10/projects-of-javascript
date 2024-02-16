const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', (e) => {
    // console.log(e);
    // console.log(e.target);
    const target = e.target.id;
    switch(target){
      case 'grey' : 
        body.style.backgroundColor = 'grey';
        body.style.color = 'white';
        break;
      case 'white' : 
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        break;
      case 'blue' : 
        body.style.backgroundColor = 'blue';
        body.style.color = 'white';
        break;
      case 'yellow' : 
        body.style.backgroundColor = 'yellow';
        body.style.color = 'black';
        break;
      default :
        body.style.backgroundColor = 'black';  
        body.style.color = "white";

    } 
  });
});
