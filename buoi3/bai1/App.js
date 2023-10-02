
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <div style={styles.circle}></div>
      <Text style={styles.text1}>GROW <br></br>YOUR BUSINESS</Text>
      <Text style={{fontSize: '20px', textAlign: 'center', marginTop: '50px'}}>we will help you to grow your business using online server</Text>
      <View style={styles.btn}>
        <TouchableOpacity style={styles.btn1} >
          <Text style={styles.textBtn}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn2} >
          <Text style={styles.textBtn}>Sign Up</Text>
        </TouchableOpacity>
        
      </View>
     
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    border: '5px solid yellow',
    backgroundColor: '#4edafb'
  },
  circle: {
    width: '100px',
    height: '100px',
    border: '15px solid black',
    borderRadius: '50%',
    marginTop: '50px'
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
    
  },
  text1: {
    fontSize: '30px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '20px'
  },
  textBtn: {
    fontSize: '15px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '12px'
  },
  btn1: {
    backgroundColor: 'yellow',
    width: '100px',
    height: '50px',
    marginRight: '20px',
    borderRadius: '10px'
  },
  btn2: {
    backgroundColor: 'yellow',
    width: '100px',
    height: '50px',
    marginLeft: '20px',
    borderRadius: '10px'
  }
  
});
