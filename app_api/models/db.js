var mongoose = require( 'mongoose');
require("./mekansema");
var dbURI = 'mongodb://localhost/mekanbul';
//var dbURI = 'mongodb+srv://busra_1:busra_1@mekanbul-1.xmudo9o.mongodb.net/mekanbul-1?retryWrites=true&w=majority';
mongoose.connect(dbURI);

function kapat(msg,callback){
mongoose.connection.close(function(){
    console.log(msg);
    callback();
});
}
process.on("SIGINT", function () {
    kapat("uygulama kapatıldı", function(){
        process.exit(0);
    });
});


mongoose.connection.on("connected", function(){
    console.log(dbURI + "adresindeki veritabanına bağlanıldı\n");
});
mongoose.connection.on("error", function(){
    console.log("Baglantı hatası\n");
});
mongoose.connection.on("disconnected", function(){
    console.log("baglantı kesildi\n");
});