class Conta {
    constructor (nome, cpf,saldo) {
    this.nome = nome
    this.cpf = cpf
    this.saldo = saldo
}

get nome () {
    return this.nome;
}
get cpf () {
    return this.cpf;
}
get saldo () {
    return this.saldo;
}
set nome(nome) {
    this._nome = nome;
}
set cpf(cpf) {
    this._cpf = cpf;
}
set saldo(saldo) {
    this._saldo = saldo;
}
deposita(valor){
    this.saldo += valor;
    return this.saldo
}
saca(valor){
    this.saldo -= valor;
    return this.saldo;
}
atualiza(taxa){
    this.saldo += this.saldo * (taxa / 10);
    return this.saldo;
}
}
class Poupanca extends Conta {
    constructor(nome, cpf, conta, saldo, numeroPoupanca) {
        super(nome, cpf, saldo);
        this.conta = conta;
        this.numeroPoupanca = numeroPoupanca;
    }

    atualiza(taxa) {
        this.saldo += this.saldo * (taxa / 100);
        return this.saldo;

}}
const contaCliente = new Conta("João", "123.456.789-00", 1500);
console.log(Nome: ${contaCliente.nome()}, Saldo: ${contaCliente.saldo});

contaCliente.deposita(1000);
console.log(Novo Saldo após depósito: ${contaCliente.saldo});

contaCliente.saca(500);
console.log(Novo Saldo após saque: ${contaCliente.saldo});

contaCliente.atualiza(10);
console.log(Novo Saldo após atualização: ${contaCliente.saldo});

const poupancaCliente = new Poupanca("Maria", "987.654.321-00", "123456-7", 2000, "P12345");
console.log(Nome: ${poupancaCliente.nome()}, Saldo: ${poupancaCliente.saldo});

poupancaCliente.atualiza(20);
console.log(Novo Saldo da Poupança após atualização: ${poupancaCliente.saldo});