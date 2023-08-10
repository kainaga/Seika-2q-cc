const addAnimationButton = document.getElementById('addAnimationButton');
const animationContainer = document.getElementById('animationContainer');
const changeShapeButton = document.getElementById('changeShapeButton');
const scatterButton = document.getElementById('scatterButton');
const resetButton = document.getElementById('resetButton');

let initialState = []; // 初期状態を記録するための配列

addAnimationButton.addEventListener('click', () => {
  const newElement = document.createElement('div');
  newElement.classList.add('box');
  animationContainer.appendChild(newElement);
  
  initialState.push({
    width: '100px',
    height: '100px',
    backgroundColor: 'blue',
    borderRadius: '0%'
  });
});

changeShapeButton.addEventListener('click', () => {
  const shapes = [
    { width: '100px', height: '100px', borderRadius: '0%' },
    { width: '150px', height: '75px', borderRadius: '50%' },
    { width: '75px', height: '150px', borderRadius: '50%' }
  ];

  const randomShape = shapes[Math.floor(Math.random() * shapes.length)];

  anime({
    targets: '.box',
    width: randomShape.width,
    height: randomShape.height,
    backgroundColor: getRandomColor(),
    borderRadius: randomShape.borderRadius,
    easing: 'easeInOutQuad',
    duration: 1000
  });
});

scatterButton.addEventListener('click', () => {
  anime({
    targets: '.box',
    translateX: () => anime.random(-300, 300),
    translateY: () => anime.random(-300, 300),
    rotate: () => anime.random(0, 360),
    easing: 'easeInOutQuad',
    duration: 1000
  });
});

resetButton.addEventListener('click', () => {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => {
    animationContainer.removeChild(box); // 要素を削除
  });

  initialState = []; // 初期状態をリセット
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.addEventListener('DOMContentLoaded', () => {
  initialState = [
    { width: '100px', height: '100px', backgroundColor: 'blue', borderRadius: '0%' }
  ];
});
