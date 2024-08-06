
let amigos = [];
let sorteado = false;
let botoes = document.querySelectorAll('button.primary, button.secondary');

// campo para mostrar os amigos participantes do sorteio
let lista = document.getElementById('lista-amigos');

// desbloquear botão
for (let botao of botoes) {
    botao.disabled = false;   
}

function adicionar() {
    let amigo = primeiraMaiuscula(document.getElementById('nome-amigo').value);
    // validação para evitar números, bem como nomes repetidos
    if (isNaN(amigo) == true && amigo != '' ) {
        if (amigos.includes(amigo)) {
            alert('O amigo já está na lista');
        } else {
            amigos.push(amigo);
            if (lista.textContent == '') {
                lista.textContent = amigo;
            } else {
                lista.textContent = lista.textContent + ', ' + amigo;
            }
                      
        }

    } else {
        alert('Você precisa digitar o nome de um amigo!')
    }    
    atualizarLista();
    limparCampo();
}


function sortear() {
    // o sorteio deve ter no mínimo 3 amigos
    if (amigos.length < 3) {
        alert("Cadastre pelo menos 3 amigos!");
        //Interromper a execução de uma função, com o uso do return;
        return;
    } 
    // bloquear botões para que novos sorteios só ocorram depois de reiniciar
    for (let botao of botoes) {
        botao.disabled = true;
        botao.classList.add('gray');
    }
    // embaralhar os elementos do array amigos
    // lógica do sorteio demando um array embaralhado para, desse modo uma estrutua de repetição percorrer a lista e de forma sucessiva o anterior tirar o próximo...
    // por fim, o último irá retirar o primeiro
    embaralhar(amigos);
    
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }

    }
    // para impossivilitar que a lista seja alterada depois do sorteio
    sorteado = true;
}

// exclusão por meio do índice em lista amigos[]
function excluirAmigo(index) {

    // método splice() usado para remoção de um elemento em específico..
    // primeiro argumento é a posição (índice) do elemento, e segundo argumento é a quantidade..
    // no caso o 1 é para remover apenas o elemento indicado

    amigos.splice(index, 1);
    atualizarLista();
}



//algoritmo de Fisher-Yates para embaralhar um array(lista)
function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}



// atualizar após exclusão de amigo da lista amigos[]

function atualizarLista() {
    if (sorteado == false) {

        // lista.innerHTML = ''; ---> para apagar o que foi mostrado no campo, senão..
        // com a inclusão dos parágrafos para o evento de clique, os elementos no campo da lista serão mostrados duplicados

        lista.innerHTML = '';
        for (let i = 0; i < amigos.length; i++) {
            // Cria um elemento de parágrafo para cada amigo
            let paragrafo = document.createElement('p');
            paragrafo.textContent = amigos[i];
           
            // Adiciona um evento de clique para excluir o amigo
            paragrafo.addEventListener('click', function() {
                excluirAmigo(i);
            });
    
    
            // Adiciona o parágrafo ao final da lista
            lista.appendChild(paragrafo);
        }
    } else {
        alert('Impossível excluir o participante, o sorteio já ocorreu!');
    }

}

// reiniciar o sorteio e os botões, bem como o estado sorteado
function reiniciar() {
    amigos = [];
    // document.getElementById('lista-amigos').innerHTML = '';
    lista.innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    for (let botao of botoes) {
        botao.disabled = false;
        botao.classList.remove('gray');   
    }
    sorteado = false;
}

// limpar entrada de nomes
function limparCampo() {
    document.getElementById('nome-amigo').value = "";
}

// função para deixar apenas a primeira letra maiúscula
function primeiraMaiuscula(str) {

    // charAT(0) para pegar apenas a primeira letra
    // slice(1) para pegar a partir da segunda letra
    // ops se quisesse apenas a segunda letra o código seria slice(1,1) com o segundo argumento representando a quantidade;

    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}





// ======== atividades  com arrays =========

let minhaLista = [1, 2, 3];
let outraLista = [4, 5, 6];

let novaLista = minhaLista.concat(outraLista);
console.log(novaLista);
novaLista.pop();
console.log(novaLista);



embaralhar(novaLista);
console.log(novaLista)

novaLista.push(5);
novaLista.push(6);
novaLista.push(3);

console.log('novaLista:', novaLista);

function removerDuplicados(lista) {
    let array = [];
    for (let i = 0; i < lista.length; i++) {
        if (!array.includes(lista[i])){
            array.push(lista[i]);
        }
    }
    return array;
}


let array = removerDuplicados(novaLista);
console.log('array1 sem duplicadas: ', array);




