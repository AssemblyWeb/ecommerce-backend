let errorHandler = (error, _req, res, _next) => {
    console.log(error)
    res.status(500).json({
        response: 'error',
        success: false,
        error: error.message
    })
}

export default errorHandler