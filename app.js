
// selecting body
const body = document.body;

// selsecting text
const text = document.getElementById('hel');


// attach event listener to listen the mouse movement
body.addEventListener('mousemove',(e)=>{

 // get the position of mouse using clinetX and clientY proptety and assign it to text
 text.style.left = e.clientX + 'px';
 text.style.top = e.clientY + 'px';
});
