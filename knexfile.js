const sharedConfig = {
    client: '', //I think this will be POSTGRES 
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done)
      },
    },
  }
  
  module.exports = {
    development: {
      ...sharedConfig,
      connection: { filename: './data/auth.db3' },  // change this DB name eventually
    },
    testing: {
      ...sharedConfig,
      connection: { filename: './data/testing.db3' },
    },
  }