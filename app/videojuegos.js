// app/videojuegos.js
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CATEGORIAS, JUEGOS, MARCAS } from "../games";

function Stars({ valor }) {
    return (
    <View style={{ flexDirection: "row", gap: 1 }}>
        {[1,2,3,4,5].map(i => (
        <Text key={i} style={{ fontSize: 11, color: i <= valor ? "#fbbf24" : "#2a4a70" }}>★</Text>
        ))}
    </View>
    );
}

export default function Videojuegos() {
    const router = useRouter();
    const [marcaActiva, setMarcaActiva] = useState("nintendo");
    const [catActiva, setCatActiva]     = useState("futbol");

    const marcaColor  = MARCAS.find(m => m.id === marcaActiva)?.color ?? "#00d4ff";
    const juegosFiltrados = (JUEGOS[catActiva] ?? []).filter(j => j.marca === marcaActiva);

    return (
    <View style={s.screen}>
      {/* Header */}
        <View style={s.header}>
        <TouchableOpacity onPress={() => router.back()} style={s.backBtn}>
            <Text style={s.backTxt}>‹</Text>
        </TouchableOpacity>
        <Text style={s.titulo}>🎮 VIDEOJUEGOS</Text>
        </View>

      {/* Subpestañas marca */}
        <View style={s.marcaRow}>
        {MARCAS.map(m => (
            <TouchableOpacity
            key={m.id}
            style={[s.marcaTab, { borderColor: m.color }, marcaActiva === m.id && { backgroundColor: m.color }]}
            onPress={() => setMarcaActiva(m.id)}
            >
            <Text style={[s.marcaLbl, { color: marcaActiva === m.id ? "#fff" : m.color }]}>{m.label}</Text>
            </TouchableOpacity>
        ))}
        </View>

      {/* Categorías */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={s.catScroll} contentContainerStyle={s.catContent}>
        {CATEGORIAS.map(cat => (
            <TouchableOpacity
            key={cat.id}
            style={[s.catChip, catActiva === cat.id && { backgroundColor: cat.color + "25", borderColor: cat.color }]}
            onPress={() => setCatActiva(cat.id)}
            >
            <Text style={[s.catLbl, { color: catActiva === cat.id ? cat.color : "#4a6080" }]}>{cat.label}</Text>
            </TouchableOpacity>
        ))}
        </ScrollView>

      {/* Lista */}
        <ScrollView style={s.lista} contentContainerStyle={s.listaContent} showsVerticalScrollIndicator={false}>
        {juegosFiltrados.length === 0 ? (
            <View style={s.empty}>
            <Text style={{ fontSize: 44 }}>🎮</Text>
            <Text style={s.emptyTxt}>No hay juegos de {marcaActiva} en esta categoría</Text>
            </View>
        ) : (
            juegosFiltrados.map(juego => {
            const avg = juego.reseñas.reduce((a, r) => a + r.estrellas, 0) / juego.reseñas.length;
            return (
                <TouchableOpacity
                key={juego.id}
                style={s.card}
                onPress={() => router.push({ pathname: "/detalle-juego", params: { id: juego.id, tipo: "juego" } })}
                activeOpacity={0.8}
                >
                {/* Imagen / placeholder */}
                <View style={[s.imgBox, { borderColor: marcaColor + "40" }]}>
                    {/* Cuando tengas la imagen reemplaza con:
                      <Image source={juego.imagenes[0]} style={s.img} resizeMode="cover" /> */}
                    <Text style={{ fontSize: 34 }}>{juego.emoji}</Text>
                </View>

                <View style={s.info}>
                    <View style={[s.badge, { backgroundColor: marcaColor + "20", borderColor: marcaColor + "50" }]}>
                    <Text style={[s.badgeTxt, { color: marcaColor }]}>{marcaActiva.toUpperCase()}</Text>
                    </View>
                    <Text style={s.jTitulo} numberOfLines={2}>{juego.titulo}</Text>
                    <View style={{ flexDirection: "row", alignItems: "baseline", gap: 4 }}>
                    <Text style={s.precio}>{juego.precio === 0 ? "GRATIS" : `$${juego.precio.toFixed(2)}`}</Text>
                    {juego.precio > 0 && <Text style={s.usd}>USD</Text>}
                    </View>
                    <Stars valor={Math.round(avg)} />
                </View>
                <Text style={s.flecha}>›</Text>
                </TouchableOpacity>
            );
            })
        )}
        <View style={{ height: 30 }} />
        </ScrollView>
    </View>
    );
}

const s = StyleSheet.create({
    screen: { flex: 1, backgroundColor: "#080c14" },
    header: { flexDirection: "row", alignItems: "center", backgroundColor: "#0d1117", borderBottomColor: "#1e2d45", borderBottomWidth: 1, paddingTop: 50, paddingHorizontal: 16, paddingBottom: 14, gap: 10 },
    backBtn: { width: 34, height: 34, borderRadius: 17, backgroundColor: "#0a0f1a", borderWidth: 1, borderColor: "#1e2d45", alignItems: "center", justifyContent: "center" },
    backTxt: { fontSize: 20, color: "#94a3b8" },
    titulo: { fontSize: 18, fontWeight: "900", color: "#e2e8f0", letterSpacing: 1.5 },
    marcaRow: { flexDirection: "row", gap: 8, backgroundColor: "#0a0f1a", paddingHorizontal: 16, paddingVertical: 12, borderBottomColor: "#1a2740", borderBottomWidth: 1 },
    marcaTab: { flex: 1, paddingVertical: 7, borderRadius: 20, borderWidth: 1.5, alignItems: "center" },
    marcaLbl: { fontSize: 12, fontWeight: "700" },
    catScroll: { backgroundColor: "#080c14", maxHeight: 50, borderBottomColor: "#1a2740", borderBottomWidth: 1 },
    catContent: { paddingHorizontal: 14, paddingVertical: 10, gap: 8, flexDirection: "row", alignItems: "center" },
    catChip: { paddingHorizontal: 13, paddingVertical: 5, borderRadius: 16, borderWidth: 1, borderColor: "#1e2d45" },
    catLbl: { fontSize: 12, fontWeight: "600" },
    lista: { flex: 1 },
    listaContent: { padding: 14, gap: 12 },
    card: { backgroundColor: "#0d1117", borderRadius: 14, borderWidth: 1, borderColor: "#1e2d45", flexDirection: "row", overflow: "hidden", alignItems: "center" },
    imgBox: { width: 96, height: 96, backgroundColor: "#05090f", borderRightWidth: 1, alignItems: "center", justifyContent: "center" },
    img: { width: 96, height: 96 },
    info: { flex: 1, padding: 12, gap: 4 },
    badge: { alignSelf: "flex-start", paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10, borderWidth: 1 },
    badgeTxt: { fontSize: 9, fontWeight: "700", letterSpacing: 1 },
    jTitulo: { fontSize: 13, fontWeight: "700", color: "#e2e8f0", lineHeight: 17 },
    jPlat: { fontSize: 10, color: "#4a6080" },
    precio: { fontSize: 16, fontWeight: "900", color: "#00d4ff" },
    usd: { fontSize: 10, color: "#4a6080" },
    flecha: { fontSize: 24, color: "#2a4a70", paddingRight: 12 },
    empty: { alignItems: "center", paddingTop: 60, gap: 12 },
    emptyTxt: { color: "#4a6080", fontSize: 13, textAlign: "center" },
});
