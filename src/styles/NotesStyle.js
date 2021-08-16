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
  writeTaskWrapper: {
    position: 'absolute',
    bottom: "20@s",
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: "8@s",
    paddingHorizontal: "15@s",
    backgroundColor: '#FFF',
    borderRadius: "60@s",
    borderColor: '#cfb559',
    borderWidth: "1@s",
    width: "250@s",
  },
  addWrapper: {
    width: "40@s",
    height: "40@s",
    backgroundColor: '#FFF',
    borderRadius: "60@s",
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#cfb559',
    borderWidth: "1@s",
  },
  addText:{
    fontSize:"20@s",
    color:"#cfb559",
    fontWeight:"bold"
  },
  txt:{
    fontWeight:"bold",
    fontSize:"20@s"
  }
})