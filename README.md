# Starrymusic

Site réalisé par des fans de Starrysky pour regrouper leurs musiques avec leurs paroles.

## Exécuter localement

```shell
# installer les dépendances
npm i

# mettre en place la bdd, voir ci-dessous dans le README

# exécuter le serveur de dev
npm run dev
```

### Base de données

Ce site est rendu côté serveur (SSR).

On se sert d'une base de données Postgres pour agglomérer les informations concernant Starrysky : leurs musiques, leurs albums, etc.

Le dump de la base de données est disponible ici : `/starrysky-data.sql`.

J'utilise postgres@16.


## Participer

- Via GitHub
  - Vous pouvez [créer une `issue`](https://github.com/dimitri-bourreau/starrymusic/issues/new).
  - Vous pouvez proposer une PR pointant sur `main`. 
    - Aucune PR modifiant la BDD sera acceptée (peut être qu'une interface admin sera disponible au futur).
- Sans GitHub
  - Vous pouvez me contacter à `dimitri@release-dev.com`.
