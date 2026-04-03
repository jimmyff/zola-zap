+++
title = "Code samples"
date = 2026-04-03
[taxonomies]
tags= ["Code", "Test"]
+++

Code highlighting respects Zap's brightness toggle - try switching between light and dark modes.

<!-- more -->

## HTML

```html
<!DOCTYPE html>
<html lang="en">
<head><title>Boop</title></head>
<body>
  <button id="boop" aria-label="Boop the snoot">Boop</button>
  <output id="count">0</output>
</body>
</html>
```

## JavaScript

```js
const btn = document.getElementById("boop");
const out = document.getElementById("count");
let boops = 0;

btn.addEventListener("click", () => {
  boops += 1;
  out.textContent = boops;
  if (boops === 100) alert("You booped 100 times!");
});
```

## Dart

```dart
void main() {
  final stream = Stream.periodic(
    Duration(seconds: 1),
    (i) => 'boop #${i + 1}',
  ).take(10);

  stream.listen(
    print,
    onDone: () => print('All booped out.'),
  );
}
```
