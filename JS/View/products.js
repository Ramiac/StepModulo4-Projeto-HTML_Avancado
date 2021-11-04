const prodAdicinado = document.querySelector('#alert');
prodAdicinado.style.display = 'none';

function paraCarinho() {
    location.href = "./carinho.html";
}

function toGallery() {
    document.getElementById('quick-view').style.display = 'none';
}

// var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
    // if (toastTrigger) {
    //     toastTrigger.addEventListener('click', function() {
    //         var toast = new bootstrap.Toast(toastLiveExample)

//         toast.show()
//     })
// }

function toastTrigger() {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
}


function paraModal(item) {
    let produto = new Product();

    produto.nome = document.getElementById(item).getElementsByClassName('item-titulo')[0].innerText;
    document.getElementsByClassName('modal-title')[0].innerHTML = produto.nome;

    produto.descricao = document.getElementById(item).getElementsByClassName('item-texto')[0].innerText;
    document.getElementById('quick-view').getElementsByClassName('item-texto')[0].innerHTML = produto.descricao;

    produto.tamanhos = document.getElementById(item).querySelector('#tamanhos').getElementsByClassName("form-option-label");
    document.getElementById('quick-view').querySelector('#tamanhos').innerHTML = "";
    for (let i = 0; i < produto.tamanhos.length; i++) {
        var nodeOption = document.createElement("option");

        nodeOption.value = produto.tamanhos[i].innerText;
        nodeOption.text = produto.tamanhos[i].innerText;

        document.getElementById('quick-view').querySelector('#tamanhos').appendChild(nodeOption)
    }

    produto.madeiras = document.getElementById(item).querySelector('#madeiras').getElementsByClassName("form-option-label");
    document.getElementById('quick-view').querySelector('#madeiras').innerHTML = "";
    for (let i = 0; i < produto.madeiras.length; i++) {
        let nodeOption = document.createElement("option");

        nodeOption.value = produto.madeiras[i].innerText;
        nodeOption.text = produto.madeiras[i].innerText;

        document.getElementById('quick-view').querySelector('#madeiras').appendChild(nodeOption)
    }

    produto.preco = document.getElementById(item).querySelector('.product-price').innerText;
    document.getElementById('quick-view').querySelector('#product-price').innerHTML = produto.preco;

    let fotoArrayCarossel = [];
    switch (item) {
        case "item1":
            fotoArrayCarossel = item1.fotosCarossel;
            break;
        case "item2":
            fotoArrayCarossel = item2.fotosCarossel;
            break;
        case "item3":
            fotoArrayCarossel = item3.fotosCarossel;
            break;
        case "item4":
            fotoArrayCarossel = item4.fotosCarossel;
            break;
        case "item5":
            fotoArrayCarossel = item5.fotosCarossel;
            break;
        case "item6":
            fotoArrayCarossel = item6.fotosCarossel;
            break;
        case "item7":
            fotoArrayCarossel = item7.fotosCarossel;
            break;
        case "item8":
            fotoArrayCarossel = item8.fotosCarossel;
            break;
        case "item9":
            fotoArrayCarossel = item9.fotosCarossel;
            break;
        case "item10":
            fotoArrayCarossel = item10.fotosCarossel;
            break;
        case "item11":
            fotoArrayCarossel = item11.fotosCarossel;
            break;

    }

    document.getElementById('quick-view').getElementsByClassName("carousel-indicators")[0].innerHTML = "";
    for (let i = 0; i < fotoArrayCarossel.length; i++) {
        if (i === 0) {
            document.getElementById('quick-view').getElementsByClassName("carousel-indicators")[0].innerHTML +=
                '<img data-bs-target="#carouselExampleIndicators" data-bs-slide-to="' + [i] +
                '" class="active" aria-current="true" aria-label="Slide ' + [i] +
                '" src="' + fotoArrayCarossel[i] + '" alt = ""/ > '
        } else {
            document.getElementById('quick-view').getElementsByClassName("carousel-indicators")[0].innerHTML +=
                '<img data-bs-target="#carouselExampleIndicators" data-bs-slide-to="' + [i] +
                '" aria-current="true" aria-label="Slide ' + [i] +
                '" src="' + fotoArrayCarossel[i] + '" alt = ""/ > '
        }

    }


    document.getElementById('quick-view').getElementsByClassName("carousel-inner")[0].innerHTML = "";
    for (let i = 0; i < fotoArrayCarossel.length; i++) {

        if (i === 0) {
            document.getElementById('quick-view').getElementsByClassName("carousel-inner")[0].innerHTML +=
                '<div class="carousel-item active">' +
                '<div class="gallery" onclick="toGallery()">' +
                '<a href="' + fotoArrayCarossel[i] + '" class="gallery-item rounded-3 ">' +
                '<img src = "' + fotoArrayCarossel[i] + '"></a></div></div>'
        } else {
            document.getElementById('quick-view').getElementsByClassName("carousel-inner")[0].innerHTML +=
                '<div class="carousel-item">' +
                '<div class="gallery" onclick="toGallery()">' +
                '<a href="' + fotoArrayCarossel[i] + '" class="gallery-item rounded-3 ">' +
                '<img src = "' + fotoArrayCarossel[i] + '"></a></div></div>'
        }
    }

    document.getElementById("botaoCarinho").setAttribute('onclick', 'modalParaCarinho("' + item + '")');

    var gallery = function() {
        var gallery = document.querySelectorAll('.gallery');

        if (gallery.length) {
            for (var i = 0; i < gallery.length; i++) {
                lightGallery(gallery[i], {
                    selector: '.gallery-item',
                    download: false,
                    videojs: true,
                    youtubePlayerParams: {
                        modestbranding: 1,
                        showinfo: 0,
                        rel: 0
                    },
                    vimeoPlayerParams: {
                        byline: 0,
                        portrait: 0,
                        color: 'fe696a'
                    }
                });
            }
        }
    }();

}

