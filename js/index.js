print = toPrint => console.log(toPrint);
const images = document.querySelectorAll('img');
const introHeader = document.querySelector('.intro h2');
const introParagraph = document.querySelector('.intro p');

document.addEventListener('mouseover', event => {
    if(event.target === introHeader)
        introHeader.style.color = 'grey';
    else
        introHeader.style.color = 'black';
});

document.addEventListener('keydown', event => introHeader.textContent = event.key);

Array.from(images).forEach((element) => {
    element.addEventListener('wheel', event => {
        event.preventDefault();
    });
});

window.addEventListener('load', () => setTimeout(() => introHeader.textContent = 'Change me', 2000));

window.addEventListener('blur', event => {
    document.querySelector('body').style.background = 'black';
    document.querySelector('body').style.color = 'white';
});
window.addEventListener('focus', event => {
    document.querySelector('body').style.background = 'white';
    document.querySelector('body').style.color = 'black';
});
window.addEventListener('resize', event => {
    if(event.returnValue) {
        introHeader.style.color = 'white';
        introHeader.textContent = 'resizing';
    }
});
window.addEventListener('scroll', event => {
    if(window.scrollY > 200){
        document.querySelector('body').style.background = 'black';
        document.querySelector('body').style.color = 'white';
    }else {
        document.querySelector('body').style.background = 'white';
        document.querySelector('body').style.color = 'black';
    }
});

introParagraph.addEventListener('dblclick', event => {
    event.target.style.fontSize = '2rem';
});
