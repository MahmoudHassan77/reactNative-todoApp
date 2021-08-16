import React, { useState, createContext, useEffect, useMemo } from "react";
import { AsyncStorage, Dimensions } from "react-native";


export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [notes, setNotes] = useState([]);
    const [notesNotDone, setNotesNotDone] = useState([]);
    const [notesDone, setNotesDone] = useState([]);

    const _retrieveNotes = async () =>{
        return await AsyncStorage.getItem("hager-notes") || [];
    } 
    const _storeNotes = async(notes) =>{
        try{
            await setNotes(notes);
            setNotesDone([...notes.filter((n)=>n.status ===2)]);
            setNotesNotDone([...notes.filter((n)=>n.status !==2)]);
            await AsyncStorage.setItem("hager-notes", JSON.stringify(notes));
        }
        catch(e){
            console.error("Error Store Data", e)
        }
    }
    const _addNote = async(noteBody) =>{
        const newNote = {
            id:Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10),
            body: noteBody,
            status: 0
        }
        let newNotesList = [...notes,newNote]
        _storeNotes(newNotesList)        
    }

    const _editNote = async (id) =>{
        const notesList = [...notes];
        let newNotesList =  notesList.map(n=>{
            if(n.id === id) return  {...n, status : 1};
            else return n;
        });
        _storeNotes(newNotesList)    
    }

    const _deleteNote = async (id) =>{
        const notesList = [...notes];
        let newNotesList =  notesList.map(n=>{
            if(n.id === id) return  {...n, status : 2};
            else return n;
        });
        _storeNotes(newNotesList)  
   }
   const _clearNotes = () =>{
    const notesList = [...notes];
    let newNotesList =  notesList.filter(n=>n.status !== 2);
    _storeNotes(newNotesList)  
   }

    useEffect(() => {
       _retrieveNotes().then(res=>setNotes(JSON.parse(res)));
       setNotesDone([...notes.filter((n)=>n.status ===2)]);
       setNotesNotDone([...notes.filter((n)=>n.status !==2)]);
    }, [])

    return (
        <AppContext.Provider
        value={{
            notes,
            notesNotDone,
            notesDone,
            _addNote,
            _editNote,
            _deleteNote,
            _clearNotes
        }}>
              {children}
          </AppContext.Provider>
    )
}
export default AppContextProvider; 