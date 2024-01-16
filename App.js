import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView,Linking } from 'react-native';
import { useState } from 'react';

export default function Porto() {
  const [contents, setContents] = useState([
    { id: 1, likes: 10, dislikes: 5, image: require('./assets/content1.png'), text: 'Projek FIGMA',link:'https://www.figma.com/file/Ks0PbpmxFV8XkqZnA2y0g5/FTR?type=design&node-id=0%3A1&mode=design&t=l3R9eTnSGdGrfIH3-1'},
    { id: 2, likes: 15, dislikes: 8, image: require('./assets/content2.png'), text: 'Powerpoint Design',link:'https://www.figma.com/file/Ks0PbpmxFV8XkqZnA2y0g5/FTR?type=design&node-id=0%3A1&mode=design&t=l3R9eTnSGdGrfIH3-1'},
    { id: 3, likes: 7, dislikes: 3, image: require('./assets/snack-icon.png'), text: 'Content 3',link:"https://google.com"},
  ]);

  const handleLikePress = (contentId) => {
    setContents((prevContents) => {
      return prevContents.map((content) => {
        if (content.id === contentId) {
          return { ...content, likes: content.likes + 1 };
        }
        return content;
      });
    });
  };

  const handleDislikePress = (contentId) => {
    setContents((prevContents) => {
      return prevContents.map((content) => {
        if (content.id === contentId) {
          return { ...content, dislikes: content.dislikes + 1 };
        }
        return content;
      });
    });
  };

  const handleLinkPress = async (link) => {
    const supported = await Linking.canOpenURL(link);
    if (supported) {
      await Linking.openURL(link);
    } else {
      console.warn("Tidak dapat membuka tautan: " + link);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.contentContainer}>
    <Image source={require('./assets/dhafin.jpg')} style={styles.headimg} resizeMode="cover" />
    <Text style={styles.headertxt}>Dhafin Zhilal S.A.</Text>
    <Text style={styles.subheadertxt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
    <TouchableOpacity style={styles.headbtn}>
        <Text style={styles.linktxt}>Contact Me</Text>
      </TouchableOpacity>
    </View>
      {contents.map((content) => (
        <View key={content.id} style={styles.contentContainer}>
          <Image source={content.image} style={styles.image} resizeMode="cover" />
          <Text style={styles.contentText}>{content.text}</Text>
                <TouchableOpacity onPress={() => handleLinkPress(content.link)} style={styles.linkbtn}>
        <Text style={styles.linktxt}>Open Project</Text>
      </TouchableOpacity>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={() => handleLikePress(content.id)}>
              <Text style={styles.buttonText}><Image style={styles.iconld} source={require('./assets/like.png')} resizeMode="contain" />  ({content.likes})</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => handleDislikePress(content.id)}>
              <Text style={styles.buttonText}><Image style={styles.iconld} source={require('./assets/dislike.png')} resizeMode="contain" />  ({content.dislikes})</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap:15,
    backgroundColor:'#FAF8ED',
  },
  contentContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  headertxt:{
    fontFamily:'Lexend',
    fontWeight:550,
    fontSize:20,
    textAlign:'center',
    alignSelf:'center',
    marginHorizontal:20,
  },
  subheadertxt:{
    fontFamily:'Manrope',
    fontWeight:500,
    fontSize:16,
    textAlign:'center',
    alignSelf:'center',
    marginHorizontal:35,
  },
  headimg:{
    width: 150,
    height: 150,
    borderRadius:20,
    marginBottom:15
  },
  image: {
    width: 290,
    height: 200,
    borderRadius:20,
  },
  contentText: {
    fontSize: 18,
    marginVertical: 10,
    fontFamily:'Lexend',
    fontWeight:500,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap:50,
  },
  button: {
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontFamily:'Lexend',
    alignItems:'center',
    justifyContent:'center',
  },
  iconld:{
    width:20,
    height:20
  },
  linktxt:{
    color: 'white',
    fontSize: 16,
    fontFamily:'Manrope',
    fontWeight:650,
    alignItems:'center',
    justifyContent:'center',
  },
  linkbtn:{
    backgroundColor:'#BC7D3E',
    padding:6,
    marginBottom:15,
    borderRadius:6
  },
  headbtn:{
    backgroundColor:'#BC7D3E',
    padding:6,
    marginTop:15,
    borderRadius:6
  }
});
