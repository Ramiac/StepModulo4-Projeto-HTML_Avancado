var tamanhos = [];
var madeiras = [];

class Product {
    constructor() {}

    get id() {
        return this.idValue;
    }

    get nome() {
        return this.nomeValue;
    }

    get fotoSrc() {
        return this.fotoSrcValue;
    }

    get descricao() {
        return this.descricaoValue;
    }

    get tamanhos() {
        return this.tamanhosValue;
    }

    get madeiras() {
        return this.madeirasValue;
    }

    get preco() {
        return this.precoValue;
    }


    set id(id) {
        this.idValue = id;
    }

    set nome(nomeValue) {
        this.nomeValue = nomeValue;
    }

    set fotoSrc(fotoSrc) {
        this.fotoSrcValue = fotoSrc;
    }

    set descricao(descricao) {
        this.descricaoValue = descricao;
    }

    set tamanhos(tamanho) {
        tamanhos.push(tamanho);
        this.tamanhosValue = tamanhos;
    }

    set madeiras(madeira) {
        madeiras.push(madeira);
        this.madeirasValue = madeiras;
    }

    set preco(preco) {
        this.precoValue = preco;
    }
};