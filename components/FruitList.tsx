import { useState, useRef, useEffect, useContext, FC } from "react";
import { View, StyleSheet, FlatList, TextInput } from "react-native";
import { FruitType, FruitContextType } from "../utils/fruitData";
import { FruitContext } from './context/FruitProvider';
import Item from './ListItem';
import Input from './Input';
import AddFruit from './AddFruit';

const FruitList: FC = () => {
  const [searchList, setSearchList] = useState<FruitType[]>([]);
  const { fruitsList } = useContext<FruitContextType>(FruitContext);
  const [showSearchList, setShowSearchList] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const inputRef = useRef<TextInput>(null);
  
  useEffect(() => {
    if (searchQuery.length > 0) {
      const foundFruits: FruitType[] = fruitsList.filter(fruit => fruit.name.toLowerCase().includes(searchQuery.toLowerCase()));
      setSearchList(foundFruits);
      setShowSearchList(true);
    } else {
      setSearchList([]);
      setShowSearchList(false);
    }
  }, [searchQuery, fruitsList])
  
  return (
    <>
    <View style={styles.search}>
      <Input
        icon="search"
        placeholder="Search"
        onChangeText={(text: string) => setSearchQuery(text)}
        inputRef={inputRef}
      />
    </View>
    <View style={styles.fruitList}>
      <FlatList
        data={showSearchList ? searchList : fruitsList}
        renderItem={({ item }) => (
          <Item
            id={item.id}
            name={item.name}
            price={item.price}
            starred={item.starred}
          />
        )}
      />
    </View>
    <View style={styles.addFruits}>
      <AddFruit />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  search: {
    flexShrink: 1,
    paddingBottom: 20,
  },
  fruitList: {
    flexGrow: 1,
    paddingBottom: 10,
  },
  addFruits: {
    justifyContent: 'flex-end'
  },
});

export default FruitList;