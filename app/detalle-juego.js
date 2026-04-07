// app/detalle-juego.js

import { useLocalSearchParams, useRouter } from "expo-router";
import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from "react-native";
import { Video } from "expo-av";
import { CONSOLAS, JUEGOS } from "../games";

const SW = Dimensions.get("window").width;

const MARCA_COLOR = {
  nintendo: "#e4000f",
  playstation: "#0070d1",
  xbox: "#52b043"
};

function Stars({ valor, size = 14 }) {
  return (
    <View style={{ flexDirection: "row", gap: 2 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <Text key={i} style={{ fontSize: size, color: i <= valor ? "#fbbf24" : "#2a4a70" }}>
          ★
        </Text>
      ))}
    </View>
  );
}

export default function DetalleJuego() {
  const router = useRouter();
  const { id, tipo } = useLocalSearchParams();

  const [slideIdx, setSlideIdx] = useState(0);
  const flatRef = useRef(null);

  // 🔍 Buscar item
  let item = null;

  if (tipo === "juego") {
    for (const lista of Object.values(JUEGOS)) {
      const f = lista.find(j => j.id === id);
      if (f) { item = f; break; }
    }
  } else {
    for (const lista of Object.values(CONSOLAS)) {
      const f = lista.find(c => c.id === id);
      if (f) { item = f; break; }
    }
  }

  if (!item) {
    return (
      <View style={s.center}>
        <Text style={s.notFound}>Producto no encontrado</Text>
        <TouchableOpacity onPress={() => router.back()} style={s.btnVolver}>
          <Text style={s.btnVolverTxt}>← Volver</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const color = MARCA_COLOR[item.marca] ?? "#00d4ff";

  const avg = item.reseñas?.length
    ? (item.reseñas.reduce((a, r) => a + r.estrellas, 0) / item.reseñas.length).toFixed(1)
    : "0.0";

  const slides = [
    ...(item.imagenes?.map((img, i) => ({
      type: "image",
      src: img,
      key: `img-${i}`
    })) || []),
    ...(item.video ? [{
      type: "video",
      src: item.video,
      key: "video"
    }] : [])
  ];

  return (
    <ScrollView style={s.screen} showsVerticalScrollIndicator={false}>

      {/* ── Carrusel ── */}
      <View style={s.carruselWrap}>
        <FlatList
          ref={flatRef}
          data={slides}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={e =>
            setSlideIdx(Math.round(e.nativeEvent.contentOffset.x / SW))
          }
          keyExtractor={(item) => item.key}
          renderItem={({ item: slide, index }) => (
  <View style={s.slide}>
    {slide.type === "video" ? (
      <Video
        source={slide.src}
        style={{ width: SW, height: 260 }}
        resizeMode="cover"
        useNativeControls
        shouldPlay={slideIdx === index}   
        isLooping                         
      />
    ) : (
      <Image
        source={slide.src}
        style={{ width: SW, height: 260 }}
        resizeMode="cover"
      />
    )}
  </View>
)}
        />

        {/* Dots */}
        <View style={s.dots}>
          {slides.map((sl, i) => (
            <TouchableOpacity
              key={sl.key}
              onPress={() => {
                flatRef.current?.scrollToIndex({ index: i, animated: true });
                setSlideIdx(i);
              }}
            >
              <View
                style={[
                  s.dot,
                  slideIdx === i && { backgroundColor: color, width: 18 },
                  sl.type === "video" && slideIdx !== i && { borderColor: color }
                ]}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Botón volver */}
        <TouchableOpacity style={s.backBtn} onPress={() => router.back()}>
          <Text style={s.backTxt}>‹</Text>
        </TouchableOpacity>

        {/* Badge VIDEO */}
        {slides[slideIdx]?.type === "video" && (
          <View style={[s.videoBadge, { backgroundColor: color }]}>
            <Text style={s.videoBadgeTxt}>▶ VIDEO</Text>
          </View>
        )}
      </View>

      {/* ── Info ── */}
      <View style={s.infoSec}>
        <Text style={[s.marca, { color }]}>{item.marca?.toUpperCase()}</Text>
        <Text style={s.titulo}>{item.titulo}</Text>
        <Text style={s.sub}>{item.plataforma ?? item.modelo}</Text>

        <View style={s.row}>
          <Stars valor={Math.round(parseFloat(avg))} size={15} />
          <Text style={s.avg}>{avg}</Text>
        </View>

        <Text style={s.desc}>{item.descripcion}</Text>
      </View>

      {/* Precio */}
      <View style={s.compraSec}>
        <Text style={s.precio}>
          {item.precio === 0 ? "GRATIS" : `$${item.precio.toFixed(2)} USD`}
        </Text>
      </View>

      {/* Reseñas */}
      <View style={s.reseñasSec}>
        {item.reseñas.map((r, i) => (
          <View key={i} style={s.card}>
            <Text style={s.nombre}>{r.nombre}</Text>
            <Stars valor={r.estrellas} size={12} />
            <Text style={s.texto}>"{r.texto}"</Text>
          </View>
        ))}
      </View>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const s = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#080c14" },
  carruselWrap: { position: "relative" },
  slide: { width: SW, height: 260 },

  dots: {
    position: "absolute",
    bottom: 10,
    alignSelf: "center",
    flexDirection: "row",
    gap: 6
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#2a4a70",
    borderWidth: 1
  },

  backBtn: {
    position: "absolute",
    top: 14,
    left: 14,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "rgba(0,0,0,0.6)",
    alignItems: "center",
    justifyContent: "center"
  },

  backTxt: { fontSize: 22, color: "#fff" },

  videoBadge: {
    position: "absolute",
    top: 14,
    right: 14,
    padding: 6,
    borderRadius: 10
  },

  videoBadgeTxt: { color: "white", fontWeight: "700" },

  infoSec: { padding: 20 },
  marca: { fontWeight: "700" },
  titulo: { fontSize: 22, color: "#fff" },
  sub: { color: "#4a6080" },

  row: { flexDirection: "row", alignItems: "center", gap: 8 },
  avg: { color: "#fbbf24" },

  desc: { color: "#94a3b8" },

  compraSec: { padding: 20 },
  precio: { fontSize: 24, color: "#00d4ff" },

  reseñasSec: { padding: 20 },
  card: { backgroundColor: "#0d1117", padding: 10, marginTop: 10, borderRadius: 10 },
  nombre: { color: "#94a3b8" },
  texto: { color: "#4a6080" },

  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  notFound: { color: "#4a6080" },

  btnVolver: { marginTop: 10 },
  btnVolverTxt: { color: "#fff" }
});