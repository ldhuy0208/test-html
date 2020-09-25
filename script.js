var them = () => {
  var content = document.getElementById('content');

  var list = document.getElementById('list');

  var li = document.createElement("li");

  li.appendChild(document.createTextNode(content.value));
  
  list.appendChild(li);
}