export default function Bubblesort(array) {
  var animations = [];
  for (var i = array.length - 1; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      var animation = { compare: null, swap: null, sorted: false };
      animation.compare = [j, j + 1];
      if (array[j] > array[j + 1]) {
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        animation.swap = [j, j + 1];
      }
      if (j + 1 >= i) {
        animation.sorted = true;
      }
      animations.push(animation);
    }
  }
  animations.push({ compare: [0, 0], swap: null, sorted: true });
  return animations;
}
