var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
  name: {type: String, required: true},
  items: [{type: Schema.Types.ObjectId, ref: 'Item'}],
}, {timestamps:true})

mongoose.model('User', UserSchema);

var ItemSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    _tag: {type: Schema.Types.ObjectId, ref: 'User'},
}, {timestamps: true});

mongoose.model('Item', ItemSchema);
