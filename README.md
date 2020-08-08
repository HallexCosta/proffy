<h1 align="center">
  Projeto NLW #2 - Proffy
</h1>

<h2 align="center">
  UI - Proffy<br />
</h2>
<p align="center">
  Deploy <a href="https://proffy-by-hallex.netlify.app">here</a>
</p>

## Techologies

- [x] Node.js
- [x] React.js
- [x] TypeScript
- [x] ReactNative
- [x] Expo
- [ ] Styled Components

## Dependencies
- [x] Express
- [x] Axios
- [x] Knex
- [x] SQLite3

## More
### Brazilian
No projeto proffy desenvolvido no evento NLW #2, apredemos a criar migrations, e a manipular queries, complexas
do banco de dados como.

### English
In the proffy project developed at the NLW # 2 event, we learned how to create migrations, and how to handle complex queries
of the database as.

```js
  await db('classes')
  .whereExists(function () {
    this.select('class_schedule.*')
        .from('class_schedule')
        .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
        .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
        .whereRaw('`class_schedule`.`from` <= ??', [Number(timeInMinutes)])
        .whereRaw('`class_schedule`.`to` > ??', [Number(timeInMinutes)])
  })
  .where('classes.subject', '=', subject)
  .join('users', 'classes.user_id', '=', 'users.id')
  .select(['classes.*', 'users.*'])
```

## Usage

1. Go to folder `server` and run `yarn install` or `npm install`.<br />
2. Go to folder `web` (for run mobile app) or `mobile` (for run mobile app).<br />
3. Run `yarn start` or `npm start` and access `http://localhost:3000` (if run web app) or `Expo Client` (if run mobile app).<br />
