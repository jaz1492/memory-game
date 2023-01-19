// const playBtn = document.body.querySelector(".play-button");
// const openingMenu = document.getElementById("opening-menu");
// function clearMenu(){
//     openingMenu.style.display="none";
// }
// playBtn.onClick('event',()=>{openingMenu.display="none"});

const suits=["Hearts", "Spades", "Diamonds", "Clubs"];
const values =["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
const deck=[];
let selectedCards =[];
function clicker(){
const cards = document.body.querySelectorAll(".card");
for(const card of cards){
card.addEventListener("click",()=>{
    if(card.src.includes("card-back.png")){
    card.src=`images/${card.parentElement.className}.png`}
    selectedCards.push(card.parentElement.id);
    if(selectedCards.length===2){
        hasTwo();
        setTimeout(()=>{
        for(const card of cards){
            console.log(card);
            card.src="images/card-back.png";
        }
        selectedCards=[];},1000)
    }
})};
}
function hasTwo(){
    if(idNumber(selectedCards[0]).classList[0][0]===idNumber(selectedCards[1]).classList[0][0]){
       setTimeout(()=> {
        idNumber(selectedCards[0]).children[0].classList.add("card-hide");
        idNumber(selectedCards[1]).children[0].classList.add("card-hide");
        },1000);
    }
    else{
        console.log(`error:${selectedCards[0]} and ${selectedCards[1]} don't match.`);
    }
}
function cardMaker(){
    // let num =1;
    // for(let i=0;i<suits.length;i++){
    //     for(let n=0;n<values.length;n++){       
    //         deck.push(objFactory(`${values[n]}-of-${suits[i]}`,num));
    //         num++
    //         }
    //     }
        let num =1;
        for(let i=0;i<suits.length;i++){
            for(let n=0;n<values.length;n++){       
                let newCard=document.createElement("div");
                newCard.classList.add(`${values[n]}-of-${suits[i]}`);
                newCard.id=num;
                newCard.innerHTML='<img class="card" src="images/card-back.png" alt="">'
                document.querySelector(".cards-container").appendChild(newCard);
                num++
                }
            }
            clicker();
}
function idNumber(i){
    return document.getElementById(i);
}
function objFactory(name,idNum){
    return{
        class:name,
        id:idNum
    }
}