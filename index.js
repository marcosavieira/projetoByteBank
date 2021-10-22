import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Marcos", 33333333309);
const conta1 = new ContaCorrente(1001, cliente1);

const cliente2 = new Cliente("Pamela", 9999999909);
const conta2 = new ContaCorrente(101, cliente2);

conta1.depositar(500);
conta1.transferir(200, conta2);

console.log(conta1);
console.log(conta2);