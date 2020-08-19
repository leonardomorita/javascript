// 10-trabalhando-com-o-DOM
    // document.getElementById('caixa_azul').innerHTML = '<h1>' + document.getElementById('caixa_azul').innerHTML + "</h1>";

// 11-funcoes
    // function valor_imc(peso,altura) {
    //     var imc = peso / (altura * altura);
    //     return imc;
    // }

    // var peso = parseFloat(document.getElementById('peso').innerHTML);
    // var altura = parseFloat(document.getElementById('altura').innerHTML);
    // var imc = valor_imc(peso, altura);
    // document.getElementById('imc').innerHTML = imc.toFixed(2);

// 12- tipos de dados - arrays
    // var cursos = [ "HTML", "Python", "PHP" ];
    // console.log("Array original");
    // console.log(cursos);

    // // Adiciona um elemento no final do array
    // console.log("Push");
    // cursos.push("Javascript");
    // console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP", "Javascript" ]

    // // Adiciona um elemento no começo do array
    // console.log("Unshift");
    // cursos.unshift("Bootstrap");
    // console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP", "Javascript" ]

    // // Pega o último elemento do array
    // console.log("Pop");
    // cursos.pop();
    // console.log(cursos);  // O console mostrará [ "Bootstrap", "HTML", "Python", "PHP" ]

    // // Pega o primeiro elemento do array
    // console.log("Shift");
    // cursos.shift();
    // console.log(cursos);  // O console mostrará [ "HTML", "Python", "PHP" ]

    // var alunos = [ "João" , "Maria", "José", "Fernanda", "Pedro", "Elisa" ];
    // console.log("Array original: " + alunos);
    // console.log("slice(0,3)");
    // console.log( alunos.slice(0,3) ); // [ "João" , "Maria", "José" ]]
    // console.log("slice(2,4): José, Fernanda");
    // console.log( alunos.slice(2,4) );
    // console.log("slice(0,-1): João, Maria, José, Fernanda, Pedro");
    // console.log( alunos.slice(0,-1) );

// 13- tipos de dados - objetos
    // var funcionario = {
    //     'nome': 'Pedro Souza Gomes',
    //     'ano_nasc': 1972,
    //     'cpf': '111.111.111.11',
    //     'cargo': 'Analista de Sistemas'
    // };

    // console.log("Acessando as chaves: " + funcionario['nome']);
    // console.log("Acessando as chaves com dot notation: " + funcionario.nome); // dot notation

    // var cursos = [
    //     {
    //         'titulo': 'Aprenda programação em Python 3 com facilidade do zero',
    //         'avaliacoes': 680,
    //         'alunos': 2300,
    //         'categorias': ['programacao', 'tecnologia']
    //     },
    //     {
    //         'titulo': 'Aprenda PHP e faça sites dinâmicos',
    //         'avaliacoes': 180,
    //         'alunos': 350,
    //         'categorias': ['desenvolvimento web', 'programacao']
    //     },
    //     {
    //         'titulo': 'Excel do Zero ao Avançado',
    //         'avaliacoes': 420,
    //         'alunos': 1800,
    //         'categorias': ['produtividade', 'gestão']
    //     }  
    // ];

    // console.log(cursos[1].categorias[0]);
    // cursos[2]['categorias'][1] = "administração de empresas";
    // console.log(cursos);

// 14- métodos de objetos
    // var aluno = {
    //     'nome': 'Maria',
    //     'sobrenome': 'Pereira',
    //     'ano_nascimento': 1992,
    //     'nome_completo': function() {
    //         return this.nome + ' ' + this.sobrenome;
    //     },
    //     'idade': function (anoAtual) {
    //         return anoAtual - this.ano_nascimento;
    //     }
    // };

    // console.log(aluno.idade(2020));

//  16- Eventos

// document.querySelector('#click-me').onclick = function () {
//     alert('Você clicou no botão.');
// };

// document.querySelector('#hover-me').onmouseover = function () {
//     alert('Você passou o cursor em cima do botão.');
// };

// document.querySelector('#leave-me').onmouseout = function () {
//     alert('Você tirou o cursor de cima do botão.');
// };

// document.onkeydown = function () {
//     alert('Você apertou a tecla: ' + event.keyCode);
// };

// function button_clicked() {
//     alert('Você clicou no botão.');
// }

// 17 - CSS
// document.querySelector('#botao_cor').onclick = function () {
//     this.style.backgroundColor = 'purple';
//     this.style.transform = 'translateX(10px)';
// };

// 18 - getElement
// const exemplo = document.getElementsByClassName('exemplo');
// const p = document.getElementsByTagName("p");

