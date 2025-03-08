const mongoose = require("mongoose")

async function connect() {
 await mongoose.connect("mongodb+srv://mishrarohit27112005:t0fBLI67XPfmcQrQ@linkdincluster.v2gso.mongodb.net/linkdin") // Aways set asysc await because db give us a ppromise
   
}
module.exports=connect


