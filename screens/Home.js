import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles.js";

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.photoContainer}>
          <Text>Photo placeholder</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.heading}>Ed Sharpay</Text>
          <Text>About Me</Text>
        </View>
      </View>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 24,
    backgroundColor: GlobalStyles.colors.neutral100,
  },
  profileContainer: {
    flexDirection: "row",
    backgroundColor: GlobalStyles.colors.secondary300,
    borderRadius: 16,
    borderColor: GlobalStyles.colors.neutral500,
    borderWidth: 1,
    padding: 16,
  },
  photoContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.neutral300,
    borderRadius: 16,
    height: 144,
    width: 144,
  },
  textContainer: {
    justifyContent: "center",
    marginLeft: 16,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 28,
    marginBottom: 12,
  },
});
