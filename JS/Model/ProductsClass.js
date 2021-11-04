var fotosCarossel = [];

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

    get fotosCarossel() {
        return this.fotosCarosselValue;
    }

    get descricao() {
        return this.descricaoValue;
    }

    get tamanhos() {
        return this.tamanhosValue;
    }

    get tamanho() {
        return this.tamanhoValue;
    }

    get madeira() {
        return this.madeiraValue;
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

    set fotosCarossel(fotoSrc) {
        fotosCarossel.push(fotoSrc);
        this.fotosCarosselValue = fotosCarossel;
    }

    set descricao(descricao) {
        this.descricaoValue = descricao;
    }

    set tamanho(tamanho) {
        this.tamanhoValue = tamanho;
    }

    set tamanhos(tamanho) {
        this.tamanhosValue = tamanho;
    }

    set madeira(madeira) {
        this.madeiraValue = madeira;
    }

    set madeiras(madeira) {
        this.madeirasValue = madeira;
    }

    set preco(preco) {
        this.precoValue = preco;
    }
};

var item1 = new Product();
item1.fotoSrc = "./IMG/products/floating-top-table.jpg";
fotosCarossel = [];
item1.fotosCarossel = "./IMG/products/floating-top-table/1.jpg";
item1.fotosCarossel = "./IMG/products/floating-top-table/2.jpg";
item1.fotosCarossel = "./IMG/products/floating-top-table/3.jpg";
item1.fotosCarossel = "./IMG/products/floating-top-table/4.jpg";

const item2 = new Product();
item2.fotoSrc = "./IMG/products/interlocking-joint-table.jpg";
fotosCarossel = [];
item2.fotosCarossel = "./IMG/products/interlocking-joint-table/1.jpg";
item2.fotosCarossel = "./IMG/products/interlocking-joint-table/2.jpg";
item2.fotosCarossel = "./IMG/products/interlocking-joint-table/3.jpg";
item2.fotosCarossel = "./IMG/products/interlocking-joint-table/4.jpg";
item2.fotosCarossel = "./IMG/products/interlocking-joint-table/5.jpg";

const item3 = new Product();
item3.fotoSrc = "./IMG/products/walnut-table-with-drawers.jpg";
fotosCarossel = [];
item3.fotosCarossel = "./IMG/products/walnut-table-with-drawers/1.jpg";
item3.fotosCarossel = "./IMG/products/walnut-table-with-drawers/2.jpg";
item3.fotosCarossel = "./IMG/products/walnut-table-with-drawers/3.jpg";
item3.fotosCarossel = "./IMG/products/walnut-table-with-drawers/4.jpg";
item3.fotosCarossel = "./IMG/products/walnut-table-with-drawers/5.jpg";

const item4 = new Product();
item4.fotoSrc = "./IMG/products/rounded-chair.jpg";
fotosCarossel = [];
item4.fotosCarossel = "./IMG/products/rounded-chair/1.jpg";
item4.fotosCarossel = "./IMG/products/rounded-chair/2.jpg";
item4.fotosCarossel = "./IMG/products/rounded-chair/3.jpg";
item4.fotosCarossel = "./IMG/products/rounded-chair/4.jpg";
item4.fotosCarossel = "./IMG/products/rounded-chair/5.jpg";

const item5 = new Product();
item5.fotoSrc = "./IMG/products/low-fabric-sofa.jpg";
fotosCarossel = [];
item5.fotosCarossel = "./IMG/products/low-fabric-sofa/1.jpg";
item5.fotosCarossel = "./IMG/products/low-fabric-sofa/2.jpg";

const item6 = new Product();
item6.fotoSrc = "./IMG/products/bench-with-brass-shelf.jpg";
fotosCarossel = [];
item6.fotosCarossel = "./IMG/products/bench-with-brass-shelf/1.jpg";
item6.fotosCarossel = "./IMG/products/bench-with-brass-shelf/2.jpg";
item6.fotosCarossel = "./IMG/products/bench-with-brass-shelf/3.jpg";
item6.fotosCarossel = "./IMG/products/bench-with-brass-shelf/4.jpg";

const item7 = new Product();
item7.fotoSrc = "./IMG/products/wide-drawer.jpg";
fotosCarossel = [];
item7.fotosCarossel = "./IMG/products/wide-drawer/1.jpg";
item7.fotosCarossel = "./IMG/products/wide-drawer/2.jpg";
item7.fotosCarossel = "./IMG/products/wide-drawer/3.jpg";
item7.fotosCarossel = "./IMG/products/wide-drawer/4.jpg";

const item8 = new Product();
item8.fotoSrc = "./IMG/products/walnut-single-drawer.jpg";
fotosCarossel = [];
item8.fotosCarossel = "./IMG/products/walnut-single-drawer/1.jpg";
item8.fotosCarossel = "./IMG/products/walnut-single-drawer/2.jpg";
item8.fotosCarossel = "./IMG/products/walnut-single-drawer/3.jpg";
item8.fotosCarossel = "./IMG/products/walnut-single-drawer/4.jpg";
item8.fotosCarossel = "./IMG/products/walnut-single-drawer/5.jpg";
item8.fotosCarossel = "./IMG/products/walnut-single-drawer/6.jpg";

const item9 = new Product();
item9.fotoSrc = "./IMG/products/liveEdge-walnut-TV-stand.jpg";
fotosCarossel = [];
item9.fotosCarossel = "./IMG/products/liveEdge-walnut-TV-stand/1.jpg";
item9.fotosCarossel = "./IMG/products/liveEdge-walnut-TV-stand/2.jpg";
item9.fotosCarossel = "./IMG/products/liveEdge-walnut-TV-stand/3.jpg";
item9.fotosCarossel = "./IMG/products/liveEdge-walnut-TV-stand/4.jpg";
item9.fotosCarossel = "./IMG/products/liveEdge-walnut-TV-stand/5.jpg";

const item10 = new Product();
item10.fotoSrc = "./IMG/products/basic-shelf.jpg";
fotosCarossel = [];
item10.fotosCarossel = "./IMG/products/basic-shelf/1.jpg";
item10.fotosCarossel = "./IMG/products/basic-shelf/2.jpg";
item10.fotosCarossel = "./IMG/products/basic-shelf/3.jpg";
item10.fotosCarossel = "./IMG/products/basic-shelf/4.jpg";

const item11 = new Product();
item11.fotoSrc = "./IMG/products/vertical-shelf.jpg";
fotosCarossel = [];
item11.fotosCarossel = "./IMG/products/vertical-shelf/1.jpg";
item11.fotosCarossel = "./IMG/products/vertical-shelf/2.jpg";
item11.fotosCarossel = "./IMG/products/vertical-shelf/4.jpg";
item11.fotosCarossel = "./IMG/products/vertical-shelf/5.jpg";
item11.fotosCarossel = "./IMG/products/vertical-shelf/6.jpg";
item11.fotosCarossel = "./IMG/products/vertical-shelf/7.jpg";