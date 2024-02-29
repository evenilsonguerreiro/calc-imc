const Peso = document.querySelector('#input-peso')
const Altura = document.querySelector('#input-altura')
const res = document.querySelector('#res')
const span = document.querySelector('span')

const calcular = () => {
    if(Altura.value != '' && Peso.value != ''){
        const imc = (Peso.value / (Altura.value * Altura.value)).toFixed(2);

        
        if(imc < 18.5){
            classification = 'Você esta abaixo do peso' 
        } else if(imc <25){
            classification = 'Peso normal'
            span.style.color = 'green'
        } else if(imc <30){
            classification = 'Acima do peso'
            span.style.color = 'yellow'
        } else if(imc < 35){
            classification = 'Obsidade grau I'
            span.style.color = 'red'
        } else if(imc < 41){
            classification = 'Obsidade grau II'
            span.style.color = 'red'
        } else {
            classification = 'Obsidade grau III'
            span.style.color = 'red'
            
        
        }

        res.innerHTML = `IMC: ${imc} (${classification})`
        
    } else {
        alert('preencha os campos')
    }
        Peso.value = ''
        Altura.value = ''

    }
