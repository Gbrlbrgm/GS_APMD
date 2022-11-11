export class Entrega {
  codigoRastreio: Number;
  nome: String;
  prazoEntrega: String;

  constructor(codigoRastreio: Number, nome: String, prazoEntrega: String) {
    this.codigoRastreio = codigoRastreio;
    this.nome = nome;
    this.prazoEntrega = prazoEntrega;
  }
}