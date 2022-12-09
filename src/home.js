import React, { useEffect, useState } from "react";
import {
  Dimensions,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import bg from "../assets/mountains.png";
import data from "../dados.json";
import { convertCase } from "./utils/convertCase";
import { convertData } from "./utils/convertData";

const MESES = [
  {
    mes: "Janeiro",
    numero: 1,
  },
  {
    mes: "Fevereiro",
    numero: 2,
  },
  {
    mes: "Março",
    numero: 3,
  },
  {
    mes: "Abril",
    numero: 4,
  },
  {
    mes: "Maio",
    numero: 5,
  },
  {
    mes: "Junho",
    numero: 6,
  },
  {
    mes: "Julho",
    numero: 7,
  },
  {
    mes: "Agosto",
    numero: 8,
  },
  {
    mes: "Setembro",
    numero: 9,
  },
  {
    mes: "Outubro",
    numero: 10,
  },
  {
    mes: "Novembro",
    numero: 11,
  },
  {
    mes: "Dezembro",
    numero: 12,
  },
];

export function Home({ navigation }) {
  const [mesAtual, setMesAtual] = useState(1);
  const [mes, setMes] = useState([]);

  const getAtualMes = () => {
    const dataAtual = new Date();
    setMesAtual(dataAtual.getMonth() + 1);
    setMes(data.filter((item) => item.mes === dataAtual.getMonth() + 1));
  };

  useEffect(() => {
    definirMes(1);
    getAtualMes();
  }, []);

  function definirMes(n) {
    setMes(data.filter((item) => item.mes === n));
  }

  function List({ obj }) {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("day", obj);
        }}
      >
        <View style={s.titleContainer}>
          <Text style={s.titleItem}>{convertData(obj.data)} - </Text>
          <Text style={s.titleItem}>{convertCase(obj.title, "proper")}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  function Meses({ item }) {
    return (
      <TouchableOpacity
        style={item.numero === mesAtual ? [s.month, s.monthOn] : [s.month]}
        onPress={() => {
          setMesAtual(item.numero);
          definirMes(item.numero);
        }}
      >
        <Text>{item.mes}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={s.container}>
      <ScrollView>
        <View style={s.header}>
          <ImageBackground source={bg} style={s.image}>
            <Text style={s.title}>Eles Foram, Eu Vou</Text>
            <Text style={s.descriptions}>
              Relatos Incríveis De Entrega{"\n"}Pessoal E Amor Prático
            </Text>
          </ImageBackground>
        </View>

        <View style={s.monthContainer}>
          <ScrollView horizontal={true}>
            <View style={s.monthScroll}>
              {MESES.map((item, i) => (
                <Meses key={i} item={item} />
              ))}
            </View>
          </ScrollView>
        </View>

        <View style={s.titles}>
          {mes.map((item, i) => (
            <List key={i} obj={item} />
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
    height: Dimensions.get("window").width * 0.7,
    width: Dimensions.get("window").width,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    color: "#fff",
    fontSize: 38,
    fontFamily: "DancingScript_400Regular",
    marginBottom: 40,
  },
  descriptions: {
    color: "#fff",
    fontFamily: "Cardo_400Regular",
    fontSize: 18,
  },
  monthContainer: {
    width: "100%",
  },
  monthScroll: {
    flexDirection: "row",
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  month: {
    backgroundColor: "#ffe4d7",
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 20,
    borderRadius: 20,
  },
  monthOn: {
    backgroundColor: "#ffb792",
  },
  titlesScroll: {
    flexDirection: "column",
  },
  titleContainer: {
    marginHorizontal: 20,
    marginVertical: 5,
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 20,
    flexDirection: "row",
  },
  titleItem: {
    fontFamily: "Cardo_400Regular",
  },
});