function removerDuplicatas(array) {
    return [...new Set(array)];
}

let listagem = [1,2,3,5,3,10,5,2];
console.log('listagem: ', listagem)
console.log('listagem sem repetidos: ', removerDuplicatas(listagem));

//=======================================

// 1.Crie uma função que valide se um número é positivo, negativo ou zero.

function positivoNegativoZero(numero) {
    if(numero == 0) {
        return 'Número é 0';
    } else if (numero < 0) {
        return 'Número é negativo';
    } else {
        return 'Numero é positivo';
    }
}


console.log(positivoNegativoZero(12));
console.log(positivoNegativoZero(-2));
console.log(positivoNegativoZero(0));


//2. Implemente uma função que verifique se uma pessoa é maior de idade.

function maiorDeIdade(idade) {
    if (idade >= 18) {
        return 'A pessoa é maior de idade';
    } else {
        return 'A pessoa é menor de idade';
    }
}


console.log(maiorDeIdade(17));

// 3.Desenvolva uma função que valide se uma string é vazia ou não.

let string = 'a';

function stringVazia(str) {
    if (str == '') {
        return 'A string é vazia!';
    } else {
        return 'Astring não é vazia!';
    }
}

console.log(stringVazia(string));

//4. Crie uma função que determine se um ano é bissexto

function verificarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        return "Ano bissexto";
    } else {
        return "Não é bissexto";
    }
}

console.log(verificarAnoBissexto(2024))


//5. Implemente uma função que calcule a média de dois números, interrompendo a execução se algum dos números não for válido.


function media(a, b) {
    if (typeof a == 'number' && typeof b == 'number' ) {
         let resultado = (a + b) / 2
        return resultado;
    } else {
        return 'inválido!'; 
    }
}

console.log(media(3, 1));


function calcularMedia(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        return "Um dos números não é válido.";
    }
    return (num1 + num2) / 2;
}

console.log(calcularMedia(8,'a'));

//6. Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.

function tamanhoArray (array) {
    return array.length;
}
console.log('novaLista: ', novaLista);
console.log(tamanhoArray(novaLista));

//7 e 8 Crie um array e utilize a função includes para verificar se um elemento específico está presente

function verificarElemento(elemento,array) {
    if (array.includes(elemento)) {
        return `O ${elemento} está incluso.`;
    } else {
        return `O ${elemento} não está incluso.`;
    }
}

console.log(verificarElemento(3, novaLista));
console.log(verificarElemento(99, novaLista));


//9. Crie um array de strings e utilize includes para verificar se uma determinada string está presente.

let listaAAA = ['a','b','c','d'];
console.log(listaAAA.includes('f'));


//10. Desenvolva uma função que receba um array de objetos representando estudantes de um curso e um objeto que representa um estudante procurado. Depois retorne se o objeto está presente no array.

let estudantes = ['Alexnadre', 'Augusto', 'Rino'];
let estudante = 'Gerdulli';

function procuraEstudante (estudante, estudantes) {
    if (estudantes.includes(estudante)) {
        return `O estudante ${estudante} está na lista.`;
    } else {
        return `O estudante ${estudante} não está na lista.`;
    }
}

console.log(procuraEstudante(estudante,estudantes));
let estudante2 = 'Rino';
console.log(procuraEstudante(estudante2,estudantes));



//11. Crie uma função que receba um array de números e retorne a soma dos elementos pares e o produto dos elementos ímpares

let elementosNumericos = [1,2,3,4,5,6,7,8,9,10]

//console.log(somaParProdImpar(elementosNumericos));

function somaProduto(array) {
    let soma = 0;
    let produto = 1;
    for (let elemento of elementosNumericos) {
        if (elemento % 2 == 0 ) {
            soma += elemento;
        } else {
            produto *= elemento;
        }   
    }
    return `A soma dos pares é: ${soma} e O produto dos ímpares é ${produto}`;
}


console.log(somaProduto(elementosNumericos));

// ou

function calcularSomaProduto(array) {
    let somaPares = 0;
    let produtoImpares = 1;

    for (let numero of array) {
        if (numero % 2 === 0) {
            somaPares += numero;
        } else {
            produtoImpares *= numero;
        }
    }

    return { 
        somaPares, 
        produtoImpares
    }
    
}

let numerosParesEimpares = [1, 2, 3, 4, 5];
let resultado = calcularSomaProduto(numerosParesEimpares);
console.log("Soma dos pares:", resultado.somaPares);
console.log("Produto dos ímpares:", resultado.produtoImpares);