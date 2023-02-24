import styled from 'styled-components/native';
import { colors } from '../../global/colors';
import { size } from '../../global/size';

export const BoxContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.background};     
 `

export const BoxContent = styled.View`
    margin: 20px;
 `

export const InputLabel = styled.Text`
    margin-top: 20px;
    color: ${colors.white};
    font-size: ${size.subtitle};
 `

export const Input = styled.TextInput`
    height: 50px;
    border-radius: 5px; 
    background-color: ${colors.white};
`

export const BoxInputPassword = styled.View`
    border-radius: 5px;
    flex-direction: row;
    background-color: ${colors.white};
`

export const InputPassword = styled.TextInput`
    width: 85%;
    height: 50px;   
`

export const ButtonVisiblePassword = styled.TouchableOpacity`
    width: 15%;
    height: 50px;    
`

export const Button = styled.TouchableOpacity`
    height: 40px;  
    margin: 20px;
    border-radius: 20px;
    align-items: center;
    justify-content: center;
    background-color: ${colors.green};
`

export const ButtonText = styled.Text`
    font-weight: bold;
    color: ${colors.white};
    font-size: ${size.title};
`