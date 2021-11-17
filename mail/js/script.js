let memory = ['carlo.rossi@gmail.com','luca.bianchi@hotmail.it']
const userMail = prompt('Inserire l\'indirizzo email');
let found = false;

for( let i = 0; i < memory.length && found === false; i++){
    if(memory[i] === userMail){
        found = true;
    }
    console.log(memory[i]);
}

if(found){
    alert('L\'indirizzo inserito è valido')
}else{
    alert('L\'indirizzo inserino NON è valido')
}