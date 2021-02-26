
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  ModalContainer: {
    flex: 0,
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  ModalHeader: {
    height: 200,
    padding: 10,
    paddingTop: 15,
    marginBottom: 10,
    borderRadius: 30,
  },
  ModalImage: {
    height: "100%",
    width: "100%",
    borderRadius: 30,
  },
  ModalBody: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 10,
  },
  ModalTitle: {
    color: "black", fontWeight: "bold", fontSize: 40
  },
  ModalNumber: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  ModalSubtitle: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
  },
  ModalText: {
    color: "black",
    fontSize: 15,
  },
});
