
const SuccessResponse = (data, message, res)=>{

    res.send({data: data, status:200, message:message});

}

const ErrorResponse = (name, message, res)=>{
    
    res.send({name: name, status:400, message:message});

}

module.exports = {SuccessResponse, ErrorResponse}