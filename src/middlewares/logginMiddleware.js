const logginMiddleware = (req, _, next) => {
    const admin = req.body.admin || true
    if (!admin) throw new Error
    return next()
}

module.exports = logginMiddleware