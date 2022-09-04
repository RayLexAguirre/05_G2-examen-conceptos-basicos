import Account from '../src/account';

test('account.deposit()', () => {
  let obj = new Account('Juan Gómez García', 'BBVA', 1234);

  expect(obj.deposit(100, 1234)).toBe(100);
  expect(obj.deposit(50, 1234)).toBe(150);
  expect(obj.deposit(50, 1111)).toBe(150);
});
