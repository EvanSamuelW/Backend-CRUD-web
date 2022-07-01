
## Installation

```bash
$ npm install
```

- Import SQL Database
- Configure Database at app.module.ts. Configuration can be seen below

```bash
 TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      database: 'adminpanel',
      password: '',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User,Faculty,Student])
  ],
```

## Run
```bash
$ npm start
```

## Login

Login using account below.
```bash
username:evanwiyendra
password:123456
```

or create new account with API route below using POST
```bash
URL/users
```
