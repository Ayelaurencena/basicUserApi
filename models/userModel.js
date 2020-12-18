const moongose = require('mongoose');
const userSchema = mongoose.Schema(
    {
        name : {
            type: String,
            required: true
        }
);

module.exports = mongoose.model("User", userSchema);