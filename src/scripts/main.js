document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit',function(evento) {
        evento.preventDefault();
        let NumeroMaximo = document.getElementById('numero-maximo').value;
        NumeroMaximo = parseInt(NumeroMaximo);

        let numeroAleatorio = Math.random() * NumeroMaximo;
        numeroAleatorio = Math.floor(numeroAleatorio);
    
        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
        

})