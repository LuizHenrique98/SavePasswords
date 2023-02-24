import styled from 'styled-components/native';
import { colors } from '../../global/colors';
import { size } from '../../global/size';

export const BoxContainer = styled.View`
    flex-direction: row;
    margin: 10px;
    padding: 5px;
    border-radius: 10px;
    background-color: ${colors.white};
`

export const Service = styled.Text`
    font-weight: bold;
    color: ${colors.black};
    font-size: ${size.subtitle};
`

export const User = styled.Text`
    color: #3c3c3c;
    font-size: 14px;
`

export const Password = styled.Text`
    font-size: 14px;
    color: #515151;
`

export const BoxDataPassword = styled.View`
    flex: 1;    
    margin-left: 10px;
    border-right-width: 1px;
    border-left-width: 1px;
    border-color: #ccc;
`

export const ButtonIcon = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background-color: ${colors.white};
`