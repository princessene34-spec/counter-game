currentNumber = document.getElementById('currentNumber')
startNumber = document.getElementById('startNumber')
// setNumber = document.getElementById('setNumber')
// increment = document.getElementById('increment')
// decrement = document.getElementById('decrement')
// multiply = document.getElementById('multiply')
// divide= document.getElementById('divide')
// reset = document.getElementById('reset')
// double = document.getElementById('double')
// square =  document.getElementById('square')
// clear = document.getElementById('clear')


mybtns = document.querySelectorAll('button')
console.log(mybtns);

mybtns.forEach(a => {

  a.addEventListener('click', function (e) {
    if (e.target.id == 'setNumber') {
      currentNumber.innerHTML = startNumber.value;
    }
    else if (e.target.id == 'increment') {
      currentNumber.innerHTML++
    }
    else if (e.target.id == 'decrement') {
      currentNumber.innerHTML--
    }
    else if (e.target.id == 'multiply') {
      currentNumber.innerHTML*=2
      
    }
     else if (e.target.id == 'divide') {
      currentNumber.innerHTML/=2
      
    }
    else if (e.target.id == 'reset') {
      currentNumber.innerHTML= startNumber.value;
      
    }
      else if (e.target.id == 'double') {
      currentNumber.innerHTML*=2;
     
    }

     else if (e.target.id == 'clear') {
      currentNumber.innerHTML= 0;
      
    }
      else if (e.target.id == 'square') {
      currentNumber.innerHTML**=2;
      
    }
    
    
  })

});
