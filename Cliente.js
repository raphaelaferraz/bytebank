//Criando uma classe para o cliente do banco:
export class Cliente {
    //Quando é criado o objeto, as informações que serão atribuídas aos atributos dessa classe não podem ser alteradas em nenhum outro momento de seu ciclo de vida, sendo assim, é preciso definir o construtor do objeto:
    constructor(nome, cpf, senha) {
        this.nome = nome; //o this.nome dessa classe, será igual ao nome que está no parâmetro do método
        this._cpf = cpf; //o this._cpf dessa classe, será igual ao cpf que está no parâmetro do método
        this._senha = senha;
    }

    //é necessário um acessor para que o atributo privado CPF só esteja disponível para visualização:
    get cpf() {
        return this._cpf; //o return faz com que retorne o cpf do cliente
    }
}