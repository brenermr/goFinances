import styled from 'styled-components/native';
import {Feather} from '@expo/vector-icons'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import Constants  from 'expo-constants';



export const Container = styled.View`
    flex:1;
    background-color: ${({theme})=>theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    background-color: ${({theme})=>theme.colors.primary};
    height: ${RFPercentage(42)}px;
    align-items: flex-start;
` 

export const UserWrapper = styled.View`
    width:100%;
    margin-top:${RFValue(Constants.statusBarHeight)}px;
    padding: ${RFValue(0)}px ${RFValue(24)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`;

export const UserInfo= styled.View`
    flex-direction: row;
    align-items: center;
    /* margin: ${RFValue(40)}px ${RFValue(25)}px ; */
`
export const Photo= styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`
export const User= styled.View`
    margin-left: ${RFValue(17)}px;
`
export const UserGreeting= styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color:${({theme})=>theme.colors.shape};
    
`
export const UserName= styled.Text`
    font-family: ${({theme})=>theme.fonts.bold};
    font-size: ${RFValue(18)}px;
    color: ${({theme})=>theme.colors.shape};
`
export const Icon = styled(Feather)`
    color:${({theme})=>theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`
export const HighlightCards = styled.ScrollView.attrs({
    horizontal:true,
    showsHorizontalScrollIndicator: false,
    contentContainerStyle:{
        paddingLeft:24
    }
})`
    width: 100%;
    position: absolute;
    margin-top: ${RFPercentage(20)}px;
`
export const Transactions = styled.View`
    flex:1;
    padding: 0 24px;
    margin-top: ${RFPercentage(12)}px;
`

export const Title = styled.Text`
    font-size: ${RFValue(18)}px;
    font-family: ${({theme})=>theme.fonts.regular};
    margin-bottom: 16px;
`