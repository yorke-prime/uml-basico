export class UmaClasse {
  constructor(
    private nome: string,
    private sobrenome: string,
    protected idade: number,
  ) {}

  public getNome(): string {
    return this.nome;
  }

  public getIdade() {
    return this.idade;
  }

  public setNome(nome: string): void {
    this.nome = nome;
  }

  public setIdade(idade: number): void {
    this.idade = idade;
  }
}