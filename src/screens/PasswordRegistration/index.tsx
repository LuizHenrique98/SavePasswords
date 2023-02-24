import React, {useState} from 'react';
import {Keyboard, StatusBar, ToastAndroid, TouchableWithoutFeedback } from 'react-native';

import uuid from 'react-native-uuid';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';

import * as S from './styles';
import { colors } from '../../global/colors';


export default function PasswordRegistration(){
    const [service, setService] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [passwordInvisible, setPasswordInvisible] = useState(true);

    const { getItem, setItem } = useAsyncStorage('@savepasswords:passwords');

    async function handleNewPassword(){
      if (service == '' || user == '' || password == '' ){
        ToastAndroid.showWithGravity(
          'Preencha todos os campos!', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
          return;
      }

      try{
        const id = uuid.v4();

        const newPassword = {
          id,
          service,
          user,
          password
        }    
  
        const response = await getItem();
        const responseData = response ? JSON.parse(response) : [];
  
        const data = [...responseData, newPassword];
  
        await setItem(JSON.stringify(data));

        setService('');
        setUser('');
        setPassword('');
  
        ToastAndroid.showWithGravity(
          'Senha registrada com sucesso!',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM)    

      }catch(error){
        ToastAndroid.showWithGravity('Ops... Algo deu errado!', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }  
    }

    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        <S.BoxContainer>   

          <StatusBar backgroundColor={colors.background} barStyle={'light-content'} />                
          <S.BoxContent>

            <S.InputLabel>Nome do serviço</S.InputLabel>
            <S.Input onChangeText={setService} value={service} autoCapitalize='none' />

            <S.InputLabel>E-mail ou usuário</S.InputLabel>
            <S.Input onChangeText={setUser} value={user} autoCapitalize='none' />

            <S.InputLabel>Senha</S.InputLabel>
            <S.BoxInputPassword>
             
              <S.InputPassword 
                onChangeText={setPassword} 
                value={password} 
                autoCapitalize='none' 
                secureTextEntry={passwordInvisible} 
              />   
          
              <S.ButtonVisiblePassword onPress={() => setPasswordInvisible(!passwordInvisible)} >
                <Icon name={passwordInvisible ? 'eye-off' : 'eye'} size={50} color={colors.black} />       
              </S.ButtonVisiblePassword>                                    
            </S.BoxInputPassword>

          </S.BoxContent>   

          <S.Button onPress={handleNewPassword}>
            <S.ButtonText> Salvar </S.ButtonText>
          </S.Button>

         </S.BoxContainer>
      </TouchableWithoutFeedback> 
    );
}