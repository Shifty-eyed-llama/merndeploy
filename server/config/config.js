
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/mernbeltdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("We got us some server there guy."))
    .catch(err => console.log("Yo, something is wack, aint no server here", err));