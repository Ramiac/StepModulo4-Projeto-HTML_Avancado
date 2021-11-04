const badge = document.getElementById('Badge');

function contaProduto() {
    if (localStorage.getItem("listaCarinho") != null) {
        let quantidade = JSON.parse(localStorage.getItem("listaCarinho")).length;

        badge.style.background = "#fe696a";
        badge.innerText = quantidade;
    }
}

contaProduto();