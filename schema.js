const mongoose = require("mongoose");

const restoschema = new.schema({
    name:{
        type:'string',
        require:'true'
    },
    location:{
        type:'string',
        require:'true'
    }
});
const menuschema = new.schema({
    dish:{
        type:'string',
        require:'true'
    },
    cost:{
        type:'string',
        require:'true'
    }
});

module.exports = mongoose.model(restoschema,menuschema);
