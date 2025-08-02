# Cypress + Cucumber Test Otomasyon Framework'ü

Bu proje, Cypress ve Cucumber kullanarak oluşturulmuş bir test otomasyon framework'üdür. BDD (Behavior Driven Development) yaklaşımı ile JavaScript tabanlı E2E testler yazmanızı sağlar.

## 🚀 Özellikler

- **Cypress**: Modern web uygulamaları için hızlı ve güvenilir E2E testler
- **Cucumber**: Gherkin syntax ile okunabilir test senaryoları
- **BDD Yaklaşımı**: İş gereksinimleri odaklı test yazımı
- **Çoklu Tarayıcı Desteği**: Chrome, Firefox, Edge desteği
- **Raporlama**: Detaylı test raporları ve ekran görüntüleri
- **Özel Komutlar**: Tekrar kullanılabilir test komutları

## 📁 Proje Yapısı

```
cypress-cucumber-automation/
├── cypress/
│   ├── e2e/
│   │   ├── features/           # Gherkin feature dosyaları
│   │   │   └── google-search.feature
│   │   └── step_definitions/   # Step definition dosyaları
│   │       └── google-search-steps.js
│   ├── support/
│   │   ├── commands.js         # Özel Cypress komutları
│   │   └── e2e.js             # Global konfigürasyon
│   ├── fixtures/              # Test verileri
│   ├── screenshots/           # Test ekran görüntüleri
│   └── videos/               # Test videoları
├── cypress.config.js          # Cypress konfigürasyonu
├── package.json
└── README.md
```

## 🛠️ Kurulum

1. **Projeyi klonlayın:**
   ```bash
   git clone <repository-url>
   cd cypress-cucumber-automation
   ```

2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```

## 🎯 Kullanım

### Test Çalıştırma Komutları

```bash
# Tüm testleri headless modda çalıştır
npm test

# Tüm testleri görünür modda çalıştır
npm run test:headed

# Chrome tarayıcısında çalıştır
npm run test:chrome

# Firefox tarayıcısında çalıştır
npm run test:firefox

# Cypress Test Runner'ı aç (interaktif mod)
npm run cypress:open

# Sadece Google testlerini çalıştır
npm run test:google
```

### Yeni Test Senaryosu Ekleme

1. **Feature dosyası oluşturun** (`cypress/e2e/features/` klasöründe):
   ```gherkin
   Feature: Yeni Özellik Testi
     Açıklama buraya gelir

     Scenario: Test senaryosu
       Given Bir ön koşul
       When Bir aksiyon gerçekleştiriyorum
       Then Bir sonuç doğrulanıyor
   ```

2. **Step definitions oluşturun** (`cypress/e2e/step_definitions/` klasöründe):
   ```javascript
   import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

   Given('Bir ön koşul', () => {
     // Implementation
   });

   When('Bir aksiyon gerçekleştiriyorum', () => {
     // Implementation
   });

   Then('Bir sonuç doğrulanıyor', () => {
     // Implementation
   });
   ```

## 📝 Örnek Test Senaryoları

Framework ile birlikte gelen Google arama testleri:

- ✅ Basit Google arama testi
- ✅ Google arama önerileri testi  
- ✅ Google resim arama testi
- ✅ Parametreli test senaryoları

## 🔧 Konfigürasyon

### Cypress Konfigürasyonu (`cypress.config.js`)

- Base URL: `https://www.google.com`
- Viewport: 1280x720
- Timeout değerleri: 10 saniye
- Video kayıt: Aktif
- Ekran görüntüsü: Hata durumunda otomatik

### Cucumber Konfigürasyonu (`package.json`)

- Step definitions yolu: `cypress/e2e/step_definitions/**/*.{js,ts}`
- JSON rapor oluşturma: Aktif
- Global step definitions: Aktif

## 🎨 Özel Komutlar

Framework'de kullanabileceğiniz özel Cypress komutları:

```javascript
// Google'da arama yap
cy.googleSearch('arama terimi');

// Element görünür olana kadar bekle
cy.waitForElement('selector');

// Text içeren elemente tıkla
cy.clickElementWithText('selector', 'text');

// Arama sonuçlarını doğrula
cy.verifySearchResults('beklenen text');

// Ekran görüntüsü al
cy.takeScreenshot('test-name');
```

## 🏷️ Tag Kullanımı

Testleri kategorize etmek için tag'ler kullanabilirsiniz:

```gherkin
@smoke @google
Scenario: Hızlı test senaryosu

@regression @google  
Scenario: Detaylı test senaryosu
```

Belirli tag'li testleri çalıştırmak için:
```bash
npx cypress run --env tags="@smoke"
```

## 📊 Raporlama

- **Video kayıtları**: `cypress/videos/` klasöründe
- **Ekran görüntüleri**: `cypress/screenshots/` klasöründe  
- **Cucumber JSON raporları**: `cypress/reports/cucumber-json/` klasöründe

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🆘 Sorun Giderme

### Yaygın Sorunlar

1. **Test başlamıyor**: Node.js versiyonunuzun 16+ olduğundan emin olun
2. **Cucumber step'leri bulunamıyor**: Step definitions yolunu kontrol edin
3. **Tarayıcı açılmıyor**: Cypress'i yeniden yükleyin: `npx cypress install`

### Destek

Sorunlarınız için GitHub Issues kullanabilirsiniz.