// // 19 - Laço (FOR)
// for (var i = 0; i < 5; i++) {
//     console.log(i);
// }

// var array = ['a', 'b', 'c'];
// for (var i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

// var carro = {
//     'Ano': 2018,
//     'Modelo': 'Fox',
//     'Cilindradas': '1.8',
//     'Combustível': 'Gasolina'
// }
// for (var propriedade in carro) {
//     console.log(propriedade + ' => ' + carro[propriedade]);
// }

// var elementos = document.getElementsByClassName('exemplo');
// for (var i = 0; i < elementos.length; i++) {
//     elementos[i].innerHTML = '<strong>' + elementos[i].textContent + '</strong>';
// }

// 20 - Laço (While / Do While)
// var i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// console.log('\n');

// var j = 2;
// do {
//     console.log(j);
//     j++;
// } while (j <= 1);

// 21 - Condicionais
// let idade = 17;
// if (idade < 18) {
//     console.log('Menor de idade.');
// } else {
//     console.log('Maior de idade.');
// }

// let nota = 8;
// let faltas = 4;
// if (nota >= 7 && faltas <= 4) {
//     console.log('Aprovado.');
// } else {
//     console.log('Reprovado.');
// }

// if (nota < 7 || faltas > 4) {
//     console.log('Reprovado.');
// } else {
//     console.log('Aprovado.');
// }

// let nome = 'Name';
// // Se a variável 'nome' tiver valor atribuído 
// if (nome) {
//     console.log('Nome: ' + nome + '.');
// } else {
//     console.log('Nome não foi informado.');
// }

// 22 - Laços e Condicionais
// let socio = true;
// let idade = 65;

// if (socio || idade >= 65) {
//     console.log('O ingresso é grátis.');
// } else {
//     if (idade < 18) {
//         console.log('Preço a pagar: R$ 6,00.');
//     } else {
//         console.log('Preço a pagar: R$ 12,00.');
//     }
// }

// let funcionarios = [
//     {
//         'nome': 'Carlos Henrique da Silva',
//         'idade': 45,
//         'filhos': ['Mariana Alves da Silva', 'Fernanda Alves da Silva']
        
//     },

//     {
//         'nome': 'Maria Helena Pereira',
//         'idade': 32,
//         'filhos': ['João Pedro Pereira de Souza']
//     },

//     {
//         'nome': 'José Feliciano Maia',
//         'idade': 39,
//         'filhos': ['Felipe Ferreira Maia', 'Fábio Ferreira Maia', 'João Ferreira Maia']
        
//     }
// ];

// let elementos = document.querySelector('#filhos');
// elementos.innerHTML = "";
// for (var i = 0; i < funcionarios.length; i++) {
//     let filhos = funcionarios[i].filhos;

//     if (filhos) {
//         for (var j = 0; j < filhos.length; j++) {
//             elementos.innerHTML += '<li>' + filhos[j] + ' - Filho de ' + funcionarios[i].nome + '</li>';
//         }
//     }
// }

// Aula 24 - BOM (Browser Object Model)
// window.onmousemove = function(event) {
//     if (event.pageY < 5) {
//         alert('Hi');
//     }
// };

// Aula 25 - Local Storage
// Salvar uma informação dentro do local storage que fica localizado dentro do navegador
// window.localStorage.setItem('salvaNome', 'Maria');
// Formas de acessar o objeto localStorage
// console.log(localStorage);
// console.log(localStorage.salvaNome); // ou "console.log(localStorage['salvaNome']);"

function ocultarFormulario() {
    document.getElementById('name-field').style.display = 'none';
}

function atualizarMensagem() {
    document.getElementById('welcome-text').innerHTML = 'Olá ' + window.localStorage.nome + ", tudo bem?";
    document.getElementById('not-me').innerHTML = 'Não é ' + window.localStorage.nome + "?";
}

function exibirMensagem() {
    document.getElementById('welcome-area').style.display = 'initial';
}

document.getElementById('enviar-nome').onclick = function() {
    // Salvar o nome digitado pelo usuário dentro do local storage
    let nome = document.getElementById('nome-usuario').value;
    window.localStorage.setItem('nome', nome);

    ocultarFormulario();

    atualizarMensagem();
    exibirMensagem();
};

// Se a chave já está armazenado dentro do local storage
if (window.localStorage.nome) {
    ocultarFormulario();

    atualizarMensagem();
    exibirMensagem();
}

document.getElementById('not-me').onclick = function() {
    // Remover a chave 'nome' dentro do local storage
    window.localStorage.removeItem('nome');

    // Ocultar a mensagem
    document.getElementById('welcome-area').style.display = 'none';

    // Exibir o formulário
    document.getElementById('name-field').style.display = 'initial';
};