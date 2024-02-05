![Pixelia](https://cdn.discordapp.com/attachments/1185224136570720408/1185224201922150543/image_72_1.png)
# pixelia.db

Pixelia için oluşturulmuş bir Node.js projelerinde kullanılabilecek bir veri tabanı modülüdür.


## ✨ Kurulum
- İlk başta projenize modülü kurunuz.
```
npm i pixelia.db
```
- Daha sonra projenize tamamlayınız.
```js
const PixeliaDB = require("pixelia.db");
const db = new PixeliaDB("./database.json");
```
*⚠ Uyarı: Eğer bir klasör içine ekleyecekseniz ilk başta klasörü oluşturmanız gerekmektedir.*

- İşte bu kadar, şimdi sadece modülü kullanmak kaldı.
## 🤖 Fonksiyonlar
- **db.set():** fonksiyonu, belirtilen anahtar (key) ve değeri (value) alarak veritabanına bir giriş ekler veya mevcut bir anahtarı günceller. Bu fonksiyon, veritabanınızı güncellemek veya yeni veriler eklemek istediğinizde kullanılır.
```js
db.set('kullanıcı', { isim: 'Alfred', email: 'alfred@pixelia.to' });
```

- **db.get():** fonksiyonu, belirtilen anahtarı kullanarak veritabanındaki bir değeri almak için kullanılır. Eğer belirtilen anahtar mevcut değilse, _undefined_ döner.
```js
const kullaniciVeri = db.get('kullanıcı');
console.log(kullaniciVeri); // { isim: 'Alfred', email: 'alfred@pixelia.to' }
```

- **db.delete():** fonksiyonu, belirtilen anahtarı kullanarak veritabanından bir değeri silmek için kullanılır.
```js
db.delete('kullanıcı');
```

- **db.all():** fonksiyonu, tüm veritabanı içeriğini bir nesne olarak döndürür.
```js
const butunVeriler = db.all();
console.log(butunVeriler);
```

- **db.fetch():** fonksiyonu, belirtilen anahtardaki değeri döndürür. Eğer anahtar mevcut değilse, _null_ döner.
```js
const kullaniciVeri = db.fetch('kullanıcı');
console.log(kullaniciVeri); // { isim: 'Alfred', email: 'alfred@pixelia.to' }
```

- **db.has():** fonksiyonu, belirtilen anahtarın veritabanında mevcut olup olmadığını kontrol eder.
```js
const kullaniciVarmi = db.has('kullanıcı');
console.log(kullaniciVarmi); // true
```

- **db.clear():** fonksiyonu, veritabanındaki tüm verileri temizler.
```js
db.clear(); // Veritabanındaki tüm verileri temizle
```

- **db.push():** fonksiyonu, belirtilen anahtarın altındaki bir diziye yeni bir öğe ekler.
```js
db.push('yeniDizi', "Merhaba Pixelia!");
```

```js
db.push('yeniDizi2', { array: "Merhaba Pixelia!" });
```

- **db.add():** fonksiyonu, belirtilen anahtardaki değeri artırmak için kullanılır. Eğer belirtilen anahtar mevcut değilse, yeni bir anahtar oluşturulur ve değeri eklenir.

```js
db.add('puan', 5);
```

- **db.subtract():** fonksiyonu, belirtilen anahtardaki değeri azaltmak için kullanılır. Eğer belirtilen anahtar mevcut değilse, yeni bir anahtar oluşturulur ve değeri eklenir.

```js
db.subtract('puan', 2);
```
## 📜 Lisans
PixeliaDB, Pixelia topluluğu tarafından geliştirilmiş özel bir JSON veritabanı modülüdür. Kaynak kodları GitHub üzerinde herkese açık olarak paylaşılmış olup, MIT lisansı altında korunmaktadır. Bu modül, basit ve hafif bir şekilde JSON tabanlı veri depolamak için tasarlanmıştır ve Pixelia projelerinde kullanılmak üzere özelleştirilmiştir. Bu modülün izinsiz kopyalanması veya paylaşılması durumunda yasal haklar saklıdır ve gereken adımlar atılacaktır.