const suits=["Hearts", "Spades", "Diamonds", "Clubs"];
const values =["A",2,3,4,5,6,7,8,9,10,"J","Q","K"];
const deck=[];
let selectedCards =[];
let turns=1;
let minute=0;
let seconds=0;
let pairs = 26;
function cardChecker(card){
    console.log(card);
    if(card.src.includes("card-back.png")){
        card.src=`images/${card.parentElement.className}.png`}
        selectedCards.push(card.parentElement.id);
        if(selectedCards[0]===selectedCards[1]){selectedCards.pop();}
        if(selectedCards.length===2){
            document.body.querySelector(".overlay").classList.remove("hide");
            hasTwo();
            setTimeout(()=>{
            console.log(selectedCards);
            turnCounter();
            idNumber(selectedCards[0]).children[0].src="images/card-back.png";
            idNumber(selectedCards[1]).children[0].src="images/card-back.png";
            document.body.querySelector(".overlay").classList.add("hide");
            selectedCards=[];
            if(pairs===0){
                let screen= document.getElementById("opening-menu");
                screen.style.display="block";
                screen.children[0].children[0].innerHTML="CONGRATULATIONS!"
                screen.children[0].children[1].innerHTML=`You finished the game in ${turns} turns and it took you ${minute<10?"0"+minute:minute}:${seconds<10?"0"+seconds:seconds}. Care to try again?`
                screen.children[0].children[2].innerHTML='REPLAY?'
                removeCards();
            }
            },1000);
        }
}
function cardMaker(){
    let num =1;
    const randomArr=randomizeCards();
    for(let i=0;i<suits.length;i++){
        for(let n=0;n<values.length;n++){       
            deck.push(objFactory(`${values[n]}-of-${suits[i]}`,num));
            num++
            }
        }
        for(let index of randomArr){       
                let newCard=document.createElement("div");
                newCard.classList.add(deck[index].class);
                newCard.id=deck[index].id;
                newCard.innerHTML='<img class="card" src="images/card-back.png" alt="">'
                document.querySelector(".cards-container").appendChild(newCard);
                }
            clicker();
}
function clearMenu(){
    cardMaker();
    timer();
    pairs=26;
    document.body.querySelector(".overlay").classList.add("hide");
    document.querySelector("#opening-menu").style.display="none";
}
function clicker(){
    const cards = document.body.querySelectorAll(".card");
    for(const card of cards){
    card.addEventListener("click",()=>{cardChecker(card)})};
    }
function hasTwo(){  
    if(idNumber(selectedCards[0]).classList[0][0]===idNumber(selectedCards[1]).classList[0][0]){
       setTimeout(()=> {
        idNumber(selectedCards[0]).children[0].classList.add("card-hide");
        idNumber(selectedCards[1]).children[0].classList.add("card-hide");
        pairs--;
        },1000);
    }
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
function randomizeCards(){
    const arr=[];
    for(let i =1;i<=52;i++){
    let randNum = Math.floor(Math.random()*52);
    while(arr.includes(randNum)){
        randNum = Math.floor(Math.random()*52);
    }
    arr.push(randNum);
    }
   return arr;
}
function removeCards(){
    let cardContainer= document.querySelector(".cards-container");
    while(cardContainer.firstChild){
        cardContainer.removeChild(cardContainer.firstChild);
    }
}
function timer(){
    seconds=0;
    minute=0;
    setInterval(()=>{
        seconds++;
        if(seconds===60){
            minute++;
            seconds=0;
        }
    document.querySelector(".timer").innerHTML=`Time: ${minute<10?"0"+minute:minute}:${seconds<10?"0"+seconds:seconds}`;
    },1000)
}
function turnCounter(){
    turns++;
    document.querySelector(".turn-counter").innerHTML=`Turn: ${turns}`;
}