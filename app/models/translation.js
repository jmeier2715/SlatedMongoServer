const mongoose = require('mongoose')

const translationSchema = new mongoose.Schema(
    {
        rootText:{
            type: String,
            required: true,
        },
        rootLanguage:{
            type: String,
            required: true,
        },
        targetText:{
            type: String,
            required: true,
        },
        targetLanguage:{
            type: String,
            required: true,
        },
        owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Collection'
		},

    },
        {
            timestamps: true,
        }
)

module.exports = mongoose.model('Translation', translationSchema)