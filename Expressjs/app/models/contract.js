// app/models/contract.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ContractSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    detail: Object,
    created: String
});

module.exports = mongoose.model('contract', ContractSchema);