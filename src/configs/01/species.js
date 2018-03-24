const species = [
  {
    name: 'Multiply earlier',
    act: ({ stats }) => {
      if (stats.fed > 4) {
        return ['multiply'];
      }
      return ['eat'];
    },
    initNumber: 100,
  },
  {
    name: 'Multiply later',
    act: ({ stats }) => {
      if (stats.fed > 6) {
        return ['multiply'];
      }
      return ['eat'];
    },
    initNumber: 100,
  },
];

export default species;
