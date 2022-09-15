const escolhas = document.querySelectorAll('.botao');
const visor = document.querySelector('#display')

resultado = 0;

escolhas.forEach(  (elemento, index) => {


    let index1 = index;
    let elemento1 = elemento;
    
    elemento.addEventListener('click', (evento) => {
  
     const number1 = document.querySelector('#numero1').value;
     const number2 = document.querySelector('#numero2').value;
     
        switch(index1){
            case 0:
                
                resultado = parseInt(number1) + parseInt(number2);
                visor.value = resultado;
                break;
            case 1:
                resultado = parseInt(number1) - parseInt(number2);
                visor.value = resultado;
                break;
            case 2:
                resultado = parseInt(number1) * parseInt(number2);
                visor.value = resultado;
                break;
            case 3:
                resultado = parseFloat(number1) / parseFloat(number2);
                visor.value = resultado.toFixed(2);
                break;
                   

    }

    } )
} );
