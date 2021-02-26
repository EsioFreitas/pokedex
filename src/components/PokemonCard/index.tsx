import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import selectPockemonColor from "../../utils/selectPockemonColor";

import Styles from "./styles";

interface PokemonCardProps {
  selectPokemon: (pokemon: Pokemon | null) => void;
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  selectPokemon,
}) => {
  return (
    <Pressable
      style={{
        ...Styles.PokemonCard,
        backgroundColor: selectPockemonColor(pokemon.types[0]),
      }}
      onPress={() => selectPokemon(pokemon)}
    >
      <View style={Styles.AlignCardHeader}>
        <Text style={Styles.HeaderTest}>{pokemon.name}</Text>
        <Text style={Styles.HeaderNumber}>#{pokemon.num}</Text>
      </View>
      <View style={Styles.CardContainer}>
        <Image
          style={Styles.CardImage}
          source={{
            uri: pokemon.sprite ?? undefined,
          }}
        />
        <View>
          {pokemon.types.map((type) => (
            <View style={Styles.CardTypeContainer}>
              <Text style={Styles.CardTypeText}>{type}</Text>
            </View>
          ))}
        </View>
      </View>
    </Pressable>
  );
};

export default PokemonCard;
