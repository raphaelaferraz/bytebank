export class SistemaAutenticacao {
    //Este é um método estático, ou seja, não é necessário criar uma instância para esse método 
    static login(autenticavel, senha) { //para ser autenticável é necessário ter o método autenticar 
        if (SistemaAutenticacao.usuarioAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    //método estático
    static usuarioAutenticavel(autenticavel) {
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function; //esta é uma maneira de buscar se uma chave (para o endereço de memória) existe dentro do objeto e se é uma instância de um objeto/função
    }
}