import React from 'react';
import {Text} from 'react-native';

import * as S from './styles';

import {MovieData} from '../../../App';

type FlatComponentProps = {
  data: MovieData;
  onPress: () => void;
};

export const FlatComponent = ({data, onPress}: FlatComponentProps) => {
  return (
    <S.Container onPress={onPress}>
      <S.StyledImage source={{uri: data.image}} resizeMode="contain" />

      <S.SubContainer>
        <S.Title numberOfLines={3}>{data.filme}</S.Title>
        <Text>{data.ano}</Text>
        <Text>{data.estilo}</Text>
      </S.SubContainer>
    </S.Container>
  );
};
