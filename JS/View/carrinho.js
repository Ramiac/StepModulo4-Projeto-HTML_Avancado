let carinho = JSON.parse(localStorage.getItem('listaCarinho'));

let total = 0;

if (carinho !== null) {
    for (i = 0; carinho.length > i; i++) {
        let produto = carinho[i];

        document.getElementById('item').innerHTML +=
            '<div class="d-sm-flex justify-content-between align-items-center mt-3 mb-4 pb-3 border-bottom">' +
            '<div class="d-block d-sm-flex align-items-center text-center text-sm-start">' +
            '<a id="fotoSrc" class="d-inline-block flex-shrink-0 mx-auto me-sm-4" href="#"><img src="' + produto.fotoSrcValue + '" width="120" alt="Foto"></a>' +
            '<div class="pt-2">' +
            '<h3 id="nome" class="product-title fs-base mb-2">' + produto.nomeValue + '</h3>' +
            '<div id="tamanho" class="fs-sm"><span class="text-muted me-2">Tamanho:</span>' + produto.tamanhoValue + '</div>' +
            '<div id="madeira" class="fs-sm"><span class="text-muted me-2">Madeira:</span>' + produto.madeiraValue + '</div>' +
            '</div>' +
            '</div>' +
            '<div class="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-start" style="max-width: 9rem;">' +
            '<div id="preco" class="fs-lg text-accent pt-2">' + produto.precoValue + '</div>' +
            '</div>' +
            '</div>';

        let preco = produto.precoValue;
        preco = preco.replace('R$', '')
        total += parseFloat(preco);
    }
    total = Math.round(total * 100) / 100;
    document.getElementById('Total').innerText = "R$" + total;
} else {
    document.getElementById('item').style.textAlign = "center";
    document.getElementById('item').style.color = "#E21C21";
    document.getElementById('item').innerText = "Não há produto no carinho."
    document.getElementById('paraPagamento').setAttribute("href", "#");
    document.getElementById('paraPagamento2').setAttribute("href", "#")
}





let cupom = "BLACKFRIDAY10"

let cupomUsado = localStorage.getItem('CupomUsado');
let countUsoCupom = 0

function aplicarCupom() {
    let areaCupom = document.getElementById('Cupom').value;

    if (areaCupom === cupom && cupomUsado == null && countUsoCupom === 0) {
        total = Math.round((total * 90) / 100);
        document.getElementById('Total').innerText = "R$" + total;
        countUsoCupom = 999;
        document.querySelector('#invalid').innerText = "Cupom aplicado com sucesso";
        localStorage.setItem("CupomUsado", JSON.stringify(cupom));

    } else if (areaCupom === "") {
        document.querySelector('#invalid').innerText = "Adicióna um código de cupom";
    } else if (areaCupom === cupom && cupomUsado != null || countUsoCupom > 0) {
        document.querySelector('#invalid').innerText = "Cupom já usado";
    } else if (areaCupom !== cupom) {
        document.querySelector('#invalid').innerText = "Cupom inválido";
    }
}



function irParaPagamento() {
    let comentario = document.getElementById('Comentario').value;
    localStorage.setItem("total", JSON.stringify(total));
    localStorage.setItem("comentario", JSON.stringify(comentario));
}