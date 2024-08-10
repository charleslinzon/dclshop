const adminModel = require('../models/adminModel')
const { responseReture } = require('../utilities/response')
const bcrypty = require('bcrypt')
const { createToken } = require('../utilities/tokenCreate')

class authControllers{
    admin_login = async(req,res) => {
        //console.log(req.body)
        const {email,password} = req.body
        try {
            const admin = await adminModel.findOne({email}).select('+password')
            //console.log(admin)

            if (admin) {
                const match = await bcrypty.compare(password, admin.password)
                //console.log(match)
                if (match) {
                    const token = await createToken({
                        id : admin.id,
                        role : admin.role
                    })
                    res.cookie('accessToken',token,{
                        expires : new Date(Date.now() + 7*24*60*60*1000) })
                        responseReture(res,200,{token, message: "Login Success"})
                } else {
                    responseReture(res,404,{error: "Password not correct"})
                }

            } else {
                responseReture(res,404,{error: "Email not found"})
            }

        } catch (error) {
            responseReture(res,500,{error: error.message})
        }

    }
}

module.exports = new authControllers()