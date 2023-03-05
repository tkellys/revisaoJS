let a = 10;
let b = 10;
let c = 10;
let d = 10;

function somarNumeros() {
    let soma = a + b + c + d;

    console.log('A soma dos 4 numeros é:' + soma);
    console.log("____________________________________")
   
   // esse return é pra poder usar essa função em outra função. 
    return soma;
}
//somarNumeros();


// questao 2
function mediaNumeros() {
    // let media = (a + b + c + d) / 4;

    // outra forma de fazer a media com os numeros da funçao anterior 
    let media = somarNumeros(a+b+c+d)/4;
    console.log('A media dos 4 numeros é:' + media);
    console.log("____________________________________")
}
//mediaNumeros();

// questao 3
function somaComMedia() {
    console.log('Os numeros chamados são:' + a, b, c, d);
    somarNumeros(a, b, c, d);
    mediaNumeros(a, b, c, d);
}
//somaComMedia();


// questao 4
//console.log("Converter valor de Celsius para Farenheit:")


function converterGraus() {
    let celsius = 25;
    let resultado = 1.8 * celsius + 32;
    console.log('A temperatura 25 °C para F é:' + resultado);
}
//converterGraus();

// questao 5

function notaProva() {
     let nota = parseFloat(prompt("Qual a nota do aluno?"));

    if (nota < 7 ) {
        alert("Aluno em recuperação");
        console.log("Aluno em recuperação");
    } else if (nota === 7) {
        alert("Aluno na média");
        console.log("Aluno na média");
    } else if (nota > 7 && nota <= 9.4) {
        alert("Aluno com bom aproveitamento");
        console.log("Aluno com bom aproveitamento");
    } else if (nota > 9.5) {
        alert("Aceita ser monitor?");
        console.log("Aceita ser monitor?");
    }
}
// notaProva();

// questao 6


function numerosImpares() {
    for (let i = 100; i <= 200;  i++) {
        let resto = i%2
        
        if(resto !== 0){
            console.log(i+ ' é um numero impár.');
        }
    }

}
//numerosImpares();

// questao 7
 
let semana = ['domingo','segunda-feira','terça-feira','quarta-feira','quinta-feira','sexta-feira','sabado']; 

function qualDiaDaSemana(dia){

    semana.forEach(diaSemana =>{
        if(dia.toLowerCase() === diaSemana){
            console.log(`Este é o ${semana.findIndex(i => i === diaSemana)+1}° dia da semana`);            
        }
    });
}
//qualDiaDaSemana('QUARTA-FEIRA');

//questao 8 tabuada

    let numero = 6;
    for(let i = 0; i <= 10; i++){
       let resultado = numero * i;
   //    console.log(numero + " x " + i + " = " + resultado);    
}

// questao 9

//criando meu array
let listaProgramaçao = ['html','css','js','mongodb','express','react','nodejs']
//console.log(listaProgramaçao);


//adicionando 1 item ao final do array
listaProgramaçao.push('postgres')
//console.log(listaProgramaçao);


//adicionando 2 itens no inicio do array
listaProgramaçao.splice(0,0,'conceitos de web','conceitos de redes');
//console.log(listaProgramaçao);


//removendo ultimo item
 listaProgramaçao.splice(9,1);
 //console.log(listaProgramaçao);


 //remover primeiro item na posição 0 e apenas 1 item.
 listaProgramaçao.splice(0,1);
 //console.log(listaProgramaçao);


 //função que remover qualquer item
function removerElementos(programa){
    const index = listaProgramaçao.indexOf(programa);
    
    listaProgramaçao.splice(index,1);
  console.log(listaProgramaçao);
}
removerElementos('js');

