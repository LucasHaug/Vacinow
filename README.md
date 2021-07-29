[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Vacinow/Frontend/Release?style=for-the-badge)

# Frontend

## 🌐 Aplicação remota

Para acessar a aplicação rodando em ambiente de produção no servidor EC2 da Amazon, acesse o link: https://vacinow.tk/.

## 🏁 Rodando o projeto

Para rodar o projeto é necessário ter docker e docker-compose instalados.

Então, para rodar a aplicação de frontend, é necessário executar na raiz do projeto o seguinte comando:


```bash
docker-compose up --build
```

A aplicação então se comunica com a API do [Backend](https://github.com/Vacinow/Backend), disponível em https://api.vacinow.tk/. Caso se deseje rodar também o backend localmente, é necessário seguir os passos descritos no [README do Backend](https://github.com/Vacinow/Backend/blob/main/README.md) e também se alterar no frontend a URL do backend (no arquivo `config.js` dentro da pasta `src`), apontando para a URL na qual se iniciou a aplicação.

## 📝 Documentação

O diagrama da arquitetura da aplicação inteira pode ser vista a seguir:

![Arquitetura](./assets/arquitetura.png)

Por fim, o diagrama de classe do projeto do frontend ficou como segue:

![Diagrama de classe do projeto](./assets/diagrama_de_classes.png)