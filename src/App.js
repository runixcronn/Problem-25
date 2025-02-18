import { CheckIcon, MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { useRef, useState, useEffect } from "react";

// Bileşen açılış sayfası (Landing Page) oluşturur ve "Fiyatlandırmaya gidin" butonuna tıklandığında fiyatlandırma bölümüne kaydırma işlemi yapılmasını sağlar. Ayrıca "Satın alma planı" butonuna tıklandığında sayfanın en üstüne pürüzsüz şekilde kaydırılması beklenmektedir. Şu anda bu işlev eksik durumda.

// Görevler:

// "Satın alma planı" butonuna tıklandığında sayfanın en üstüne smooth scroll ile kaymasını sağlayın.
// useRef kullanarak sayfanın üst bölümünü referans alın ve butona tıklanınca ilgili bölüme kaydırma işlemi yapın.
// Butona tıklandığında, sayfanın arka plan renginin anlık olarak değişmesi veya başka bir görsel efektin eklenmesi kullanıcı deneyimini artıracaktır. Bunu nasıl yapabileceğinizi açıklayın.

// Bonus:

// Tailwind CSS kullanarak, sayfaya bir gece/gündüz modu ekleyin. Butona tıklanınca Tailwind’in dark modunu etkinleştirerek arayüzün karanlık temaya geçmesini sağlayın.
// Mobil uyumluluk için sayfanın küçük ekranlarda daha iyi görüntülenmesini sağlayacak Tailwind class'larını kullanarak düzenlemeler yapın.
// Tailwind'in group özelliğini kullanarak, buton üzerine gelindiğinde (hover) sadece kendisini değil, ebeveyn bileşeninin de rengini değiştirecek bir yapı oluşturun.

export default function LandingPage() {
  const pricingRef = useRef();
  const topRef = useRef();
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  function goToPricing() {
    pricingRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function goToTop() {
    topRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function handleButtonClick() {
    setBgColor("bg-blue-500");
    setTimeout(() => setBgColor(""), 300);
  }

  return (
    <div
      className={
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      }
    >
      <div ref={topRef} className="relative pt-14">
        <div className="absolute right-5 top-5">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-md bg-gray-200 dark:bg-gray-800"
          >
            {darkMode ? (
              <SunIcon className="h-6 w-6 text-yellow-400" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Hoş geldiniz
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo.
              </p>
              <div className="mt-10 flex items-center justify-center">
                <button
                  onClick={goToPricing}
                  className="rounded-md bg-indigo-600 px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-500"
                >
                  Fiyatlandırmaya gidin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Fiyatlandırma
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
              Her büyüklükteki ekip için fiyatlandırma planları
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600 dark:text-gray-300">
            Distinctio et nulla eum soluta et neque labore quibusdam.
          </p>
          <div
            ref={pricingRef}
            className="isolate mx-auto mt-16 grid max-w-sm grid-cols-1 gap-y-8 sm:mt-20"
          >
            <div className="flex flex-col justify-center rounded-3xl bg-white dark:bg-gray-800 p-8 ring-1 ring-gray-200 dark:ring-gray-700 xl:p-10 lg:z-10 lg:rounded-b-none">
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-indigo-600 text-lg font-semibold leading-8">
                    Başlangıç
                  </h3>
                  <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                    En popüler
                  </p>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  Hızla büyüyen işinizle ölçeklenen bir plan.
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                    $32
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600 dark:text-gray-300">
                    /ay
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600 dark:text-gray-300"
                >
                  {[
                    "25 ürün",
                    "10.000 aboneye kadar",
                    "Gelişmiş analitik",
                    "24 saat destek yanıt süresi",
                    "Pazarlama otomasyonları",
                  ].map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="group">
                <a
                  href="#"
                  onClick={() => {
                    goToTop();
                    handleButtonClick();
                  }}
                  className={`mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 ${bgColor}`}
                >
                  Satın alma planı
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
