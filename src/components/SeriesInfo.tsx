import React from "react";
import Icon from "@/components/ui/icon";

const SeriesInfo = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-montserrat font-bold text-invincible-dark mb-6">
              О сериале
            </h2>
            <p className="text-lg font-opensans text-gray-700 mb-6">
              "Непобедимый" — это анимационный сериал для взрослых, основанный
              на комиксах Роберта Киркмана. История следует за Марком Грейсоном,
              сыном самого могущественного супергероя на планете, который
              развивает собственные силы в свой семнадцатый день рождения.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon
                    name="Star"
                    className="text-invincible-yellow"
                    size={20}
                  />
                  <span className="font-semibold">Рейтинг</span>
                </div>
                <p className="text-2xl font-bold text-invincible-red">9.0/10</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon
                    name="Calendar"
                    className="text-invincible-blue"
                    size={20}
                  />
                  <span className="font-semibold">Год выхода</span>
                </div>
                <p className="text-2xl font-bold text-invincible-dark">2021</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon
                    name="Clock"
                    className="text-invincible-red"
                    size={20}
                  />
                  <span className="font-semibold">Длительность</span>
                </div>
                <p className="text-2xl font-bold text-invincible-dark">
                  45 мин
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon
                    name="Users"
                    className="text-invincible-blue"
                    size={20}
                  />
                  <span className="font-semibold">Сезоны</span>
                </div>
                <p className="text-2xl font-bold text-invincible-dark">2</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
              alt="Invincible Series"
              className="w-full h-80 object-cover rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-invincible-dark/50 to-transparent rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeriesInfo;
