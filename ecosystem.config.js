module.exports = {
  apps: [
    {
      name: "my-app", // Add a name for the app
      script: "npm",
      args: "run dev", // Use start instead of dev for production
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
        "npm install && npm run build && pm2 reload ecosystem.config.js ",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
  },
};
