// const playBtn = document.body.querySelector(".play-button");
// const openingMenu = document.getElementById("opening-menu");
// function clearMenu(){
//     openingMenu.style.display="none";
// }
// playBtn.onClick('event',()=>{openingMenu.display="none"});
const cards = document.body.querySelectorAll(".card");
let selectedCards =[];
for(const card of cards){
card.addEventListener("click",()=>{
    if(card.src.includes("card-back.png")){
    card.src=`images/${card.parentElement.className}.png`}
    else{
        card.src="images/card-back.png"
    }
    selectedCards.push(card.parentElement.className);
    if(selectedCards.length===2){
        hasTwo();
        for(const selectedCard of selectedCards){
            document.body.querySelector("."+selectedCard).children[0].src="images/card-back.png";
        }
    }
})};
function hasTwo(){
    setTimeout(()=>alert(`you selected ${selectedCards[0]} and ${selectedCards[1]}`),1000);
}