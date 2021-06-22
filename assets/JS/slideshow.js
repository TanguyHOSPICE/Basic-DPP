// Get images tag
const Images = document.querySelector('main.container section#tab0 img');

// Object images
const tabImages = {
  slide1 : {numImage:'1.jpg',altImage: 'Bb hurle et pleure'},

  slide2 : {numImage:'2.jpg',altImage: 'Femme pointé du doigt'},

  slide3 : {numImage:'3.jpg',altImage: 'Femme inquiète'},

  slide4 : {numImage:'4.jpg',altImage: 'Femme se tenant la tête recroquevillé sous la couette'},

  slide5 : {numImage:'5.jpg',altImage: 'Femme recroquevillé, mains cachant son visage'},

  slide6 : {numImage:'6.jpg',altImage: 'Papa tête contre tête avec son bb'},

  slide7 : {numImage:'7.jpg',altImage: 'Main tendue vers femme avec ses mains cachant son visage'},

  slide8 : {numImage:'8.jpg',altImage: 'Femme flouttée derrière une vitre'},

  slide9 : {numImage:'9.jpg',altImage: 'Femme et homme dos à dos'},

  slide10 : {numImage:'10.jpg',altImage: 'Bb dormant paisiblement avec son doudou'},

  slide11 : { numImage:'11.jpg',altImage: 'Bb et papa dormant paisiblement'},

  slide12 : {numImage:'12.jpg',altImage: 'Femme assise mains sur son visage'},

  slide13 : {numImage:'13.jpg',altImage: 'Femme dans les bras d\'un homme'},

  slide14 : {numImage:'14.jpg',altImage: 'Femme tenant un bb en face à face'},

  slide15 : {numImage:'15.jpg',altImage: 'Femme tenant un bb sur son bicep en souriant'},

  slide16 : { numImage:'16.jpg',altImage: 'Femme embrassant un bb'},

  slide17 : {numImage:'17.jpg',altImage: 'Femme et bb joue contre joue'}

};


let time = 3000; //time between images

console.log("--------------");
//Function 
  // const isObject = function(i) {
  //   if (i === null) {
  //     return false
  //   }
  //   return(typeof i === 'object')
  // }

  //Change image
// function changeImg() {
 
    
//    //Time apperance function
//    setTimeout("changeImg()", time);
//  }
 
console.log('---------------------boucle ----------------');
 //Récupère src d'img 
  let srcImages = Images.getAttribute("src"); 
  //Récupère alt d'img 
  let altImages = Images.getAttribute("alt");
  
  //Coupe src img pour récup URL: /assets/media/page de garde/
  let srcImagesFirstPart = srcImages.slice(0, 28);
  

// Interate inside tabImages
for (let i in tabImages) {
  
  //   if (i < tabImages.length -1) {
  //     i++;
  // } else {
  //     i =0;
  // } 
  
  let srcFinal = srcImagesFirstPart + tabImages[i]["numImage"];
  console.log(srcFinal);
  Images.removeAttribute("src");
  Images.setAttribute("src", srcFinal);
  // let srcNewAttr = Images.setAttribute("src", srcFinal[i]);
  // console.log(srcNewAttr);
  let altFinal = tabImages[i]["altImage"];
  // let altNewAttr = Images.setAttribute("alt", altFinal);
  // i++;
  
  Images.innerHtml = ` ${srcFinal[i]} ${altFinal}`;
  console.log(Images);
  i++;
}



// slideImage();
// window.onload = changeImg;


/*
//Récupère src d'img 
let srcImages = Images.getAttribute("src"); 
//Récupère alt d'img 
let altImages = Images.getAttribute("alt");
//cpteur
let tabImagesIndex = 0;

//Coupe src img pour boucle
let srcImagesFirstPart = srcImages.slice(0, 28);


// Affiche nouvelle src
let srcImagesChanging = `${srcImagesFirstPart}${tabImages[element]["numImage"]}`;
console.log(srcImagesChanging);
// Affiche nouvelle alt
let altImagesChanging = `alt="${tabImages[element]["altImage"]}"`;
console.log(altImagesChanging);


let newSrc = Images.setAttribute("src", srcImagesChanging);
let newAlt = Images.setAttribute("alt", altImagesChanging) ;
console.log(newSrc[element]);

let attrChanging = `${newSrc} ${newAlt}`;  
console.log('-------------------atrChanging------');
console.log(attrChanging);
*/
