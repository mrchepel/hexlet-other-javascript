## src/application.js

Реализуйте и экспортируйте по умолчанию функцию, которая запускает код, заполняющий элемент `<progress>` на один процент за 1 секунду. Через 100 секунд процесс должен остановится, так как достигнет максимума.

Начальное состояние

```html
<progress value="0" max="100"></progress>
```

Через одну секунду

```html
<progress value="1" max="100"></progress>
```

Для изменения значения `value` используйте метод [setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)

## Подсказки

* Реализуйте задачу используя `setTimeout` (с `setInterval` может не заработать проверка)
* Элемент [Progress](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress)
