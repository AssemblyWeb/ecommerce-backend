const loginMiddleware = (req, _, next) => {
    const admin = req.body.admin || true
    if (!admin) throw new Error
    return next()
}

export default loginMiddleware