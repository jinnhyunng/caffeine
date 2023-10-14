/*
mouse,0
cow,1
tiger,2


rabbit,3
dragon,4
snake,5
horse,6
sheep,7
monkey,8
chick,9
dog,10
pig,11
*/


/*완전 정상 0(0,1,2) 
위험 1(3,4)
중독2 */(5,6,7,8)

const qnaList = [
  {
    q: '1. 커피나 에너지 음료를 하루 4잔 이상 마신다. ',
    a: [
      { answer: '네', type: [2] },
      { answer: '아니요', type: [0, 1] },
    ]
  },
  {
    q: '2. 카페인 미 섭취시 신경이 예민해진다. ',
    a: [
      { answer: '네', type: [2] },
      { answer: '아니요', type: [0,1] },
    ]
  },
  {
    q: '3. 속이 쓰리고 수면 장애가 있지만 커피를 줄일 수 없다.',
    a: [
      { answer: '네', type: [2] },
      { answer: '아니요', type: [0,1] },
    ]
  },
  {
    q: '4. 물이나 카페인이 없는 음료는 거의 마시지 않는다.',
    a: [
      { answer: '네', type: [2] },
      { answer: '아니요', type: [0,1] },
    ]
  },
  {
    q: '5. 작은 일에도 불안해하고 자주 변덕을 부린다',
    a: [
      { answer: '네', type: [2,1] },
      { answer: '아니요', type: [0]},
    ]
  },

  {
    q: '6. 야근을 할 때 에너지음료나 커피가 꼭 필요하다',
    a: [
      { answer: '네', type: [2,1] },
      { answer: '아니요', type: [0] },
    ]
  },

  {
    q: '7. 심장이 두근거리고 불규칙하게 뛴다',
    a: [
      { answer: '네', type: [2,1] },
      { answer: '아니요', type: [0] },
    ]
  },
  {
    q: '8. 카페인을 섭취해야 지치지 않는다고 느낀다',
    a: [
      { answer: '네', type: [2] },
      { answer: '아니요', type: [0,1 ] },
    ]
  }
]

const infoList = [
  {
    name: '정상',
    desc: '올바른 카페인 섭취를 하고 있습니다 앞으로도 많이 섭취하지 않도록 주의하세요! '
  },
  {
    name: '주의',
    desc: '과한 카페인 섭취는 하지 않지만 주의하세요!'
  },
  {
    name: '위험',
    desc: '카페인 섭취량이 많으니 줄이세요 위험합니다!'
  }
]
