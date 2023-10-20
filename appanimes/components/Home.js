import React from 'react';
import { Text, ScrollView, Image, View, SafeAreaView, StyleSheet } from 'react-native';

const AnimeInfo = ({ title, imageSource, description }) => (
  <View>
    <Text style={styles.txtinicial}>{title}</Text>
    <Image style={styles.poster} source={imageSource} />
    <Text style={styles.txt}>{description}</Text>
  </View>
);

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <AnimeInfo
          title="Dragon Ball Z"
          imageSource={require('../assets/homeperso.jpg')}
          description='"Dragon Ball Z" é conhecida por suas intensas batalhas com poderes sobre-humanos, transformações impressionantes e personagens carismáticos. A série explora temas de amizade, coragem, crescimento pessoal e a busca pela excelência nas artes marciais.'
        />

        <AnimeInfo
          title="Naruto"
          imageSource={require('../assets/narutohome.jpg')}
          description='"Naruto" é uma série de anime e mangá criada por Masashi Kishimoto que conta a história de Naruto Uzumaki, um jovem ninja da Vila da Folha, que carrega uma criatura demoníaca selada dentro dele. Naruto sonha em se tornar o Hokage, o líder de sua vila, como uma forma de obter reconhecimento e superar sua infância solitária e rejeitada.'
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bfe9ff',
    padding: 8,
  },
  poster: {
    width: 300,
    height: 400,
    margin: 40,
    borderRadius: 10,
  },
  txtinicial: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  txt: {
    color: 'black',
  },
});

