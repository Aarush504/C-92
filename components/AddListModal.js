import React from 'react';
import {StyleSheet,View,Text,TouchableOpacity,Modal,KeyboardAvoidingView,TextInput} from 'react-native';
import Colors from '../Colors';
import {AntDesign} from '@expo/vector-icons';
import tempData from '../tempData';

export default class AddListModal extends React.Component{

backgroundColors = ["#9400D3","#4B0082","#0000FF","#00FF00","#FFFF00","#FF7F00","#FF0000"];

state={
    name:"",
    color:this.backgroundColors[0]
}

renderColors() {
    return this.backgroundColors.map(color => {
        return(
            <TouchableOpacity key={color} style={[styles.selectColor, {backgroundColor:color}]} 
            onPress={()=>this.setState({color})}></TouchableOpacity>
        )
    })
}

createTodo=()=>{
const {name,color} = this.state
tempData.push({
    name,
    color,
    todos: []
})
this.setState({
    name: ""
})
this.props.closeModal();
}

render(){
    return(
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <TouchableOpacity style={{position:"absolute",top:64,right:32}} onPress={this.props.closeModal}>
                 <AntDesign name="close" size={24} color={Colors.black}/>
            </TouchableOpacity>

            <View style={{alignSelf:'stretch',marginHorizontal:32}}>
                <Text style={styles.title}>Create new ToDo list</Text>

                <TextInput style={styles.input}
                placeholder="List Name?"
                onChangeText={text => this.setState({name:text})}
                />

                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:8}}>{this.renderColors()}</View>

                <TouchableOpacity style={[styles.create,{backgroundColor:this.state.color}]} onPress={this.createTodo}>
                    <Text style={{color:Colors.white}}>Create</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}
}

const styles = StyleSheet.create({
    container:{
flex:1,
justifyContent:'center',
alignItems:'center'
    },
    title:{
fontSize:28,
fontWeight:"600",
color: Colors.black,
alignSelf:'center',
marginBottom:16
    },
    input:{
 borderWidth:StyleSheet.hairlineWidth,
 borderColor: Colors.lightBlue,
 borderRadius:6,
 height:50,
 marginTop:8,
 paddingHorizontal:16,
 fontSize:18       
    },
    create:{
      marginTop:24,
      height:50,
      borderRadius:6,
      justifyContent:"center",
      alignItems:"center"
    },
    selectColor:{
        width:30,
        height:30,
        borderRadius:4
    }
})