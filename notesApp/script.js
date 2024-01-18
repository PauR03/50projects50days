window.addEventListener("DOMContentLoaded", () => {
    const newNoteButton = document.querySelector("body>header button")
    const main = document.querySelector("main")
    const noteContent = `
        <header>
            <button class="edit">
                <i class="fas fa-edit"></i>
            </button>
            <button class="delete">
                <i class="fas fa-trash-alt"></i>
            </button>
        </header>
        <textarea cols="30" rows="10"></textarea>`

    newNoteButton.addEventListener("click", () => {
        const note = createNote()
        main.appendChild(note)
        addEvents(note)
    })

    loadNotes()

    function createNote() {
        const note = document.createElement("section")
        note.classList.add("note")
        note.innerHTML = noteContent
        return note
    }

    function addEvents(note) {
        const editButton = note.querySelector("button.edit")
        const deleteButton = note.querySelector("button.delete")
        const textarea = note.querySelector("textarea")

        deleteButton.addEventListener("click", () => {
            note.remove()
            updateLocalStorage()
        })

        editButton.addEventListener("click", () => {
            const isEditable = !note.classList.contains("notEditable")
            note.classList.toggle("notEditable")
            textarea.readOnly = isEditable
        })

        textarea.addEventListener("input", updateLocalStorage)
    }

    function updateLocalStorage() {
        const textareas = document.querySelectorAll(".note textarea")
        const notesTexts = Array.from(textareas, textarea => textarea.value)
        localStorage.setItem("notes", JSON.stringify(notesTexts))
    }

    function loadNotes() {
        if (localStorage.getItem("notes")) {
            const allNotes = JSON.parse(localStorage.getItem("notes"))

            allNotes.forEach(currentNoteText => {
                if (currentNoteText != "") {
                    const note = createNote()
                    note.classList.add("notEditable")
                    note.querySelector("textarea").value = currentNoteText
                    main.appendChild(note)
                    addEvents(note)
                }
            })
        }
    }
})
