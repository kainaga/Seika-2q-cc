//import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

import anime from 'animejs/lib/anime.es.js';


/////////////////////////////////////////////////////////////////////////////////////
// 一つ目の   swiper

anime({
  targets: 'div',
  translateX: 250,
  rotate: '1turn',
  backgroundColor: '#FFF',
  duration: 800
});

const swiper = new Swiper('.swiper-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



  const swiperTitle = document.getElementById('swiper-title');
  const titleText ='スライドを'+ swiper.realIndex +'表示しています';
  let titleElement = document.createTextNode(titleText);
  swiperTitle.appendChild(titleElement);

  swiper.on('slidChange',function(){
    console.log('slide change');

  if (titleElement){
    titleElement.remove();
  }
  const titleText = titleList[swiper.realIndex];
  titleElement = document.createTextNode(titleText);
  swiperTitle.appendChild(titleElement);
});


//////////////////////////////////////////////////////////////////////////////////////////////
//２つ目の  swiper


const swiper2 = new Swiper('.swiper-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

const titleList = [
  '1つ目のタイトル',
  '2つ目のタイトル',
  '3つ目のタイトル',
  '4つ目のタイトル',
];

const swiperTitle2 = document.getElementById('swiper-title-2');
const titleText2 = titleList[swiper.realIndex];
let titleElement2 = document.createTextNode(titleText2);
swiperTitle2.appendChild(titleElement2);

swiper.on('slidChange',function(){
  console.log('slide change');

if (titleElement2){
  titleElement2.remove();
}
const titleText2 ='スライドを'+ swiper2.realIndex +'表示しています';
titleElement2 = document.createTextNode(titleText2);
swiperTitle2.appendChild(titleElement2);
});











console.log('test'); 
import JustValidate from 'just-validate';
 const validator = new JustValidate('#basic_form');

validator
  .addField('#basic_name', [
    {
      rule: 'required',
      errorMessage:'必須入力項目です。',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage:'３文字以上入力してください' ,
    },
    {
      rule: 'maxLength',
      value: 15,
    },
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
    },
    {
      rule: 'required',
    },
    {
      rule: 'email',
    },
  ])
  .addField('#basic_password', [
    {
      rule: 'required',
    },
    {
      rule: 'password',
    },
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
    },
    {
      rule: 'number',
    },
    {
      rule: 'minNumber',
      value: 18,
    },
    {
      rule: 'maxNumber',
      value: 150,
    },
  ])
  .addField('basic_address',[
 {
  rule: 'required',
 },
  ])
  .onSuccess(event);

  function onSuccess(event) {
    let formData = new FormData(event.target);
    console.log(formData.get('name'));
    console.log(formData.get('email'));
    console.log(formData.get('password'));
    console.log(formData.get('age'));
    console.log(formData.get('addres'));
  }
  