class TodoList {
    constructor() {
      this.notes = [];
    }
  
    addNote(noteText) {
      if (noteText.trim() !== "") {
        const note = {
          text: noteText,
          completed: false
        };
        this.notes.push(note);
      }
    }
  
    editNote(index, newText) {
      if (index >= 0 && index < this.notes.length && newText.trim() !== "") {
        this.notes[index].text = newText;
      }
    }
  
    deleteNote(index) {
      if (index >= 0 && index < this.notes.length) {
        this.notes.splice(index, 1);
      }
    }
  
    getNoteInfo(index) {
      if (index >= 0 && index < this.notes.length) {
        const note = this.notes[index];
        return `Note ${index + 1}: ${note.text}\nStatus: ${note.completed ? 'Completed' : 'Pending'}`;
      }
    }
  
    getNoteList() {
      return this.notes.map((note, index) => {
        return `Note ${index + 1}: ${note.text} - ${note.completed ? 'Completed' : 'Pending'}`;
      });
    }
  
    markAsCompleted(index) {
      if (index >= 0 && index < this.notes.length) {
        this.notes[index].completed = true;
      }
    }
  
    getTotalNotes() {
      return this.notes.length;
    }
  
    getRemainingNotes() {
      return this.notes.filter(note => !note.completed).length;
    }
  }
  
  const myTodoList = new TodoList();
  
  myTodoList.addNote("Зробити домашку №14");
  myTodoList.addNote("Зробити домашку №16");
  myTodoList.addNote("Зробити домашку №17");
  myTodoList.markAsCompleted(0);
  
  console.log("Список нотаток:");
  console.log(myTodoList.getNoteList());
  
  console.log("\nІнформація про першу нотатку:");
  console.log(myTodoList.getNoteInfo(0));
  
  console.log("\nЗагальна кількість нотаток: " + myTodoList.getTotalNotes());
  console.log("Залишилося невиконаних нотаток: " + myTodoList.getRemainingNotes());
