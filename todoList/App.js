import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      {/* Tareas de hoy*/}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tareas de Hoy</Text>

        <View style={styles.items}>

          {/* Aquí van las tareas*/}

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper:{
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle:{
    fontSize:24,
    fontWeight: 'bold'
  },
  items:{},
});
