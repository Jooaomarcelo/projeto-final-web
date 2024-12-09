# Repositório de repúblicas

## Autores: 
- [Diego](https://github.com/ValimD)
- [Henrique](https://github.com/HenriUz)
- [João Marcelo](https://github.com/Jooaomarcelo)
- [Murilo](https://github.com/gebra04)

## Sobre o projeto
Este projeto tem o objetivo de ser um repositório de repúblicas para Itajubá, permitindo que as repúblicas existentes na cidade possam se cadastrar e também cadastrar seu moradores.

Com isso, o projeto resolveria um problema existente atualmente, de muitos novos estudantes não conseguirem encontrar novas moradias facilmente, e por isso a importância do projeto é que ele serviria como uma ponte entre novos estudantes e as repúblicas existentes, já que eles teriam um site organizado para procurarem, ao invés de saírem caçando na internet. 

## Funcionalidades
As funcionalidades oferecidas pelo projeto são:

### Repúblicas (contas de usuários)
- **Cadastrar**: Permite o cadastro de novas repúblicas por meio da página de cadastro (signup).
- **Editar**: Permite que as repúblicas já cadastradas tenham seus dados editados.
- **Entrar**: Permite o usuário logar e deslogar de uma república.
- **Listar**: Permite que repúblicas com uma descrição sejam listadas.
- **Remover**: Permite que repúblicas já cadastradas sejam removidas pelo usuário (logado), com uma confirmação de senha.

### Moradores
- **Cadastrar**: Permite que as repúblicas cadastrem seus moradores.
- **Editar**: Permite que as repúblicas editem seus moradores.
- **Listar**: Permite que repúblicas logadas possam visualizar os moradores.
- **Remover**: Permite que as repúblicas removam seus moradores.

## Estrutura de pastas
    /src 
        /app            #Rotas da aplicação. 
        /components     #Componentes `.jsx` utilizados pelas rotas. 
            /template   #Templates padrões. 
        /data           #Simulação do banco de dados. 
        /hooks          #Auxiliares para verificação dos inputs, e busca em APIs externas. 
        /utils          #Aquirvos úteis, como CRUDs e verificação de credenciais.

## Tecnologias utilizadas
- **Next.js**: Framework React que oferece renderização no servidor e geração de páginas estáticas.
- **Tailwind.css**: Framework CSS que facilita o design responsivo e estilização rápida.
- **Yup**: Para validação de formulários.
- **Toast**
- **Bcryptjs**
- **Jose**: Biblioteca de autenticação de usuário.

## APIs utilizadas
- [Brasil API](https://brasilapi.com.br)

## Rodando localmente
Clone o repositório:
```bash
git clone https://github.com/Jooaomarcelo/projeto-final-web.git
```

Instale as dependências:
```bash
npm i --force
```
O `--force` se deve a versão atual do `Toast` e  `Axios`.

Inicialize o servidor:
```bash
npm run dev
```