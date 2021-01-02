class Queue
{
     constructor(){
          this.items  = [];
     }
     //   Agregamos un elemento al final de una cola
     enqueue(element){
          this.items.push(element);
     }

     //   Eliminamos un elemento al principio de la cola
     dequeue(){
          if(this.isEmpty())
               return 'Underflow';
          return this.items.shift();
     }

     //   Devolvemos el elemento frontal de la cola ; Un elemento 0 de la matriz
     front(){
          if(this.isEmpty())
               return "No elemetns in queue";
          return this.items[0]
     }
     /*
          Métodos auxiliares
     */

     //   Verificamos si la cola esta vacia
    isEmpty()
    {
         return this.items.length == 0;
    }

    //    Imprime todos los elementos de la cola
    printQueue()
    {
         var str = "";
          for (let i = 0; i < this.items.length; i++)
               str += this.items[i] + ' '; 
          return str
    }
}
function getUserInput(parentNode) {
     let inputs = parentNode.getElementsByTagName('input');
     console.log(inputs)
 }
//   Funciones

function enqueue( number){
     let elementNode = document.createElement('div')
     let elementNumber = document.createElement('p')
     elementNode.className =  'node';
     elementNumber.className = 'number';
     elementNode.appendChild(elementNumber);
     elementNumber.textContent = number;
     document.getElementById('queue').appendChild(elementNode);
}
//   Creamos un nodo

console.log(document.getElementById('add-btn').parentNode.parentNode.getElementsByTagName('input')[0]);
document.getElementById('add-btn').addEventListener('click', ()=>{
     let input = document.getElementById('add-btn').parentNode.parentNode.getElementsByTagName('input')[0].value;
     enqueue(Cola, input);
})
enqueue(98);
enqueue(3);
enqueue(8);
enqueue(0);
enqueue(08);
enqueue(90423423434222222222222222222222222222222222222222222);