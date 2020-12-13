//I implemented it this way because I was not sure if I am allowed to modify the html code and add classes to the divs

let shuffleArray = (array) =>  {
    //Durstenfeld shuffle taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
  }

  let reArrange = (sortOrShuffle) =>  {

    var elems = document.querySelectorAll("section div")

    // convert nodeList to an array
    var array = [];
    for (var i = elems.length >>> 0; i--;) array[i] = elems[i];

    // sort/shuffle the array
    sortOrShuffle == 'sort' ? array.sort((a, b) => (String(a.innerHTML) > String(b.innerHTML) ? 1 : -1)) : shuffleArray(array)


    // convert the array back to HTML
    var output = "";
    for (var i = 0; i < array.length; i++) output += array[i].outerHTML;

    // remove old divs  
    var x = document.querySelectorAll("section div")
    Array.prototype.forEach.call( x, function( node ) {
        node.parentNode.removeChild( node );
    });

    // append the new divs
    document.querySelector('section').innerHTML = output + document.querySelector('section').innerHTML;
  }