class Cliente {
    constructor() {}

    get id() {
        return this.idValue;
    }

    get numero() {
        return this.numeroValue;
    }

    get nome() {
        return this.nomeValue;
    }

    get validade() {
        return this.validadeValue;
    }

    get cvc() {
        return this.cvcValue;
    }

    get cpf() {
        return this.cpfValue;
    }

    get clienteId() {
        return this.clienteIdValue;
    }

    set id(id) {
        this.idValue = id;
    }

    set numero(numero) {
        this.numeroValue = numero;
    }

    set nome(nomeValue) {
        this.nomeValue = nomeValue;
    }

    set validade(validade) {
        this.validadeValue = validade;
    }

    set cvc(cvc) {
        this.cvcValue = cvc;
    }

    set cpf(cpf) {
        this.cpfValue = cpf;
    }

    set clienteId(clienteId) {
        this.clienteIdValue = clienteId;
    }

};