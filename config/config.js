const env = process.env.NODE_ENV || 'development '
const upperCasedEnv = env.toUpperCase()

if(env === 'development' || env === 'test') require('dotenv').config()

const username = process.env['DB_USERNAME_' + upperCasedEnv]
const password = process.env['DB_PASSWORD_' + upperCasedEnv]
const database = process.env['DB_DATABASE_' + upperCasedEnv]
const host = process.env['DB_HOST_' + upperCasedEnv]
const dialect = "postgres"

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect
  },
  test: {
    username,
    password,
    database,
    host,
    dialect
  },
  production: {
    "use_env_variable": "DATABASE_URL",
    "dialectOptions": {
      "ssl": {
        "rejectUnauthorized": false
      }
    }
  }
}
