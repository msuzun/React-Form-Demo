
# Basit React Form Kullanımı Projesi

Bu proje, React ile basit bir form kullanımı örneğini içermektedir. Proje, `useState` ve `props` kullanımlarının yaygın olduğu bir yapıya sahiptir. Kullanıcılar, görevler ekleyebilir, güncelleyebilir ve silebilirler.

## Proje Görüntüsü

![Proje Görüntüsü](image.jpg)

## Başlarken
Bu talimatlar, projenin  makinenizde çalıştırılmasını sağlayacaktır.
### Gereksinimler
- Node.js (v12.0.0 veya üstü)
- NPM (v6.0.0 veya üstü) veya Yarn (v1.22.0 veya üstü)

### Kurulum

1. Depoyu klonlayın:
    ```bash
    git clone https://github.com/msuzun/React-Form-Demo.git
    ```

2. Proje dizinine gidin:
    ```bash
    cd FormKullanimi
    ```

3. Gerekli paketleri yükleyin:
    ```bash
    npm install
    ```
    veya
    ```bash
    yarn install
    ```
4. json-server'ı global olarak yükleyin:
   ```bash
    npm install -g json-server
    ```
5. `db.json` dosyasını oluşturun.
   ```bash
      {
          "tasks": [
  
          ]
      }

   ```
6. json-server'ı başlatın:
     ```bash
        json-server --watch db.json --port 3001
    ```
     


### Çalıştırma

Uygulamayı geliştirme modunda başlatmak için:
```bash
npm start
```
veya
```bash
yarn start
```
Tarayıcınızı açın ve [http://localhost:3000](http://localhost:3000) adresine gidin. Uygulama otomatik olarak yeniden yüklenir.

## Kullanılan Teknolojiler

- **React**: Kullanıcı arayüzünü oluşturmak için.
- **CSS**: Basit stillendirme için.
- **json-server**: Basit bir REST API oluşturmak için.
- **Axios**: HTTP isteklerini yönetmek için.

## Proje Yapısı

```bash
FormKullanimi/
├── api/
│   ├── db.json/
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── TaskCreate.jsx
│   │   ├── TaskList.jsx
│   │   └── TaskShow.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .eslint.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js

```

## Öne Çıkan Özellikler

- **Görev Ekleme**: Kullanıcıların yeni görevler eklemesine olanak tanır.
- **Görev Güncelleme**:  Kullanıcıların mevcut görevleri güncellemesine izin verir.
- **Görev Silme**: Kullanıcıların görevleri silmesine olanak tanır.
- **CRUD İşlemleri**: Axios ve json-server kullanarak görevler üzerinde CRUD (Create, Read, Update, Delete) işlemleri gerçekleştirir.
- **Responsive Tasarım**: Mobil uyumlu kullanıcı arayüzü.

## Katkıda Bulunma

Katkılarınızı bekliyoruz! Lütfen önce bir konu açarak neyi değiştirmek istediğinizi tartışın.

1. Depoyu fork edin
2. Yeni bir dal oluşturun (`git checkout -b feature/isim`)
3. Değişikliklerinizi commitleyin (`git commit -m 'Özellik ekle: isim'`)
4. Dala push edin (`git push origin feature/isim`)
5. Bir Pull Request açın

## Lisans
Bu projeyi geliştirebilirsiniz.



