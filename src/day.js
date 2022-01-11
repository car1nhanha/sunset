import React, { useEffect } from "react";
import { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import mountain from "../assets/mountains.png";
import { convertCase } from "./utils/convertCase";

export function Day({ route }) {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(route.params);
  }, []);

  function Body({ text }) {
    return <Text style={s.paragrafo}>{text}</Text>;
  }

  return (
    <View style={s.container}>
      <ScrollView>
        <View style={s.header}>
          <ImageBackground source={mountain} style={s.image}>
            <Text style={s.title}>
              {data.title ? convertCase(data.title, "proper") : ""}
            </Text>
          </ImageBackground>
        </View>

        <View style={s.descriptions}>
          <Text style={s.data}>{data.data}</Text>
          <Text style={s.versiculo}>{data.versiculo}</Text>
        </View>
        <View style={s.body}>
          {route.params.body.map((item, i) => (
            <Body key={i} text={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    height: Dimensions.get("window").width / 2,
    width: Dimensions.get("window").width,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontFamily: "DancingScript_400Regular",
    textAlign: "center",
  },
  descriptions: {
    marginVertical: 30,
    paddingHorizontal: 20,
  },
  data: {
    textAlign: "right",
    fontFamily: "Cardo_400Regular",
    color: "#a5a5a5",
    textTransform: "uppercase",
    fontSize: 13,
  },
  versiculo: {
    marginTop: 15,
    textAlign: "center",
    fontFamily: "Cardo_400Regular",
    color: "#888",
  },
  body: {
    paddingHorizontal: 20,
  },
  paragrafo: {
    fontFamily: "Cardo_400Regular",
    marginBottom: 10,
    fontSize: 16,
    color: "#555",
  },
});
