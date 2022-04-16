const dataMock = [
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Ronja",
      last: "Lahti",
    },
    email: "ronja.lahti@example.com",
    login: {
      uuid: "c697826a-8d05-483c-9bd2-73690beaf27c",
      username: "blackladybug306",
      password: "smegma",
      salt: "2bwHoW1R",
      md5: "5f25c0c7aa85c9396645d1ca8755cb45",
      sha1: "b8a851edbb1050b0b6e99603f81d6daa4fff83d9",
      sha256:
        "9d6d812adfb3f5bd5fdc502c2c63e6cd7b4383dc28f7585b421428d14b533147",
    },
    registered: {
      date: "2012-07-11T11:03:50.681Z",
      age: 10,
    },
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Olivier",
      last: "Winklaar",
    },
    email: "olivier.winklaar@example.com",
    login: {
      uuid: "7c54b6c6-bf60-43ef-ad37-6469c5208d26",
      username: "bigbear557",
      password: "friends",
      salt: "3oBAqzLV",
      md5: "1409edfe445f3f1e88c0964f7b559b0a",
      sha1: "24addae5b0a15631ce4408bf24b1fb63a330c7ff",
      sha256:
        "a577bcc5518b98788f48d78b7785de690da1eec1bca47a0492fe053c5c03c0d4",
    },
    registered: {
      date: "2004-07-05T04:33:52.255Z",
      age: 18,
    },
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Kaitlin",
      last: "Pierce",
    },
    email: "kaitlin.pierce@example.com",
    login: {
      uuid: "39a0c01c-26c3-4f85-8064-60b71d2988be",
      username: "bigbird112",
      password: "bertha",
      salt: "Nm2G76ku",
      md5: "55c0989412ca164cc566128123629266",
      sha1: "73b33283002f1248c52fe9b8501488106f54690b",
      sha256:
        "1e0cd6e36964d166b744e83183ab78566adadcf33f594188b3be4b2229aa17d4",
    },
    registered: {
      date: "2016-12-01T03:11:56.855Z",
      age: 6,
    },
  },
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Cecilie",
      last: "Olsen",
    },
    email: "cecilie.olsen@example.com",
    login: {
      uuid: "201fa3d8-fe25-4210-81de-644febfc4d2a",
      username: "brownkoala258",
      password: "celebrity",
      salt: "x7AK75zH",
      md5: "ecff51abd15faf8835683efb35650a4f",
      sha1: "05f9e6a8a193eb591912438f9c89cf956dc4ff28",
      sha256:
        "eb800946d8acbe51e52c1ce23dd664fa609938b5ffece8d2cd94294029805f74",
    },
    registered: {
      date: "2017-04-08T06:54:59.392Z",
      age: 5,
    },
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Herbert",
      last: "Hunt",
    },
    email: "herbert.hunt@example.com",
    login: {
      uuid: "6286c6f6-9fe6-4834-b2cd-484e66095616",
      username: "whitedog692",
      password: "sampson",
      salt: "W7tpakA2",
      md5: "4adc3c261af89ffa05507f1e1da94ab9",
      sha1: "1250ddf84ae4f0fbfc123c65beedfcf8e83ea3a5",
      sha256:
        "6e4a3e398da1b014e768e0c658d6f92b8a3c9e27c7e8c8ae52506e82121e1091",
    },
    registered: {
      date: "2005-04-22T02:25:14.326Z",
      age: 17,
    },
  },
];

export const API_DATA_MOCK = {
  results: [
    {
      gender: "female",
      name: {
        title: "Mrs",
        first: "Magic",
        last: "Keyword",
      },
      email: "ronja.lahti@example.com",
      login: {
        uuid: "c697826a-8d05-483c-9bd2-73690beaf27c",
        username: "test@magic.com",
        password: "smegma",
        salt: "2bwHoW1R",
        md5: "5f25c0c7aa85c9396645d1ca8755cb45",
        sha1: "b8a851edbb1050b0b6e99603f81d6daa4fff83d9",
        sha256:
          "9d6d812adfb3f5bd5fdc502c2c63e6cd7b4383dc28f7585b421428d14b533147",
      },
      registered: {
        date: "2012-07-11T11:03:50.681Z",
        age: 10,
      },
    },
  ],
  info: {
    seed: "5a70b63ca60acf61",
    results: 5,
    page: 1,
    version: "1.3",
  },
};

export default dataMock;
