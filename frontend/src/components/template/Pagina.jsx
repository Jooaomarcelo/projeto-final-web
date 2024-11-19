import Cabecalho from './Cabecalho';
import Rodape from './Rodape';

export default function Pagina({ children }) {
  return (
    <div className="flex flex-col flex-1 h-full">
      <Cabecalho />
      <main className="flex flex-col flex-1 mt-16">{children}</main>
      <Rodape />
    </div>
  );
}
