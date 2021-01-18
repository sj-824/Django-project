'use strict';
const typewriter = (param) => {
    let el = document.querySelector(param.el);
    let speed = param.speed;
    let string = param.string.split('');
    console.log(string);
    string.forEach((char,index) => {
        setTimeout(() => {
            el.textContent += char;
        },speed*index);
    });
};

typewriter({
    el: '#title h1',
    string: 'Welcome to AnimEval',
    speed: 50,
});

let loginDisplay = () =>{
    const showElem = document.querySelectorAll('.is-show');
    document.addEventListener('keypress',(e) => {
        if(e.key === 'Enter') {
            showElem.forEach((item) => {
            item.classList.add('show'); 
            console.log(item)   
            })
        }
    })
}

loginDisplay();

let loopFactory = (func) => {
    let i = 0;
    let handler = {};
    let loop = () => {
        i = func(i);
        window.scrollBy(0,i);
        if (i < 31) {
        handler.id = requestAnimationFrame(loop);
        }
    }
    handler.id = requestAnimationFrame(loop);
    return handler;
}

let increament = (i) => {
    if (i > 30){
        i === 30;
    }else{
        i += 1;
    }
    console.log(i);
    return i;
}

let clickDisplay = () => {
    const clickElem = document.getElementById('intro-title');    
    clickElem.addEventListener('click', () => {
        let interval = loopFactory(increament);
    })
}

clickDisplay();

window.addEventListener('scroll', () => {
    const clickElem = document.getElementById('click');
    if (window.scrollY > 230){
        clickElem.classList.remove('flash');
        clickElem.classList.add('not-flash');
    }
})
