import { ScaledSheet } from 'react-native-size-matters';
export default Styles = ScaledSheet.create({
    notesBody:{
        backgroundColor:"#d7dfd6",
        display:"flex",
        height:"100%",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center",
        paddingTop:"20@s",
    },
    clearBtn:{
      position: 'absolute',
      bottom: "20@s",
      width:"80%",
      backgroundColor:"#e54f6e",
      height:"40@s",
      borderRadius: "60@s",
      justifyContent: 'center',
      alignItems: 'center',

    },
    txt:{
      fontWeight:"bold",
      fontSize:"20@s"
    },
    BtnTxt:{
        color:"#fff",
        fontSize:"16@s",
        fontWeight:"bold"
    }
})