import Account from '../src/account';

test('account.getBalance()', () => {
  let obj = new Account('Juan Gómez García', 'BBVA', 1234);
  let today = new Date(2021, 1, 15);

  obj.balance = 520;
  expect(obj.getBalance(today, 1234)).toBe(
    'LUNES 15 DE FEBRERO DEL 2021, EL SALDO EN LA CUENTA DEL SR(A) JUAN GÓMEZ GARCÍA EN EL BANCO BBVA ES DE $520 PESOS'
  );

  expect(obj.getBalance(today, 1111)).toBe('ERROR');
});
