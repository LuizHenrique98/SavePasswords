import React, {useState, useCallback} from 'react';
import { StatusBar } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

import * as S from './styles';
import {RenderPasswordProps, RenderPassword } from '../../components/RenderPassword'
import { colors } from '../../global/colors';


export default function Home(){
    const [data, setData] = useState<RenderPasswordProps[]>([])
    const navigation = useNavigation<any>();
    const { getItem, setItem } = useAsyncStorage('@savepasswords:passwords');

    async function handleFetchData(){
        const response = await getItem();
        const responseData = response ? JSON.parse(response) : [];
        setData(responseData);      
    }

    async function handleRemovePassword(id: string){
        const response = await getItem();
        const responseData = response ? JSON.parse(response) : [];
        const data = responseData.filter((item: RenderPasswordProps) => item.id !== id );

        await setItem(JSON.stringify(data));
        setData(data);
    }

    useFocusEffect(useCallback(()=> {     
        handleFetchData();
    }, []));

    return(
      <S.BoxContainer>
        <StatusBar backgroundColor={colors.green} barStyle={'light-content'} />     
           
        <S.BoxHeader>
          <S.Title>Bem vindo</S.Title>
          <S.SubTitle> Armazene aqui suas senhas </S.SubTitle>
        </S.BoxHeader>

        <S.BoxPassword>
          <S.SubTitle> Senhas armazenadas </S.SubTitle>
            
          <S.ButtonAddPassword onPress={()=> navigation.navigate('PasswordRegistration') } >
            <Icon name='add-circle' size={50} color={'white'} />
          </S.ButtonAddPassword>
        </S.BoxPassword>

        <S.ListPassword
          data={data}
          keyExtractor={(item: RenderPasswordProps) => item.id}
          renderItem={({item}: {item: RenderPasswordProps}) => 
            <RenderPassword data={item} onPress={() => handleRemovePassword(item.id)} /> 
          }/>

      </S.BoxContainer>
    );
}