const txtvalor1 = document.getElementById("valor1")
const txtoperacion = document.getElementById("operacion")
const txtvalor2 = document.getElementById("valor2")
const btncalcular = document.getElementById("calcular")
const presultado = document.getElementById("resultado")


btncalcular.addEventListener("click", calcular)

function calcular(){
    const operacion = txtoperacion.value
    const valor1 = parseFloat(txtvalor1.value)
    const valor2 = parseFloat(txtvalor2.value)
    
    if (operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/"){
        let resultado;
        switch (operacion){
            case "+":
                resultado = valor1 + valor2
                break;
            case "-":
                resultado = valor1 - valor2
                break;
            case "*":
                resultado = valor1*valor2
                break;
            case "/":
                resultado = valor1/valor2
                break;
            
        }

        console.log("= " + resultado)
    }else{
        console.log("calculo imposible")
    }
}

