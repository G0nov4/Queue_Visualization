var status = true;
let listNodes = document.getElementById('queue').children;
console.log(listNodes);
//   Funciones
//   Crea un elemento Nodo el cual continene un numero dentro de el
function createNodeNumber(){
     let elementNode = document.createElement('div'),
     elementNumber = document.createElement('p');
     elementNode.className =  'node';
     elementNumber.className = 'number';

     elementNode.appendChild(elementNumber);
     elementNumber.textContent = 1;
     return elementNode;
}

function deleteNode(node){
     return new Promise(resolve =>{
          listNodes[0].style.animation = 'deleteNode 2s ease';
          setTimeout(()=>{
               document.getElementById('queue').removeChild(node);
          }, 2000);
     })
}
function deleteNodePeek(node){
     return new Promise(resolve =>{
          listNodes[0].style.animation = 'deleteNode 2s ease';
          setTimeout(()=>{
               return document.getElementById('queue').removeChild(node);
          }, 2000);
     })
}


//   Obtiene la entrada del input
function getUserInput(parentNode){
     let inputs = parentNode.getElementsByTagName('input');
     let input = inputs[0].value
     return input
}

//   Mete a la cola el numero
function enqueue( number){
     let elementNode = createNodeNumber();
     elementNode.querySelector('.number').textContent = number;
     document.querySelector('.data-view').lastChild.style.display = 'none';
     document.getElementById('queue').appendChild(elementNode)
}
function dequeue(i){
     sw =  true;
     let firstNode = document.getElementById('queue').children[i];
     deleteNode(firstNode);
    
}

function printError(error){
     
     if (sw == true){
          let viewError = document.createElement('div');
          viewError.innerHTML = "<i class='fas fa-exclamation-circle'></i>" +
          `Queue is ${error}`;
          viewError.style.display = 'block'
          viewError.style.color = '#F00' 
          document.querySelector('.data-view').insertAdjacentElement('beforeend', viewError)
     }
     sw = false;
     
}

//   Evento que genera un elemento con la entrada del input del mismo
document.getElementById('btn-add').addEventListener('click', function() {
     let userInput = getUserInput(this.parentNode.parentNode);
     !(userInput === '' || userInput === null || userInput === undefined)
          ? enqueue(userInput)
          :  console.log('Error')
});
document.getElementById('btn-pop').addEventListener('click', function() {
     let size = document.getElementById('queue').childElementCount;
     size > 0
          ? dequeue(0)
          : printError('empty')
});

document.getElementById('btn-peek').addEventListener('click', async function() {
     let size = document.getElementById('queue').childElementCount;
     size > 0
          ? ()=>{
               let firstNode = document.getElementById('queue').children[0];
     deleteNode(firstNode);
     console.log(firstNode.children[0].textContent)
     setTimeout(()=>{
          enqueue(firstNode.children[0].textContent)
     }, 2000)
          }
          : printError('empty')
});

console.log(document.getElementById('queue').children[0].scrollWidth)

