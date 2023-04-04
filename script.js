const accordion = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function (){
        this.classList.toggle('active');
        const contentText = this.nextElementSibling;
        if(contentText.style.maxHeight){
            contentText.style.maxHeight = null;
        } else {
            contentText.style.maxHeight = contentText.scrollHeight + "px";
        }
    })
};