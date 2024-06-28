const path = require('path')
module.exports = {

    // mode
    mode: 'production', // development
    // mode: 'development', // development

    // entry
    // multi entry: open up more zippers
    entry:[path.resolve(__dirname,'src/index.js'),path.resolve(__dirname,'src/index2.js')],

    // modules
    module:{
        rules:[
            // first rule
            {test:/\.css$/i, exclude:/node_modules/i,use:['style-loader','css-loader']}
        ]
    },

    // output/exit
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'main.bundle.js',
        clean:true
    }
}

// process

// we have stuff
// pack our backpack with stuff inside of big zipper (entry)

// throw backpack at client's face