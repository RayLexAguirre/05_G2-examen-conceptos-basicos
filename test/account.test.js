import Account from '../src/account';

test('account.constructor()', () => {
  let obj = new Account('Juan Gómez García', 'BBVA', 1234);

  expect(obj.balance).toBe(0);
  expect(obj.name).toBe('Juan Gómez García');
  expect(obj.bank).toBe('BBVA');
  expect(obj.nip).toBe(1234);
});
