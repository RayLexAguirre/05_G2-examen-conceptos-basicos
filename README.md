![Points badge](../../blob/badges/.github/badges/points.svg)

![Logo UCOL](img/ucol-logo.jpg)

![Portada](img/cover.jpg)
>Fuvahmulah, Maldives. Located in its own atoll between Gaafu Dhaalu Atoll and Addu Atoll, the island of Fuvahmulah is the only one-island atoll in the Maldives. It has many distinctive features that make Fuvahmulah different from rest of the islands in Maldives. Fuvahmulah has a fish and a bird native to this island. That fish and bird are not found in any other part of the Maldives. It is also one of the few islands that have fresh water lakes. <span>Photo by <a href="https://unsplash.com/@jailam_r?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jailam Rashad</a> on <a href="https://unsplash.com/s/photos/beach?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

# Examen: Conceptos básicos
El objetivo de este ejercicio es evaluar el uso correcto de los conceptos básicos de la programación orientada a objetos:

- Clase
- Objeto
- Método
- Atributo
- Método constructor

También el uso de `String` y `Date`
## Requerimientos funcionales

1. (100 Puntos) Programar la clase `Account`. Deberá incluir los siguientes:
   - Atributos
     - `String balance` el saldo que tiene la cuenta
     - `String name` nombre del propietario de la cuenta
     - `String bank` nombre del banco en donde se encuentra la cuenta
     - `Number nip` clave personal de la cuenta
   - Métodos
     - (20 puntos) `constructor()` recibe valores iniciales para `name`, `bank`, y `nip`.  El `balance` de la cuenta inicia en cero.
     - (20 puntos) `deposit(amount, nip)`  agrega `amount` al `balance` de la cuenta, siempre y cuando el `nip` sea correcto, de lo contrario no agrega nada. El método regresa el `balance` actualizado.
     - (20 puntos) `withdraw(amount, nip)` retira o resta `amount` del `balance` siempre y cuando el `nip` sea correcto y el `balance` sea suficiente, de lo contrario no hace nada. El método regresa el `balance` actualizado.
     - (20 puntos) `getBalance(date, nip)` regresa un mensaje con el `balance` de la cuenta siempre y cuando el `nip` sea correcto. El método también deberá recibir como parámetro la fecha en la que se solicita `date`  que deberá ser un objeto tipo `Date`. Si el `nip` es el correcto regresará un mensaje como el siguiente: `LUNES 15 DE FEBRERO DEL 2021, EL SALDO EN LA CUENTA DEL SR(A) JUAN PEREZ GARCÍA EN EL BANCO SANTANDER ES DE $500 PESOS`. En caso de que el `nip` sea incorrecto deberá regresar `ERROR`. Todas las letras del mensaje deberán estar en mayúsculas.
     - (20 puntos) `updateNip(currentNip, newNip)` actualiza el `nip` con el `newNip` para que el `nip` se actualize el `currentNip` debe ser correcto. es decir igual al `nip` actual. Este método no regresa nada.
  
## Requerimientos no funcionales

- Las clases, métodos y atributos deberán tener el nómbre que se indica y el número y tipo de parámetros que se especifica.
- Se deberán utilizar las convenciones de estilo para clases, métodos, atributos, parámetros y variables
- El programa deberá probar y mostrar el correcto funcionamiento de las funciones.
- El programa deberá funcionar en consola

## Entregable

- Código fuente en este repositorio
  
## Evaluación

- Para que el examen sea considerado como válido, el repositorio deberá tener por lo menos 1 commit por cada método.
- Los repositorios que no tengan una historia de commits considerable NO serán considerados como válidos y tendrán calificación cero
