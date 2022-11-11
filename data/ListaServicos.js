import { Servico } from '../models/Servico';

const lista = [
  new Servico(1, 'Adicionar Entrega', 'Cria uma nova entrega'),
  new Servico(2, 'Excluir Entrega', 'Apaga uma entrega'),
  new Servico(3, 'Listar Entregas', 'Lista as entregas do usuário'),
]

export default lista;