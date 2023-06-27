import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'pink',
        padding: 10,
        flexDirection: "row",
        borderRadius:20,
        margin: 5,
        height: 180,
        width: '95%',
     
    },
    img: {
        height: '100%'

    },

    viewImg: {
        padding: 10,
        width: '30%',
        height: '100%',

      
    },
    viewData:{
        padding: 10,
        width: '70%',
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10
    },
    ataque : {
        marginBottom: 10

    },
    defesa : {
        marginBottom: 10

    },
    button: {
        height: 50,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'purple'

    },
    btnText: {
        fontSize: 20,
        fontWeight: "bold",
        height: 40    

    }
}); 
export default styles;
