module.exports = {
  apps: [
    {
      name: 'rest-postgres-api',
      script: 'src/server.ts',
	  interpreter: 'bun',
      watch: true,
	  instances: 'max',
      exec_mode: 'cluster',
      autorestart: true,
      env: {
        ENVIRONMENT: 'development'
      }
    }
  ]
};
