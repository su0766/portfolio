const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10; // make 10 len of salts
const jwt = require('jsonwebtoken'); // synchronous sign

const reportSchema = mongoose.Schema({
    reportId: {
        type: String,
        required : true,
        maxlength: 50
    },
    reportName: {
        type: String,
        required : true,
        maxlength: 50
    },
    score: {
        type: int,
        required : true
    },
    description: {
        type: String
    }
})

reportSchema.index({ 
    reportId: 0, 
    reportName: 'Technology', 
    score: '99',
    description: 'Technology Sector experienced contraction in Gross Profit by -10.03 % and Revenue by -9.76 %, while Gross Margin fell to 94.64 %, higher than Sectors average Gross Margin. On the trailing twelve months basis gross margin in 3 Q 2020 grew to 94.47 %.' });



const Report = mongoose.model('Report', reportSchema);
module.exports = { Report }
