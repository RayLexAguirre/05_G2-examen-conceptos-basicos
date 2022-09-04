import Account from '../src/account';

test('account.withdraw()', () => {
  let obj = new Account('Juan Gómez García', 'BBVA', 1234);

  obj.balance = 500;
  expect(obj.withdraw(100, 1234)).toBe(400);
  expect(obj.withdraw(50, 1234)).toBe(350);
  expect(obj.withdraw(50, 1111)).toBe(350);
  expect(obj.withdraw(500, 1234)).toBe(350);
});
