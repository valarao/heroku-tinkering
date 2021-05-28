# MERN Stack with Heroku CI/CD - Boilerplate Setup

Barebones boilerplate setup for a MERN application linked to a CI/CD pipeline on Heroku to plug-and-play for a new project.

## File Structure

<b>+-- client<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- public<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- src<br/></b>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- build (gitignored)<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- node_modules (gitignored)<br/>
<b>|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- .gitignore (client)<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- package.json (client)<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- yarn.lock (client)<br/>
+-- server<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- api<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- models<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- database.js<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- index.js<br/></b>
+-- node_modules (gitignored)<br/>
+-- .env (gitignored - must add variables to use)<br/>
<b>+-- .gitignore (server)<br/>
+-- package.json (server + deployment)<br/>
+-- yarn.lock (server)<br/></b>

## Client

With Node installed, we can setup the client:
```
create-react-app client
```

Inside the client folder, we can install `axios` for sending HTTP requests
```
yarn add axios
```

For local development, we can add a proxy by adding this to the client `package.json`
```
"proxy": "http://localhost:5000"
```

## Server

Standard Node.js + Express backend uses needs these dependencies installed:
```
yarn add express cors
```

- `express`: Web application framework that provides a robust set of features for web and mobile applications
- `cors`: middleware that can be used to enable CORS (Cross-Origin Resource Sharing)

Boilerplate server handles two basic endpoints:
- POST `/api/users`: Add a user to the database given a name and an email
- GET `/api/users`: Retrieve all users in the database

In the root folder, `package.json` includes the script 
```
"start": "node server/index.js"
```

## Database

Using MongoDB, these dependencies must be installed:
```
yarn add dotenv mongoose
```

- `dotenv`: Zero-dependency module that loads environment variables from a .env file into process.env
- `mongoose`: Elegant MongoDB object modeling for Node.js 

Boilerplate database setup relies on a `User` model, composed of required strings: `name` and `email` 

Set a <b>database connection environment variable</b> in the `.env` file as `MONGODB_CONNECTION`
```
mongodb+srv://username:<password>@<cluster>/<database>?retryWrites=true&w=majority
```

## Deployment

Heroku needs the client to be built using a specific <b>post-build script</b> name in the root `package.json`
```
"heroku-postbuild": "cd client && npm install && npm run build"
```

If applicable, <b>[sign up](https://signup.heroku.com/)</b> for a new account

Using the [Heroku CLI](dashboard.heroku.com), we can <b>login and initialize</b> the application on Heroku

```
heroku login
heroku create <app-name>
git push heroku HEAD:master
```

On the Heroku console, <b>add a pipeline</b> to enable CI/CD with staging and production

![image](https://user-images.githubusercontent.com/25139382/119915463-6f74a300-bf17-11eb-9fe3-e58fdbf5db98.png)

Then, <b>enable review apps</b> for CI/CD on pull requests linked to a GitHub repo

![image](https://user-images.githubusercontent.com/25139382/119915522-8915ea80-bf17-11eb-8639-586c9f39b82e.png)

Lastly, we can <b>specify environment variables</b> as `Config Vars` in the settings page (Staging, production, and review apps all need `Config Vars` setup)

![image](https://user-images.githubusercontent.com/25139382/119913754-8f09cc80-bf13-11eb-9d28-45d6b6ea3af8.png)

## Pipeline Deployments

- Pull Request: https://heroku-tinke-exhibition-yk7val.herokuapp.com/
- Staging: https://heroku-tinkering-staging.herokuapp.com/
- Production: https://heroku-tinkering.herokuapp.com/
