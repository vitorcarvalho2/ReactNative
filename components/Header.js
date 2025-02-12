
import { StyleSheet, Text, View, Dimensions, Pressable } from 'react-native';
import styleColors from '../assets/static/colors';
import Icon from 'react-native-vector-icons/Ionicons';

function Header({navigation}) {
    const deviceWidth = Dimensions.get('window').width;
    const styles = deviceWidth >= 800 ? styleLG : styleSM;
  
    return (
        <View style={styles.header}>
            <Icon 
                name="search-outline" 
                size={deviceWidth >= 800 ? 50 : 35} 
                color={styleColors.primaryColor} 
            />
            <Text style={styles.headerText}>Contatos</Text>
            <Icon 
                name="add-outline" 
                size={deviceWidth >= 800 ? 50 : 35}
                color={styleColors.primaryColor}
                onPress={() => navigation.navigate('AddContact')}
            />
        </View>
    )
}

export default Header;


const styleLG = StyleSheet.create({
    header: {
        alignItems: "center",
        backgroundColor: styleColors.secondaryColor,
        flex: 3,
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
        fontSize: 50,
        fontStyle: "italic",
        fontVariant: "small-caps",
        fontWeight: "bold",
        justifyContent: "center",
    },
});

const styleSM = StyleSheet.create({
    header: {
        alignItems: "center",
        backgroundColor: styleColors.secondaryColor,
        flex: 3,
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
        fontSize: 33,
        fontStyle: "italic",
        fontVariant: "small-caps",
        fontWeight: "bold",
        justifyContent: "center",
    },
});