module.exports = {
  production: {
    username: 'BrunoRicardo',
    password: '#Gf13267747430',
    database: 'ProjetoIndividual',
    host: 'siteindividual.database.windows.net',
    dialect: 'mssql',
    xuse_env_variable: 'DATABASE_URL',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    pool: { 
      max: 5,
      min: 1,
      acquire: 5000,
      idle: 30000,
      connectTimeout: 5000
    }
  }
};
 
