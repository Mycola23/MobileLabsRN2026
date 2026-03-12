export const NEWS = Array.from({ length: 20 }, (_, i) => ({
  id: i.toString(),
  title: `Ste amet si cough №${i + 1}`,
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.${i + 1} Vestibulum vestibulum feugiat arcu at venenatis. Vivamus gravida diam augue, non vestibulum eros scelerisque et. Integer commodo tortor in porta ornare. Aliquam consectetur justo vel sapien vulputate finibus. Sed non rhoncus orci. Vivamus consequat ultricies ligula, ac vulputate dolor lobortis ac. Vivamus a bibendum orci. Proin eget mattis turpis, eu sollicitudin urna. Curabitur id mattis nibh.`,
  image: `https://picsum.photos/seed/${i + 67}/400/200`,
}));

export const CONTACTS = [
  {
    title: 'Family',
    data: [{ id: '1', name: 'father' }, { id: '2', name: 'mom' },{ id: '7', name: 'grandpa' }, { id: '8', name: 'grandma' },{ id: '9', name: '__brother__' }],
  },
  {
    title: 'WOrk',
    data: [{ id: '3', name: 'pr Andrew' }, { id: '4', name: 'col Jhonatan' }],
  },
  {
    title: 'Friends',
    data: [{ id: '5', name: 'Max Verstapen 😎' }, { id: '6', name: 'Victory Mills 😶‍🌫️' },{ id: '10', name: 'Daniel Devis 😶' }],
  },
];