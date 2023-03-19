import { View, Text,Button } from 'react-native'
import React from 'react'
import { fetchData } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state?.mainReducer?.data);
 
  
  const getUserList=()=>{
    dispatch(fetchData());
  }
  return (
    <View>
      <Text>index</Text>
      <Button title={'get'} onPress={()=>getUserList()} />
    </View>
  )
}

export default HomeScreen