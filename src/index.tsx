import React, { useEffect, useState } from "react";
import { View, Text, TextInput, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import PokemonCard from "./components/PokemonCard";
import PokemonModal from "./components/PokemonModal";
import pokemonsMock from "./mock/pokemons";

import Styles from "./styles";

const Root: React.FC = () => {
  const [selectedPokemon, SetSelectedPokemon] = useState<Pokemon | null>(null);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    treatPokemons(pokemonsMock);
  }, []);

  useEffect(() => {
    if (!search) {
      treatPokemons(pokemonsMock);
    } else {
      const newPokemons = pokemonsMock.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(search)
      );

      treatPokemons(newPokemons);
    }
  }, [search]);

  const treatPokemons = (pokemonArray: Array<any>) => {
    const tratedPokemons = pokemonArray.map((pokemon: any) => {
      const newPokemon: Pokemon = {
        id: pokemon.id,
        num: pokemon.num,
        height: pokemon.height,
        weight: pokemon.weight,
        weaknesses: pokemon.weaknesses,
        name: pokemon.name,
        sprite: pokemon.img,
        types: pokemon.type,
      };
      return newPokemon;
    });
    setPokemons(tratedPokemons);
  };

  const selectPokemon = (item: any) => SetSelectedPokemon(item);

  const renderItem = ({ item }: { item: Pokemon }) => (
    <PokemonCard pokemon={item} selectPokemon={selectPokemon} />
  );

  return (
    <View>
      <View style={Styles.MainPageHeader}>
        <Text style={Styles.MainPageText}>Pokedex</Text>
        <TextInput
          value={search}
          onChangeText={(text) => setSearch(text)}
          style={Styles.SearchInput}
          placeholder="Choose a pokemon..."
        />
      </View>
      <SafeAreaView>
        <FlatList<Pokemon>
          data={pokemons}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={Styles.ContentContainerStyle}
          columnWrapperStyle={Styles.ColumnWrapperStyle}
        />
      </SafeAreaView>
      <PokemonModal
        selectedPokemon={selectedPokemon}
        selectPokemon={SetSelectedPokemon}
      />
    </View>
  );
};

export default Root;
