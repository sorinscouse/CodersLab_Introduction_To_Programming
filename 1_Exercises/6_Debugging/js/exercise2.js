function checkNumber(number){
  var type = typeof number;

  if(type === 'string') {
   return 'Your number is string';
  }

  if(type === undefined) {
   return 'Your number is undefined';
  }

  if(type === null) {
   return 'Your number is null';
  }

  return 'Your number is really number';

}


function countSomething() {
 var foo;
 console.log(checkNumber(foo));

 var bar = "lalalala";
 console.log(checkNumber(bar));


 var baz = null;
 console.log(checkNumber(baz));
}

countSomething();
