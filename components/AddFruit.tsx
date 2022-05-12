import { FC, useRef, useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Input from './Input';
import { FruitContextType } from "../utils/fruitData";
import { FruitContext } from './context/FruitProvider';
import globalStyles from '../utils/globalStyles';

const AddFruit: FC = () => {
  const [fruitName, setFruitName] = useState<string>("");
  const [fruitPrice, setFruitPrice] = useState<number>(-1);
  const [nameInputError, setNameInputError] = useState<boolean>(false);
  const [priceInputError, setPriceInputError] = useState<boolean>(false);

  const { addFruit, notInFruitsList } = useContext<FruitContextType>(FruitContext);
  const nameInputRef = useRef<TextInput>(null);
  const priceInputRef = useRef<TextInput>(null);

  const handleAdd = (): void => {
    const newFruit = { id: Date.now(), name: fruitName, price: fruitPrice, starred: false };
    let nameError = fruitName.length === 0 || !notInFruitsList(newFruit);
    let priceError = isNaN(fruitPrice) || fruitPrice < 0;

    setNameInputError(nameError);
    setPriceInputError(priceError);
    if (!nameError && !priceError) {
      addFruit(newFruit);
      setFruitName('');
      setFruitPrice(-1);
      nameInputRef.current?.clear();
      priceInputRef.current?.clear();
    }
  }

  return (
    <View style={styles.addFruitForm}>
      <View style={styles.addInputs}>
        <Input
          icon="edit"
          placeholder="Fruit Name"
          onChangeText={(name) => setFruitName(name)}
          inputRef={nameInputRef}
          showError={nameInputError}
        />
        <Input
          icon="dollar"
          placeholder='Fruit Price'
          onChangeText={(price) => setFruitPrice(price ? +price : -1)}
          inputRef={priceInputRef}
          showError={priceInputError}
        />
      </View>
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={globalStyles.button}
          onPress={handleAdd}
        >
          <Text style={globalStyles.text}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  addFruitForm: {
    justifyContent: 'flex-end',
    flexWrap: 'wrap'
  },
  addInputs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '100%'
  },
})

export default AddFruit;