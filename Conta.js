export class Conta {
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error('Você não deve instanciar um objeto da classe Conta de maneira direta, pois esta é uma classe abstrata.');
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia; 
    }
    

    //Acessores dos atributos privados: 
    //para realizar a atribuição utiliza-se o método acessor set, no qual só irá atribuir o cliente, caso este seja uma instância da classe em questão.
    set cliente(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente;
        }
    }

    //para pegar o valor do cliente, é necessário o método acessor get, assim pode-se usar o .cliente.
    get cliente(){
        return this._cliente;
    }

    //para pegar o saldo de maneira segura e deixá-lo apenas para visualização, ou seja, não é possível realizar atrivuição:
    get saldo(){
        return this._saldo;
    }

    //método público, no qual pode ser utilizado por outras classes, já que está consumindo o método privado de sacar (_sacar)
    sacar(valor){
       throw new Error("O método sacar é um método abstrato, por isso, este deve ser sobreescrevido por classes-filhas");
    }

    //método privado, no qual só poderá ser utilizado por essa classe
    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }else{
            console.log('Saque não autorizado por falta de saldo suficiente.');
        }
    }

    //é necessário criar um método para que seja possível realizar o depósito na conta do cliente:
    depositar(valor){
        if(valor <= 0){
           return;
        }
        this._saldo += valor; 
        console.log('Seu valor foi depositado');
    }

    //é necessário criar um método qeu realize a transferência de acordo com um valor que o usuário escolhe para uma conta:
    transferir(valor, conta){
        const valorSacado = this.sacar(valor); //o valor sacado é composto pelo método de sacar, que nada mais é a opreção de pegar o saldo e subtrair pelo valor que deseja sacar.
        conta.depositar(valorSacado); //aqui será realizado a própria transferência, ou seja, o resultado da varável valor sacado, será transferido para a conta que for passada.
    }
}