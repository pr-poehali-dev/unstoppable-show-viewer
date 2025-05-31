import React from "react";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-invincible-dark via-invincible-blue to-invincible-red min-h-[70vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-montserrat font-bold mb-4">
              НЕУЯЗ<span className="text-invincible-yellow">ВИ</span>МЫЙ
            </h1>
            <p className="text-xl font-opensans mb-6 text-gray-200">
              Взрослый анимационный сериал о супергерое, который должен
              научиться контролировать свои силы и защищать Землю.
            </p>
            <div className="flex space-x-4">
              <button className="bg-invincible-red hover:bg-red-600 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2">
                <Icon name="Play" size={20} />
                <span>Смотреть</span>
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-invincible-dark px-8 py-3 rounded-lg font-semibold transition-colors">
                Трейлер
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto relative animate-hero-float">
              <div className="absolute inset-0 bg-gradient-to-br from-invincible-red to-invincible-blue rounded-full opacity-20 blur-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400&h=400&fit=crop"
                alt="Mark Grayson in Invincible costume"
                className="w-full h-full object-cover rounded-full border-4 border-invincible-yellow shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <Icon name="ChevronDown" size={32} />
      </div>
    </section>
  );
};

export default HeroSection;
