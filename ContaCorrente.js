import {Conta} from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroTotalDeContas = 0; //atributo estático que realiza a contagem de cada conta existente

    //é preciso um construtor definido para que as atributos de cliente e agencia sejam únicos e inalteráveis durante o clico de vida do objeto:
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroTotalDeContas += 1; //Realiza a contagem de cada conta criada da classe como um todo
    }

    //aqui está sobrepondo o método sacar da classe mãe
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa); //pode-se também colocar no lugar do this o super()
    }
}