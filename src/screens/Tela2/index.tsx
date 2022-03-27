import React from 'react';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Image} from 'react-native';

import {RootStackParamList} from '../../../App';

import * as S from './styles';

export type Tela2Props = NativeStackScreenProps<RootStackParamList, 'Tela2'>;

export const Tela2 = ({route}: Tela2Props) => {
  const {data} = route?.params;

  return (
    <S.Wrapper>
      <Image
        source={{uri: data.image}}
        style={{height: 300}}
        resizeMode="contain"
      />
      <S.StyledText label style={{marginTop: 16}}>
        FILME:
      </S.StyledText>
      <S.StyledText>{data.filme}</S.StyledText>
      <S.StyledText label>ANO:</S.StyledText>
      <S.StyledText>{data.ano}</S.StyledText>
      <S.StyledText label>DIREÇÃO:</S.StyledText>
      <S.StyledText>{data.direcao}</S.StyledText>
      <S.StyledText label>ESTILO:</S.StyledText>
      <S.StyledText>{data.estilo}</S.StyledText>
      <S.StyledText label>DESCRIÇÃO:</S.StyledText>
      <S.StyledText>{data.descricao}</S.StyledText>
    </S.Wrapper>
  );
};
