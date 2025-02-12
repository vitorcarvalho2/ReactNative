import { StyleSheet, Text, View,Pressable} from 'react-native';
import styleColors from '../assets/static/colors';
import Icon from 'react-native-vector-icons/Ionicons';

function Header({navigation}) {
    function PressHandler() {
        navigation.navigate("AddContact");
    }
    return (
        <View style={styles.header}>
            <Icon name="search-outline" size={35} color="rgb(3, 36, 14)" />
            <Text style={styles.headerText}>Contatos</Text>
            <Icon name="add-outline" size={35} color="rgb(3, 36, 14)" onPress={PressHandler}/>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        backgroundColor: styleColors.secondaryColor,
        flex: 2,
        flexDirection: "row",
        fontWeight: "bold",
        justifyContent: "space-between",
        marginUp: "100",
        paddingHorizontal: "5%",
        width: "100%",
    },
    headerText: {
        color: styleColors.textColor,
        fontFamily: " Arial",
        fontSize: 35,
        fontStyle: "italic",
        fontVariant: "small-caps",
        fontWeight: "bold",
        justifyContent: "center",
    },
});