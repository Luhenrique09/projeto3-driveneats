
let nome_prato;
let valor_prato = 0;
function  principal(botao){
    const escolha = document.querySelector('.pratos .selecionado');
   if (escolha !== null)
        escolha.classList.remove('selecionado');
    
	const elemento = document.querySelector(botao);
	elemento.classList.add('selecionado');

    let name =document.querySelector('.pratos .selecionado #nome');
   
    nome_prato = name.innerHTML;

    let valor= document.querySelector('.pratos .selecionado #valor');
    
    let valor_sem = valor.innerHTML;

   
    valor_sem = (valor_sem.replace(/\D/g, ''));
    valor_prato = Number(valor_sem);
    
    confirmar();
        
}

let nome_bebida;
let valor_bebida = 0;
function  bebida(botao){
    const escolha = document.querySelector('.bebidas .selecionado');
   if (escolha !== null)
        escolha.classList.remove('selecionado');
    
	const elemento = document.querySelector(botao);
	elemento.classList.add('selecionado');

    let name =document.querySelector('.bebidas .selecionado #nome');
   
    nome_bebida = name.innerHTML;

    let valor= document.querySelector('.bebidas .selecionado #valor');
    let valor_sem = valor.innerHTML;

    valor_sem = (valor_sem.replace(/\D/g, ''));
    valor_bebida = Number(valor_sem);

    confirmar();
   
}

let nome_sobremesa;
let valor_sobremesa = 0;
function  sobremesa(botao){
    const escolha = document.querySelector('.sobremesas .selecionado');
   if (escolha !== null)
        escolha.classList.remove('selecionado');
    
	const elemento = document.querySelector(botao);
	elemento.classList.add('selecionado');

    let name =document.querySelector('.sobremesas .selecionado #nome');
   
    nome_sobremesa = name.innerHTML;

    let valor= document.querySelector('.sobremesas .selecionado #valor');
    let valor_sem = valor.innerHTML;

    valor_sem = (valor_sem.replace(/\D/g, ''));
    valor_sobremesa = Number(valor_sem);
 
    confirmar();
    
}


function confirmar(finalizar){
    const escolha = document.querySelector('.inferior .esconde');

    if(nome_prato!==undefined && nome_bebida!==undefined && nome_sobremesa!==undefined){ 
        escolha.classList.remove('esconde');
        const elemento = document.querySelector(finalizar);
	    elemento.classList.add('esconde');
    
    }
    confirmar();
    
}

let total = 0;

function pedido(){
    total = Number((parseInt(valor_prato) + parseInt(valor_bebida) + parseInt(valor_sobremesa))/100).toFixed(2);

    let str = `Olá, gostaria de fazer o pedido:
    - Prato: ${nome_prato}
    - Bebida: ${nome_bebida}
    - Sobremesa: ${nome_sobremesa}
    Total: R$${total}`;
    let uri = str;
    let urlwpp = encodeURIComponent(uri);
    let wpp = "https://wa.me/5533999584554?text=" + urlwpp;
    window.open(wpp, '_blank').focus();

}



 