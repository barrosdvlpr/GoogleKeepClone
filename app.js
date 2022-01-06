class App {
  constructor() {
    this.notes = [];

    this.$placeholder = document.querySelector('#placeholder');
    this.$form = document.querySelector("#form");
    this.$notes = document.querySelector('#notes');
    this.$noteTitle = document.querySelector("#note-title");
    this.$noteText = document.querySelector("#note-text");
    this.$formButtons = document.querySelector("#form-buttons");

    this.addEventListeners();
  }

  addEventListeners() {
    document.body.addEventListener("click", event => {
      this.handleFormClick(event);
    });

    this.$form.addEventListener("submit", event => {
      event.preventDefault();
      const title = this.$noteTitle.value;
      const text = this.$noteText.value;
      const hasNote = title || text;
      if (hasNote) {
        // add note
        this.addNote({ title, text });
      }
    });
  }

  handleFormClick(event) {
    const isFormClicked = this.$form.contains(event.target);

    if (isFormClicked) {
      this.openForm();
    } else {
      this.closeForm();
    }
  }

  openForm() {
    this.$form.classList.add("form-open");
    this.$noteTitle.style.display = "block";
    this.$formButtons.style.display = "block";
  }

  closeForm() {
    this.$form.classList.remove("form-open");
    this.$noteTitle.style.display = "none";
    this.$formButtons.style.display = "none";
  }

  addNote(note) {
    const newNote = {
      title: note.title,
      text: note.text,
      color: "white",
      id: this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1
    };
    this.notes = [...this.notes, newNote];
    this.displayNotes();
  }
  
  displayNotes() {
     const hasNotes = this.notes.length > 0;  
     this.$placeholder.style.display = hasNotes ? 'none' : 'flex';  
   
     this.$notes.innerHTML = this.notes.map(note => `
        <div style="background: ${note.color};" class="note">
          <div class="${note.title && 'note-title'}">${note.title}</div>
          <div class="note-text">${note.text}</div>
          <div class="toolbar-container">
            <div class="toolbar">
              <img class="toolbar-color" src="https://icon.now.sh/palette">
              <img class="toolbar-delete" src="https://icon.now.sh/delete">
            </div>
          </div>
        </div>
     `).join("");
  }
}

new App();





















// class App {
//     constructor() {
//       this.notes = [];  

//       this.$placeholder = document.querySelector('#placeholder'); // document.querySelector mostra os dados no id no doc html
//       this.$form = document.querySelector('#form');
//       this.$notes = document.querySelector('#notes');
//       this.$noteTitle = document.querySelector('#note-title');
//       this.$noteText = document.querySelector("#note-text");
//       this.$formButtons = document.querySelector('#form-buttons');
      
//       this.addEventListeners();
//     }
//     addEventListeners() {                        // Adiciona o evento clicar no form
//       document.body.addEventListener('click', event => {
//         this.handleFormClick(event);
//       });
//       this.$form.addEventListener('submit', event => { // Adiciona o evento submit
//       event.preventDefault();                          // Evita o reload da pagina
//       const title = this.$noteTitle.value;   
//       const text = this.$noteText.value;   
//       const hasNote = title || text;
//       if (hasNote) {
//         // add note  
//         this.addNote({ title, text });
//       }  
//       });  
//     }
//     handleFormClick(event) {                     // clicando no form ativa os eventos abrir e fechar
//       const isFormClicked = this.$form.contains(event.target); 
//       if (isFormClicked) {
//         this.openForm();
//       } else {
//         this.closeForm()
//       }
//     }
//     openForm() {                                 // this.$form.classList.add('form-open');  Abre o fomulario
//       this.$form.classList.add('form-open');  
//       this.$noteTitle.style.display = 'block';
//       this.$formButtons.style.display = 'block';
//     }
//     closeForm() {                                // this.$form.classList.remove('form-open'); Remove o fomulario aberto e os display none fazem sumir
//       this.$form.classList.remove('form-open');  
//       this.$noteTitle.style.display = 'none';
//       this.$formButtons.style.display = 'none';  
//     }
//     addNote(note) {                              // Salva a nota com incremento no id
//       const newNote = {
//         title: note.title,
//         text: note.text,
//         color: 'white',
//         id: this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1
//       };
//       this.notes = [...this.notes, newNote];
//       console.log(this.notes);
//     }
//     displayNotes() {
//       const hasNotes = this.notes.length > 0;  
//       this.$placeholder.style.display = hasNotes ? 'none' : 'flex';    
//       // if (hasNotes) {
//       //   this.$placeholder.style.display = 'none';  
//       // } else {
//       //   this.$placeholder.style.display = 'flex';    
//       // }                                                  // mapeia as notas e mostra no id no doc html com .innerHTML 
//       this.$notes.innerHTML = this.notes.map(note => `         
//         <div style="background: ${note.color};" class="note">
//           <div class="${note.title && 'note-title'}">${note.title}</div>
//           <div class="note-text">${note.text}</div>
//           <div class="toolbar-container">
//             <div class="toolbar">
//               <img class="toolbar-color" src="https://icon.now.sh/palette">
//               <img class="toolbar-delete" src="https://icon.now.sh/delete">
//             </div>
//           </div>
//         </div>
//      `).join("");
//    }
//   } 
// new App();

