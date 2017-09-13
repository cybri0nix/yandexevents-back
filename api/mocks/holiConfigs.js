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
            "id": "20",
            "title": "Салюты",
            "order_priority": 1200,
            "events_count": "3"
        },
        {
            "id": "2",
            "title": "Тихий отдых",
            "order_priority": 900,
            "events_count": "5"
        },
        {
            "id": "3",
            "title": "Парки",
            "order_priority": 800,
            "events_count": "4"
        },
        {
            "id": "4",
            "title": "Молодежные",
            "order_priority": 700,
            "events_count": "6"
        },
        {
            "id": "5",
            "title": "Семейные",
            "order_priority": 600,
            "events_count": "5"
        },
        {
            "id": "7",
            "title": "Активный отдых",
            "order_priority": 400,
            "events_count": "6"
        },
        {
            "id": "10",
            "title": "Концерты",
            "order_priority": 300,
            "events_count": "31"
        },
        {
            "id": "12",
            "title": "Кинопоказ",
            "order_priority": 200,
            "events_count": "2"
        },
        {
            "id": "9",
            "title": "Выставки",
            "order_priority": 200,
            "events_count": "15"
        },
        {
            "id": "11",
            "title": "Фестиваль",
            "order_priority": 150,
            "events_count": "1"
        },
        {
            "id": "13",
            "title": "Экскурсии",
            "order_priority": 100,
            "events_count": "13"
        },
        {
            "id": "8",
            "title": "Официальные",
            "order_priority": 100,
            "events_count": "13"
        }],
      "style": {
        "topBar": {
          "backgroundColor": "#fff",
          "color": "#000"
        },
        "body": {},
        "card": {},
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
        "type": "list",
        "route": {
          "url": "/event/%"
        },
        "data": {
          "method": "events",
          "holiday": 1,
          "page": 1,
          "items_per_page": 5,
          "order_col": "popularity",
        },
        "params": {
          "title": "",
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
      // {
      //   "id": 4,
      //   "name": "hint_parking",
      //   "type": "hint",
      //   "route": null,
      //   "data": {
      //     "method": "hint",
      //     "holiday": 1,
      //     "orderBy": "random",
      //   },
      //   "params": {
      //     "cardSize": "medium"
      //   }
      // },
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
          "category": "artists"
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
