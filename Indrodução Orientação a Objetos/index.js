import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';

const cliente1 = new Cliente("Alice", 11155534343);
console.log(cliente1.cpf);

const cliente2 = new Cliente("Roberto", 2214451323);


const contaAlice = new ContaCorrente(cliente1, 1122);
contaAlice.depositar(1000);


const contaRoberto = new ContaCorrente(cliente2, 2311);
const contaRoberto1 = new ContaCorrente(cliente2, 2311);
const contaRoberto2 = new ContaCorrente(cliente2, 2311);
const contaRoberto3 = new ContaCorrente(cliente2, 2311);



contaAlice.transferir(500, contaRoberto);
console.log(ContaCorrente.numeroDecontas);