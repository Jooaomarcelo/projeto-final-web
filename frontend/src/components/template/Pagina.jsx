import Cabecalho from './Cabecalho';

export default function Pagina({ children }) {
  return (
    <div>
      <Cabecalho />
      <main>{children}</main>
    </div>
  );
}
