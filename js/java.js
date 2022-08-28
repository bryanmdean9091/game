const wordBank = ['ace', 'aid', 'aim', 'add', 'all', 'art', 'ash','bad', 'bag', 'bat','bed', 'bee', 'beg', 'bug', 'bus', 'buy'];
const randomIndex = Math.floor(Math.random() * wordBank.length);

const word = wordBank[randomIndex];
console.log(word)
