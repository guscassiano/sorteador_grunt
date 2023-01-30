// document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(e){
        e.preventDefault()
        let nummax = parseInt(document.getElementById('num-max').value);

        let numrandom = Math.random() * nummax;
        numrandom = Math.round(numrandom)

        if(numrandom == 0)
            numrandom++

        document.getElementById('resultado-valor').innerText = numrandom
        document.querySelector('.resultado').style.display = 'block'
    })
//})
