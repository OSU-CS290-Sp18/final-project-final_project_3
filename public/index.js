var all_items = [];
var temp_items = [];

function display_create(){
  var mb = document.getElementById('modal-backdrop');
  var ctm = document.getElementById('create-item-modal');

  mb.classList.remove('hidden');
  ctm.classList.remove('hidden');
}

function close_create(){
  var mb=document.getElementById('modal-backdrop');
  var ctm=document.getElementById('create-item-modal');

  mb.classList.add('hidden');
  ctm.classList.add('hidden');

  clear_create();
}

function clear_create(){
  var tie = document.getElementsByClassName('item-input-element');

  for(var i=0; i<tie.length;i++){
    var input = tie[i].querySelector('input, textarea');
    input.value='';
  }
}

function get_new_item(text, author, picture){

  var new_item = document.createElement('article');
  var item_icon = document.createElement('p');
  var item_content = document.createElement('div');
  var text_node = document.createTextNode(text);
  var text_element = document.createElement('p');
  var author_node = document.createTextNode(author);
  var author_element = document.createElement('p');
  var picture_element = document.createElement('img');
  picture_element.classList.add('item-picture');
  picture_element.src=picture;
  item_content.appendChild(picture_element);

  new_item.classList.add('item');

  item_content.classList.add('item-content');
  text_element.classList.add('item-text');
  text_element.appendChild(text_node);
  item_content.appendChild(text_element);
  author_element.classList.add('item-attribution');
  author_element.appendChild(author_node);
  item_content.appendChild(author_element);
  new_item.appendChild(item_content);


  item_icon.classList.add('item-cart');
  item_icon.innerHTML = '<button type="button" id="item-cart-button">Add to cart <i class="fas fa-cart-plus"></i></button>'
  item_content.appendChild(item_icon);


  return new_item;
}

function insert_new_item(){
  var text = document.getElementById('item-text-input').value;
  var author = document.getElementById('item-attribution-input').value;
  var picture = document.getElementById('item-picture-input').value;
  if (text && author && picture) {
    var new_item = get_new_item(text, author, picture);
    var container = document.querySelector('.item-container');
    container.appendChild(new_item);
    all_items.push(new_item);

    close_create();
  } else {
    alert('Must enter text and author!!!');
  }
}

function search_item(){
  var search_content = document.getElementById('navbar-search-input').value;
  var item_contain = document.querySelector('.item-container');

  while(item_contain.lastChild){
    item_contain.removeChild(item_contain.lastChild);
  }

  all_items.forEach(function(new_item) {
    if (!search_content || new_item.textContent.indexOf(search_content)!==-1) {
      item_contain.appendChild(new_item);
    }
  });
}
window.addEventListener('DOMContentLoaded', function(){
  var items = document.getElementsByClassName('item');
  var create = document.getElementById('create-item-button');
  var close = document.querySelector('#create-item-modal .modal-close-button');
  var cancel = document.querySelector('#create-item-modal .modal-cancel-button');
  var accept = document.querySelector('#create-item-modal .modal-accept-button');
  var search = document.getElementById('navbar-search-input');
  var buy = document.getElementsByClassName('item-cart');
  
  for(var i = 0; i < items.length; i++){
    all_items.push(items[i]);
  }

  create.addEventListener('click',display_create);
  close.addEventListener('click',close_create);
  cancel.addEventListener('click',close_create);
  accept.addEventListener('click', insert_new_item);
  search.addEventListener('input', search_item);
  
  for(var i=0; i<100; i++){
  buy[i].addEventListener('click', buyit);
  }


});
