import { Image, StyleSheet, TextInput, TouchableOpacity, View, Text } from "react-native";

function Cau2b() {
    return (  
        <View style={styles.wrapper}>
            <View style={styles.productWrapper}>
                <Image style={styles.productImg} source={require('../assets/usb.png')} />
                <Text style={styles.productName}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth</Text>
            </View>
            <Text style={styles.satisfiedTxt}>Cực kỳ hài lòng</Text>
            <View style={styles.starWrapper}>
                <Image style={styles.starImg} source={require('../assets/Star1.png')} />
                <Image style={styles.starImg} source={require('../assets/Star1.png')} />
                <Image style={styles.starImg} source={require('../assets/Star1.png')} />
                <Image style={styles.starImg} source={require('../assets/Star1.png')} />
                <Image style={styles.starImg} source={require('../assets/Star1.png')} />
            </View>
            <TouchableOpacity style={styles.addImageBtn}>
                <Image style={styles.cameraImg} source={require('../assets/camera.png')} />
                <Text style={styles.addImageTxt}>Thêm hình ảnh</Text>
            </TouchableOpacity>
            <TextInput style={styles.shareInput} placeholder='Hãy chia sẻ những điều mà bạn thích về sản phẩm' multiline={true} numberOfLines={10} />
            <TouchableOpacity style={styles.submitBtn}>
                <Text style={styles.submitTxt}>Gửi</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Cau2b;

const styles = StyleSheet.create({
    wrapper: {
        padding: 30,
        width: '100%',
    },
    productWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    productImg: {
        width: 70,
        height: 70,
    },
    productName: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 16,
    },
    satisfiedTxt: {
        marginTop: 50,
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 18,
        textAlign: 'center',
    },
    starWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    starImg: {
        width: 40,
        height: 40,
    },
    addImageBtn: {
        width: '100%',
        height: 70,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#1511EB',
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
    },
    cameraImg: {
        width: 40,
        height: 32,
        marginLeft: 30,
    },
    addImageTxt: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 18,
        marginLeft: 10,
    },
    shareInput: {
        width: '100%',
        // height: 222,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderRadius: 5,
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 18,
        padding: 15,
        marginTop: 20,
    },
    submitBtn: {
        width: '100%',
        height: 40,
        backgroundColor: '#0D5DB6',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 5,
    },
    submitTxt: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: 20,
    }
})