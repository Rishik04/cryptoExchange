const axios = require("axios");
const dotenv = require('dotenv');

dotenv.config();


//get top 100 crypto currency
const getCurrency = async (req, res) => {
  try {
    const params = {
        vs_currency: "usd"
    }
    const responseData = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets", {params:params});

      console.log(responseData.data)

    res.send({data: responseData.data, status: 200})

  } catch(e) {

    console.log(e);

  }
};


//get the exchange rate
const getExchangeRate = async (req, res)=>{
    const {vs_currency, id} = req.body;
    try{
        const responseData = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${vs_currency}`);

        res.send({data: responseData.data, status: 200});
    }
    catch(e){

    }
}

module.exports = {
  getCurrency,
  getExchangeRate
};
