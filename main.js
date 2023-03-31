const qsts=[
    {
        qst:"Quel est le role d'un constructeur?",
        rp1:["Initialiser les attributs de l’objet à construire",true],
        rp2:["construire des méthodes",false],
        rp3:["Supprimer des objets",false],
        rp4:["Construire des classes",false]
    },
    {
        qst:"On parle d'héritage multiple quand",
        rp1:["la classe mère a plusieurs méthodes",false],
        rp2:["une classe mère a plusieurs sous-classes",false],
        rp3:["une sous-classe a plusieurs classes mères ",true],
        rp4:["l'héritage est sur plusieurs générations",false]
    },
    {
        qst:"Une méthode finale est une méthode qui",
        rp1:["possède des paramètres constants ",false],
        rp2:["retourne une valeur constante",false],
        rp3:["est abstraite",false],
        rp4:["ne sera plus redéfinie dans classes filles",true]
    },
    {
        qst:"Qu’est-ce qui est faux pour les interfaces ?",
        rp1:["Une interface peut être le type d’une référence",false],
        rp2:["Une interface peut être implémentée",false],
        rp3:["Une interface possède des méthodes abstract ",false],
        rp4:["Une interface peut être instanciée",true]
    },
    {
        qst:"Quel mécanisme permet de définir plusieurs constructeurs dans la même classe",
        rp1:["l'héritage ",false],
        rp2:["la redéfinition",false],
        rp3:["l'abstraction ",false],
        rp4:["la surcharge",true]
    }
];
let rslt=0;
let pagenbr=1;
let continer=document.querySelector(".qst-continer");
const nxt=document.querySelector(".next");
const rps=document.querySelectorAll(".rp")
const start=document.querySelector(".start")
const score=document.querySelector(".score")
const view=document.querySelector(".view")
const viewc=document.querySelector(".viewrslt")
const maxscore=document.querySelector(".maxscore")
let nums = [0, 1, 2,3,4];
// Fonction qui renvoie un nombre aléatoire unique
function getUniqueRandomNum() {
    if (nums.length === 0) {
      // Si tous les nombres ont été utilisés, retourner undefined ou un message d'erreur
      return undefined;
    }
    const randomIndex = Math.floor(Math.random() * nums.length); // Index aléatoire dans le tableau
    const randomNum = nums[randomIndex]; // Nombre aléatoire unique
    nums.splice(randomIndex, 1); // Supprimer le nombre aléatoire du tableau
    return randomNum;
  }
