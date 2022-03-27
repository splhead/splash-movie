import styled from 'styled-components/native';
import {TouchableOpacity, View, Text, Image} from 'react-native';

export const Container = styled(TouchableOpacity)`
  background-color: #cacaca;
  margin-bottom: 5px;
  flex-direction: row;
  padding: 10px;
`;

export const SubContainer = styled(View)`
  margin-left: 10px;
`;

export const StyledImage = styled(Image)`
  width: 100px;
  height: 100px;
`;

export const Title = styled(Text)`
  max-width: 260px;
  font-size: 18px;
  font-weight: bold;
`;
