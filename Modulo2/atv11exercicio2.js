function calculadora(a, b, calculo){
    switch (calculo) {
        case '+':
            resultado = a + b
            return resultado 
            
        case '-':
            resultado = a - b
            return resultado
         case '*':
            resultado = a * b
            return resultado
        case '/':
            resultado = a / b
            return resultado
            
    }
}
console.log(calculadora(50, 50, '/'))