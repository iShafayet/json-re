const sampleInput1 = [
  {
    userId: 1,
    name: {
      first: "Abdur",
      last: "Rahim"
    },
    country: "Bangladesh",
    age: 23,
    favoriteNumbers: [1, 4, 1],
    lastLogin: null,
    articles: [
      {
        title: "Hello",
        body: "World"
      },
      {
        title: "Hello 2",
        body: "World 1"
      }
    ],
    preferredLanguage: null
  },
  {
    userId: 2,
    name: {
      first: "Abd",
      middle: "Bin",
      last: "Karim"
    },
    country: "Saudi Arabia",
    age: 43,
    favoriteNumbers: [333],
    lastLogin: "2021-04-06T09:32:07.911Z",
    articles: [
      {
        title: "Art",
        body: "of war",
        isPrivate: true
      }
    ]
  },
  {
    userId: 3,
    name: {
      first: "John",
      last: null
    },
    country: "United States",
    age: 34,
    favoriteNumbers: [32, 4343, 34],
    articles: []
  },
  {
    userId: 4,
    name: null,
    country: "Canada",
    isUnderage: true,
    age: "5",
    favoriteNumbers: [9]
  }
];

const simpleCase1 = [
  {
    userId: 1,
    name: {
      first: "Abdur",
      last: "Rahim"
    },
    country: "Bangladesh",
    age: 23,
    favoriteNumbers: [1, 4, 1],
    lastLogin: null,
    articles: [
      {
        title: "Hello",
        body: "World"
      },
      {
        title: "Hello 2",
        body: "World 1"
      }
    ]
  }
];

const complexCase1 = [
  {
    dimensionsArray: [
      [1, 2],
      [4, 2],
      [9, 2]
    ],
    consumerArray: [
      {
        name: "James",
        readPostIdArray: [1, 3, 4, 2]
      }
    ],
    veryDeepArray: [[[[[1]]]]]
  }
];

const longDataCase1 = {
  userId: 1999999999999912323132,
  shortKey:
    "A very long value repeated again and again many times in order to test the UI limits of the application",
  shortKey2:
    "averylongvaluewithoutanyspaceinbetweenandrepeatedmanytimesinordertottestthelimitsoftheuioftheapplicationaverylongvaluewithoutanyspaceinbetweenandrepeatedmanytimesinordertottestthelimitsoftheuioftheapplication",
  averylongkeywithoutanyspaceinbetweenandrepeatedmanytimesinordertottestthelimitsoftheuioftheapplicationaverylongkeywithoutanyspaceinbetweenandrepeatedmanytimesinordertottestthelimitsoftheuioftheapplication:
    "averylongvaluewithoutanyspaceinbetweenandrepeatedmanytimesinordertottestthelimitsoftheuioftheapplicationaverylongvaluewithoutanyspaceinbetweenandrepeatedmanytimesinordertottestthelimitsoftheuioftheapplication",
  populousObject: {}
};
for (let i = 0; i < 100; i++) {
  longDataCase1.populousObject["key" + i] = true;
}

export { sampleInput1, simpleCase1, complexCase1, longDataCase1 };
