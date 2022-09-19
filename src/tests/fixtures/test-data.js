import cuid from 'cuid';
import { add, sub } from 'date-fns';

export const expenses = {
  list: [
    {
      id: cuid(),
      description: 'Rent',
      note: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      category: 'housing',
      amount: 1250,
      date: new Date(),
    },
    {
      id: cuid(),
      description: 'Takeout',
      note: 'Voluptas repudiandae veritatis laborum dolorem autem dignissimos asperiores numquam.',
      category: 'food',
      amount: 14.45,
      date: add(new Date(), { days: 5 }),
    },
    {
      id: cuid(),
      description: 'Sneakers',
      note: 'Pariatur fugiat, voluptatum provident qui tempore aliquid quibusdam ipsam quod recusandae.',
      category: 'personal',
      amount: 87.25,
      date: sub(new Date(), { days: 5 }),
    },
  ],
};
