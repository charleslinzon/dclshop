const {Schema, model} = require("mongoose");

const sellerSchema = new Schema({
    name : {
        type: String, 
        required : true
    },
    email : {
        type: String, 
        required : true
    },
    password : {
        type: String, 
        required : true,
        select : false
    },
    role : {
        type: String, 
        default : 'seller'
    },
    status : {
        type: String, 
        default : 'pending'
    },
    payment : {
        type: String, 
        deafult : 'inactive'
    },
    method : {
        type: String, 
        required : true
    },
    image : {
        type: String, 
        deafult : ''
    },
    shopInfo : {
        type: Object, 
        deafult : {}
    }
},{ timestamps: true })

module.exports = model('sellers', sellerSchema)
