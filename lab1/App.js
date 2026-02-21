import React,{ useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, Pressable,ScrollView, TextInput, TouchableOpacity, FlatList,KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons'

const Header = () => (
  <View style={styles.headerContainer}>
    <View style={styles.logoRow}>
      <Image 
        source={require('./src/assets/logo.png')}
        style={styles.logo} 
      />
      <Text style={styles.appTitle}>CATSGLASSESS</Text>
    </View>
  </View>
);

const Footer = () => (
  <View style={styles.footer}>
    <Text style={styles.footerText}>Литвиненко Микола Вікторович, ВТ-24-1</Text>
  </View>
);

const Tab = createMaterialTopTabNavigator();
const NewsScreen = () => {
  const newsData = Array(8).fill({
    title: 'Заголовок новини',
    date: '20.12.2026',
    text: 'Короткий текст новини  Lorem ipsum set amet si el piore kod feeier Dunco, glo et amit umo glen lorem et si ugo'
  });

  return (
    <FlatList
      data={newsData}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={styles.newsItem}>
          <View style={styles.newsImagePlaceholder}>
             <Ionicons name="image-outline" size={60} color="#ccc" />
          </View>
          <View style={styles.newsTextContent}>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <Text style={styles.newsDate}>{item.date}</Text>
            <Text style={styles.newsText}>{item.text}</Text>
          </View>
        </View>
      )}
      ListHeaderComponent={<Text style={styles.screenTitle}>Новини</Text>}
    />
  );
};

const ClicablePhoto = () => {
  const scaleValue = useRef(new Animated.Value(1)).current;
  const [active, setActive] = React.useState(false);

  const onPressIn = () => {
    setActive(true);
    Animated.spring(scaleValue, {
      toValue: 1.5, 
      useNativeDriver: true,
    }).start();
  };

  const onPressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start(() => setActive(false)); 
  };

  return (
    <Pressable 
      onPressIn={onPressIn} 
      onPressOut={onPressOut}
      style={{ flex: 1, zIndex: active ? 10 : 1 }} 
    >
      <Animated.View style={[
        styles.galleryBox, 
        { transform: [{ scale: scaleValue }] } 
      ]}>
        <View style={{ flex: 1, backgroundColor: '#FFC300', borderRadius: 8 }} />
      </Animated.View>
    </Pressable>
  );
};

const GalleryScreen = () => {
  const photos = Array(10).fill({});
  return (
    <FlatList
      data={photos}
      numColumns={3}
      keyExtractor={(_, index) => index.toString()}
      renderItem={() => <ClicablePhoto  />}
      contentContainerStyle={{ padding: 10 }}
    />
  );
};

const ProfileScreen = () => (

   <KeyboardAvoidingView 
    style={{ flex: 1 }}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
   
    keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 120}
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    
  <ScrollView style={styles.formContainer}  contentContainerStyle={{  
    paddingBottom: 100
  }}
  keyboardShouldPersistTaps="handled">
    <Text style={styles.screenTitle}>Реєстрація</Text>
    <Text>Ім'я</Text>
    <TextInput style={styles.input} />
    <Text>Прізвище</Text>
    <TextInput style={styles.input} />
    <Text>Електронна пошта</Text>
    <TextInput style={styles.input} />
    <Text>Пароль</Text>
    <TextInput style={styles.input} secureTextEntry />
    <Text>Пароль (ще раз)</Text>
    <TextInput style={styles.input} secureTextEntry />
   
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}>
        <Text style={styles.buttonText}>Зареєструватися</Text>
      </TouchableOpacity>
    </View>
    
      </ScrollView>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
);
export default function App() {
  return (
     <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <NavigationContainer>
        <Header />
        
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color }) => {
              let iconName;
              if (route.name === 'home') iconName = 'home';
              else if (route.name === 'gallery') iconName = 'images';
              else iconName = 'person';
              return <Ionicons name={iconName} size={24} color={color} />;
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
            tabBarIndicatorStyle: {
              backgroundColor: '#000',
              borderRadius:15,
            height: 5, 
            },
            tabBarLabelStyle: { fontSize: 10, textTransform: 'none' },
            tabBarShowIcon: true,
          })}
        >
          <Tab.Screen name="home" component={NewsScreen} />
          <Tab.Screen name="gallery" component={GalleryScreen} />
          <Tab.Screen name="profile" component={ProfileScreen} />
        </Tab.Navigator>

        <Footer />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: { padding: 10, borderBottomWidth: 1, borderColor: '#eee' },
  logoRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  logo: { width: 150, height: 40, resizeMode: 'contain' },
  appTitle: { fontSize: 18, fontWeight: 'bold' },
  
  screenTitle: { fontSize: 24, textAlign: 'center', marginVertical: 0, borderBottomLeftRadius:50,borderBottomRightRadius:50, padding:10, backgroundColor:"#FFC300" },
  
  newsItem: { flexDirection: 'row', padding: 15, borderBottomWidth: 1, borderColor: '#f0f0f0', backgroundColor:"#eee"},
  newsImagePlaceholder: { width: 125, height: 125, backgroundColor: '#f9f9f9', borderRadius:15, justifyContent: 'center', alignItems: 'center' },
  newsTextContent: { marginLeft: 15, flex: 1 },
  newsTitle: { fontWeight: 'bold',color:"#25343F", fontSize: 16 },
  newsDate: { color: 'gray', fontSize: 12 },
  newsText: { fontSize: 14 },

  galleryBox: { flex: 1, height: 100, backgroundColor: '#FFC300', margin: 5,elevation: 2 ,borderRadius: 5, borderWidth: 1, borderColor: '#000' },

  formContainer: { padding: 20,paddingTop:0 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 15, padding: 10, marginBottom: 15, marginTop: 5 },
  buttonContainer: {justifyContent:"center" , alignItems:"center"},
  button: { backgroundColor: '#FFC300', padding: 15, borderRadius: 15,  alignItems: 'center', width:"50%"},
  buttonText: { color: '#fff', fontWeight: 'bold' },

  footer: { padding: 5, alignItems: 'center', backgroundColor: '#eee' },
  footerText: { fontSize: 12, fontStyle: 'italic', color: '#555' }
});
