import React, { useState, useEffect } from 'react';
import { 
  Home, 
  ChartBar, 
  ShoppingBag, 
  DollarSign, 
  Users, 
  Shield, 
  Rocket, 
  MapPin, 
  BarChart2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ShanghaiIslakBurgerPlan = () => {
  const [activeSection, setActiveSection] = useState('summary');
  const [isMobile, setIsMobile] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    market: true,
    model: true,
    product: true,
    finance: true,
    marketing: true,
    legal: true,
    growth: true
  });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const sections = [
    { id: 'summary', title: 'Yönetici Özeti', icon: <Home /> },
    { id: 'market', title: 'Pazar Analizi', icon: <ChartBar /> },
    { id: 'model', title: 'İş Modeli', icon: <ShoppingBag /> },
    { id: 'product', title: 'Ürün Stratejisi', icon: <DollarSign /> },
    { id: 'finance', title: 'Finansal Projeksiyon', icon: <BarChart2 /> },
    { id: 'marketing', title: 'Pazarlama Stratejisi', icon: <Rocket /> },
    { id: 'legal', title: 'Yasal Gereksinimler', icon: <Shield /> },
    { id: 'growth', title: 'Büyüme Stratejisi', icon: <MapPin /> }
  ];

  const marketData = [
    { name: '2025', CloudKitchen: 73.8, ChinaFood: 584.75 },
    { name: '2028', CloudKitchen: 102.5, ChinaFood: 650.3 },
    { name: '2030', CloudKitchen: 128.2, ChinaFood: 725.23 },
    { name: '2032', CloudKitchen: 144.7, ChinaFood: 780.5 }
  ];

  const growthData = [
    { name: '0-6 Ay', CloudKitchen: 1, Franchise: 0 },
    { name: '6-18 Ay', CloudKitchen: 2, Franchise: 1 },
    { name: '18+ Ay', CloudKitchen: 5, Franchise: 20 },
    { name: '3+ Yıl', CloudKitchen: 10, Franchise: 100 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-600 to-red-800 text-white p-6 shadow-lg">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Shanghai Islak Burger Cloud Kitchen
          </h1>
          <p className="text-lg opacity-90">İş Planı ve Strateji</p>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
          <div className="flex justify-around items-center p-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex flex-col items-center p-2 rounded-lg ${
                  activeSection === section.id ? 'text-red-600 bg-red-50' : 'text-gray-600'
                }`}
              >
                <span className="text-xl">{section.icon}</span>
                <span className="text-xs mt-1">{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      {!isMobile && (
        <div className="fixed left-0 top-0 bottom-0 w-64 bg-white shadow-lg z-40">
          <nav className="p-4">
            <h2 className="text-lg font-semibold mb-6 text-gray-700">İçerikler</h2>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => setActiveSection(section.id)}
                    className={`flex items-center w-full px-4 py-3 rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-red-100 text-red-700'
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className="mr-3">{section.icon}</span>
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <main className={`container mx-auto ${isMobile ? 'pt-4 pb-24' : 'pt-4 pl-64'}`}>
        {/* Yönetici Özeti */}
        <section
          id="summary"
          className={`mb-12 p-6 rounded-2xl shadow-lg bg-white ${
            activeSection === 'summary' ? 'block' : 'hidden'
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-red-700 flex items-center">
            <Home className="mr-2" /> Yönetici Özeti
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-50 p-4 rounded-xl">
              <h3 className="font-semibold text-lg mb-2 text-red-800">İş Konsepti</h3>
              <p>Türk islak burger mutfağını Çinli müşterilere cloud kitchen modeli ile sunmak</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-xl">
              <h3 className="font-semibold text-lg mb-2 text-blue-800">Lokasyon</h3>
              <p>Shanghai, Çin</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl">
              <h3 className="font-semibold text-lg mb-2 text-green-800">Model</h3>
              <p>Cloud Kitchen + Delivery Platform Entegrasyonu</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl">
              <h3 className="font-semibold text-lg mb-2 text-purple-800">Rekabet Avantajı</h3>
              <p>%30 daha düşük işletme maliyeti, eşsiz Türk lezzeti</p>
            </div>
          </div>
          
          <div className="mt-8">
            <img 
              src="https://yiyan.baidu.com/eb/shortLink/image/original?code=46vFQ8k" 
              alt="Shanghai Cloud Kitchen Concept" 
              className="w-full h-64 md:h-96 object-cover rounded-xl shadow-md"
            />
          </div>
        </section>

        {/* Pazar Analizi */}
        <section
          id="market"
          className={`mb-12 p-6 rounded-2xl shadow-lg bg-white ${
            activeSection === 'market' ? 'block' : 'hidden'
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-red-700 flex items-center">
            <ChartBar className="mr-2" /> Pazar Analizi
          </h2>
          
          <div className="mb-8">
            <h3 className="font-semibold text-xl mb-4 text-gray-800 flex items-center">
              <Users className="mr-2 text-red-500" /> Pazar Büyüklüğü ve Fırsatlar
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Çin Cloud Kitchen Pazarı</h4>
                <p>2025-2028 arası önemli büyüme bekleniyor</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Global Cloud Kitchen Pazarı</h4>
                <p>2024'te $73.8 milyar, 2032'de $144.7 milyara ulaşacak</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Çin Foodservice Pazarı</h4>
                <p>2025'te $584.75 milyar, 2030'da $725.23 milyar</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Shanghai Avantajı</h4>
                <p>Büyük şehirler gelişmiş pazar, yüksek talep</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-xl mb-4 text-gray-800 flex items-center">
              <BarChart2 className="mr-2 text-red-500" /> Sektör Trendleri
            </h3>
            <div className="space-y-3">
              <p className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-red-500 rounded-full"></span>
                Dark kitchen'lar 2025'te Çin'deki yeni restoran açılışlarının %40'ından fazlasını oluşturacak
              </p>
              <p className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-red-500 rounded-full"></span>
                Bağımsız cloud kitchen'lar 2024'te pazarın %62.1'ini ele geçirdi
              </p>
              <p className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-2 bg-red-500 rounded-full"></span>
                Yaşlanan ve sağlık bilinci artan nüfus, pratik ama sağlıklı yemeklere talep artırıyor
              </p>
            </div>
          </div>

          <div className="h-80 md:h-96">
            <h3 className="font-semibold text-xl mb-4 text-gray-800">Pazar Büyüme Projeksiyonu</h3>
            <ResponsiveContainer width="100%" height="90%">
              <LineChart
                data={marketData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="CloudKitchen"
                  stroke="#ef4444"
                  activeDot={{ r: 8 }}
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="ChinaFood"
                  stroke="#3b82f6"
                  activeDot={{ r: 8 }}
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* İş Modeli */}
        <section
          id="model"
          className={`mb-12 p-6 rounded-2xl shadow-lg bg-white ${
            activeSection === 'model' ? 'block' : 'hidden'
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-red-700 flex items-center">
            <ShoppingBag className="mr-2" /> İş Modeli
          </h2>

          <div className="mb-8">
            <h3 className="font-semibold text-xl mb-4 text-gray-800 flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">1</div>
              Cloud Kitchen Avantajları
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-medium text-red-800 mb-2">Maliyet Tasarrufu</h4>
                <p>Geleneksel restorana göre %30 daha düşük işletme maliyeti</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Esneklik</h4>
                <p>Menüde hızlı değişiklik ve adaptasyon imkanı</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Düşük Risk</h4>
                <p>Fiziksel lokasyon bağımlılığı yok</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-2">Ölçeklenebilirlik</h4>
                <p>Başarılı olunca hızla genişleme imkanı</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-xl mb-4 text-gray-800 flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">2</div>
              Delivery Platform Stratejisi
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium mb-2 flex items-center">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center mr-2">
                    <span className="text-xs font-bold">1</span>
                  </div>
                  Meituan Dianping
                </h4>
                <p className="text-sm">Tencent destekli, pazar lideri, 670 milyon kullanıcı</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium mb-2 flex items-center">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center mr-2">
                    <span className="text-xs font-bold">2</span>
                  </div>
                  Ele.me
                </h4>
                <p className="text-sm">Alibaba destekli, fiyat avantajı odaklı</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium mb-2 flex items-center">
                  <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center mr-2">
                    <span className="text-xs font-bold">3</span>
                  </div>
                  JD.com
                </h4>
                <p className="text-sm">Yeni giren, rekabet fırsatı</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-medium text-yellow-800 mb-2">Franchise Modeli Özeti</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>Ekipman kirası: $300-500/ay</li>
              <li>Malzeme tedariki: $400-800/ay</li>
              <li>Marka royalty: $200-300/ay</li>
              <li>20 makinalık ağ: $18,000-32,000/ay ek gelir</li>
            </ul>
          </div>
        </section>

        {/* Ürün Stratejisi */}
        <section
          id="product"
          className={`mb-12 p-6 rounded-2xl shadow-lg bg-white ${
            activeSection === 'product' ? 'block' : 'hidden'
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-red-700 flex items-center">
            <DollarSign className="mr-2" /> Ürün Stratejisi
          </h2>

          <div className="mb-8">
            <h3 className="font-semibold text-xl mb-4 text-gray-800 flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">1</div>
              Çinli Damak Tadına Uyarlama
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-medium text-red-800 mb-2">Temel İslak Burger</h4>
                <p>Otantik deneyim</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Soya Soslu Varyant</h4>
                <p>Çin mutfağına uygun adaptasyon</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Hafif Baharatlı Versiyonlar</h4>
                <p>Daha az acı seçenekler</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-2">Sebze Yoğunluklu Seçenekler</h4>
                <p>Sağlık odaklı tüketiciler için</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-xl mb-4 text-gray-800 flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">2</div>
              Menü Geliştirme
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-800 mb-2">Ana Ürün</h4>
                <p>İslak burger (farklı boyutlar)</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-800 mb-2">Yan Ürünler</h4>
                <p>Patates kızartması, turşu, ayran alternatifi</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-800 mb-2">Combo Menüler</h4>
                <p>Uygun fiyatlı paket seçenekleri</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-medium text-yellow-800 mb-2">Özel Soslar</h4>
            <p>Çin damak tadına hitap eden sos çeşitleri:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Soya soslu özel sos</li>
              <li>Hafif baharatlı mayonez</li>
              <li>Sarımsaklı sos</li>
              <li>Turşu sosu</li>
            </ul>
          </div>
        </section>

        {/* Finansal Projeksiyon */}
        <section
          id="finance"
          className={`mb-12 p-6 rounded-2xl shadow-lg bg-white ${
            activeSection === 'finance' ? 'block' : 'hidden'
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-red-700 flex items-center">
            <BarChart2 className="mr-2" /> Finansal Projeksiyon
          </h2>

          <div className="mb-8">
            <h3 className="font-semibold text-xl mb-4 text-gray-800 flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">1</div>
              Başlangıç Maliyetleri (Tahmini - USD)
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-medium text-red-800 mb-2">Cloud Kitchen Kurulumu</h4>
                <p>$15,000 - $25,000</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">İslak Burger Makinası</h4>
                <p>$8,000 - $12,000 (1 adet)</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Diğer Ekipman</h4>
                <p>$7,000 - $10,000</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-2">İlk Stok</h4>
                <p>$3,000 - $5,000</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">Platform Kayıt</h4>
                <p>$2,000 - $4,000</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <h4 className="font-medium text-pink-800 mb-2">Marketing</h4>
                <p>$5,000 - $8,000</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h4 className="font-medium text-indigo-800 mb-2">İşletme Sermayesi</h4>
                <p>$8,000 - $12,000 (İlk 3 Ay)</p>
              </div>
              <div className="bg-teal-50 p-4 rounded-lg">
                <h4 className="font-medium text-teal-800 mb-2">R&D ve Patent</h4>
                <p>$10,000 - $15,000</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg text-center font-semibold">
              Toplam Başlangıç Sermayesi: <span className="text-red-600">$58,000 - $91,000</span>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-xl mb-4 text-gray-800 flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">2</div>
              Aylık İşletme Giderleri
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-medium text-red-800 mb-2">Kira</h4>
                <p>$1,500 - $2,500</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Personel</h4>
                <p>$2,000 - $3,000</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Malzeme Maliyeti</h4>
                <p>%35-40 ciro oranı</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-2">Platform Komisyonları</h4>
                <p>%15-20</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg text-center">
              Diğer Giderler: <span className="font-medium">$800 - $1,200</span>
            </div>
          </div>

          <div className="h-80 md:h-96">
            <h3 className="font-semibold text-xl mb-4 text-gray-800">Büyüme Projeksiyonu</h3>
            <ResponsiveContainer width="100%" height="90%">
              <LineChart
                data={growthData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '8px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="CloudKitchen"
                  stroke="#ef4444"
                  activeDot={{ r: 8 }}
                  strokeWidth={3}
                />
                <Line
                  type="monotone"
                  dataKey="Franchise"
                  stroke="#3b82f6"
                  activeDot={{ r: 8 }}
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Pazarlama Stratejisi */}
        <section
          id="marketing"
          className={`mb-12 p-6 rounded-2xl shadow-lg bg-white ${
            activeSection === 'marketing' ? 'block' : 'hidden'
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-red-700 flex items-center">
            <Rocket className="mr-2" /> Pazarlama Stratejisi
          </h2>

          <div className="mb-8">
            <h3 className="font-semibold text-xl mb-4 text-gray-800 flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">1</div>
              Dijital Pazarlama
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-medium text-red-800 mb-2">Platform Optimizasyonu</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Çekici fotoğraflar ve açıklamalar</li>
                  <li>Rekabetçi fiyatlandırma</li>
                  <li>Hızlı teslimat süresi vurgusu</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">Sosyal Medya</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>WeChat, Weibo, Xiaohongshu</li>
                  <li>Türk kültürü hikayesi</li>
                  <li>Hazırlık süreci videoları</li>
                  <li>Müşteri yorumları ve deneyimleri</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-xl mb-4 text-gray-800 flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">2</div>
              İlk Dönem Stratejileri
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-medium text-green-800 mb-2">Tanıtım Fiyatları</h4>
                <p>Yeni müşteriler için özel indirimler</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-medium text-purple-800 mb-2">İlk Sipariş İndirimleri</h4>
                <p>%30-%50 indirim kampanyaları</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-medium text-yellow-800 mb-2">Ücretsiz Teslimat</h4>
                <p>İlk 100 sipariş için ücretsiz</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-xl mb-4 text-gray-800 flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">3</div>
              Müşteri Edinme
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Lokasyon Hedefleme</h4>
                <p>Genç profesyonellerin yoğun olduğu bölgeler</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Zaman Hedefleme</h4>
                <p>Öğle yemeği ve akşam yemeği saatleri</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Kültürel Merak</h4>
                <p>"Türk lezzeti deneyimi" pazarlaması</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">Kampanyalar</h4>
                <p>Sosyal medya influencer işbirlikleri</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">Pazarlama Bütçesi Tahmini</h4>
            <div className="grid md:grid-cols-3 gap-4 mt-2">
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600">Online Reklam</p>
                <p className="font-medium">$3,000 - $5,000</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600">Sosyal Medya</p>
                <p className="font-medium">$1,500 - $2,500</p>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600">Promosyonlar</p>
                <p className="font-medium">$500 - $1,000</p>
              </div>
            </div>
          </div>
        </section>

        {/* Yasal Gereksinimler */}
        <section
          id="legal"
          className={`mb-12 p-6 rounded-2xl shadow-lg bg-white ${
            activeSection === 'legal' ? 'block' : 'hidden'
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-red-700 flex items-center">
            <Shield className="mr-2" /> Yasal Gereksinimler ve Riskler
          </h2>

          <div className="mb-8">
            <h3 className="font-semibold text-xl mb-4 text-gray-800 flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">1</div>
              Gerekli İzinler
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-medium text-red-800 mb-2">Gıda Güvenliği</h4>
                <p>Gıda işletmesi sertifikası</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-blue-800 mb-2">İşletme Lisansı</h4>
                <p>Yerel belediye işletme ruhsatı</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">Yabancı Yatırım</h4>
                <p>Yabancı yatırım izin belgesi</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-medium text-purple-800 mb-2">Platform Kayıt</h4>
                <p>Meituan, Ele.me gibi platformlarda kayıt</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-semibold text-xl mb-4 text-gray-800 flex items-center">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">2</div>
              Potansiyel Riskler
            </h3>
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-medium text-yellow-800 mb-2">Kültürel Kabul</h4>
                <p>Çinli müşterilerin Türk lezzetini benimseme süreci</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-medium text-red-800 mb-2">Rekabet</h4>
                <p>Yerli ve uluslararası fast-food zincirleri</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-medium text-blue-800 mb-2">Tedarik Zinciri</h4>
                <p>Özgün malzemelerin bulunması ve maliyeti</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-medium text-purple-800 mb-2">Düzenlemeler</h4>
                <p>Değişken gıda ve işletme düzenlemeleri</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-medium text-gray-800 mb-2">Risk Azaltma Stratejileri</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Yerel malzeme tedarikçileriyle işbirliği</li>
              <li>Sürekli müşteri feedback toplama</li>
              <li>Menüde yerel lezzetlere yer verme</li>
              <li>Yasal danışmanlık hizmeti alma</li>
            </ul>
          </div>
        </section>

        {/* Büyüme Stratejisi */}
        <section
          id="growth"
          className={`mb-12 p-6 rounded-2xl shadow-lg bg-white ${
            activeSection === 'growth' ? 'block' : 'hidden'
          }`}
        >
          <h2 className="text-2xl font-bold mb-6 text-red-700 flex items-center">
            <MapPin className="mr-2" /> Büyüme Stratejisi
          </h2>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-xl text-gray-800 flex items-center">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-2">1</div>
                Kısa Vadeli (0-6 Ay) - Cloud Kitchen Odağı
              </h3>
              <button 
                onClick={() => toggleSection('shortTerm')}
                className="text-gray-500 hover:text-gray-700"
              >
                {expandedSections.shortTerm ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
            
            {expandedSections.shortTerm && (
              <div className="bg-red-50 p-4 rounded-lg">
                <ul className="list-disc pl-5 space-y-2">
                  <li>İlk cloud kitchen açılışı</li>
                  <li>Platform entegrasyonları tamamlama</li>
                  <li>Makina performans testi ve iyileştirme</li>
                  <li>Müşteri tabanı oluşturma</li>
                  <li>Menü optimizasyonu</li>
                </ul>
              </div>
            )}
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-xl text-gray-800 flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">2</div>
                Orta Vadeli (6-18 Ay) - Genişleme ve Test
              </h3>
              <button 
                onClick={() => toggleSection('mediumTerm')}
                className="text-gray-500 hover:text-gray-700"
              >
                {expandedSections.mediumTerm ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
            
            {expandedSections.mediumTerm && (
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="list-disc pl-5 space-y-2">
                  <li>İkinci cloud kitchen lokasyonu</li>
                  <li>Menü genişletme ve kârlılığa ulaşma</li>
                  <li>Pilot franchise test: 2-3 lokasyonda makina yerleştirme</li>
                  <li>Müşteri sadakati programları</li>
                  <li>Franchise sisteminin altyapısını kurma</li>
                </ul>
              </div>
            )}
          </div>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-xl text-gray-800 flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">3</div>
                Uzun Vadeli (18+ Ay) - Franchise Ağı
              </h3>
              <button 
                onClick={() => toggleSection('longTerm')}
                className="text-gray-500 hover:text-gray-700"
              >
                {expandedSections.longTerm ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
            
            {expandedSections.longTerm && (
              <div className="bg-green-50 p-4 rounded-lg">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Shanghai'de 5+ cloud kitchen</li>
                  <li>Makina franchise ağı: 20+ lokasyon hedefi</li>
                  <li>Diğer şehirlere genişleme (Beijing, Guangzhou)</li>
                  <li>Teknik mükemmelleştirme: Makina v2.0 geliştirme</li>
                  <li>Ulusal marka tanınırlığı inşa etme</li>
                </ul>
              </div>
            )}
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-medium text-yellow-800 mb-2">Mega Vizyon (3+ Yıl)</h4>
            <ul className="list-disc pl-5 space-y-1">
              <li>Çin geneli franchise ağı: 100+ makina lokasyonu</li>
              <li>Teknoloji export: Diğer ülkelere makina satışı</li>
              <li>B2B çözümler: Restoran zincirleri için özelleştirilmiş makinalar</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ShanghaiIslakBurgerPlan;