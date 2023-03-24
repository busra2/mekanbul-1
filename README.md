# Mekanbul Uygulaması

>Mekanbul insanların konumları civarındaki mekanları, sunduğu imkanları görmelerini, mekanlara yorum yapabilmelerini sağlayan bir web uygulamadır. Uygulamanın aynı zamanda bir admin paneli mevcuttur. Admin mekan ekleme, silme, güncelleme, tüm mekanları görme gibi işlemleri yapabilmektedir.


# Uygulama Özellikleri

>- **Normal Kullanıcı:** Konuma göre mekan listeleme, mekan detaylarını görebilme
>- **Kayıtlı Kullanıcı:** Mekana yorum yapabilme, profil görüntüleme, profil güncelleme, şifre yenileme
>- **Admin:** Tüm mekanları listeleme, mekan ekleme, mekan silme, mekan güncelleme


# API Metotları

>Tüm koleksiyon API Koleksiyonu.json dosyasında yer almaktadır. Thunder Client aracılığı ile import edilebilir.
>- **Mekan Ekleme:** POST "/api/mekanlar". Mekan bilgileri girilmeli. Mekan Bilgileri: ad,adres, imkanlar, enlem, boylam, gunler1, acilis1, kapanis1, kapali1, gunler2, acilis2, kapanis2, kapali2.
>- **Konuma Göre Mekan Listeleme:** GET "/api/mekanlar?enlem=37&boylam=35". Enlem ve boylam sorgu parametresi olarak verilmeli.
Tüm Mekanları Listeleme: GET "/api/admin". Auth.Bearer Token Girilmeli.
>- **Mekan Getir:** GET "/api/mekanlar/:mekanid".
>- **Mekan Güncelle:** PUT "/api/mekanlar/:mekanid". Auth.Bearer Token Girilmeli. Mekan bilgileri girilmeli. Mekan Bilgileri: ad,adres, imkanlar, enlem, boylam, gunler1, acilis1, kapanis1, kapali1, gunler2, acilis2, kapanis2, kapali2.
>- **Mekan Sil:** DELETE "/api/mekanlar/:mekanid". Auth.Bearer Token Girilmeli.
>- **Yorum Getir:** GET "/api/mekanlar/:mekanid/yorumlar/:yorumid".
>- **Yorum Ekle:** POST "/api/mekanlar/:mekanid/yorumlar". Auth.Bearer Token Girilmeli. Yorum bilgileri girilmeli. Yorum Bilgileri: yorumMetni, puan
>- **Yorum Güncelle:** PUT "/api/mekanlar/mekanid/yorumlar/:yorumid". Auth.Bearer Token Girilmeli. Yorum bilgileri girilmeli. Yorum Bilgileri: yorumMetni, puan
>- **Yorum Sil:** DELETE "/api/mekanlar/:mekanid/yorumlar/:yorumid". Auth.Bearer Token Girilmeli
>- **Giriş Yap:** POST "/api/girisyap". Auth.Bearer Token Girilmeli. Kullanıcı bilgileri girilmeli. Kullanıcı Bilgileri: eposta, sifre.
>- **Kayıt Ol:** POST "/api/kayitol". Auth.Bearer Token Girilmeli. Kullanıcı bilgileri girilmeli. Kullanıcı Bilgileri: adsoyad, eposta, sifre.
>- **Profil Görüntüle:** GET "/api/profil". Auth.Bearer Token Girilmeli.
>- **Profil Güncelle:** PUT "/api/profilguncelle". Auth.Bearer Token Girilmeli. Kullanıcı bilgileri girilmeli. Kullanıcı Bilgileri: eposta, sifre.
>- **Şifre Yenileme İsteği:** POST "/api/sifremiyenile". Eposta gerekli.
>- **Yeni Şifre Üretme:** POST "/yenisifreuret/:token". Token ve yeni şifre gerekli.

# Kullanılan Teknolojiler ve Araçlar

>Uygulama front-end ve back-end olmak üzere iki kısımdan oluşmaktadır. MVC mimarisine uygun bir şekilde tasarlanmıştır.
>- **Front-end:** PugJS, CSS, JQuery
>- **Back-end:** NodeJS, ExpressJS, Javascript
>- **Veritabanı:** MongoDB
>- **Veri Modelleme:** Mongoose
>- **Kimlik Doğrulama, Güvenlik:** PassportJS, JWT
>- **Haberleşme:** REST API, Axios
>- **Test:** Mocha,Mochawesome, Chai, Supertest
>- **IDE:** Visual Studio Code
>- **REST API Client:** Thunder Client
>- **REST API Dokumantasyon Aracı:** Swagger
>- **Versiyonlama:** Git

# Kütüphanelerin Yüklenmesi

>Çalıştırmadan önce gerekli kütüphanelerin yüklenmesi gerekir. Proje klasörü içindeyken terminalde aşağıdaki komutları kullanarak bu kütüphaneleri yükleyin

``` 
npm install
 ```

# Uygulamanın Çalıştırılması

>Aşağıdaki komut ile uygulamayı çalıştırabilirsiniz.

```
npm start
```
  

# REST API Testi

>Aşağıdaki komut ile API testini çalıştırabilirsiniz.

```
npm run test
```
>- Uygulama http://localhost:3000 adresinde çalışmaktadır. Anasayfaya erişmek için enlem ve boylam parametreleri verilmelidir. Örnek: http://localhost:3000?enlem=37&boylam=35
>- Mongo Cloud benzeri bir veritabanı kullanılacaksa "app_api/models/db.js" dosyasındaki dbURI değiştirilmeli.
Uygulama localhost yerine domain altında çalışacaksa "app_server/controllers/common/ortakkullanim.js" dosyasındaki apiSecenekleri.sunucu parametresini değiştirilmeli.
>- Swagger API Dokumantasyonuna (http://localhost:3000/apidoc adresinden ulaşılabilir.
>- Replit Demo: Admin: Eposta:admin@admin.com Şifre:1234

# Ekran Görüntüleri

![Screen Shot 2023-03-24 at 10 13 45](https://user-images.githubusercontent.com/115122063/227455916-89e9062b-214a-4b82-a5d6-633b9ac775e9.png)
![Screen Shot 2023-03-24 at 10 19 13](https://user-images.githubusercontent.com/115122063/227455968-c88c433f-4542-452a-91ac-55db68d3273a.png)
![Screen Shot 2023-03-24 at 10 18 23](https://user-images.githubusercontent.com/115122063/227456018-1ac3254c-c92a-4605-918d-5961c4cfacce.png)

![204535833-3d0c551d-bf01-4f09-a0f5-62b23bb8f709](https://user-images.githubusercontent.com/115122063/227456120-a227a23c-a077-4fe9-bd3b-6ac22367cfdd.png)






