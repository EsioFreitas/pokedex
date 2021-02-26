import React from "react";
import { Image, Text, View } from "react-native";
import Modal from "react-native-modal";
import selectPockemonColor from "../../utils/selectPockemonColor";

import Styles from "./styles";

interface PokemonModelProps {
  selectPokemon: (pokemon: Pokemon | null) => void;
  selectedPokemon: Pokemon | null;
}

const PokemonModal: React.FC<PokemonModelProps> = ({
  selectedPokemon,
  selectPokemon,
}) => {
  return (
    <Modal
      testID={"pokemonModal"}
      isVisible={selectedPokemon != null}
      onSwipeComplete={() => {
        selectPokemon(null);
      }}
      swipeDirection={["up", "left", "right", "down"]}
      style={{ margin: 0 }}
      onBackdropPress={() => {
        selectPokemon(null);
      }}
    >
      <View style={Styles.ModalContainer}>
        <View>
          <View
            style={{
              ...Styles.ModalHeader,
              backgroundColor: selectPockemonColor(
                selectedPokemon?.types[0] ?? ""
              ),
            }}
          >
            <Image
              resizeMode={"contain"}
              style={Styles.ModalImage}
              source={{
                uri: selectedPokemon?.sprite ?? undefined,
              }}
            />
          </View>

          <View style={{ padding: 10 }}>
            <View style={Styles.ModalBody}>
              <Text style={Styles.ModalTitle}>{selectedPokemon?.name}</Text>
              <Text style={Styles.ModalNumber}>#{selectedPokemon?.num}</Text>
            </View>
            <View style={{ marginBottom: 10 }}>
              <Text style={Styles.ModalSubtitle}>Weaknesses</Text>
              {selectedPokemon?.weaknesses.map((weak) => (
                <Text style={Styles.ModalText}>{weak}</Text>
              ))}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PokemonModal;
