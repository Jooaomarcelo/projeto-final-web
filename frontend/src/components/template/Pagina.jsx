import Cabecalho from './Cabecalho';

export default function Pagina({ children }) {
  return (
    <div className="flex flex-col flex-1 h-screen">
      <Cabecalho />
      <main className="flex flex-col flex-1 mt-16">{children}</main>
    </div>
  );
}
