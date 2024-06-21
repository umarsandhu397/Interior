
let progressTag=document.querySelector('.progress')
let pixelTag=document.querySelector('.pixel')

let bodyTag=document.querySelector('body')
let headerTag=document.querySelector('header')


window.addEventListener('scroll',()=>{
	 const pixel=window.scrollY
	 pixelTag.innerHTML=pixel + ` pixels from top`

	 if(pixel>50){
	 	headerTag.classList.add('hidden')
	 }else{
	 	headerTag.classList.remove('hidden')
	 }

	  if(pixel<600){
       bodyTag.style.backgroundColor='#fff'
   }
   else if(pixel<1400){
      bodyTag.style.backgroundColor='#a29c97'
   }
   else if(pixel<2200){
      bodyTag.style.backgroundColor='#d9dfe4'
   }
   else if(pixel<3000){
      bodyTag.style.backgroundColor='#fff0f0'
   }
   else{
      bodyTag.style.backgroundColor='#cdccc7'
   }

   let wHeight= window.innerHeight
   let dHeight= document.body.scrollHeight

   let diff= dHeight - wHeight
   let percentage= 100 * pixel / diff

   progressTag.style.width= percentage + '%'
})