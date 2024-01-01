const axios = require("axios");
const dotenv = require('dotenv');
const { SuccessResponse, ErrorResponse } = require("../response/Response");

dotenv.config();


//get top 100 crypto currency
const getCurrency = async (req, res) => {
  try {
    const params = {
        vs_currency: "usd"
    }
    const responseData = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets", {params:params});


    if(responseData.status === 200){
        return SuccessResponse(responseData.status, "Successfully Fetched", res);
    }

    else{
        const error = new Error("Data not found!")
        return ErrorResponse(error.name, error.message, res);
    }

  } catch(e) {

    console.log(e);

  }
};


//get the exchange rate
const getExchangeRate = async (req, res)=>{
    const {vs_currency, id} = req.body;
    try{
        const responseData = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=${vs_currency}`);

        const value = responseData.data[id]
        
        if(responseData.status === 200 && Object.keys(value).length > 0){
            return SuccessResponse(responseData.data, "Success", res);
        }
        else{
            const error = new Error("Data not found!")
            return ErrorResponse(error.name, error.message, res);
        }
    }
    catch(e){
            const error = new Error("Data not found!")
            return ErrorResponse(e.name, error.message, res);
    }
}

module.exports = {
  getCurrency,
  getExchangeRate
};
