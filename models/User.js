const mongoose = require("./../db/connection");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    budget: Number,
    wishlistItems: [{ type: Schema.Types.ObjectId, ref: "Item" }],
    wardrobeItems : [{ type: Schema.Types.ObjectId, ref: "Item" }],
    archiveItems : [{ type: Schema.Types.ObjectId, ref: "Item" }],
});

module.exports = mongoose.model("User", userSchema);