// counter code
var button = documnet.getElementById('counter');
var counter=0;
button.onclick() = function() {
  // Make a request to the counter endpoint
  
  // Capture the response and store it in a variable
  
  // Render the variable in the correct span
  counter = counter+1;
  var span = documnet.getElementById('count');
  span.innerHTML = counter.toString();
  
  
};
