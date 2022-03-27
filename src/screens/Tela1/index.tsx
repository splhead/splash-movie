import React from 'react';
import {View, FlatList} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MovieData, RootStackParamList} from '../../../App';

import {FlatComponent} from '../../components/FlatComponent';

export type Tela1Props = NativeStackScreenProps<RootStackParamList, 'Tela1'>;

export const Tela1 = ({navigation}: Tela1Props) => {
  const navegar = (item: MovieData) => {
    navigation.navigate('Tela2', {data: item});
  };

  const data = [
    {
      key: '0',
      filme: 'SCOOBY! O filme',
      ano: 2020,
      estilo: 'Comédia',
      direcao: 'Tony Cervone',
      image:
        'https://br.web.img3.acsta.net/pictures/20/03/05/20/58/4942195.jpg',
      descricao:
        'Scooby e sua turma encaram o seu maior e mais difícil mistério de todos os tempos: um plano maligno para liberar o cão fantasma, Cérbero, no mundo. Enquanto corre para impedir esse "apocãolipse" global, a turma descobre que Scooby tem um legado secreto e um destino épico maior do que qualquer um podia imaginar.',
    },
    {
      key: '1',
      filme: 'Doutor Estranho - Multiverso da Loucura',
      ano: 2022,
      estilo: 'Aventura | Ação',
      direcao: 'Sam Raimi',
      image:
        'https://br.web.img3.acsta.net/pictures/22/02/14/18/29/1382589.png',
      descricao:
        'Em Doutor Estranho no Multiverso da Loucura, após derrotar Dormammu e enfrentar Thanos nos eventos de Vingadores: Ultimato, o Mago Supremo, Stephen Strange (Benedict Cumberbatch), e seu parceiro Wong (Benedict Wong), continuam suas pesquisas sobre a Joia do Tempo. Mas um velho amigo que virou inimigo coloca um ponto final nos seus planos e faz com que Strange desencadeie um mal indescritível, o obrigando a enfrentar uma nova e poderosa ameaça. O longa se conecta com a série do Disney+ WandaVision e tem relação também com Loki. O longa pertence a fase 4 do MCU onde a realidade do universo pode entrar em colapso por causa do mesmo feitiço que trouxe os vilões do Teioso para o mundo dos Vingadores e o Mago Supremo precisará contar com a ajuda de Wanda (Elizabeth Olsen), que vive isolada desde os eventos de WandaVision.',
    },
  ];

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <FlatComponent data={item} onPress={() => navegar(item)} />
        )}
      />
    </View>
  );
};
