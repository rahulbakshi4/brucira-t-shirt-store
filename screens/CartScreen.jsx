import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import BackIcon from '../components/BackIcon';
import CartIcon from '../components/CartIcon';

export const CartScreen = ({isModalVisible,setModalVisible}) => {
  return (
      <Modal
        isVisible={isModalVisible}
        animationIn="slideInRight"
        animationOut="slideOutRight"
        onBackdropPress={() => setModalVisible(false)}
        style={{
          margin: 0,
          backgroundColor: 'black',
          justifyContent: 'flex-end',
        }}
      >
        
        <View style={{ flex: 1, backgroundColor: 'black' }}>
        <Pressable onPress={() => setModalVisible(false)}>
            <BackIcon style={{margin: 20}}/>
        </Pressable>
        <View style={{
          display: 'flex',
          flexDirection:'row',
          justifyContent:'center',
          alignItems: 'center',
          gap:10,
        }}>
        <CartIcon style={{width: '48', height: '48'}}/>
        <Text style={{color:'#fff'}}>Cart</Text>
        </View>
        </View>
      </Modal>
    
  );
}
