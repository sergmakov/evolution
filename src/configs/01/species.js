export default [
  {
    act: ({ eat, multiply }) => {
      eat();
      multiply();
    },
    initNumber: 3,
  },
  {
    act: ({ eat }) => {
      eat();
    },
    initNumber: 3,
  },
];
