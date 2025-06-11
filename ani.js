let start_btn = document.querySelector('#open_btn');
let content = document.querySelector('#model');
let end_btn = document.querySelector('#close_btn');
// add event listners

start_btn.addEventListener('click' , function(){
    content.style.display = 'block';

});

// to end the task performed


end_btn.addEventListener('click' , function(){
    content.style.display = 'none';

});