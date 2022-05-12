import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, StatusBar, useWindowDimensions } from 'react-native';

import StarredList from './components/StarredList';
import FruitList from './components/FruitList';
import { FruitProvider } from './components/context/FruitProvider';
import globalStyles from './utils/globalStyles';

export default function App() {
  const [tab, setTab] = useState<string>('list');
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.main, { paddingHorizontal: width > 1000 ? '15%' : '5%' }]}>
        <FruitProvider>
          <View style={styles.tabsContainer}>
            <TouchableOpacity
              onPress={() => setTab("list")}
              style={styles.tab}
            >
              <Text style={globalStyles.text}>List</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setTab("starred")}
              style={styles.tab}
            >
              <Text style={globalStyles.text}>Starred</Text>
            </TouchableOpacity>
          </View>
          <View>
            {tab === "list" && (
              <FruitList />
            )}
            {tab === "starred" && (
              <StarredList />
            )}
          </View>
        </FruitProvider>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: 'whitesmoke',
  },
  main: {
    height: '100%',
    width: '100%',
    paddingVertical: 15,
    marginTop: StatusBar.currentHeight,
  },
  tabsContainer: {
    flexDirection: "row",
    borderBottomColor: "skyblue",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  tab: {
    backgroundColor: 'skyblue',
    padding: 10,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    marginRight: 5,
    minWidth: 60,
    alignItems: 'center',
  },
});
