let pc = Math.floor(Math.random()*6) + 1;
let user = Math.floor(Math.random()*6) + 1;

console.log(pc);
console.log(user);
if(pc > user){
    alert('Ha vinto il PC');
}else if(pc < user){
    alert('Hai vinto');
}else{
    alert('Parità')
}