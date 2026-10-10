// 5500-2번 광교 출발 시간표 (사용자가 첨부한 '5500-2번 운행시간' 이미지 기준).
// weekday = 평일(70회), weekend = 토요일·일요일·공휴일(56회).
// 각 차량별 departures 배열은 1~5회차 순서이며 null은 미운행입니다.
// doubleDeck: 이미지의 노란색(2층 버스) 회차. reserved: 예약 운행 회차.
// charterWeekday는 별도 전세버스 안내이며 일반 광교 출발 횟수/다음 버스 계산에 포함하지 않습니다.
const rawData5500_2 = {
  "origin": "광교",
  "weekday": [
    {
      "vehicle": 1,
      "departures": [
        "05:10",
        "08:20",
        "12:00",
        "15:40",
        "19:40"
      ],
      "doubleDeck": []
    },
    {
      "vehicle": 2,
      "departures": [
        "05:20",
        "08:40",
        "12:20",
        "16:12",
        "20:30"
      ],
      "doubleDeck": []
    },
    {
      "vehicle": 3,
      "departures": [
        "05:30",
        "08:55",
        "12:30",
        "16:24",
        "20:55"
      ],
      "doubleDeck": []
    },
    {
      "vehicle": 4,
      "departures": [
        "05:40",
        "09:05",
        "12:45",
        "17:00",
        null
      ],
      "doubleDeck": [
        1,
        2,
        3,
        4
      ]
    },
    {
      "vehicle": 5,
      "departures": [
        "05:55",
        "09:30",
        "13:05",
        "17:15",
        null
      ],
      "doubleDeck": []
    },
    {
      "vehicle": 6,
      "departures": [
        "06:10",
        "09:50",
        "13:20",
        "17:30",
        null
      ],
      "doubleDeck": [
        1,
        2,
        3,
        4
      ]
    },
    {
      "vehicle": 7,
      "departures": [
        "06:20",
        "10:05",
        "13:40",
        "17:45",
        null
      ],
      "doubleDeck": []
    },
    {
      "vehicle": 8,
      "departures": [
        "06:30",
        "10:20",
        "14:00",
        "18:00",
        null
      ],
      "doubleDeck": [
        1,
        2,
        3,
        4
      ]
    },
    {
      "vehicle": 9,
      "departures": [
        "07:00",
        "10:30",
        "14:10",
        "18:15",
        "22:00"
      ],
      "doubleDeck": [],
      "reserved": [
        1
      ]
    },
    {
      "vehicle": 10,
      "departures": [
        "06:38",
        "10:40",
        "14:20",
        "18:30",
        null
      ],
      "doubleDeck": [
        1,
        2,
        3,
        4
      ]
    },
    {
      "vehicle": 11,
      "departures": [
        "06:46",
        "10:50",
        "14:40",
        "18:45",
        "22:30"
      ],
      "doubleDeck": [
        1,
        2
      ]
    },
    {
      "vehicle": 12,
      "departures": [
        "06:54",
        "11:00",
        "15:00",
        "19:00",
        "23:00"
      ],
      "doubleDeck": []
    },
    {
      "vehicle": 13,
      "departures": [
        "07:05",
        "11:12",
        "15:20",
        "19:20",
        null
      ],
      "doubleDeck": [
        1,
        3,
        4
      ]
    },
    {
      "vehicle": 14,
      "departures": [
        "07:15",
        "11:24",
        "16:00",
        "20:05",
        null
      ],
      "doubleDeck": [
        3,
        4
      ]
    },
    {
      "vehicle": 15,
      "departures": [
        "07:30",
        "11:36",
        "16:36",
        "21:15",
        null
      ],
      "doubleDeck": [
        1,
        2,
        3,
        4
      ]
    },
    {
      "vehicle": 16,
      "departures": [
        "07:50",
        "11:50",
        "16:48",
        "21:40",
        null
      ],
      "doubleDeck": [
        1,
        2,
        3,
        4
      ]
    }
  ],
  "weekend": [
    {
      "vehicle": 1,
      "departures": [
        "05:10",
        "08:25",
        "12:00",
        "16:00",
        "19:50"
      ],
      "doubleDeck": []
    },
    {
      "vehicle": 2,
      "departures": [
        "05:30",
        "08:50",
        "12:20",
        "16:20",
        "20:15"
      ],
      "doubleDeck": []
    },
    {
      "vehicle": 3,
      "departures": [
        "05:45",
        "09:15",
        "12:40",
        "16:40",
        "20:35"
      ],
      "doubleDeck": []
    },
    {
      "vehicle": 4,
      "departures": [
        "06:00",
        "09:40",
        "13:00",
        "17:00",
        null
      ],
      "doubleDeck": [
        1,
        2,
        3,
        4
      ]
    },
    {
      "vehicle": 5,
      "departures": [
        "06:15",
        "10:00",
        "13:20",
        "17:20",
        "21:00"
      ],
      "doubleDeck": []
    },
    {
      "vehicle": 6,
      "departures": [
        "06:30",
        "10:15",
        "13:40",
        "17:40",
        null
      ],
      "doubleDeck": [
        1,
        2,
        3,
        4
      ]
    },
    {
      "vehicle": 7,
      "departures": [
        "06:45",
        "10:30",
        "14:00",
        "18:00",
        "21:30"
      ],
      "doubleDeck": []
    },
    {
      "vehicle": 8,
      "departures": [
        "07:00",
        "10:45",
        "14:20",
        "18:20",
        "22:00"
      ],
      "doubleDeck": []
    },
    {
      "vehicle": 9,
      "departures": [
        "07:15",
        "11:00",
        "14:40",
        "18:40",
        null
      ],
      "doubleDeck": [
        1,
        2,
        3,
        4
      ]
    },
    {
      "vehicle": 10,
      "departures": [
        "07:30",
        "11:15",
        "15:00",
        "19:00",
        "22:30"
      ],
      "doubleDeck": []
    },
    {
      "vehicle": 11,
      "departures": [
        "07:45",
        "11:30",
        "15:15",
        "19:15",
        "23:00"
      ],
      "doubleDeck": []
    },
    {
      "vehicle": 12,
      "departures": [
        "08:00",
        "11:45",
        "15:35",
        "19:30",
        null
      ],
      "doubleDeck": [
        1,
        2,
        3,
        4
      ]
    }
  ],
  "charterWeekday": {
    "commute": [
      "06:05",
      "06:25",
      "07:20(서봉마을 출발)",
      "08:05",
      "08:00(성복역 출발)",
      "08:35(성복역 출발)"
    ],
    "return": [
      "17:00",
      "17:40",
      "18:20",
      "18:40",
      "19:00"
    ]
  }
};
