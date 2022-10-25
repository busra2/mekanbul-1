var express = require('express');
var router = express.Router();



   const anaSayfa=function(req, res, next) {
     res.render('anasayfa', {
       "baslık": 'Anasayfa',
       "sayfaBaslik":{
         "siteAd":"MekanBul",
         "slogan":"Civardaki Mekanları Keşfet!!"
       },
       "mekanlar":[
         {
           "ad": "Starbucks",
           "adres":"Centrum Garden AVM",
           "puan":"4",
           "imkanlar": ["Dünya Kahveleri", "Kekler", "Pastalar"],
           "mesafe":"10km"
         }
         ,
         {
           "ad": "Barida Cafe",
           "adres": "SDÜ Batı Kampüsü",
           "puan": "3",
           "imkanlar": ["kahve", "çay", "Pasta"],
           "mesafe": "5km"
         }
      ]
    }
    );
   }

   const mekanBilgisi= function(req, res) {
     res.render('mekanbilgisi',
       { 
         "baslik": "Mekan Bilgisi",
         "mekanBaslik": "Starbucks",
         "mekanDetay": {
           "ad": "Starbucks",
           "adres":"Centrum Garden AVM",
           "puan":"4",
           "imkanlar": ["Dünya Kahveleri", "kekler", "Pastalar"],
           "koordinatlar": {
             "enlem": "37.7",
             "boylam": "30.5"
           },
           "saatler": [
             {
               "gunler":"Pazartesi-Cuma",
               "acilis": "9:00",
               "kapanis": "23.00",
               "kapali": false
             },
             {
               "gunler": "Cumartesi-Pazar",
               "acilis": "10:0",
               "kapanis": "22.00",
               "kapali": false
             }
            ],
            "yorumlar": [
              {
                "yorumYapan":"Büşra Bakkal ",
                "puan": "4",
                "tarih": "20 Ekim",
                "yorumMetni": "kahveler iyi"
              }
             ]
           }
         });
   }

   const yorumEkle=function(req, res, next) {
    res.render('yorumekle', { title: 'Yorum Ekle' });
   }


   
   module.exports = {
    anaSayfa,
    mekanBilgisi,
    yorumEkle
   }