//next
function next() {
   if(!play()){
    alert("play");
     return
   }
    let Index=getUniqueRandomNum();
    if(Index==undefined){
        continer.classList.remove("activeqst")
    start.classList.remove("active")
    score.classList.remove("active")
    view.classList.remove("active")
    nums = [0, 1, 2,3,4];
    quizz();
   score.querySelector(".nbr").innerHTML=rslt;
   if(maxscore.innerHTML<rslt){
    maxscore.innerHTML=rslt;}
   pagenbr=1;
   let pagec=document.querySelector('.var')
pagec.innerHTML=1;
    return;
    }
let qst=qsts[Index].qst;
let rep1=qsts[Index].rp1;
let rep2=qsts[Index].rp2;
let rep3=qsts[Index].rp3;
let rep4=qsts[Index].rp4;
quizz();
//intililser
continer.querySelector("#reponse1 input").classList.remove("false");
continer.querySelector("#reponse1 input").classList.remove("true");
continer.querySelector("#reponse2 input").classList.remove("true");
continer.querySelector("#reponse2 input").classList.remove("false");
continer.querySelector("#reponse3 input").classList.remove("false");
continer.querySelector("#reponse3 input").classList.remove("true");
continer.querySelector("#reponse4 input").classList.remove("false");
continer.querySelector("#reponse4 input").classList.remove("true");
//atrbt
continer.querySelector(".qst").innerHTML=qst;
continer.querySelector("#reponse1 h2").innerHTML=rep1[0];
if(rep1[1]){
    continer.querySelector("#reponse1 input").classList.add("true");
}
else{
    continer.querySelector("#reponse1 input").classList.add("false");
}
continer.querySelector("#reponse2 h2").innerHTML=rep2[0];
if(rep2[1]){
    continer.querySelector("#reponse2 input").classList.add("true");
}
else{
    continer.querySelector("#reponse2 input").classList.add("false");
}
continer.querySelector("#reponse3 h2").innerHTML=rep3[0];
if(rep3[1]){
    continer.querySelector("#reponse3 input").classList.add("true");
}
else{
    continer.querySelector("#reponse3 input").classList.add("false");
}
continer.querySelector("#reponse4 h2").innerHTML=rep4[0]; 
if(rep4[1]){
    continer.querySelector("#reponse4 input").classList.add("true");
}
else{
    continer.querySelector("#reponse4 input").classList.add("false");
}  

pageNbr();
rps.forEach((rp)=>{
    rp.checked=false;
})


}
// active start
function start2() {
   
    let Index=getUniqueRandomNum();
    if(Index==undefined){
        continer.classList.remove("activeqst")
    start.classList.remove("active");
    view.classList.remove("active");
    nums = [0, 1, 2,3,4];
    return;
    }
let qst=qsts[Index].qst;
let rep1=qsts[Index].rp1;
let rep2=qsts[Index].rp2;
let rep3=qsts[Index].rp3;
let rep4=qsts[Index].rp4;
continer.querySelector("#reponse1 input").classList.remove("false");
continer.querySelector("#reponse1 input").classList.remove("true");
continer.querySelector("#reponse2 input").classList.remove("true");
continer.querySelector("#reponse2 input").classList.remove("false");
continer.querySelector("#reponse3 input").classList.remove("false");
continer.querySelector("#reponse3 input").classList.remove("true");
continer.querySelector("#reponse4 input").classList.remove("false");
continer.querySelector("#reponse4 input").classList.remove("true");

continer.querySelector(".qst").innerHTML=qst;
continer.querySelector("#reponse1 h2").innerHTML=rep1[0];
if(rep1[1]){
    continer.querySelector("#reponse1 input").classList.add("true");
}
else{
    continer.querySelector("#reponse1 input").classList.add("false");
}
continer.querySelector("#reponse2 h2").innerHTML=rep2[0];
if(rep2[1]){
    continer.querySelector("#reponse2 input").classList.add("true");
}
else{
    continer.querySelector("#reponse2 input").classList.add("false");
}
continer.querySelector("#reponse3 h2").innerHTML=rep3[0];
if(rep3[1]){
    continer.querySelector("#reponse3 input").classList.add("true");
}
else{
    continer.querySelector("#reponse3 input").classList.add("false");
}
continer.querySelector("#reponse4 h2").innerHTML=rep4[0]; 
if(rep4[1]){
    continer.querySelector("#reponse4 input").classList.add("true");
}
else{
    continer.querySelector("#reponse4 input").classList.add("false");
}  


rps.forEach((rp)=>{
    rp.checked=false;
})
}
//fonction verif if play
function play() {
    let x=false;
    rps.forEach((rp)=>{
       if(rp.checked){
        x=true;
       }
    })
    return x;
}
//function start
start.addEventListener("click",function(){
    continer.classList.add("activeqst")
    start.classList.add("active")
    score.classList.add("active")
    view.classList.add("active")
    start2();
    score.querySelector(".nbr").innerHTML=0;
    rslt=0;
    
})
//quizz
function quizz() {

    let x=true
    let rpes=document.querySelectorAll(".rp")
    rpes.forEach((rp)=>{
        
      if((rp.classList.value=="rp true" && rp.checked==false)||(rp.classList.value=="rp false" && rp.checked==true)){
       x=false;
      }
    })
    if(x==true){
        rslt+=1;
       console.log("true");
       
      }
      if(x==false){
        console.log("false");
      }
}
//page nbr
function pageNbr(){
pagenbr++
let pagec=document.querySelector('.var')
pagec.innerHTML=pagenbr;
}
nxt.addEventListener("click",next);
// solution
function solution(){
    start.classList.add("active")
    qsts.forEach((qst)=>{
    viewc.innerHTML+=`
    <div class="qstc">
    <h2 class="qstview">QST/ ${qst.qst}</h2>
<div class="reponse-continer">
   
   <div id="reponse1" class="rpq" ><H2>${qst.rp1[0]} <span class="span">${qst.rp1[1]}</span></H2></div>
   <div id="reponse2" class="rpq" ><H2>${qst.rp2[0]} <span class="span">${qst.rp2[1]}</span></H2></div>
   <div id="reponse3" class="rpq"><H2>${qst.rp3[0]} <span class="span">${qst.rp3[1]}</span></H2></div>
   <div id="reponse4" class="rpq" ><H2>${qst.rp4[0]} <span class="span">${qst.rp4[1]}</span></H2></div>
  
</div>
</div>`
    
    })
    start.classList.add("active")
score.classList.add("active")
view.classList.add("active")
console.log(qsts);
}
view.addEventListener('click',solution)



