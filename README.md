# Repositório de repúblicas

## Autores: 
- [Diego](https://github.com/ValimD)
- [Henrique](https://github.com/HenriUz)
- [João Marcelo](https://github.com/Jooaomarcelo)
- [Murilo](https://github.com/gebra04)

## Sobre o projeto
O projeto surgiu com a dificuldade de repúblicas de estudantes de manterem sua tradição, encontrando novos moradores para a casa. Seu objetivo é ser um repositório de repúblicas para Itajubá, permitindo que as repúblicas existentes na cidade possam se cadastrar e também cadastrar seus moradores, além disso, é possível adicionar informações adicionais à conta da república para atender ao interesses de quem procura uma nova casa.

Com isso, o projeto resolveria um problema existente atualmente, de muitos novos estudantes não conseguirem encontrar novas moradias facilmente, e isso é importante pois serviria como uma ponte entre novos estudantes e as repúblicas existentes, já que eles teriam um site organizado para procurarem, onde teoricamente, teriam uma coleção com todas as repúblicas da cidade em um só lugar, já contendo informações como preço médio, número de moradores, entre outras informações, ao invés de saírem procurando na internet. 

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
- **Next.js - 15.0.3**: Framework React que combina renderização no servidor (SSR) e geração de páginas estáticas (SSG), otimizando desempenho e SEO.
- **React - 19.0.0**: Biblioteca JavaScript utilizada para construir interfaces de usuário dinâmicas e reutilizáveis.
- **React DOM - 19.0.0**: Biblioteca complementar ao React para manipular o DOM virtual e renderizar componentes.
- **Axios - 1.7.9**: Biblioteca para realizar requisições HTTP, usada para comunicação com APIs externas.
- **Bcrypt.js - 2.4.3**: Ferramenta para hashing de senhas, adicionando segurança ao sistema de autenticação.
- **Jose - 5.9.6**: Biblioteca para manipulação de JSON Web Tokens (JWT) e outras operações relacionadas à autenticação e autorização.
- **Jsonwebtoken - 9.0.2**: Outra biblioteca para criação e validação de JWTs, auxiliando na autenticação segura.
- **React Hot Toast - 2.4.1**: Biblioteca para exibição de notificações de sucesso, erro ou mensagens gerais.
- **Swiper - 11.1.14**: Biblioteca moderna para criação de carrosséis e sliders responsivos.
- **Yup - 1.4.0**: Ferramenta para validação de dados de formulários de maneira eficiente e declarativa.

### Ferramentas de estilização e build
- **Tailwind CSS - 3.4.14**: Framework CSS utilitário que permite construir interfaces estilizadas de maneira rápida e responsiva.
- **PostCSS - 8.4.49**: Ferramenta para processamento de CSS, permitindo integração com Tailwind e outras otimizações.

### Ferramentas de qualidade de código
- **ESLint - 8.57.1**: Ferramenta para análise de código estático, garantindo consistência e qualidade no desenvolvimento.
- **Prettier - 3.4.1**: Ferramenta para formatação automática de código, melhorando a legibilidade e padronização.

## APIs utilizadas
- [Brasil API](https://brasilapi.com.br): API que pega o CEP e devolve informações do endereço correspondente (usada para autopreencher campos em editar república).
- [DiceBear](https://www.dicebear.com): API que gera as imagens dos moradores.

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