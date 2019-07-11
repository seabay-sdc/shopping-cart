module.exports = {
  apps: [{
    name: 'seabay-cart',
    script: './server/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-17-4-97.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/seabay.pem',
      ref: 'origin/master',
      repo: 'git@github.com:baebay/shopping-cart.git',
      path: '/home/ubuntu/server/shopping-cart',
      'post-deploy': 'npm install && npx webpack && pm2 startOrRestart ecosystem.config.js'

    }
  }
}