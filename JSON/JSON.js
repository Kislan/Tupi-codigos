const pessoa = {
	nome: "João",
	idade: 30,
	profissao: "Desenvolvedor",
	saudacao: function() {
		return `Olá, meu nome é ${this.nome}, Idade: ${this.idade}, Profissão: ${this.profissao}`;
	}
};

console.log(pessoa)
console.log(pessoa.saudacao)