const $cursor = document.querySelector('.cursor');
const $nav = document.getElementById('test');

const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);


const moveCursor = (e) => {
    const mouseY = e.clientY;
    const mouseX = e.clientX;

    $cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;

}

window.addEventListener('mousemove', moveCursor);

if (!isSafari) {

    document.getElementsByTagName("body")[0].style = "cursor: none";

}