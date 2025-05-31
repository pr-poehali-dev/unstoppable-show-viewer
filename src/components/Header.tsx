import React from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-invincible-red to-invincible-blue text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Icon name="Zap" className="text-invincible-red" size={24} />
            </div>
            <h1 className="text-2xl font-montserrat font-bold">Непобедимый</h1>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a
              href="#"
              className="hover:text-invincible-yellow transition-colors"
            >
              Главная
            </a>
            <a
              href="#episodes"
              className="hover:text-invincible-yellow transition-colors"
            >
              Эпизоды
            </a>
            <a
              href="#about"
              className="hover:text-invincible-yellow transition-colors"
            >
              О сериале
            </a>
          </nav>

          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