let listaCarinho = [];
let produto = new Product();


function paraCarinho(item) {


    produto.id = item;
    produto.nome = document.getElementById(item).getElementsByClassName('item-titulo')[0].innerText;

    var tamanhos = document.getElementById(item).querySelector('#tamanhos').getElementsByClassName("form-check-input");
    for (let i = 0; i < tamanhos.length; i++) {
        if (tamanhos[i].checked) {
            produto.tamanho = document.getElementById(item).querySelector('#tamanhos').getElementsByClassName("form-option-label")[i].innerText;
        }
    }

    var madeiras = document.getElementById(item).querySelector('#madeiras').getElementsByClassName("form-check-input");
    for (let i = 0; i < madeiras.length; i++) {
        if (madeiras[i].checked) {
            produto.madeira = document.getElementById(item).querySelector('#madeiras').getElementsByClassName("form-option-label")[i].innerText;
        }
    }


    produto.preco = document.getElementById(item).querySelector('.product-price').innerText;

    switch (item) {
        case "item1":
            produto.fotoSrc = item1.fotoSrc;
            break;
        case "item2":
            produto.fotoSrc = item2.fotoSrc;
            break;
        case "item3":
            produto.fotoSrc = item3.fotoSrc;
            break;
        case "item4":
            produto.fotoSrc = item4.fotoSrc;
            break;
        case "item5":
            produto.fotoSrc = item5.fotoSrc;
            break;
        case "item6":
            produto.fotoSrc = item6.fotoSrc;
            break;
        case "item7":
            produto.fotoSrc = item7.fotoSrc;
            break;
        case "item8":
            produto.fotoSrc = item8.fotoSrc;
            break;
        case "item9":
            produto.fotoSrc = item9.fotoSrc;
            break;
        case "item10":
            produto.fotoSrc = item10.fotoSrc;
            break;
        case "item11":
            produto.fotoSrc = item11.fotoSrc;
            break;

    }

    if (JSON.parse(localStorage.getItem("listaCarinho")) != null) {
        listaCarinho = JSON.parse(localStorage.getItem("listaCarinho"));
    }

    listaCarinho.push(produto);
    localStorage.setItem("listaCarinho", JSON.stringify(listaCarinho));
    contaProduto()
}

function modalParaCarinho(item) {
    produto.id = item;
    produto.nome = document.getElementById(item).getElementsByClassName('item-titulo')[0].innerText;

    produto.tamanho = document.getElementById('quick-view').querySelector('#tamanhos').value;

    produto.madeira = document.getElementById('quick-view').querySelector('#madeiras').value;

    produto.preco = document.getElementById(item).querySelector('.product-price').innerText;

    switch (item) {
        case "item1":
            produto.fotoSrc = item1.fotoSrc;
            break;
        case "item2":
            produto.fotoSrc = item2.fotoSrc;
            break;
        case "item3":
            produto.fotoSrc = item3.fotoSrc;
            break;
        case "item4":
            produto.fotoSrc = item4.fotoSrc;
            break;
        case "item5":
            produto.fotoSrc = item5.fotoSrc;
            break;
        case "item6":
            produto.fotoSrc = item6.fotoSrc;
            break;
        case "item7":
            produto.fotoSrc = item7.fotoSrc;
            break;
        case "item8":
            produto.fotoSrc = item8.fotoSrc;
            break;
        case "item9":
            produto.fotoSrc = item9.fotoSrc;
            break;
        case "item10":
            produto.fotoSrc = item10.fotoSrc;
            break;
        case "item11":
            produto.fotoSrc = item11.fotoSrc;
            break;

    }

    if (JSON.parse(localStorage.getItem("listaCarinho")) != null) {
        listaCarinho = JSON.parse(localStorage.getItem("listaCarinho"));
    }

    listaCarinho.push(produto);
    localStorage.setItem("listaCarinho", JSON.stringify(listaCarinho));
    prodAdicinado.style.display = "block";
    contaProduto();

}