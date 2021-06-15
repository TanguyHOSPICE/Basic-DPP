// Get images tag
const IMAGES = document.querySelector('main.container section#tab0 img');

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

let time = 3000; //time between images
/*
// Voir les keys de tabImages
console.log(Object.keys(tabImages));
console.log(Object.values(tabImages));
console.log(Object.entries(tabImages));
console.log("--------------");
console.log(Object.values(tabImages.image0.altImage)); 
*/ 
console.log("--------------");
//Function 
  const isObject = function(i) {
    if (i === null) {
      return false
    }
    return(typeof i === 'object')
  }

  //Change image
function changeImg() {
  //Récupère src d'img 
  let srcImages = IMAGES.getAttribute("src");
  //Récupère alt d'img 
  let altImages = IMAGES.getAttribute("alt");

  //Coupe src img pour boucle
  let srcImagesFirstPart = srcImages.slice(0, 28);
  //Coupe alt img pour boucle
  let altImagesFirstPart = altImages.slice(0, 28);
  // Affiche nouvelle src
  let srcImagesChanging = `${srcImagesFirstPart}${tabImages[i]}`;
  console.log(srcImagesChanging);
  // Affiche nouvelle alt
  let altImagesChanging = `${altImagesFirstPart}${tabImages[i][j]}`;

  IMAGES.setAttribute("src", srcImagesChanging);
  IMAGES.setAttribute("arc", altImagesChanging) ;
  
 
 
   if (i < tabImages.length -1) {
       i++;
   } else {
       i =0;
   }
    
   //Time apperance function
   setTimeout("changeImg()", time);
 }
 
  
// Interate inside tabImages
for (let i in tabImages) {
  if (isObject(tabImages[i])) {
      for (let j in tabImages[i]) {
          console.log(IMAGES);
      }
  }else {
      console.log(tabImages[i]);
  }

}


window.onload = changeImg;


//loop
// for (let [key, value] of Object.entries(tabImages)) {
//   console.log(`${key} => ${value}`);
// }


