
const mongoose = require('mongoose');


const PetSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: (true, "Dude, your pet just gots to have a name"),
        // unique: {true: "This guy is in there already!"},
        minlength: [3, "Name gotta be longer than that bro."]
     },
    petType: { 
        type: String,
        required: (true, "Yo, what are you telling me? Is your pet just air?"),
        minlength: [3, "What the heck is this thing bro?"]
     },
     petDesc: {
         type: String,
         required: (true, "Nobody gonna wanna adopt you dont say som'en."),
         minlength: [3, "Bro, say something real."]
     },
     skillOne: {
         type: String
     },
     skillTwo: {
         type: String
     },
     skillThree: {
         type: String
     },
     likes: {
         type: Number
     }
}, { timestamps: true });

module.exports.Pet = mongoose.model('Pet', PetSchema);