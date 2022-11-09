export class Servico {
    id: Number;
    titulo: String;
    descricao: String;
  
    constructor(id: Number, titulo: String, descricao: String) {
      this.id = id;
      this.titulo = titulo;
      this.descricao = descricao;
    }
  }