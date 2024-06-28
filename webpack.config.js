const path = require('path')
module.exports = {
    // mode
    // mode: "development", // production
    mode:'production',
    // entry
    // entry:{
    //     main:path.resolve(__dirname,'src/index.js') // medium 
    // },
    entry:[path.resolve(__dirname,'src/index.js'),path.resolve(__dirname,'src/index2.js')],






    // output
    output:{
        path:path.resolve(__dirname,'dist'), // exit point
        filename:"[name].bundle.js",
        clean:true
    }
}