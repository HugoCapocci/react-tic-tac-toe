  //   history = [
  //   // Avant le premier mouvement
  //   {
  //     cases: [
  //       null, null, null,
  //       null, null, null,
  //       null, null, null,
  //     ]
  //   },
  //   // Après le premier mouvement
  //   {
  //     cases: [
  //       null, null, null,
  //       null, 'X', null,
  //       null, null, null,
  //     ]
  //   },
  //   // Apres le second mouvement
  //   {
  //     cases: [
  //       null, null, null,
  //       null, 'X', null,
  //       null, null, 'O',
  //     ]
  //   },
  //   // ...
  // ]
 
 export default function calculateWinner(cases) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (cases[a] && cases[a] === cases[b] && cases[a] === cases[c]) {
        return cases[a];
      }
    }
    return null;
  }