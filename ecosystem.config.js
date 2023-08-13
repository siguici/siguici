const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

const Env = dotenv.config();
dotenvExpand.expand(Env);

module.exports = {
  apps : [{
    name: 'sigui.ci',
    interpreter: 'deno',
    interpreter_args: 'run --allow-env --allow-net --allow-read',
    script: 'dist/server/entry.mjs',
    args: '',
    watch: true,
    autorestart: true,
    restart_delay: 1000,
    env: {
      NODE_ENV: 'production',
      ...process.env,
    },
    env_production: {
      NODE_ENV: 'production',
    },
    env_development: {
      NODE_ENV: 'development',
    },
  }],
};
