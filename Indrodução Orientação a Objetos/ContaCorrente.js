import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    //Atributos da classe
    static numeroDecontas = 0;
    agencia;
    _cliente;
    //#saldo = 0;
    _saldo = 0;

    //Modificadores de Acesso set get
    set cliente(novo) {
        if (novo instanceof Cliente) {
            this._cliente = novo;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

   constructor(cliente, agencia) {
       this.agencia = agencia;
       this.cliente = cliente;
       ContaCorrente.numeroDecontas += 1;
   }
     
    //Metodos

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            console.log(`O valor sacado foi de ${valor}`);
            return valor;
        } else {
            console.log("você não possui saldo suficiente");
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(`O valor do saldo é ${this._saldo}`);
        }

    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}