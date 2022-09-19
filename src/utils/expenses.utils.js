export const sortByOptions = [
  { value: 'date_desc', label: 'Date: Desc' },
  { value: 'date_asc', label: 'Date: Asc' },
  { value: 'amount_desc', label: 'Amount: Desc' },
  { value: 'amount_asc', label: 'Amount: Asc' },
];

export const categoryOptions = [
  { value: 'all', label: 'All' },
  { value: 'banking', label: 'Banking' },
  { value: 'food', label: 'Food' },
  { value: 'housing', label: 'Housing' },
  { value: 'insurance', label: 'Insurance' },
  { value: 'medical', label: 'Medical' },
  { value: 'miscellaneous', label: 'Miscellaneous' },
  { value: 'personal', label: 'Personal' },
  { value: 'recreation', label: 'Recreation' },
  { value: 'transportation', label: 'Transportation' },
  { value: 'utilities', label: 'Utilities' },
];

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
