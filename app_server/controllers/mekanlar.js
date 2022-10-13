//var express = require('express');
//var router = express.Router();

//anaSayfa controller metodu 
// index.js dosyasındaki router.get('/',ctrlMekanlar.anaSayfa);
//ile metot url'ye bağlanıyor
const anaSayfa= function(req,res) { 
  res.render('anasayfa',{'title':'Anasayfa'});
}
//module.exports=router;

//mekanBilgisi controller metodu
//index.js dosyasındaki router.get('/',ctrlMekanlar.mekanBilgisi);
//ile metot urly'ye bağlanıyor 
const mekanBilgisi= function(req,res){
  res.render('mekanbilgisi',{'title':'Mekan Bilgisi'});
}
//module.exports=router;

//yorumEkle controller metodu 
//index.js dosyasındaki router.get('/',ctrlMekanlar.yorumEkle);
//ile metot url^ye bağlanıyor 
const yorumEkle= function(req,res){
  res.render('yorumekle',{'title':'Yorum Sayfası'});
}
//module.exports=router;

//metotları kullanmak üzere dış dünyaya aç
//diğer dosyalardan require ile alabilmemizi sağlayacak
module.exports = {
   anaSayfa,
   mekanBilgisi,
   yorumEkle
};