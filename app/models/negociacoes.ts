import { Negociacao } from './negociacao.js';

export class Negociacoes {
    // private negociacoes: Negociacao[] = []; // this is the same as the line below
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): readonly Negociacao[]   // this is the same as the line below
    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }
}