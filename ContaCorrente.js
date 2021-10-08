import {Cliente} from "./Cliente.js";

//Criando uma classe para a conta corrente 
export class ContaCorrente {
    static numeroTotalDeContas = 0; //atributo estático que realiza a contagem de cada conta existente
    agencia;

    //atributos privados:
    _cliente; 
    _saldo = 0; 


    //Acessores dos atributos privados: 
    //para realizar a atribuição utiliza-se o método acessor set, no qual só irá atribuir o cliente, caso este seja uma instância da classe em questão.
    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }

    //para pegar o valor do cliente, é necessário o método acessor get, assim pode-se usar o .cliente.
    get cliente() {
        return this._cliente;
    }

    //para pegar o saldo de maneira segura e deixá-lo apenas para visualização, ou seja, não é possível realizar atrivuição:
    get saldo(){
        return this._saldo;
    }

    //é preciso um construtor definido para que as atributos de cliente e agencia sejam únicos e inalteráveis durante o clico de vida do objeto:
    constructor(cliente, agencia){
        this.cliente = cliente; //o this.cliente será igual ao parâmetro cliente do método
        this.agencia = agencia; // o this.agencia será igual ao parâmetro agencia do método
        ContaCorrente.numeroTotalDeContas += 1; //Realiza a contagem de cada conta criada da classe como um todo
    }

    //Métodos do comportamento da classe:
    //é necessário criar um método para que seja possível sacar o dinheiro do cliente:
    sacar(valor){
        if(this._saldo >= valor){
            console.log('Saque autorizado!');
            this._saldo -= valor;
            // console.log(`O seu saldo é de: ${this._saldo}`);
            return valor;
        }else{
            console.log('Saque não autorizado por falta de saldo suficiente.')
        }
    }

    //é necessário criar um método para que seja possível realizar o depósito na conta do cliente:
    depositar(valor){
        if(valor <= 0){
           return
        }
        this._saldo += valor; 
        console.log('Seu valor foi depositado');
    }

    //é necessário criar um método qeu realize a transferência de acordo com um valor que o usuário escolhe para uma conta:
    transferir(valor, conta) {
        const valorSacado = this.sacar(valor); //o valor sacado é composto pelo método de sacar, que nada mais é a opreção de pegar o saldo e subtrair pelo valor que deseja sacar.
        conta.depositar(valorSacado); //aqui será realizado a própria transferência, ou seja, o resultado da varável valor sacado, será transferido para a conta que for passada.
    }
}