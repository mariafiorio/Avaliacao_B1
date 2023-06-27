import { Button, Image, Text, View } from "react-native";
import styles from "./styles";

export default function Cartao(props){
    return(
        <View style={styles.container}>
            <View style ={styles.viewImg}>
                <Image source={{
                    uri: props.cartao.imgUrl
                }} style={styles.img}/>
            </View>
            <View style={styles.viewData}>
            <Text style={styles.titulo}>{props.cartao.titulo}</Text>
            <Text style={styles.ataque}> Ataque:  {props.cartao.ataque}</Text>
            <Text style={styles.defesa}> Defesa:  {props.cartao.defesa}</Text>
                <Button style={styles.btn} title="Trocar"/>
            </View>
        </View>
    );
}
