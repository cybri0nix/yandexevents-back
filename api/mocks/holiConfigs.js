module.exports = {
  /* MoscowDay */
  "1": {
    "params": {
      "holidayId": 1,
      "mainTabTitle": "Подборки",
      "enabledBetweenDates": {
        "from": "2017-09-06 09:00",
        "to": "2017-09-13 23:59"
      },
      "holiDates": [
        {
          "count": 10,
          "date": "2017-09-09",
          "dateFormatted": {
            "day": 9,
            "month": "сентября"
          }
        },
        {
          "count": 4,
          "date": "2017-09-10",
          "dateFormatted": {
            "day": 10,
            "month": "сентября"
          }
        }
      ],
      "categories": [
        {
          "id": 1,
          "title": "Выставки"
        },
        {
          "id": 2,
          "title": "Фестивали"
        },
        {
          "id": 3,
          "title": "Спорт"
        },
        {
          "id": 4,
          "title": "Концерты"
        },
        {
          "id": 5,
          "title": "Парки"
        },
        {
          "id": 6,
          "title": "Экскурсии"
        }
      ],
      "style": {
        "topBar": {
          "backgroundColor": "#333333",
          "color": "#ffffff"
        },
        "body": {},
        "card": {
          "boxShadow": "0 0 8px rgba(0, 0, 0, .5)"
        },
        "event": {},
        "filter": {}
      }
    },
    "style": {
      "style": {
        "className": {
          "margin": 10
        },
        "block_top_five_events": {
          "color": "#000000"
        }
      },
    },
    "containers": [
      {
        "id": 1,
        "name": "block_top_five_events",
        "type": "events",
        "route": {
          "url": "/event/%"
        },
        "data": {
          "method": "events",
          "holiday": 1,
          "page": 1,
          "items_per_page": 5,
          "order_col": "begin_time",
        },
        "params": {
          "title": "Топ 5 событий",
          "cardSize": "medium"
        },
        "style": "link-to-style-object",
      },
      {
        "id": 2,
        "name": "top_10_places",
        "type": "slider",
        "route": {
          "url": "/place/%"
        },
        "data": {
          "method": "places",
          "holiday": 1,
          "page": 1,
          "items_per_page": 10,
          "order_col": "rating",
        },
        "params": {
          "title": "Топ 10 мест",
          "cardSize": "small"
        },
        "style": "link-to-style-object",
      },
      {
        "id": 3,
        "name": "place_park_gorkogo",
        "type": "slider",
        "route": {
          "url": "/event/%"
        },
        "data": {
          "method": "events",
          "holiday": 1,
          "page": 1,
          "items_per_page": 5,
          "place": 1,
          "order_col": "begin_time",
        },
        "params": {
          "title": "Парк горького: куда сходить",
          "cardSize": "medium"
        },
        "style": "",
      },
      {
        "id": 4,
        "name": "hint_parking",
        "type": "hint",
        "route": null,
        "data": {
          "method": "hint",
          "holiday": 1,
          "orderBy": "random",
        },
        "params": {
          "cardSize": "medium"
        }
      },
      {
        "id": 5,
        "name": "artists",
        "type": "carousel",
        "route": {
          "url": "/entity/%"
        },
        "data": {
          "method": "entities",
          "holiday": 1,
          "category": "artits"
        },
        "params": {
          "title": "Артисты",
          "cardSize": "medium"
        }
      }
    ],
  },

  /**
   * 
   */
  "2": {
    "params": {
      "holidayId": 1,
      "mainTabTitle": "Навигатор",
      "enabledBetweenDates": {
        "from": "2017-05-20 09:00",
        "to": "2017-05-21 23:59"
      },
      "holiDates": [
        {
          "count": 10,
          "date": "2017-05-20",
          "dateFormatted": {
            "day": 20,
            "month": "мая"
          }
        }
      ]
    },
    "containers": [
      /* Блок - Музеи */
      /* { } */
      /* Блок - экспонаты */
      {
        "id": 6,
        "name": "exhibitions",
        "type": "carousel",
        "route": {
          "url": "/entity/%"
        },
        "data": {
          "method": "entities",
          "holiday": 2,
          "category": "exhibitions",
        },
        "params": {
          "title": "Экспонаты",
          "cardSize": "medium"
        }
      }
    ]
  }
}
