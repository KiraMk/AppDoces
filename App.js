import { SafeAreaView, View, StyleSheet, Text, FlatList, Image } from 'react-native';

export default function App(){

  return(
    <SafeAreaView style = {styles.container}>
      <Text style = {styles.titulo}> Os 5 doces mais Conhecidos </Text> 
      <FlatList 
      data={DadosSabores}
      renderItem={({item})=>
        <View>
          <Text style = {styles.sabores}> {item.doce}  </Text> 
          <Text style={styles.sabores}>{item.descricao}</Text>
           {item.foto && <Image style={styles.peq} source={item.foto} />}
           </View>
  }
   keyExtractor={(item) => item.doce}
    />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fdc'
  },
  titulo:{
    fontSize: 30,
    marginTop: 70,
  
  },
  sabores:{
    fontSize: 20,
    textAlign: 'center',
    margin: 20
  },
  peq:{
    flexDirection: 'row',
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 10,
  }

})

const DadosSabores = [
  { doce: 'Brigadeiro', descricao: 'Brigadeiro é um doce típico brasileiro feito de leite condensado.', foto: require('./assets/brigadier-6597018_640.jpg') },
  { doce: 'Beijinho', descricao: 'Semelhante ao brigadeiro, o beijinho é feito de leite condensado, coco ralado e manteiga.', foto: require('./assets/brigadier-842641_640.jpg') },
  { doce: 'Pavê', descricao: 'O pavê é uma sobremesa em camadas, normalmente feita com biscoitos, creme de leite, chocolate ou frutas.', foto: require('./assets/sweets-5172200_640.jpg') },
  { doce: 'Quindim', descricao: 'O quindim é um doce de origem portuguesa, composto por gema de ovo, coco ralado, açúcar e manteiga.', foto: require('./assets/custard-963744_640.jpg') },
  { doce: 'Curau', descricao: 'O curau é uma sobremesa tradicional do Brasil, feita com milho verde, leite, açúcar e canela.',foto: require('./assets/lemon-cake-8274419_640.jpg') }
];