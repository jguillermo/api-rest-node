'use strict';
require("module-alias/register");

const module_1 = require("@app/module");
module.exports.hello = async (event, context) => {

  let service = module_1.USER.userServiceApp();


  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: service.findById("365d624e-8bd9-4644-86f8-ee6b98dfd036")
    }),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
