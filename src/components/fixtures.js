const sampleInput = [
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
    test: {
      a: 1,
      b: 1,
      C: 1,
      D: 1,
      E: 1,
      f: 1,
      g: 1,
      H: 1,
      I: 1,
      J: 1,
      K: 1,
      L: 1,
      M: 1,
      N: 1,
      O: 1
    }
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

export { sampleInput };
