// Get images tag
const images = document.querySelector('main.container section#tab0 img');

let urlImages = `/assets/media/page de garde/`;
let i = 1;
// Object images
const tabImages = {
  image0 : {numImage:'1.jpg',altImage: 'Bb hurle et pleure'},

  image1 : {numImage:'2.jpg',altImage: 'Femme pointé du doigt'},

  image2 : {numImage:'3.jpg',altImage: 'Femme inquiète'},

  image3 : {numImage:'4.jpg',altImage: 'Femme se tenant la tête recroquevillé sous la couette'},

  image4 : {numImage:'5.jpg',altImage: 'Femme recroquevillé, mains cachant son visage'},

  image5 : {numImage:'6.jpg',altImage: 'Papa tête contre tête avec son bb'},

  image6 : {numImage:'7.jpg',altImage: 'Main tendue vers femme avec ses mains cachant son visage'},

  image7 : {numImage:'8.jpg',altImage: 'Femme flouttée derrière une vitre'},

  image8 : {numImage:'9.jpg',altImage: 'Femme et homme dos à dos'},

  image9 : {numImage:'10.jpg',altImage: 'Bb dormant paisiblement avec son doudou'},

  image10 : { numImage:'11.jpg',altImage: 'Bb et papa dormant paisiblement'},

  image11 : {numImage:'12.jpg',altImage: 'Femme assise mains sur son visage'},

  image12 : {numImage:'13.jpg',altImage: 'Femme dans les bras d\'un homme'},

  image14 : {numImage:'14.jpg',altImage: 'Femme tenant un bb en face à face'},

  image13 : {numImage:'15.jpg',altImage: 'Femme tenant un bb sur son bicep en souriant'},

  image15 : { numImage:'16.jpg',altImage: 'Femme embrassant un bb'},

  image16 : {numImage:'17.jpg',altImage: 'Femme et bb joue contre joue'}

};

console.log(images.setAttribute('src',`${urlImages}${i}.jpg`));



