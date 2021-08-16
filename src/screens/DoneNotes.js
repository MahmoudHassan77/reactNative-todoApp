import React,{useContext} from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import Note from '../components/Note';
import Styles from '../styles/DoneStyle';
import { AppContext } from '../context/AppContext';

const DoneNotes = () => {
    const {notesDone, _clearNotes} = useContext(AppContext);

    const handleClearTasks = () => {
        _clearNotes();
    }

    return (
       <View style={Styles.notesBody}>
           {notesDone.length > 0 ?
           <ScrollView>
             {
              notesDone.map((note)=>{
                         return(
                                 <Note key={note.id} note={note} />
                         )
                 })
             }
           </ScrollView>:
           <Text style={Styles.txt}>الملاحظات كلها اتمسحت 😜</Text>
            }

        <Pressable style={Styles.clearBtn}
         disabled={notesDone.length>0?false:true}
          onPress={() => handleClearTasks()}>
            <Text  style={Styles.BtnTxt} >امسح الملاحظات</Text>
        </Pressable>
       </View>
    )
}

export default DoneNotes;
