class App {
  constructor() {
    this.notes = [];
    this.title = '';
    this.text = '';
    this.id = '';

    this.$placeholder = document.querySelector('#placeholder');
    this.$form = document.querySelector("#form");
    this.$notes = document.querySelector('#notes');
    this.$noteTitle = document.querySelector("#note-title");
    this.$noteText = document.querySelector("#note-text");
    this.$formButtons = document.querySelector("#form-buttons");
    this.$formCloseButton = document.querySelector('#form-close-button');
    this.$modal = document.querySelector(".modal");
    this.$modalTitle = document.querySelector(".modal-title");
    this.$modalText = document.querySelector(".modal-text");
    this.$modalCloseButton = document.querySelector('.modal-close-button');

    this.addEventListeners();
  }

  addEventListeners() {
    document.body.addEventListener("click", event => {
      this.handleFormClick(event);
      this.selectNote(event);
      this.openModal(event);
      
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
    this.$formCloseButton.addEventListener('click', event => {
      this.closeForm(); 
      event.stopPropagation();  
    })
    this.$modalCloseButton.addEventListener('click', event => {
      this.closeModal(event);  
    })
  }

  handleFormClick(event) {
    const isFormClicked = this.$form.contains(event.target);

    const title = this.$noteTitle.value;
    const text = this.$noteText.value;
    const hasNote = title || text;

    if (isFormClicked) {
      this.openForm();
    } else if (hasNote) {
      this.addNote({ title, text });
    } else {
      this.closeForm();
    }
  }
  openModal(event) {
    if (event.target.closest('.note')) {
      this.$modal.classList.toggle('open-modal');  
      this.$modalTitle.value = this.title;
      this.$modalText.value = this.text;
    }
  }
  closeModal(event) {
    this.editNote();
    this.$modal.classList.toggle('open-modal');   
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
    this.$noteTitle.value = '';
    this.$noteText.value = '';
  }

  addNote({ title, text }) {
    const newNote = {
      title,
      text,
      color: "white",
      id: this.notes.length > 0 ? this.notes[this.notes.length - 1].id + 1 : 1
    };
    this.notes = [...this.notes, newNote];
    this.displayNotes();
    this.closeForm();
  }
  editNote() {
    const title = this.$modalTitle.value;
    const text = this.$modalText.value;
    this.notes = this.notes.map(note => 
      note.id === Number(this.id) ? { ...note, title, text } : note
    );
    this.displayNotes();
  }
  selectNote(event) {
    const $selectedNote = event.target.closest('.note');
    if (!$selectedNote) return;
    const [$noteTitle, $noteText] = $selectedNote.children;
    this.title = $noteTitle.innerText;
    this.text = $noteText.innerText;
    this.id = $selectedNote.dataset.id;
  }

  displayNotes() {
     const hasNotes = this.notes.length > 0;  
     this.$placeholder.style.display = hasNotes ? 'none' : 'flex';  
   
     this.$notes.innerHTML = this.notes.map(note => `
        <div style="background: ${note.color};" class="note" data-id="${note.id}">
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

