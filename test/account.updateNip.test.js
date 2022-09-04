import Account from '../src/account';

test('account.updateNip()', () => {
  let obj = new Account('Juan Gómez García', 'BBVA', 1234);

  obj.updateNip(1111, 2222);
  expect(obj.nip).toBe(1234);

  obj.updateNip(1234, 2222);
  expect(obj.nip).toBe(2222);
});
