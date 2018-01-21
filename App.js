import React from 'react';
import { StyleSheet, Text, View,Image,TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import VideoItem from './App/Components/videoItem'
import data from './data'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.navbar}>
              <Image source={require('./App/Images/youtube.png')} style={{width:98,height:22}}></Image>
            <View style={styles.rightNav}>
              <TouchableOpacity>
                  <Icon style={styles.navItem} name="search" size={25}/>
              </TouchableOpacity>

                <TouchableOpacity>
              <Icon style={styles.navItem} name="account-circle" size={25}/>
                </TouchableOpacity>
            </View>
          </View>
          <View style={styles.body}>

            <FlatList
            data={data.items}
            renderItem={(video) =><VideoItem video = { video.item} />}
            keyExtractor = {(item)=>item.id}
            />

          </View>
        <View style={styles.tabBar}>
            <TouchableOpacity style={styles.tabItems}>
                <Icon  name="account-circle" size={25}/>
                <Text style={styles.tabTitle}>Tab1</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItems}>
                <Icon  name="account-circle" size={25}/>
              <Text style={styles.tabTitle}>Tab2</Text>
            </TouchableOpacity >

            <TouchableOpacity style={styles.tabItems}>
                <Icon  name="account-circle" size={25}/>
                <Text style={styles.tabTitle}>Tab3</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tabItems}>
                <Icon  name="account-circle" size={25}/>
                <Text style={styles.tabTitle}>Tab4</Text>
            </TouchableOpacity>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

    navbar:{
      height:55,
      backgroundColor:'grey',
      elevation:3,
        paddingHorizontal:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'

  },

    rightNav:{
      flexDirection:'row'
    },
    navItem : {
      marginLeft:25
    },

    body:{
      flex : 1,
        backgroundColor:'white'
    },
    tabBar:{
      height:60,
      backgroundColor:'white',
        borderBottomWidth:0.5,
        borderColor:'grey',
        justifyContent:'space-around',
        flexDirection:'row'
    },

    tabTitle : {
    fontSize:11,
        color:'#3c3c3c'
    },

    tabItems:{
        alignItems:'center',
        justifyContent:'center'
    }
});
