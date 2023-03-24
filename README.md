# Mekanbul Uygulaması

Mekanbul insanların konumları civarındaki mekanları, sunduğu imkanları görmelerini, mekanlara yorum yapabilmelerini sağlayan bir web uygulamadır. Uygulamanın aynı zamanda bir admin paneli mevcuttur. Admin mekan ekleme, silme, güncelleme, tüm mekanları görme gibi işlemleri yapabilmektedir.


# Kullanılan Teknolojiler ve Araçlar

Uygulama front-end ve back-end olmak üzere iki kısımdan oluşmaktadır. MVC mimarisine uygun bir şekilde tasarlanmıştır.
- **Normal Kullanıcı:** Konuma göre mekan listeleme, mekan detaylarını görebilme

- **Kayıtlı Kullanıcı:** Mekana yorum yapabilme, profil görüntüleme, profil güncelleme, şifre yenileme

- **Admin:** Tüm mekanları listeleme, mekan ekleme, mekan silme, mekan güncelleme

- **Varsayılan Rol:**  Kullanıcı. Kullanıcılar koleksiyonuna giderek kayıt olduğunuz kullanıcıyı bulup rolünü "admin olarak değiştirerek admin özelliklerine erişebilirsiniz.

- **Front-end:** PugJS, CSS, JQuery

- **Back-end:** NodeJS, ExpressJS, Javascript

- **Veritabanı:** MongoDB

- **Veri Modelleme:** Mongoose

- **Kimlik Doğrulama, Güvenlik:** PassportJS, JWT

- **Haberleşme:** REST API, Axios

- **Test:** Mocha,Mochawesome, Chai, Supertest

- **IDE:** Visual Studio Code

- **REST API Client:** Thunder Client

- **REST API Dokumantasyon Aracı:** Swagger

- **Versiyonlama:** Git

# Kütüphanelerin Yüklenmesi

Çalıştırmadan önce gerekli kütüphanelerin yüklenmesi gerekir. Proje klasörü içindeyken terminalde aşağıdaki komutları kullanarak bu kütüphaneleri yükleyin

``` 
npm install
 ```

# Uygulamanın Çalıştırılması

Aşağıdaki komut ile uygulamayı çalıştırabilirsiniz.

REST API http://localhost:5000 adresinde, front-end http://localhost:3000 adresinde çalışmaktadır.

```
npm start
```
  

# REST API Testi

Aşağıdaki komut ile API testini çalıştırabilirsiniz.

```
npm run test
```


# Ekran Görüntüleri

![Screen Shot 2023-03-24 at 10 13 45](https://user-images.githubusercontent.com/115122063/227455916-89e9062b-214a-4b82-a5d6-633b9ac775e9.png)
![Screen Shot 2023-03-24 at 10 19 13](https://user-images.githubusercontent.com/115122063/227455968-c88c433f-4542-452a-91ac-55db68d3273a.png)
![Screen Shot 2023-03-24 at 10 18 23](https://user-images.githubusercontent.com/115122063/227456018-1ac3254c-c92a-4605-918d-5961c4cfacce.png)

![204535833-3d0c551d-bf01-4f09-a0f5-62b23bb8f709](https://user-images.githubusercontent.com/115122063/227456120-a227a23c-a077-4fe9-bd3b-6ac22367cfdd.png)






