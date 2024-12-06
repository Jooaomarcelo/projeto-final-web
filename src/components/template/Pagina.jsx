import Cabecalho from './Cabecalho';
import Rodape from './Rodape';

export default function Pagina({ children }) {
  return (
    <div className="flex flex-col flex-1 min-h-screen">
      <Cabecalho />
      <main className="flex flex-col flex-1">{children}</main>
      <Rodape />
    </div>
  );
}
