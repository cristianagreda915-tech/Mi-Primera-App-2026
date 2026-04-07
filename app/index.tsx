// app/index.tsx  — Pantalla principal de la tienda

import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.storeName}>PIXEL VAULT</Text>
        <Text style={styles.storeSub}>GAMING STORE</Text>
      </View>

      <Text style={styles.bienvenida}>
        Encuentra los mejores juegos y consolas de Nintendo, PlayStation y Xbox
      </Text>

      <View style={styles.botonesWrap}>
        <TouchableOpacity
          style={[styles.botonGrande, styles.botonJuegos]}
          onPress={() => router.push("/videojuegos")}
          activeOpacity={0.85}
        >
          <Text style={styles.botonIcono}>🎮</Text>
          <View>
            <Text style={styles.botonTitulo}>VIDEOJUEGOS</Text>
            <Text style={styles.botonSub}>Fútbol · Acción · Carreras · Más</Text>
          </View>
          <Text style={styles.botonFlecha}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botonGrande, styles.botonConsolas]}
          onPress={() => router.push("/consolas")}
          activeOpacity={0.85}
        >
          <Text style={styles.botonIcono}>🕹️</Text>
          <View>
            <Text style={styles.botonTitulo}>CONSOLAS</Text>
            <Text style={styles.botonSub}>Nintendo · PlayStation · Xbox</Text>
          </View>
          <Text style={styles.botonFlecha}>›</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.marcasRow}>
        <View style={[styles.marcaChip, { borderColor: "#e4000f50" }]}>
          <Text style={[styles.marcaTexto, { color: "#e4000f" }]}>Nintendo</Text>
        </View>
        <View style={[styles.marcaChip, { borderColor: "#0070d150" }]}>
          <Text style={[styles.marcaTexto, { color: "#0070d1" }]}>PlayStation</Text>
        </View>
        <View style={[styles.marcaChip, { borderColor: "#52b04350" }]}>
          <Text style={[styles.marcaTexto, { color: "#52b043" }]}>Xbox</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#080c14", paddingTop: 60, paddingHorizontal: 24 },
  header: { alignItems: "center", marginBottom: 8 },
  storeName: { fontSize: 34, fontWeight: "900", letterSpacing: 6, color: "#e2e8f0" },
  storeSub: { fontSize: 11, letterSpacing: 5, color: "#00d4ff", fontWeight: "700", marginTop: 2 },
  bienvenida: { fontSize: 14, color: "#4a6080", textAlign: "center", lineHeight: 21, marginTop: 20, marginBottom: 36 },
  botonesWrap: { gap: 16 },
  botonGrande: { flexDirection: "row", alignItems: "center", gap: 16, borderRadius: 18, padding: 22, borderWidth: 1 },
  botonJuegos: { backgroundColor: "#0d1a2e", borderColor: "#00d4ff30" },
  botonConsolas: { backgroundColor: "#0d1a0d", borderColor: "#52b04330" },
  botonIcono: { fontSize: 36 },
  botonTitulo: { fontSize: 16, fontWeight: "900", color: "#e2e8f0", letterSpacing: 1.5 },
  botonSub: { fontSize: 12, color: "#4a6080", marginTop: 3 },
  botonFlecha: { fontSize: 28, color: "#2a4a70", marginLeft: "auto" },
  marcasRow: { flexDirection: "row", justifyContent: "center", gap: 10, marginTop: 36 },
  marcaChip: { borderWidth: 1, borderRadius: 20, paddingHorizontal: 14, paddingVertical: 6 },
  marcaTexto: { fontSize: 12, fontWeight: "700" },
});
