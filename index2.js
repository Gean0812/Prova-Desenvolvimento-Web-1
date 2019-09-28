
//VARIÁVEIS
var formListarLivros = document.getElementById("listarLivros");
var formCadastroLivros= document.getElementById("formularioLivros");
var ListaDeLivros = [];
var tituloLivro= document.getElementById("titulo");
var categoriaLivro = document.getElementById("categoriaLivro");
var anoLivro = document.getElementById("anoLivro");
var autorLivro = document.getElementById("autorLivro");
var botaoListar = document.getElementById("botaoListar");
var botaoCadastrarLivros = document.getElementById("botaoCadastrarLivros");
var tabelaListaDeLivros = document.getElementById("listaDeLivros")


console.log(botaoCadastrarLivros);

//OUTROS PREVENT DEFAULT
botaoListar.addEventListener("click" , function(){
    let divLivro  = document.getElementById("livro");
    let divCadastroDeLivros  = document.getElementById("cadastroDeLivros");

    divLivro.style.display = "none";
    divCadastroDeLivros.style.display = "block";
    console.log("qualquer coisa");

})

botaoCadastrarLivros.addEventListener("click" , function(){
    let divLivro  = document.getElementById("livro");
    let divCadastroDeLivros  = document.getElementById("cadastroDeLivros");

    divLivro.style.display = "block";
    divCadastroDeLivros.style.display = "none";
    console.log("Funcionou?");

})

//PEGANDO OS OBJETOS DO STORAGE
if(localStorage.getItem("arrayDeLivros"))
{
ListaDeLivros = JSON.parse(localStorage.getItem("arrayDeLivros"));

}

//CLASSE LIVRO
class Livro{
    constructor(titulo,categoria,ano,autor){
        this.titulo=titulo;
        this.categoria=categoria;
        this.ano=ano;
        this.autor=autor;
    }

}

//PREVENT DEFAULTS
formListarLivros.addEventListener("submit", function(e){
    e.preventDefault();
} )

formCadastroLivros.addEventListener("submit", function(e){
    e.preventDefault();
    var novoLivro = new Livro(tituloLivro.value,categoriaLivro.value,anoLivro.value,autorLivro.value);
    ListaDeLivros[ListaDeLivros.length] = novoLivro;
    console.log(ListaDeLivros);  
    localStorage.setItem("arrayDeLivros",JSON.stringify(ListaDeLivros));
} )


//FUNCAO PARA EXIBIR OS LIVROS CADASTRADOS NA TELA
function exibirLivros(){

    let index;

    console.log(ListaDeLivros);
    for(index=0; index<ListaDeLivros.length; index++){
   
    let linhasTabela = tabelaListaDeLivros.rows.length;
    let linha = tabelaListaDeLivros.insertRow(linhasTabela);
    let celula1 = linha.insertCell(0);
    let celula2 = linha.insertCell(1);
    let celula3 = linha.insertCell(2);
    let celula4 = linha.insertCell(3);

    celula1.innerHTML = ListaDeLivros[index].titulo;
    celula2.innerHTML = ListaDeLivros[index].categoria;
    celula3.innerHTML = ListaDeLivros[index].ano;
    celula4.innerHTML = ListaDeLivros[index].autor;

    



    }
}