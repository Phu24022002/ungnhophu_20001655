import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { style } from "./styles";
import { useState } from "react";

const codeDiscount = ['123', '1234', 'khanhnhat']

function TikiPayy() {
    // var isDiscount = false

    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState(140000)
    const [codeInput, setCodeInput] = useState('')
    const [isDiscount, setIsDiscount] = useState(false)
    const [lastPrice, setLastPrice] = useState(price)
    const [priceBefore, setPriceBefore] = useState(200000)
    
    const handleInc = () => {
        setQuantity(quantity + 1)
        setPrice(prev => prev * (quantity + 1))
        setIsDiscount(false)
        setPriceBefore(prev => prev * (quantity + 1) + 60000)
    }

    const handleDesc = () => {
        if((quantity - 1) > 0){
            setQuantity(prevQuan => prevQuan - 1)
            setPrice(140000 * (quantity - 1))
            setIsDiscount(false)
            setPriceBefore(140000 * (quantity - 1) + 60000)
        }
        else
            alert('Số lượng không hợp lệ')
    }

    const handleDiscount = () => {
        let flag = 0

        codeDiscount.find(c => {
            if(codeInput === c){
                setIsDiscount(true)
                setLastPrice(price - price*0.3)
                setCodeInput('')
                flag = 1
                alert('Áp dụng mã giảm giá thành công')
            }
        })

        if(flag == 0){
            setCodeInput('')
            alert('Mã giảm giá không hợp lệ')
        }
    }

    const handleOrder = () => {
        alert('Đặt hàng thành công')
        setPrice(140000)
        setQuantity(1)
        setPriceBefore(200000)
    }

    // console.log(quantity)
    // console.log(price)
    // console.log(isDiscount)

    return ( 
        <View style={styles.container}>
            <View style={styles.productDetail}>
                <View style={styles.itemWrapper}>
                    <Image style={styles.itemImg} source={require('../../assets/book.png')} />
                    <View style={styles.itemDetail}>
                        <Text style={styles.itemTxt}>Nguyên hàm tích phân và ứng dụng</Text>
                        <Text style={styles.itemTxt}>Cung cấp bởi Tiki Trading</Text>
                        <Text style={styles.price}>{price} đ</Text>
                        <Text style={styles.priceBefore}>{priceBefore}</Text>
                        <Image style={styles.line} source={require('../../assets/Rectangle40.png')} />
                        <View style={styles.number}>
                            <View style={styles.numberWrapper}>
                                <TouchableOpacity style={styles.btn} onPress={handleDesc}>
                                    <Text style={styles.btnDescTxt}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.numberTxt}>{quantity}</Text>
                                <TouchableOpacity style={styles.btn} onPress={handleInc}>
                                    <Text style={styles.btnIncTxt}>+</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.buyAfter}>Mua sau</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.saveDiscount}>
                    <Text style={styles.saveDiscountTxt}>Mã giảm giá đã lưu</Text>
                    <Text style={styles.seeSaveDiscount}>Xem tại đây</Text>
                </View>
                <View style={styles.discountWrapper}>
                    <TextInput style={styles.discountInput} placeholder="Mã giảm giá" onChangeText={setCodeInput} value={codeInput} />
                    <View style={styles.discountBlock}></View>
                    <TouchableOpacity style={styles.applyBtn}>
                        <Text style={styles.applyTxt} onPress={handleDiscount}>Áp dụng</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.presentWrapper}>
                <Text style={styles.presentTxt}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                <Text style={styles.type}>Nhập tại đây?</Text>
            </View>
            <View style={styles.moneyWrapper}>
                <Text style={styles.calcTxt}>Tạm tính</Text>
                <Text style={styles.money}>{price}</Text>
            </View>
            <View style={styles.lastMoneyWrapper}>
                <View style={styles.lastMoneyTxtWrapper}>
                    <Text style={styles.lastMoneyTxt}>Thành tiền</Text>
                    <Text style={styles.lastMoney}>{isDiscount == true ? lastPrice : price}</Text>
                </View>
                <TouchableOpacity style={styles.btnOrder} onPress={handleOrder}>
                    <Text style={styles.orderTxt}>TIẾN HÀNH ĐẶT HÀNG</Text>
                </TouchableOpacity>
            </View>
        </View>
     );
}

export default TikiPayy;

const styles = StyleSheet.create(style)