const globalError = (err, req, res, next) => {
    //default
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
  
    res.status(err.statusCode).json({
    //error in details 
      status: err.status,
      error: err,
      message: err.message,
    });
  };
  
  module.exports = globalError;
  