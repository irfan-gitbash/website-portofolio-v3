import React, { useState, useEffect } from "react";
import { Linkedin, Instagram, Phone, Github, Sun, Moon } from "lucide-react";
import { TiktokIcon } from "./components/TiktokIcon";

function App() {
  const [isZoomed, setIsZoomed] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("darkMode") === "true";
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
        aria-label="Toggle dark mode"
      >
        {darkMode ? (
          <Sun className="w-6 h-6 text-yellow-500" />
        ) : (
          <Moon className="w-6 h-6 text-gray-700" />
        )}
      </button>

      {/* Profile Section */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="../src/images/Muhammad.jpeg"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white dark:border-gray-800 shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Muhammad irfan Suherman
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          Front End Developer
        </p>
        <a
          href=""
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
        >
          www.muhammadirfan.my.id
        </a>

        {/* Social Media Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 flex items-center justify-center gap-2">
            <span className="w-3 h-3 bg-teal-500 rounded-full"></span>
            Social Media
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* LinkedIn */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200">
              <div className="flex items-center justify-center mb-4">
                <Linkedin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold mb-1 dark:text-white">500+</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Connections
              </p>
              <a
                href="https://www.linkedin.com/in/muhammad-irfan-suherman-7b7871194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                View Profile →
              </a>
            </div>

            {/* Instagram */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200">
              <div className="flex items-center justify-center mb-4">
                <Instagram className="w-8 h-8 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-3xl font-bold mb-1 dark:text-white">1K</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Followers</p>
              <a
                href="https://www.instagram.com/irf.annss?igsh=MXdsdmMxa2U5d284Yg=="
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                View Profile →
              </a>
            </div>

            {/* TikTok */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200">
              <div className="flex items-center justify-center mb-4">
                <TiktokIcon className="w-8 h-8 dark:text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-1 dark:text-white">448</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Followers</p>
              <a
                href="https://www.tiktok.com/@tulisancode?_t=ZS-8uEcCCm59hX&_r=1"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                View Profile →
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200">
              <div className="flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-3xl font-bold mb-1 dark:text-white">+62</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">WhatsApp</p>
              <a
                href="https://api.whatsapp.com/send/?phone=%2B6289629973589&text&type=phone_number&app_absent=0"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                Message →
              </a>
            </div>

            {/* GitHub */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transition-colors duration-200">
              <div className="flex items-center justify-center mb-4">
                <Github className="w-8 h-8 text-gray-800 dark:text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-1 dark:text-white">23+</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Repositories
              </p>
              <a
                href="https://github.com/irfan-gitbash"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                View Profile →
              </a>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <span>✏️</span>
              Certificates
            </h2>
            <a
              href="#"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
            >
              View All →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Project 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-200">
              <img
                src="../src/images/Full Stack Web Dev .png"
                className={`w-full h-48 object-cover transition-transform duration-300 ${
                  isZoomed ? "scale-125" : "scale-100"
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold dark:text-white">
                    Full Stack Web Developer
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Certification MSIB FULL STACK WEB DEVELOPER....
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    HTML
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    CSS
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    Javascript
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    Python
                  </span>
                </div>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-200">
              <img
                src="../src/images/Javascript Certification.PNG"
                className={`w-full h-48 object-cover transition-transform duration-300 ${
                  isZoomed ? "scale-125" : "scale-100"
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold dark:text-white">
                    Javascript Certification Freedcodecamp
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Certification Javascript Course Online Freecodecamp...
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    Javascript
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    React
                  </span>
                </div>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-200">
              <img
                src="../src/images/Sertifikat Responsive Web Design.PNG"
                className={`w-full h-48 object-cover transition-transform duration-300 ${
                  isZoomed ? "scale-125" : "scale-100"
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold dark:text-white">
                    Responsive Web Design
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Certification Responsive Web Design...
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    HTML
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    CSS
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    Tailwind CSS
                  </span>
                </div>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* Project 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-200">
              <img
                src="../src/images/Dicoding-web-dasar.png"
                className={`w-full h-48 object-cover transition-transform duration-300 ${
                  isZoomed ? "scale-125" : "scale-100"
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold dark:text-white">
                    Belajar Dasar Pemrograman web
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Certification Dicoding Belajar Dasar Pemrograman web...
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    HTML
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    CSS
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    Tailwind CSS
                  </span>
                </div>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* Project 5 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-200">
              <img
                src="../src/images/Solo-learn-Javascript.png"
                className={`w-full h-48 object-cover transition-transform duration-300 ${
                  isZoomed ? "scale-125" : "scale-100"
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold dark:text-white">
                    Introduction To Javascript
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Certification Sololearn Introduction Javascript...
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    HTML
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    CSS
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    Tailwind CSS
                  </span>
                </div>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* Project 6 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-200">
              <img
                src="../src/images/Dicoding-front-end-web-dev.png"
                className={`w-full h-48 object-cover transition-transform duration-300 ${
                  isZoomed ? "scale-125" : "scale-100"
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold dark:text-white">
                    Belajar Membuat Front-End Web untuk Pemula
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Certification dicoding Front-end Web ...
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    HTML
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    CSS
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    Tailwind CSS
                  </span>
                </div>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* Project 7 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-200">
              <img
                src="../src/images/dicoding-belajar dasar-pemograman-javascript.png"
                className={`w-full h-48 object-cover transition-transform duration-300 ${
                  isZoomed ? "scale-125" : "scale-100"
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold dark:text-white">
                    Belajar Dasar Pemrograman JavaScript
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Certification dicoding belajar dasar pemrograman javascript...
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    HTML
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    CSS
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    Tailwind CSS
                  </span>
                </div>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* Project 8 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-200">
              <img
                src="../src/images/dicoding-belajar-dasar-ai.png"
                className={`w-full h-48 object-cover transition-transform duration-300 ${
                  isZoomed ? "scale-125" : "scale-100"
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold dark:text-white">
                    Belajar Dasar AI
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Certification Responsive Web Design...
                </p>
                <div className="flex gap-2 mb-4">
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    HTML
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    CSS
                  </span>
                  <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs px-2 py-1 rounded">
                    Tailwind CSS
                  </span>
                </div>
                <a
                  href="#"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
