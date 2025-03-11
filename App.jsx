import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import ChatScreen from "../chat";
import FeedbackScreen from "../feedback";
import { Link } from "expo-router";

const App = () => {
  return (
    <View style={styles.container}>
        <Text style={{backgroundColor:'yellow'}}>
            Ik this is ugly af
        </Text>
      <Pressable>
        <Link href="/login">
            <Text style={{backgroundColor:'blue'}}>Login Button Lol</Text>
        </Link>
      </Pressable>
      <Pressable>
        <Link href="/chat">
          <Text style={{backgroundColor:'blue'}}>Chat Button Lol</Text>
        </Link>
      </Pressable>
      <Pressable>
        <Link href="/feedback">
          <Text style={{backgroundColor:'blue'}}>Feedback Button Lol</Text>
        </Link>
      </Pressable>
      <Pressable>
        <Link href="/profile">
          <Text style={{backgroundColor:'blue'}}>Profile Button Lol</Text>
          </Link>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default App;
