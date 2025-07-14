const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]
let holiday = 0;

// for文の場合
for (holiday;holiday < holidays.length;holiday++) {
  console.log(holidays[holiday]);
}

// while文の場合
holiday = 0;
while (holiday < holidays.length) {
  console.log(holidays[holiday]);
  holiday++;
}