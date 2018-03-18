export default [
  // {
  //   act: ({ eat, multiply }) => {
  //     return eat()
  //       .then(() => multiply());
  //   },
  //   initNumber: 10,
  // },
  {
    act: ({ eat }) => {
      return eat();
    },
    initNumber: 10000,
  },
];
