import React from "react";
import Icon from "@/components/ui/icon";

const EpisodesList = () => {
  const episodes = [
    {
      id: 1,
      title: "Это моя жизнь",
      description:
        "Марк Грейсон получает суперсилы в свой семнадцатый день рождения и начинает тренироваться со своим отцом.",
      duration: "47 мин",
      season: 1,
      image:
        "https://images.unsplash.com/photo-1531259683007-016a943acd14?w=300&h=200&fit=crop",
    },
    {
      id: 2,
      title: "Здесь говорит глобальная безопасность",
      description:
        "Марк изо всех сил пытается совладать со своими способностями, когда новая угроза ставит под сомнение всё, что он знает.",
      duration: "44 мин",
      season: 1,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
    },
    {
      id: 3,
      title: "Кто ты?",
      description:
        "Марк узнает шокирующую правду о своём отце и сталкивается с моральными дилеммами супергероя.",
      duration: "45 мин",
      season: 1,
      image:
        "https://images.unsplash.com/photo-1611805166972-afdddb84c46e?w=300&h=200&fit=crop",
    },
    {
      id: 4,
      title: "Космическая угроза",
      description:
        "Непобедимый сталкивается с инопланетными захватчиками и должен защитить Землю любой ценой.",
      duration: "48 мин",
      season: 1,
      image:
        "https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=300&h=200&fit=crop",
    },
  ];

  return (
    <section id="episodes" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-montserrat font-bold text-center text-invincible-dark mb-12">
          Эпизоды
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {episodes.map((episode) => (
            <div
              key={episode.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative">
                <img
                  src={episode.image}
                  alt={episode.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <button className="bg-invincible-red hover:bg-red-600 p-3 rounded-full text-white transform group-hover:scale-110 transition-transform">
                    <Icon name="Play" size={24} />
                  </button>
                </div>
                <div className="absolute top-4 left-4 bg-invincible-blue text-white px-2 py-1 rounded text-sm font-semibold">
                  S{episode.season}E{episode.id}
                </div>
                <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {episode.duration}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-montserrat font-bold text-invincible-dark mb-3">
                  {episode.title}
                </h3>
                <p className="text-gray-600 font-opensans leading-relaxed">
                  {episode.description}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <Icon name="Eye" size={16} />
                      <span>2.1M</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="ThumbsUp" size={16} />
                      <span>95%</span>
                    </span>
                  </div>

                  <button className="text-invincible-blue hover:text-invincible-red transition-colors">
                    <Icon name="Bookmark" size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-invincible-red to-invincible-blue text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow">
            Показать все эпизоды
          </button>
        </div>
      </div>
    </section>
  );
};

export default EpisodesList;
