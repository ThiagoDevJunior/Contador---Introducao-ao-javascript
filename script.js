var valor_atual = document.getElementById('currentNumber')
var valor_atual = 0;

function increment(){
	valor_atual = valor_atual + 1;
	document.getElementById('currentNumber').innerHTML = valor_atual
}

function decrement(){
	valor_atual = valor_atual - 1;
	document.getElementById('currentNumber').innerHTML = valor_atual

}



//-----------------------------------------------------------------------------------------------------
//DERRUBAR A PAGINA DEPOIS DE 10 MINUTOS, OU DE QUANTO TEMPO QUISER, OU QUANDO CHEGAR DETERMINADA DATA!
/*
var valor_atual = document.getElementById('currentNumber')
var valor_atual = 0;

function increment(){
	valor_atual = valor_atual + 1;
	document.getElementById('currentNumber').innerHTML = valor_atual

	if(valor_atual == 600000){
		document.write("TEMPO ESGOTADO!!!");
	}
}

function decrement(){
	valor_atual = valor_atual - 1;
	document.getElementById('currentNumber').innerHTML = valor_atual

}

setInterval(increment, 1000);
*/