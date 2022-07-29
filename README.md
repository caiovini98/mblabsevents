# MB Labs Events

Olá, este é um projeto chamado MB Labs Events, na qual um usuário é capaz de buscar e adquirir um ou mais ingresso(s) para um determinado evento/festa de uma empresa qualquer.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[git](https://git-scm.com) e [node.js](https://nodejs.org/en/).
Também, vai precisar de um editor para trabalhar com o código, recomendo o [VS Code](https://code.visualstudio.com/).

### Rodando o projeto

```bash
# Clone este repositório (ou download )
$ git clone <link>

# Acesse a pasta do projeto no terminal/cmd
$ cd mblabsevents

# Abra a pasta no editor de codigo (VS Code ou outro de sua preferência).

# Instale as dependências
$ npm install

# Após a instalação, execute o comando para rodar a aplicação
$ npm run android

# O servidor inciará ou no seu dispositivo ou em algum emulador de sua preferência.
# Para rodar o aplicativo em seu dispositivo, primeiro conecte seu dispositivo via USB.

# Após conectado via USB, habilite a depuração USB, e, para isso, abra as Configurações do seu dispositivo.
# Dentro das configurações vá no Menu Sistema -> Sobre -> Informações de Software.
# Na tela que foi aberta clique repetidamente sobre o Número da Versão até aparecer uma mensagem indicando que as opções de desenvolvedor foram ativadas.

# Feito isso volte até o Menu Sistema para ativar a depuração. Procure pela opção Opções de desenvolvedor, que agora deve aparecer na sua lista.
# Nesse Menu, ative-o selecionando o primeiro botão que deve estar como Desativado e depois ative a Depuração USB, logo mais abaixo dessa lista.

# Para verificar se o dispositivo está conectado corretamente, abra o CMD e rode o comando abaixo
$ adb devices

# Caso apareça "device" do lado do ID de seu dispositivo, este já está conectado e pronto para instalar o aplicativo.
$ 14ed2fcc device (exemplo)
```

### 🛠 Tecnologias utilizadas

As seguintes ferramentas foram usadas na construção do projeto:

- [React Native](https://reactnative.dev/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [TypeScript](https://www.typescriptlang.org/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Styled Components](https://styled-components.com/)
