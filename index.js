import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";
import {ContaPoupanca} from "./ContaPoupanca.js";

//criando os clientes com base nos atributos da classe
const cliente1 = new Cliente('Victor',  123456789);
const cliente2 = new Cliente('Raphaela', 987654321);


//Criando uma conta corrente para o cliente 1
const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1001);


//cirando uma conta corrente para o cliente 2
const contaCorrenteCliente2 = new ContaCorrente(cliente2, 1002);


//Operações de saque e deposito 
// contaCorrenteCliente1.depositar(500);
let valorSacado = contaCorrenteCliente1.sacar(100);
// contaCorrenteCliente1.transferir(25, contaCorrenteCliente2);

const contaPoupancaCliente1 = new ContaPoupanca(50, cliente1, 1001);
// contaPoupancaCliente1.sacar(10);
// console.log(contaPoupancaCliente1);
// console.log(contaCorrenteCliente1);
