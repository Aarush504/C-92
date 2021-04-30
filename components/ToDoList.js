import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal} from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import TodoModal from './TodoModal';

export default class ToDoList extends React.Component {

  state={
    showListVisible: false
  }

  toggleListModal(){
    this.setState({showListVisible: !this.state.showListVisible})
  }
    
    render(){
      const list = this.props.list

      const completedCount = list.todos.filter(todo=>todo.completed).length;
      const remainingCount = list.todos.length - completedCount;
    return (
      <View>
       <Modal animationType="slide" 
       visible={this.state.showListVisible} 
       onRequestClose={() => this.toggleListModal()}>
        
       <TodoModal list={list} closeModal={()=>this.toggleListModal()}/>

       </Modal>
       <TouchableOpacity style={[styles.listContainer, {backgroundColor: list.color}]} onPress={()=>this.toggleListModal()}>
              <Text style={styles.listTitle} numberOfLines={1}>
                  {list.name}
              </Text>

              <View style={{alignItems: "center"}}>
                  <Text style={styles.completed}>{remainingCount}</Text>
                  <Text style={styles.remaining}>Remaining</Text>
              </View>
              <View style={{alignItems: "center"}}>
                  <Text style={styles.completed}>{completedCount}</Text>
                  <Text style={styles.remaining}>Completed</Text>
              </View>
        </TouchableOpacity>
      </View>
    )
    }
}

const styles = StyleSheet.create({
    listContainer:{
        paddingVertical:32,
        paddingHorizontal:16,
        borderRadius : 6,
        marginHorizontal:12,
        alignItems: "center",
        width: 200
    },
    listTitle:{
        fontSize:24,
        fontWeight:"700",
        color:Colors.white,
        marginBottom:18
    },
    completed:{
        fontSize:48,
        fontWeight:"200",
        color: colors.white
    },
})