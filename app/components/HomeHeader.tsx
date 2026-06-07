import { StyleSheet, Text, View } from "react-native";
import { colors, globalStyles } from "../styles/global";

// Home Header with Date
export default function HomeHeader() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const styles = StyleSheet.create({
    date: {
      fontSize: 14,
      color: "#a0a0b0",
      marginTop: 4,
      marginBottom: 30,
    },
  });
  return (
    <View style={globalStyles.header}>
      <Text style={styles.date}>{currentDate}</Text>
    </View>
  );
}
