import {Cliente} from "./Cliente.js";
import { Funcionario } from "./Funcionario/Funcionario.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor1 = new Diretor("Raphaela", 10000, 1234567800);
diretor1.cadastrarSenha("123456");

const gerente1 = new Gerente("Vicotr", 5000, 9874612300);
gerente1.cadastrarSenha("123")

const cliente1 = new Cliente("Najara", 55555555, "866");

const gerenteEstaLogado = SistemaAutenticacao.login(gerente1, "123");
const diretorEstaLogado = SistemaAutenticacao.login(diretor1, "123456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente1, "866")
console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);

