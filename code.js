const toDoList = {
    _notes: [],

    _findId: function(id) {
        return this._notes.findIndex( function(note) {
            return note.id === id;
        } );
    },

    newNote: function(text) {
        const note = {
            id: Date.now(),
            text,
            isTaskComplete: false
        };
        this._notes.push(note);
    },

    removeNote: function(id) {
        const index = this._findId(id);
        if (index >= 0) {
            this._notes.splice(index, 1);
        }
    },

    updateNote: function(id, text) {
        const index = this._findId(id);
        if (index >= 0 && text) {
            this._notes[index].text = text;
        }
    },

    completeTask: function(id) {
        const index = this._findId(id);
        if (index >= 0) {
            this._notes[index].isTaskComplete = true;
        }
    }
};
//для проверки
toDoList.newNote();
toDoList.updateNote();
toDoList.completeTask();
toDoList.removeNote();