import { useNavigation } from '@react-navigation/native';
import Adicionar from './Opcoes/Adicionar';
import Excluir from './Opcoes/Excluir';
import Listar from './Opcoes/Listar';
import Default from './Opcoes/Default';

export default function Opcoes() {
  const navigation = useNavigation();
  const opcaoEscolhida = navigation.getState().routes[1].params;

  switch (opcaoEscolhida.id) {
    case 1:
      return Adicionar(opcaoEscolhida);
    case 2:
      return Excluir(opcaoEscolhida);
    case 3:
      return Listar(opcaoEscolhida);
    default:
      return Default(opcaoEscolhida);
  }
}
