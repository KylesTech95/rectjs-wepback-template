module.exports = function htmlConfig() {
    // return html template config
    return{
        title: "New Webpack App",
        template: "template/template.html",
        html:{
            sections: ["about","content","contact"].map(x=>x.toUpperCase())
        },
        filename:"index.html"
    }
}