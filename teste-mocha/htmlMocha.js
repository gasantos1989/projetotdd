const axios = require('axios');

module.exports = {
    async tag () {
      const dados = await axios.get("https://www.google.com/")
      return dados;
    }
};
