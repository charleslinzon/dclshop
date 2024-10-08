const jwt = require('jsonwebtoken');

module.exports.authMiddleware = async(req,res,next) => {
    const {accessToken} = req.cookies;

    if (!accessTOken) {
        return res.status(409).json({ error : 'Please Login First' })
    } else {
        
        try {
            const deDodeToken = await jwt.verify(accessToken,process.env.SECRET)
            req.role = deDodeToken.role
            req.id =deDodeToken.id
            next()
        } catch (error) {
            return res.status(409).json({ error : 'Please Login' })
        }

    }
}