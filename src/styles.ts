import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  MainPageHeader: {
    backgroundColor: "#EF5350",
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
    justifyContent: "flex-end",
    padding: 20,
  },
  MainPageText: {
    color: "white",
    fontSize: 30,
    marginBottom: 15,
    fontWeight: "bold",
  },
  SearchInput: {
    height: 45,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 30,
    backgroundColor: "white",
    padding: 10,
  },
  ContentContainerStyle: {
    margin: "3%",
  },
  ColumnWrapperStyle: {
    flex: 1, justifyContent: "space-between"
  },
});
