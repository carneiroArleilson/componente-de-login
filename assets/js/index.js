function github(){
    window.open('https://github.com/carneiroArleilson');
}

function cadastrar(){
    var name = document.querySelector('input#tname').value;
    var sobreNome = document.querySelector('input#tlname').value;
    var email = document.querySelector('input#tmail').value;
    var senha = document.querySelector('input#tsenha').value;
    
    console.log(name , sobreNome, email, senha);
}