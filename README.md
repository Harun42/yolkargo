diff --git a/README.md b/README.md
index aabf9c7ba9d720dab3320f8d4df597fc5cfdc088..2619b5641834f6ec3de591b0f8d3a305c1c5fc09 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,51 @@
-# yolkargo1
\ No newline at end of file
+# YolKargo Platformu
+
+YolKargo, şehirler arası seyahat eden sürücüler ile uygun fiyata kargo göndermek isteyen kişileri buluşturan bir pazar yeri fikridir. Bu depo, fikrin hızlıca test edilebilmesi için basit bir web tanıtım sitesi ve Expo tabanlı mobil uygulama prototipi içerir.
+
+## İçerik
+
+- `web/`: YolKargo hizmetini tanıtan statik web sitesi.
+- `mobile/`: Expo ile çalışacak React Native mobil uygulama prototipi.
+
+## Web Sitesi
+
+Statik web sitesi, hizmetin değer teklifini ve özelliklerini anlatan tek sayfalık bir tasarımdır.
+
+### Çalıştırma
+
+```bash
+cd web
+python3 -m http.server 8000
+```
+
+Ardından tarayıcınızda `http://localhost:8000` adresine gidin.
+
+## Mobil Uygulama
+
+Mobil uygulama, sürücü ve gönderici akışlarını görselleştiren temel bir prototiptir. Proje Expo ile uyumludur.
+
+### Kurulum
+
+1. [Node.js](https://nodejs.org/) ve [Expo CLI](https://docs.expo.dev/get-started/installation/) kurulu olmalıdır.
+2. Bağımlılıkları yükleyin:
+
+   ```bash
+   cd mobile
+   npm install
+   ```
+
+### Çalıştırma
+
+```bash
+npm start
+```
+
+Komut sonrası Expo geliştirici aracından QR kodu tarayarak uygulamayı fiziksel cihazınızda veya emülatörde test edebilirsiniz.
+
+## Sonraki Adımlar
+
+- Firebase veya benzeri bir arka uç hizmeti ile kimlik doğrulama ve gerçek zamanlı veri yönetimi eklemek.
+- Stripe / iyzico gibi bir ödeme altyapısı entegre etmek.
+- Sürücüler ve göndericiler için iki yönlü puanlama sistemi geliştirmek.
+- Canlı konum takibi için Google Maps API entegrasyonu yapmak.
+- MVP aşamasında Telegram/WhatsApp üzerinden topluluk oluşturup talep toplamak.
