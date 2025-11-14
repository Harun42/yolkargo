diff --git a/mobile/App.js b/mobile/App.js
new file mode 100644
index 0000000000000000000000000000000000000000..19de2ce2d02c8f0d2f1a78d3c5b6d8cc18ddced1
--- /dev/null
+++ b/mobile/App.js
@@ -0,0 +1,216 @@
+import React from 'react';
+import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
+import { StatusBar } from 'expo-status-bar';
+
+const panels = [
+  {
+    title: 'Sürücüler İçin',
+    points: [
+      'Rota, tarih ve araç bilgilerini paylaş',
+      'Boş alanını değerlendirerek gelir elde et',
+      'Anlaşmadan sonra canlı takip ile güven ver'
+    ]
+  },
+  {
+    title: 'Göndericiler İçin',
+    points: [
+      'Kargonun çıkış/varış noktalarını kolayca gir',
+      'Paket boyutu ve önem derecesini belirt',
+      'Teklif ver veya sabit fiyatla hemen gönder'
+    ]
+  }
+];
+
+export default function App() {
+  return (
+    <SafeAreaView style={styles.container}>
+      <StatusBar style="light" />
+      <ScrollView contentContainerStyle={styles.content}>
+        <View style={styles.hero}>
+          <Text style={styles.logo}>YolKargo</Text>
+          <Text style={styles.heading}>Şehirler arası kargo paylaşımı için güvenli pazar yeri</Text>
+          <Text style={styles.subheading}>
+            Yolculuğunu kazanca çeviren sürücülerle, uygun fiyata gönderim yapmak isteyenleri bir araya getiriyoruz.
+          </Text>
+          <View style={styles.heroButtons}>
+            <TouchableOpacity style={[styles.button, styles.primary]}>
+              <Text style={styles.buttonText}>Sürücü Olarak Kaydol</Text>
+            </TouchableOpacity>
+            <TouchableOpacity style={[styles.button, styles.secondary]}>
+              <Text style={[styles.buttonText, styles.secondaryText]}>Kargo Gönder</Text>
+            </TouchableOpacity>
+          </View>
+        </View>
+
+        <View style={styles.card}>
+          <Text style={styles.cardTitle}>Öne Çıkan Özellikler</Text>
+          <View style={styles.features}>
+            <Feature title="Akıllı Eşleşme" description="Rota, tarih ve paket boyutuna göre en uygun sürücüyü bul." />
+            <Feature title="Canlı Takip" description="Entegre harita ile kargonun yolculuğunu anlık izle." />
+            <Feature title="Güven ve Sigorta" description="Kimlik doğrulama ve isteğe bağlı sigorta seçenekleriyle içiniz rahat olsun." />
+          </View>
+        </View>
+
+        {panels.map((panel) => (
+          <View style={styles.card} key={panel.title}>
+            <Text style={styles.cardTitle}>{panel.title}</Text>
+            {panel.points.map((point) => (
+              <View style={styles.listItem} key={point}>
+                <View style={styles.bullet} />
+                <Text style={styles.listText}>{point}</Text>
+              </View>
+            ))}
+          </View>
+        ))}
+
+        <View style={styles.card}>
+          <Text style={styles.cardTitle}>Kazanç Modeli</Text>
+          <View style={styles.features}>
+            <Feature title="Komisyon" description="Her eşleşmeden düşük oranda platform komisyonu." />
+            <Feature title="Premium" description="Sürücüler için daha çok görünürlük ve hızlı eşleşme." />
+            <Feature title="Reklam Alanı" description="Uygun markalar için hedefli reklam gösterimi." />
+          </View>
+        </View>
+
+        <View style={styles.cta}>
+          <Text style={styles.ctaHeading}>Erken erişime katıl</Text>
+          <Text style={styles.ctaText}>Platform beta sürümü yakında. Şimdi kaydol ve ilk sen dene.</Text>
+          <TouchableOpacity style={[styles.button, styles.primary, styles.ctaButton]}>
+            <Text style={styles.buttonText}>Bekleme Listesine Katıl</Text>
+          </TouchableOpacity>
+        </View>
+      </ScrollView>
+    </SafeAreaView>
+  );
+}
+
+function Feature({ title, description }) {
+  return (
+    <View style={styles.featureItem}>
+      <Text style={styles.featureTitle}>{title}</Text>
+      <Text style={styles.featureText}>{description}</Text>
+    </View>
+  );
+}
+
+const styles = StyleSheet.create({
+  container: {
+    flex: 1,
+    backgroundColor: '#F4F6FB'
+  },
+  content: {
+    padding: 24,
+    gap: 24
+  },
+  hero: {
+    backgroundColor: '#111827',
+    borderRadius: 24,
+    padding: 28,
+    gap: 16
+  },
+  logo: {
+    color: '#FF7A00',
+    fontSize: 18,
+    fontWeight: '700'
+  },
+  heading: {
+    color: 'white',
+    fontSize: 24,
+    fontWeight: '700',
+    lineHeight: 32
+  },
+  subheading: {
+    color: 'rgba(255,255,255,0.8)',
+    fontSize: 15,
+    lineHeight: 22
+  },
+  heroButtons: {
+    flexDirection: 'row',
+    gap: 12,
+    flexWrap: 'wrap'
+  },
+  button: {
+    paddingVertical: 12,
+    paddingHorizontal: 18,
+    borderRadius: 999,
+    alignItems: 'center'
+  },
+  primary: {
+    backgroundColor: '#FF7A00'
+  },
+  secondary: {
+    backgroundColor: 'white'
+  },
+  buttonText: {
+    color: 'white',
+    fontWeight: '600'
+  },
+  secondaryText: {
+    color: '#111827'
+  },
+  card: {
+    backgroundColor: 'white',
+    borderRadius: 24,
+    padding: 24,
+    gap: 12
+  },
+  cardTitle: {
+    fontSize: 18,
+    fontWeight: '700',
+    color: '#111827'
+  },
+  features: {
+    gap: 16
+  },
+  featureItem: {
+    backgroundColor: '#F9FAFB',
+    borderRadius: 18,
+    padding: 16,
+    gap: 8
+  },
+  featureTitle: {
+    fontSize: 16,
+    fontWeight: '600',
+    color: '#FF7A00'
+  },
+  featureText: {
+    color: '#4B5563',
+    fontSize: 14,
+    lineHeight: 20
+  },
+  listItem: {
+    flexDirection: 'row',
+    alignItems: 'flex-start',
+    gap: 10
+  },
+  bullet: {
+    width: 8,
+    height: 8,
+    borderRadius: 4,
+    marginTop: 8,
+    backgroundColor: '#FF7A00'
+  },
+  listText: {
+    flex: 1,
+    color: '#4B5563'
+  },
+  cta: {
+    backgroundColor: '#FF7A00',
+    borderRadius: 24,
+    padding: 32,
+    gap: 12,
+    alignItems: 'center'
+  },
+  ctaHeading: {
+    color: 'white',
+    fontSize: 20,
+    fontWeight: '700'
+  },
+  ctaText: {
+    color: 'rgba(255,255,255,0.85)',
+    textAlign: 'center'
+  },
+  ctaButton: {
+    width: '100%'
+  }
+});
