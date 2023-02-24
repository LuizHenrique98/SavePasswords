import React, {useState} from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

import * as S from './styles';
import { colors } from '../../global/colors';

export type RenderPasswordProps = {
    id:       string;
    service:  string;
    user:     string;
    password: string;
}

type Props = {
    data: RenderPasswordProps;
    onPress: () => void;
  }
  

export function RenderPassword({data, onPress}: Props){
    const [invisiblePassword, setInvisiblePassword] = useState(true)
    return(  
      <S.BoxContainer>
        <S.ButtonIcon onPress={() => setInvisiblePassword(!invisiblePassword)}>
          <Icon name={invisiblePassword ? 'eye-off' : 'eye'} size={50} color={colors.black} />
        </S.ButtonIcon>
            
        <S.BoxDataPassword>    
          <S.Service> {data.service} </S.Service>
          <S.User> {data.user} </S.User>
          <S.Password> {invisiblePassword ? '********' : data.password} </S.Password>
        </S.BoxDataPassword>
        
        <S.ButtonIcon onPress={onPress}>
          <Icon name='trash' size={50} />
        </S.ButtonIcon>
      </S.BoxContainer>
    );
}