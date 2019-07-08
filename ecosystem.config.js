module.exports = {
  apps: [{
    name: 'seabay',
    script: './server/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-18-188-235-148.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/seabay.pem',
      ref: 'origin/master',
      repo: 'git@github.com:baebay/shopping-cart.git',
      path: '/home/ubuntu/server/shopping-cart',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'

    }
  }
}