import {Cliente} from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//criando os clientes com base nos atributos da classe
const cliente1 = new Cliente('Victor',  123456789);
const cliente2 = new Cliente('Raphaela', 987654321);


//Criando uma conta corrente para o cliente 1
const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1001);
// contaCorrenteCliente1.#saldo = 100; -> isso não funcionaria (caso utilizasse essa proposta de atributo privado), pois o atributo se torna realmente privado 


//cirando uma conta corrente para o cliente 2
const contaCorrenteCliente2 = new ContaCorrente(cliente2, 1002);


//Operações de saque e deposito 
contaCorrenteCliente1.depositar(100);
let valorSacado = contaCorrenteCliente1.sacar(50);
contaCorrenteCliente1.transferir(25, contaCorrenteCliente2);
