module.exports = {
  apps : [{
    name: 'sigui.ci',
    interpreter: 'deno',
    interpreter_args: 'run --allow-env --allow-net --allow-read',
    script: 'server/entry.deno.js',
    args: '',
    watch: true,
    autorestart: true,
    restart_delay: 1000,
    env: {
      NODE_ENV: 'production',
    },
    env_production: {
      NODE_ENV: 'production',
    },
    env_development: {
      NODE_ENV: 'development',
    },
  }],
};
