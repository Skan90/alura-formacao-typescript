export class Negociacoes {
    constructor() {
        // private negociacoes: Negociacao[] = []; // this is the same as the line below
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): readonly Negociacao[]   // this is the same as the line below
    lista() {
        return this.negociacoes;
    }
}
