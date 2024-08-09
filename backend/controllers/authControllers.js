const adminModel = require('../models/adminModel')
const { responseReture } = require('../utilities/response')
const bcrypty = require('bcrypt')

class authControllers{
    admin_login = async(req,res) => {
        //console.log(req.body)
        const {email,password} = req.body
        try {
            const admin = await adminModel.findOne({email}).select('+password')
            //console.log(admin)

            if (admin) {
                const match = await bcrypty.compare(password, admin.password)
                console.log(match)

            } else {
                responseReture(res,404,{error: "Email not found"})
            }

        } catch (error) {
            responseReture(res,500,{error: error.message})
        }

    }
}

module.exports = new authControllers()