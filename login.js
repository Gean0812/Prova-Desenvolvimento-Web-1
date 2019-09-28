
//VARIÁVEIS
var autorizado = false;
var form = document.getElementById("formulario");
var formCadastro= document.getElementById("formularioCadastro");
var ListaDeUsuarios = [];
var login= document.getElementById("logins");
var senha = document.getElementById("senhas");
var cadastroUsuario = document.getElementById("usuario");
var senhaCadastro = document.getElementById("senhaCadastro");
var email = document.getElementById("email");
var botao1 = document.getElementById("botao1");
var botao2 = document.getElementById("botaoCadastro");


//MAIS PREVENTS DEFAULT
botao1.addEventListener("click" , function(){
    let divLogin  = document.getElementById("loginInicial");
    let divCadastro  = document.getElementById("cadastro");

    divLogin.style.display = "none";
    divCadastro.style.display = "block";
    console.log("qualquer coisa");

})

botao2.addEventListener("click" , function(e){
    let divLogin  = document.getElementById("loginInicial");
    let divCadastro  = document.getElementById("cadastro");

    divLogin.style.display = "block";
    divCadastro.style.display = "none";

})





if(localStorage.getItem("usuarios")){
ListaDeUsuarios = JSON.parse(localStorage.getItem("usuarios"));

}

//CLASSE USUÁRIO
class Usuario{
    constructor(login,senha,email){
        this.login=login;
        this.senha=senha;
        this.email=email;
    }

}

console.log(formCadastro);

//PREVENT DEFAULT
formCadastro.addEventListener("submit",function(e){
    e.preventDefault();
   var novoUsuario = new Usuario(cadastroUsuario.value,senhaCadastro.value,email.value);
   ListaDeUsuarios[ListaDeUsuarios.length] = novoUsuario;
   console.log(ListaDeUsuarios);  
   localStorage.setItem("usuarios",JSON.stringify(ListaDeUsuarios));

 });

 form.addEventListener("submit", function(e){
     e.preventDefault();
     validarLogin();
     if(autorizado)form.submit();
     if(autorizado==false) alert("Usuário inválido!");

    
 } );


 //METODO PARA VALIDAR O LOGIN
 function validarLogin(){
     let index;
     console.log(ListaDeUsuarios);
     for(index=0; index<ListaDeUsuarios.length; index++){

        if (login.value== ListaDeUsuarios[index].login 
        && senha.value == ListaDeUsuarios[index].senha){
            alert("Usuário válido!");
            autorizado= true;
            break;
          
         } 
        

     }
 }

    
