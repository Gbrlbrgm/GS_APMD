import { createContext, useState } from 'react';
import { Entrega } from '../models/Entrega';

export const EntregasContext = createContext([]);

export default function EntregasProvider({ children }) {
  const [entregas, setEntregas] = useState([]);

  function adicionarEntrega(data) {
    const { nome, prazoEntrega } = data;
    let novaLista = entregas;
    const codigoAleatorio = Math.floor(100000 + Math.random() * 900000);
    novaLista.push(new Entrega(codigoAleatorio, nome, prazoEntrega));
    setEntregas(novaLista);
    alert(`Entrega adicionada. ID: ${randomTrackingNumber}.`);
  }

  function excluirEntrega(codigoRastreio) {
    let novaLista = entregas.filter((item) => item.codigoRastreio !== parseInt(codigoRastreio));
    if (novaLista.length !== entregas.length) {
      setEntregas(novaLista);
      alert(`Entrega "${codigoRastreio}" excluida.`);
    } else {
      alert(`Nenhuma entrega encontrada. Tente outra vez.`);
    }
  }

  return <EntregasContext.Provider value={{ entregas, adicionarEntrega, excluirEntrega }}>{children}</EntregasContext.Provider>;
}
