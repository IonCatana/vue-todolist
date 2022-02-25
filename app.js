console.log('todo or not todo?');

const app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todoList: [
      {
        text: 'Dare da mangiare al gatto',
        done: true,
      },
      {
        text: 'Portare il cane fuori',
        done: false,
      },
      {
        text: 'Lavare la macchina',
        done: false,
      },
      {
        text: 'Lavare la macchina',
        done: false,
      },      
    ],
  },
  methods: {
    addTodo: function () {
      if (this.newTodo !== '') {
        this.todoList.push(this.newTodo);
        console.log(this.newTodo);
        console.log('la stringa non e vuota');
      } else {
        console.log('la stringa e vuota');
      }
      this.newTodo = '';
    },
    deleteTodo(i) {
      this.todoList.splice(i, 1); //ci permette di rimuovere e rimpiazzare '' la funzione SPLICE''
      console.log('delete', i);
    },
  },
});


