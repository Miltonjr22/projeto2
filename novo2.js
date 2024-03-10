
const Banco = {
    conta: "123456",
    saldo: 1000,
    tipoConta: "Corrente",
    agencia: "7890",
    
    buscarSaldo: function() {
        return this.saldo;
    },
    
    deposito: function(valor) {
        this.saldo += valor;
        console.log(Depósito de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo});
    },
    
    saque: function(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
        } else {
            this.saldo -= valor;
            console.log(Saque de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo});
        }
    },
    
    numeroConta: function() {
        return this.conta;
    }
};
