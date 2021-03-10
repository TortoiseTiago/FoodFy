# FoodFy

## Docker

### Create container

`sh docker container run --name pgdb -p 5432:5432 -e POSTGRES_PASSWORD=112233 -d postgres:11 `

### Comandos

- para verificar quais containers estão instalados
  `sh docker container ls -a `

- para inicializar o container
  `sh docker container pgdb start`

- para desligar o container
  `sh docker container pgdb stop`

- para remover o container
  `sh docker container pgdb rm `

## Diagramação

- [Diagram.io](https://dbdiagram.io/)

## SQL

- [database.sql](./database.sql)

## Dependencias

- [Express](https://expressjs.com)
- [Postgres](https://node-postgres.com)
- [Intl](https://pub.dev/packages/intl)
- [Method Override](https://www.npmjs.com/package/method-override)
- [Nunjucks](https://www.npmjs.com/package/nunjucks)

## Dev dependencies

- [Nodemon](https://nodemon.io)
- [Browser Sync](https://browsersync.io/)
- [Npm run All](https://www.npmjs.com/package/npm-run-all)

## TODO

### Desafio 2: Construindo o FoodFy

- [Construindo o FoodFy](https://github.com/rocketseat-education/bootcamp-launchbase-desafios-02/blob/master/desafios/02-foodfy.md)

- [x] Neste desafio será construido um site completo para uma empresa de receitas chamada FoodFy

### Desafio 3: Refatorando o FoodFy

- [iniciando o Back-end](https://github.com/rocketseat-education/bootcamp-launchbase-desafios-03)

- [x] Primeiro servidor
- [x] Arquivos nunjucks e dados dinamicos
- [x] Pagina de descrição do curso
- [x] Refatorando FoodFy

### Desafio 4: Admin FoodFy

- [Administração do Foodfy](https://github.com/rocketseat-education/bootcamp-launchbase-desafios-04/blob/master/desafios/04-admin-foodfy.md)

- [x] Rotas do administrador
- [x] Detalhes da receita
- [x] Layout do painel administrador
- [x] Dados do projeto
- [x] Adicionar campo dinamico
- [x] Apresentação do site

### Desafio 5: Persistindo dados do FoodFy

-[Persistindo dados do FoodFy](https://github.com/rocketseat-education/bootcamp-launchbase-desafios-05/blob/master/desafios/05-persistindo-dados-foodfy.md)

- [x] Banco de dados
- [x] Cadastro de chefs
- [ ] Busca de receitas
- [ ] Lista de chefs

### Desafio 7: Upload de Imagens

- [Upload de Imagens](https://github.com/rocketseat-education/bootcamp-launchbase-desafios-07)

- [ ] Envio de imagens
