# MERN Stack with Heroku CI/CD - Boilerplate Setup

Barebones boilerplate setup for a MERN application linked to a CI/CD pipeline on Heroku to plug-and-play for a new project.

## File Structure

+-- client<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- default.html<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- post.html<br/>
+-- server<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- 2007-10-29-why-every-programmer-should-play-nethack.textile<br/>
|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+-- 2009-04-26-barcamp-boston-4-roundup.textile<br/>
+-- .env (must be added manually, but not committed)<br/>
+-- .gitignore<br/>
+-- package.json (for server dependencies, but has script for deployment)<br/>
+-- yarn.lock<br/>

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

On the Heroku console, we can <b>specify environment variables</b> as `Config Vars` in the settings page.

Then, <b>add a pipeline</b> to enable CI/CD with staging and production.

Lastly, <b>enable review apps</b> for CI/CD on pull requests linked to a GitHub repo.
