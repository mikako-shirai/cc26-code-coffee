const trueLinkedListBuilder = (n) => {
  if (n <= 0) return null;
  return { value: true, next: trueLinkedListBuilder(n-1) };
};


// Linked List Builder
// Secret Code: 10FCA467
