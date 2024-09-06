import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  headerContainer: {
    height: 173,
    backgroundColor: "#7A4A9E",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#F2F2F2",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: -30,
    marginBottom: 35,
  },
  input: {
    flex: 1,
    maxWidth: 289,
    height: 54,
    padding: 16,
    borderWidth: 0.5,
    borderColor: "#808080",
    borderRadius: 6,
    backgroundColor: "#F2F2F2",
    fontSize: 16,
    fontWeight: "400",
    marginRight: 4,
  },
  button: {
    width: 52,
    height: 52,
    backgroundColor: "#31C667",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {},
});
