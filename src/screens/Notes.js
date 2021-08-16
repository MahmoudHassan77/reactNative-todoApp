import React,{useContext, useState} from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView, Keyboard } from 'react-native';
import Note from '../components/Note';
import Styles from '../styles/NotesStyle';
import { AppContext } from '../context/AppContext';
import { Entypo } from '@expo/vector-icons';

const Notes = () => {
    const [task,setTask] = useState("");
    const { 
        notesNotDone,
        _addNote,
        _editNote,
        _deleteNote} = useContext(AppContext);


        const handleAddTask = () => {
            Keyboard.dismiss();
            _addNote(task)
            setTask(null);
          }
        const handleEditTask=(note)=>{
            const handlednote = {...note}
            if(handlednote.status === 0) _editNote(note.id);
            else _deleteNote(note.id);
        }

    return (
       <View style={Styles.notesBody}>
           {notesNotDone.length > 0 ?
           <ScrollView>
             {
              notesNotDone.map((note)=>{
                         return(
                             <TouchableOpacity key={note.id} onPress={()=>{handleEditTask(note)}}>
                                 <Note note={note} />
                             </TouchableOpacity>
                         )
                 })
             }
           </ScrollView>:
           <Text style={Styles.txt}>مفيش ولا ملاحظه ياهانم 🤐</Text>
            }
          <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={Styles.writeTaskWrapper}
      >
        <TextInput style={Styles.input} placeholder={'ها..هتكتبى ملاحظة جديده🤔'} value={task} onChangeText={text => setTask(text)} />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={Styles.addWrapper}>
            {/* <Text style={Styles.addText}>+</Text> */}
            <Entypo name="plus" size={25} color="#cfb559"/>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
       </View>
    )
}

export default Notes;
