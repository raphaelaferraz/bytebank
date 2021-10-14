import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
    constructor(cliente) {
        super(0, cliente, 100); //referenciando a classe-mãe (Conta)
    }

    //sobrepondo o método sacar da classe-mãe
    sacar(valor) {
        let taxa = 1.01;
        return this._sacar(valor, taxa);
    }
}