const expect = require("chai").expect;
var adres = "localhost:3000";
const request = require("supertest").agent(adres);
describe("POST /api/mekanlar", function () {
  it("Yeni mekan ekle:", async function () {
    const response = await request.post("/api/mekanlar").send({
      ad: "Starbucks",
      adres: "Centrum Garden",
      puan: 5,
      imkanlar: "çay,kahve,pasta",
      enlem: 37.83226584629666,
      boylam: 30.524732239878013,
      gunler1: "Pazartesi-Cuma",
      acilis1: "9:00",
      kapanis1: "23:00",
      kapali1: false,
      gunler2: "Cumartesi-Pazar",
      acilis2: "11:00",
      kapanis2: "17:00",
      kapali2: false,
    });
    expect(response.status).to.eql(201);
    process.env.mekanid = response.body._id;
  });
});

describe("GET /api/mekanlar", function () {
  it("Girilen konum civarındaki tüm mekanları listele:", async function () {
    const response = await request.get("/api/mekanlar?enlem=37&boylam=35");
    expect(response.status).to.eql(200);
  });
});

describe("GET /api/mekanlar/:mekanid", function () {
  it("Mekan getir:", async function () {
    const response = await request.get(`/api/mekanlar/${process.env.mekanid}`);
    expect(response.status).to.eql(200);
  });
});

describe("PUT /api/mekanlar/:mekanid", function () {
  it("Mekan Güncelle:", async function () {
    const response = await request
      .put(`/api/mekanlar/${process.env.mekanid}`)
      .send({
        ad: "Starbucks SDÜ",
        adres: "SDÜ Doğu Kampüsü",
        puan: 3,
        imkanlar: "çay,kahve,pasta,refresher",
        enlem: 37.8,
        boylam: 30.5,
        gunler1: "Pazartesi-Cuma",
        acilis1: "9:10",
        kapanis1: "23:10",
        kapali1: true,
        gunler2: "Cumartesi-Pazar",
        acilis2: "11:10",
        kapanis2: "17:10",
        kapali2: true,
      });
    expect(response.status).to.eql(200);
  });
});

describe("POST /api/mekanlar/:mekanid/yorumlar", function () {
  it("Yorum ekle:", async function () {
    const response = await request
      .post(`/api/mekanlar/${process.env.mekanid}/yorumlar`)
      .send({
        yorumYapan: "ASY",
        puan: 5,
        yorumMetni: "Kahveler harika",
      });
    process.env.yorumid = response.body._id;
    expect(response.status).to.eql(201);
  });
});

describe("GET /api/mekanlar/:mekanid/yorumlar/:yorumid", function () {
  it("Yorum getir:", async function () {
    const response = await request.get(
      `/api/mekanlar/${process.env.mekanid}/yorumlar/${process.env.yorumid}`
    );
    expect(response.status).to.eql(200);
  });
});

describe("PUT /api/mekanlar/:mekanid/yorumlar/:yorumid", function () {
  it("Yorum güncelle:", async function () {
    const response = await request
      .put(
        `/api/mekanlar/${process.env.mekanid}/yorumlar/${process.env.yorumid}`
      )
      .send({
        yorumYapan: "Sinan",
        puan: 4,
        yorumMetni: "Kahveler harikaaaa",
      });
    expect(response.status).to.eql(200);
  });
});

describe("DELETE /api/mekanlar/:mekanid/yorumlar/:yorumid", function () {
  it("Yorum sil:", async function () {
    const response = await request.delete(
      `/api/mekanlar/${process.env.mekanid}/yorumlar/${process.env.yorumid}`
    );
    expect(response.status).to.eql(200);
  });
});

describe("DELETE /api/mekanlar/:mekanid", function () {
  it("Mekan sil:", async function () {
    const response = await request.delete(
      `/api/mekanlar/${process.env.mekanid}`
    );
    expect(response.status).to.eql(200);
  });
});
after((done) => {
  done();
});
