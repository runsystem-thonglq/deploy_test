module.exports = {
  apps: [
    {
      script: "npm run dev",
    },
  ],

  deploy: {
    production: {
      // key: "key.pem",
      // user: "ubuntu",
      host: "localhost",
      ref: "origin/main",
      repo: "https://github.com/runsystem-thonglq/deploy_test",
      path: "C:/Users/thonglq/SERVE",
      "pre-deploy-local": "",
      "post-deploy":
        "npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
  },
};
