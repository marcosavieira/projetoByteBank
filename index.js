import {Cliente} from "./Cliente.js";
import { Conta } from "./Conta.js";
import {ContaCorrente} from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const cliente2 = new Cliente("Marcos", 999999909);
const contaMarcos = new ContaPoupanca(0, cliente2, 1001);
contaMarcos.sacar(50);

const contaX = new Conta(0, cliente2, 1001);

console.log(contaX);

console.log(contaCorrenteRicardo);
console.log(contaMarcos);