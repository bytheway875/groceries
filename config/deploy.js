module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'grocery',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
