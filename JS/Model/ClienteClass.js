class Cliente {
    constructor() {}

    get id() {
        return this.idValue;
    }

    get nome() {
        return this.nomeValue;
    }

    get telefone() {
        return this.fotoSrcValue;
    }

    get endereco() {
        return this.descricaoValue;
    }

    get cidade() {
        return this.tamanhosValue;
    }

    set id(id) {
        this.idValue = id;
    }

    set nome(nomeValue) {
        this.nomeValue = nomeValue;
    }

    set telefone(telefone) {
        this.telefoneValue = telefone;
    }

    set endereco(endereco) {
        this.enderecoValue = endereco;
    }

    set cidade(cidade) {
        this.cidadeValue = cidade;
    }

};