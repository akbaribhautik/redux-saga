import { View, Text, FlatList } from 'react-native'
import React, { useEffect, } from 'react'
import {  useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../redux/actions';

const HomeScreen = ({  }) => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state?.mainReducer?.data);
   
    useEffect(() => {
        dispatch(fetchData());
    }, []);

    
   
const renderItem=({item}) =>{
  return(
    <View>
        <Text>{item.id}</Text>
        <Text>{item.email}</Text>
    </View>
  )
}
    return (
        <View>
       <FlatList
       data={data}
       renderItem={renderItem}
       />
    </View>
    )
}


export default HomeScreen

