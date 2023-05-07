let navigation = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    navigation.classList.add("navbar--move");
  } else {
    navigation.classList.remove("navbar--move");
  }
});



// funkcja, która obsługuje animację licznika
function count(element) {
  // pobierz wartości początkową i końcową z atrybutów elementu
  var start = parseInt(element.getAttribute('data-from'));
  var end = parseInt(element.getAttribute('data-to'));
  // ustaw wartość początkową elementu
  element.innerHTML = start;

  // uruchom interwał, który będzie zwiększał wartość elementu o 1 co 10 ms
  var interval = setInterval(function() {
      // zwiększ wartość elementu o 1
      start++;
      // jeśli osiągnięto wartość końcową, zatrzymaj interwał
      if (start >= end) {
          clearInterval(interval);
      }
      // ustaw wartość elementu na aktualną wartość licznika
      element.innerHTML = start;
  }, 10);
}

// znajdź wszystkie elementy z klasą "count"
var counters = document.querySelectorAll('.count');
// dla każdego elementu uruchom funkcję count()
counters.forEach(function(counter) {
  count(counter);
});


