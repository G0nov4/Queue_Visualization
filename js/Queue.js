const queue = document.getElementById('queue');
const btn_add =document.getElementById('btn-add');
const btn_pop =document.getElementById('btn-pop');
const btn_peek =document.getElementById('btn-peek');
let msgError = queue.parentNode.parentNode.getElementsByClassName('error')[0];
const nodes = queue.children;       //   HTML collection
var p = queue.childElementCount;

var timeEfect = 1000;              // miliseconds
 ////////////////////////////////////////
//                  Function                       //
////////////////////////////////////////
function createNode(num){   
     let node, number, position, position_number;
     //   node
     node = document.createElement('div');
     node.className = 'node';

     //   number
     number = document.createElement('p');
     number.className = 'number'
     number.textContent = num
     
     position_number = document.createElement('p')
     //   position
     position = document.createElement('div');
     position.className = 'position'

     position.appendChild(position_number);
     position.children[0].textContent = p;
     p++;

     //   Add efects in node
     node.style.animation = `addNode ${timeEfect/1000}s normal `;
     //   Add elements in node
     node.appendChild(number);
     node.appendChild(position);
     return node;
}

function deleteNode(node){
     return new Promise(resolve =>{
          nodes[0].style.animation = `deleteNode ${timeEfect/1000}s ease-in-out`;
          setTimeout(()=>{
               queue.removeChild(node);
          }, timeEfect);
     })
}


function showError(error){
     if(msgError.style.display === '' || msgError.style.display === 'none'){
          if(isEmpty){
               msgError.innerHTML = `<i class='fas fa-exclamation-circle'></i> ${error}`;
               msgError.style.display = 'block'
          }
     }
}
function getUserInput(parent){
     return parent.querySelector('input').value;
}

function isEmpty(){
     return (queue.childElementCount == 0);
}
function verificateInput(input){
     console.log(input);
     if(input== ''){

     }
}
function add(){
     let node, parent, input;
     clearMsgError();
     parent = this.parentNode.parentNode;
     input = getUserInput(parent);
     console.log(typeof input)
     if(input !== ''){;
          node = createNode(input);
          queue.appendChild(node);
     }else{
          showError('Invalid Data');
     }
   
}

function clearMsgError(){
     msgError.textContent = '';
     msgError.style.display = 'none';
}

async function pop(){
     clearMsgError();
     !isEmpty()
     ? await deleteNode(nodes[0])
     : showError('Queue is empty');
}

async function peek(){
     let node = nodes[0];
     clearMsgError();
     if(!isEmpty()){
          let num = node.getElementsByClassName('number')[0].textContent;
          deleteNode(node);
          setTimeout(()=>{
               node = createNode(num);
               queue.appendChild(node);
          }, timeEfect);
     }else
          showError('There are no items');
}

//   Events
btn_add.addEventListener('click', add);
btn_pop.addEventListener('click', pop);
btn_peek.addEventListener('click', peek);
