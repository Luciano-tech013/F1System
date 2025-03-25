export const errorHandler = (error, req, res, next) => {
    res.status(error.getStatus()).json({ 
        msg: error.getMsg() 
    })
}