import './globals.css';

export const metadata = {
  title: 'Projeto Final de Web',
  description:
    'Repositório de repúblicas para estudantes como projeto final de Web',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt_BR">
      <body>{children}</body>
    </html>
  );
}
