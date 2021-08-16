import React from 'react';
import { View,Text } from 'react-native';
import Styles from '../styles/NoteStyle';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const Note = ({note}) => {
    return (
        <View style={note.status > 0? Styles.noteD :Styles.note}>
            <View style={Styles.noteTextWrapprer}>
                <AntDesign name="star" size={22} color={note.status > 0? "#93c572": "#cfb559"}/>
                <Text style={note.status > 0? Styles.noteTextD:Styles.noteText}>{note.body}</Text>
            </View>
            <Ionicons name="md-checkmark-circle-outline" size={22} color={note.status > 0? "#93c572": "#cfb559"}/>
        </View>
    )
}

export default Note
