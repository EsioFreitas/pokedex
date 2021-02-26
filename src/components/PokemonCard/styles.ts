
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  PokemonCard: {
    width: "48.5%",
    padding: 10,
    borderRadius: 15,
    marginBottom: "3%",
  },
  AlignCardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  HeaderTest: {
    color: "white", fontWeight: "bold", fontSize: 20,
  },
  HeaderNumber: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    opacity: 0.8,
  },
  CardContainer: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: 10,
  },
  CardImage: {
    height: 70, width: "50%"
  },
  CardTypeContainer: {
    padding: 1,
    paddingHorizontal: 8,
    borderRadius: 50,
    backgroundColor: "#ffffff40",
    marginBottom: 3,
    alignItems: "center",
  },
  CardTypeText: {
    color: "white",
    fontSize: 12,
  },
});
