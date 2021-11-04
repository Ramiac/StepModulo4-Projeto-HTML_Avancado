const form = document.querySelector('form');

let total = localStorage.getItem("total");
let comentario = localStorage.getItem('comentario');
let listaCarinho = localStorage.getItem('listaCarinho');

console.log(total, comentario, listaCarinho);
if (comentario !== null) comentario = comentario.slice(1, -1);
document.querySelector('textarea').value = comentario;
document.getElementById('subtotal').innerText = "R$" + total;
document.getElementById('entrega').innerText = "R$300.00"
document.getElementById('total').innerText = "R$" + Math.round((parseFloat(total) + 300) * 100) / 100;

(function() {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
        // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function(form) {
            form.addEventListener('submit', function(event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated');

            }, false)
        })
})()

form.addEventListener('submit', function(event) {
    event.preventDefault();

    if (form.checkValidity()) {
        tiraItemSession();
        location.replace('./confirme.html');
    }
}, false);


function tiraItemSession() {
    window.localStorage.removeItem('listaCarinho');
    window.localStorage.removeItem('comentario');
    window.localStorage.removeItem('total');
}