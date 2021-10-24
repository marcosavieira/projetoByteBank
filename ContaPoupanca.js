import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta{
  constructor(cliente, agencia) {
    super(100, cliente, agencia);
  }

  sacar(valor) {
    let taxa = 1.05;
      return this._sacar(valor, taxa);
  }
}
