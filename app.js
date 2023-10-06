const cards = document.querySelectorAll('.card');
const back = document.querySelectorAll('.back');
const front = document.querySelectorAll('.front');



const cardsAr = Object.values(cards);
const backAr = Object.values(back);
const frontAr = Object.values(front);

let counter = 0;
let prewCard='';
let nextCard='';
for(let i = 0;i<cardsAr.length;i++){
    cardsAr[i].addEventListener('click',evt=>{
       
        evt.stopPropagation();
         counter++;
           backAr[i].classList.add("openBack");
           frontAr[i].classList.add("openFront");
           if(counter==1){
            prewCard=cardsAr[i].classList[1];
           }
           if(counter==2){
            nextCard=cardsAr[i].classList[1];
           if (prewCard === nextCard) {
             backAr[i].classList.add("delCard");
             frontAr[i].classList.add("delCard");
           }
           if(nextCard===prewCard){
            backAr[i].classList.add("delCard");
            frontAr[i].classList.add("delCard");
           }
           }
           
        if(counter==3){
            console.log('new quest');
            console.log(prewCard);
            console.log(nextCard);
            counter=0;
            for(let i = 0;i<cardsAr.length;i++){
                 backAr[i].classList.remove("openBack");
                 frontAr[i].classList.remove("openFront");
                 
            }
             
        }
        
        
    });
}

