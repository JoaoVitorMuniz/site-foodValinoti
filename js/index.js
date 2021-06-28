function ativaNoScroll(){
    document.querySelectorAll('img')[1].forEach((img)=>{

        if(img.getBoundingClientRect().top < window.innerHeight){
    
            console.log('Imagem apareceu', index);
        }
    })
}

window.addEventListener('scroll',ativaNoScroll)