var productsId = [];
class Cliente {
    constructor() {}

    get id() {
        return this.idValue;
    }

    get productsId() {
        return this.productsIdValue;
    }

    get clienteId() {
        return this.clienteIdValue;
    }

    get comentario() {
        return this.comentarioValue;
    }

    get cupom() {
        return this.cupomValue;
    }

    get total() {
        return this.totalValue;
    }

    set id(id) {
        this.idValue = id;
    }

    set productsId(productId) {
        productsId.push(productId);
        this.productsIdValue = productsId;
    }

    set clienteId(clienteId) {
        this.clienteIdValue = clienteId;
    }

    set comentario(comentario) {
        this.comentarioValue = comentario;
    }

    set cupom(cupom) {
        this.cupomValue = cupom;
    }

    set total(total) {
        this.totalValue = total;
    }

};