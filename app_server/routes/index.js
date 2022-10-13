var express=require('express');
var router=express.Router();
//mekanlar.js yolu 
var ctrlMekanlar=require('../controllers/mekanlar');
//digerleri.js yolu
var ctrlDigerleri=require('../controllers/digerleri');
//Anasayfa rotası
router.get('/', ctrlMekanlar.anaSayfa) ; //{
   
//res.render('index',{title :'Express'});
//Mekan bilgisi rotası
router.get('/mekan', ctrlMekanlar.mekanBilgisi) ;
//yeni yorum rotası
router.get('/mekan/yorum/yeni', ctrlMekanlar.yorumEkle) ;
//hakkında rotası
router.get('/hakkinda', ctrlDigerleri.hakkinda) ;
//});

module.exports = router;
