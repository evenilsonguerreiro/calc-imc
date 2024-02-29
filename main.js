const Peso = document.querySelector('#input-peso')
const Altura = document.querySelector('#input-altura')
const res = document.querySelector('#res')

const calcular = () => {
    if(Altura.value != '' && Peso.value != ''){
        const imc = (Peso.value / (Altura.value * Altura.value)).toFixed(2);

        
        if(imc < 18.5){
            classification = 'Você esta abaixo do peso' 
        } else if(imc <25){
            classification = 'Peso normal'
        } else if(imc <30){
            classification = 'Acima do peso'
        } else if(imc < 35){
            classification = 'Obsidade grau I'
        } else if(imc < 41){
            classification = 'Obsidade grau II'
        } else {
            classification = 'Obsidade grau III'
        
        }

        res.innerHTML = `IMC: ${imc} (${classification})`
        
    } else {
        res.innerHTML = 'Preencha os campos '
    }
        Peso.value = ''
        Altura.value = ''

    }
