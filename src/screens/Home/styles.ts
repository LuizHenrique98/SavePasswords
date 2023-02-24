import styled from "styled-components/native";
import { colors } from "../../global/colors";
import { size } from "../../global/size";

export const BoxContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${colors.background}
`

export const BoxHeader = styled.View`
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: ${colors.green}; 
`

export const Title = styled.Text`
    margin-top: 20px;
    font-weight: bold;
    color: ${colors.white};
    font-size: ${size.title};
`

export const SubTitle = styled.Text`    
    margin-bottom: 20px;
    color: ${colors.white};
    font-size: ${size.subtitle};
`

export const BoxPassword = styled.View`
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const ButtonAddPassword = styled.TouchableOpacity`
`

export const ListPassword = styled.FlatList`
    flex: 1;
`