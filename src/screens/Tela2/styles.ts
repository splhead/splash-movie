import styled from 'styled-components/native';
import {ScrollView, Text} from 'react-native';

export const Wrapper = styled(ScrollView)`
  flex: 1;
  flex-grow: 1;
  padding: 0px 16px;
  margin: 16px 0px;
`;

type TextProps = {
  label?: boolean;
};

export const StyledText = styled(Text)<TextProps>`
  font-weight: ${({label}) => (label ? 'bold' : '400')};
  margin-top: ${({label}) => (label ? '8px' : '0px')};
  line-height: 20px;
`;
