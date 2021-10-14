//Essa é uma classe abstrata, ou seja, só pode ser herdada e não instanciada de forma direta!

export class Funcionario {
    constructor(nome, salario, cpf) {
        this._nome = nome;
        this._salario = salario;
        this._cpf = cpf;

        this._bonificacao = 1;
        this._senha;
    }

    //métodod autenticar responsável por deixar os usuários "autenticavéis"
    autenticar(senha) {
        return senha == this._senha;
    }

    cadastrarSenha(senha) {
        this._senha = senha;
    }
}