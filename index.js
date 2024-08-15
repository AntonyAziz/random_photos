const imageContainerEL = document.querySelector('.image-container')
const buttonEL = document.querySelector('.btn')

buttonEL.addEventListener('click', ()=> {
    imageNum = 24
    addNewImages();
})

function addNewImages(){
    for (let index = 0; index < imageNum; index++) {
        const newImgEL = document.createElement('img');
    newImgEL.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`;
    imageContainerEL.appendChild(newImgEL);
    }
    
}