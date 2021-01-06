import {Cliente} from "./Cliente.js"
import {Gerente} from "./Funcionario/Gerente.js"
import {Diretor} from "./Funcionario/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Matheus", 500000, 444444212);
const gerente = new Gerente("Larissa", 130000, 22323412312312321);
diretor.cadastrarSenha("444gh#");
gerente.cadastrarSenha("444gh@");
const gerenteLogado = SistemaAutenticacao.login(gerente, "444gh@");
const diretorLogado = SistemaAutenticacao.login(diretor, "444gh#");

const cliente = new Cliente("Fernanda", 445545454, '1235');
const dclienteLogado = SistemaAutenticacao.login(cliente, "1235");

console.log(gerenteLogado, diretorLogado, dclienteLogado);
