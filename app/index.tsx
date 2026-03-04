import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

// ─── PALETAS ─────────────────────────────────────────────────────────────────
const DARK = {
  bg: "#0a0a0a",
  surface: "#141414",
  surfaceAlt: "#1a1a1a",
  border: "#2a2a2a",
  acento: "#FF6B00",
  acentoDim: "#7f3500",
  texto: "#f0ece4",
  subtexto: "#6b6560",
  input: "#111111",
  danger: "#ff2d2d",
  success: "#22c55e",
  gold: "#d4a017",
};

const LIGHT = {
  bg: "#f0ece4",
  surface: "#ffffff",
  surfaceAlt: "#faf8f5",
  border: "#ddd8d0",
  acento: "#cc4e00",
  acentoDim: "#ffe0cc",
  texto: "#0a0a0a",
  subtexto: "#7a736a",
  input: "#ffffff",
  danger: "#cc0000",
  success: "#15803d",
  gold: "#a07800",
};

const shadow = (c) => ({
  shadowColor: c,
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.45,
  shadowRadius: 8,
  elevation: 8,
});

// ─── COMPONENTES ─────────────────────────────────────────────────────────────

function Divider({ t }) {
  return (
    <View style={{ marginVertical: 20, flexDirection: "row", alignItems: "center", gap: 8 }}>
      <View style={{ flex: 1, height: 1, backgroundColor: t.border }} />
      <Text style={{ color: t.acento, fontSize: 10, fontWeight: "900", letterSpacing: 3 }}>✦ ✦ ✦</Text>
      <View style={{ flex: 1, height: 1, backgroundColor: t.border }} />
    </View>
  );
}

function SectionHeader({ icon, title, t }) {
  return (
    <View style={{ marginBottom: 14, paddingHorizontal: 16 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <View style={{ width: 4, height: 18, borderRadius: 1, backgroundColor: t.acento }} />
        <Text style={{ fontSize: 14, fontWeight: "900", letterSpacing: 3, color: t.texto }}>
          {icon}  {title}
        </Text>
      </View>
    </View>
  );
}

function Badge({ text, t, gold = false }) {
  return (
    <View style={{
      paddingVertical: 5, paddingHorizontal: 11, borderRadius: 2,
      backgroundColor: gold ? t.gold : "transparent",
      borderColor: gold ? t.gold : t.acento,
      borderWidth: 1.5,
    }}>
      <Text style={{ fontSize: 11, fontWeight: "800", letterSpacing: 1.5, color: gold ? "#fff" : t.acento }}>
        {text}
      </Text>
    </View>
  );
}

function PrimaryBtn({ label, onPress, t, outline = false }) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          marginTop: 10, paddingVertical: 11, borderRadius: 3, alignItems: "center",
          backgroundColor: outline ? "transparent" : t.acento,
          borderWidth: outline ? 2 : 0,
          borderColor: outline ? t.acento : "transparent",
        },
        !outline && shadow(t.acento),
      ]}
    >
      <Text style={{ fontWeight: "900", fontSize: 13, letterSpacing: 2, color: outline ? t.acento : "#fff" }}>
        {label}
      </Text>
    </Pressable>
  );
}

function Field({ label, placeholder, keyboard = "default", value, onChange, error, t }) {
  return (
    <View style={{ marginBottom: 14 }}>
      <Text style={{ fontSize: 10, fontWeight: "800", letterSpacing: 2, color: t.subtexto, marginBottom: 6 }}>
        {label.toUpperCase()}
      </Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={t.subtexto}
        keyboardType={keyboard}
        value={value}
        onChangeText={onChange}
        style={{
          borderRadius: 3, paddingHorizontal: 12, paddingVertical: 13,
          fontSize: 14, fontWeight: "600",
          backgroundColor: t.input, color: t.texto,
          borderColor: error ? t.danger : t.border,
          borderWidth: error ? 1.5 : 1,
        }}
      />
      {error ? (
        <Text style={{ color: t.danger, fontSize: 11, fontWeight: "700", marginTop: 4 }}>⚠  {error}</Text>
      ) : null}
    </View>
  );
}

function StatChip({ icon, label, value, t }) {
  return (
    <View style={[{
      flex: 1, borderRadius: 4, padding: 12, alignItems: "center", gap: 4,
      backgroundColor: t.surface, borderColor: t.border, borderWidth: 1,
    }, shadow("#000")]}>
      <Text style={{ fontSize: 22 }}>{icon}</Text>
      <Text style={{ fontSize: 16, fontWeight: "900", letterSpacing: 1, color: t.acento }}>{value}</Text>
      <Text style={{ fontSize: 9, fontWeight: "700", letterSpacing: 1.5, textAlign: "center", color: t.subtexto }}>
        {label}
      </Text>
    </View>
  );
}

function InfoCard({ icon, title, desc, t }) {
  return (
    <View style={[{
      marginHorizontal: 16, marginBottom: 10, borderRadius: 4,
      borderLeftWidth: 4, borderLeftColor: t.acento,
      padding: 14, flexDirection: "row", alignItems: "center",
      backgroundColor: t.surface,
    }, shadow("#000")]}>
      <Text style={{ fontSize: 26 }}>{icon}</Text>
      <View style={{ flex: 1, paddingLeft: 12 }}>
        <Text style={{ fontSize: 14, fontWeight: "900", letterSpacing: 1, color: t.texto }}>{title}</Text>
        <Text style={{ fontSize: 12, marginTop: 3, lineHeight: 17, color: t.subtexto }}>{desc}</Text>
      </View>
    </View>
  );
}

// ─── APP PRINCIPAL ────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(true);
  const t = dark ? DARK : LIGHT;

  const [status, setStatus] = useState("EN RUTA 🏍️");
  const toggleStatus = () =>
    setStatus((p) => (p.startsWith("EN RUTA") ? "EN BASE 🔒" : "EN RUTA 🏍️"));

  const [form, setForm] = useState({
    nombre: "", apellido: "", correo: "",
    ciudad: "", telefono: "", rango: "",
  });
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);

  const set = (key) => (val) => {
    setForm((p) => ({ ...p, [key]: val }));
    setErrors((p) => ({ ...p, [key]: null }));
    setSaved(false);
  };

  const validate = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = "Campo obligatorio";
    if (!form.apellido.trim()) e.apellido = "Campo obligatorio";
    if (!form.correo.trim()) e.correo = "Campo obligatorio";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) e.correo = "Correo inválido";
    if (!form.ciudad.trim()) e.ciudad = "Campo obligatorio";
    if (!form.telefono.trim()) e.telefono = "Campo obligatorio";
    else if (!/^\d{7,15}$/.test(form.telefono)) e.telefono = "Solo dígitos (7–15)";
    if (!form.rango.trim()) e.rango = "Campo obligatorio";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const save = () => { if (validate()) setSaved(true); };
  const clear = () => {
    setForm({ nombre: "", apellido: "", correo: "", ciudad: "", telefono: "", rango: "" });
    setErrors({});
    setSaved(false);
  };

  return (
    <ScrollView
      contentContainerStyle={[{ paddingBottom: 40, backgroundColor: t.bg }]}
      showsVerticalScrollIndicator={false}
    >
      {/* TOPBAR */}
      <View style={{
        flexDirection: "row", justifyContent: "space-between", alignItems: "center",
        paddingHorizontal: 18, paddingVertical: 12,
        backgroundColor: t.surface, borderBottomWidth: 1, borderBottomColor: t.border,
      }}>
        <Text style={{ fontSize: 18, fontWeight: "900", letterSpacing: 4, color: t.acento }}>
          ⬡ BIKERCITY
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Text style={{ color: t.subtexto, fontSize: 13 }}>{dark ? "🌙" : "☀️"}</Text>
          <Switch
            value={dark} onValueChange={setDark}
            thumbColor={dark ? t.acento : "#ccc"}
            trackColor={{ false: "#ccc", true: t.acentoDim }}
          />
        </View>
      </View>

      {/* HERO BANNER */}
      <View style={[{
        margin: 16, borderRadius: 4, borderWidth: 1, borderColor: t.acento,
        overflow: "hidden", flexDirection: "row", alignItems: "center",
        minHeight: 130, paddingLeft: 20, backgroundColor: t.surface,
      }, shadow(t.acento)]}>
        <View style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 6, backgroundColor: t.acento }} />
        <View style={{ flex: 1, paddingVertical: 20, paddingLeft: 10 }}>
          <Text style={{ fontSize: 10, fontWeight: "900", letterSpacing: 4, color: t.acento, marginBottom: 4 }}>
            CLUB OFICIAL
          </Text>
          <Text style={{ fontSize: 42, fontWeight: "900", lineHeight: 40, letterSpacing: -1, color: t.texto }}>
            BIKER{"\n"}CITY
          </Text>
          <Text style={{ fontSize: 12, fontStyle: "italic", marginTop: 8, letterSpacing: 1, color: t.subtexto }}>
            "La calle es nuestra catedral"
          </Text>
        </View>
        <Text style={{ fontSize: 72, paddingRight: 16, opacity: 0.9 }}>🏍️</Text>
      </View>

      {/* PERFIL */}
      <View style={[{
        marginHorizontal: 16, borderRadius: 4, borderWidth: 1, borderColor: t.border,
        padding: 16, flexDirection: "row", gap: 14, alignItems: "flex-start",
        backgroundColor: t.surface,
      }, shadow("#000")]}>
        <View style={{ borderWidth: 3, borderRadius: 50, borderColor: t.acento, padding: 2, position: "relative" }}>
          <Image source={require("../assets/images/perfil.jpg")} style={{ width: 80, height: 80, borderRadius: 40 }} />
          <View style={{
            position: "absolute", bottom: 4, right: 4, width: 12, height: 12, borderRadius: 6,
            borderWidth: 2, borderColor: "#000",
            backgroundColor: status.startsWith("EN RUTA") ? "#22c55e" : "#6b6560",
          }} />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: "900", letterSpacing: 1, color: t.texto }}>Cristhian - Jonathan</Text>
          <Text style={{ fontSize: 11, fontWeight: "800", letterSpacing: 2, marginTop: 2, color: t.acento }}>
            🔑 MIEMBROS ACTIVOS
          </Text>
          <View style={{
            marginTop: 6, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 2,
            alignSelf: "flex-start", borderWidth: 1,
            backgroundColor: status.startsWith("EN RUTA") ? "#14532d" : t.surfaceAlt,
            borderColor: status.startsWith("EN RUTA") ? "#22c55e" : t.border,
          }}>
            <Text style={{
              fontSize: 11, fontWeight: "800", letterSpacing: 1,
              color: status.startsWith("EN RUTA") ? "#22c55e" : t.subtexto,
            }}>{status}</Text>
          </View>
          <PrimaryBtn label="CAMBIAR ESTADO" onPress={toggleStatus} t={t} />
        </View>
      </View>

      {/* BADGES */}
      <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 8, paddingHorizontal: 16, marginTop: 14 }}>
        <Badge text="⭐ FUNDADOR" t={t} gold />
        <Badge text="CUSTOM BIKES" t={t} />
        <Badge text="RUTA LIBRE" t={t} />
        <Badge text="MECÁNICA" t={t} />
        <Badge text="CARRERAS" t={t} />
      </View>

      <Divider t={t} />

      {/* STATS */}
      <SectionHeader icon="📊" title="ESTADÍSTICAS DEL PILOTO" t={t} />
      <View style={{ flexDirection: "row", gap: 10, paddingHorizontal: 16, marginBottom: 12 }}>
        <StatChip icon="🛣️" label="KM TOTALES" value="24,800" t={t} />
        <StatChip icon="🏆" label="VICTORIAS" value="7" t={t} />
        <StatChip icon="👥" label="MIEMBROS" value="134" t={t} />
      </View>

      {/* RANK CARD */}
      <View style={[{
        marginHorizontal: 16, borderRadius: 4, borderWidth: 1.5, borderColor: t.gold,
        padding: 14, gap: 6, backgroundColor: t.surface,
      }]}>
        <Text style={{ fontSize: 10, fontWeight: "800", letterSpacing: 3, color: t.subtexto }}>RANGO EN EL CLUB</Text>
        <Text style={{ fontSize: 20, fontWeight: "900", letterSpacing: 2, color: t.gold }}>⬡ ROAD CAPTAIN</Text>
        <View style={{ height: 6, borderRadius: 3, overflow: "hidden", backgroundColor: t.border }}>
          <View style={{ height: "100%", borderRadius: 3, width: "72%", backgroundColor: t.gold }} />
        </View>
        <Text style={{ fontSize: 11, fontStyle: "italic", color: t.subtexto }}>
          72% — próximo nivel: SERGEANT AT ARMS
        </Text>
      </View>

      <Divider t={t} />

      {/* FORMULARIO */}
      <SectionHeader icon="📋" title="FICHA DE INGRESO" t={t} />
      <View style={[{
        marginHorizontal: 16, borderRadius: 4, borderWidth: 1,
        borderColor: t.border, padding: 16, backgroundColor: t.surface,
      }]}>
        <Field label="Nombre" placeholder="Ej: Carlos" value={form.nombre}
          onChange={set("nombre")} error={errors.nombre} t={t} />
        <Field label="Apellido" placeholder="Ej: Ramírez" value={form.apellido}
          onChange={set("apellido")} error={errors.apellido} t={t} />
        <Field label="Correo" placeholder="piloto@bikercity.com" keyboard="email-address"
          value={form.correo} onChange={set("correo")} error={errors.correo} t={t} />
        <Field label="Ciudad" placeholder="Ej: Pasto" value={form.ciudad}
          onChange={set("ciudad")} error={errors.ciudad} t={t} />
        <Field label="Teléfono" placeholder="Ej: 3001234567" keyboard="phone-pad"
          value={form.telefono} onChange={set("telefono")} error={errors.telefono} t={t} />
        <Field label="Rango / Cargo" placeholder="Ej: Prospecto / Road Captain"
          value={form.rango} onChange={set("rango")} error={errors.rango} t={t} />

        {saved && (
          <View style={{
            borderWidth: 1.5, borderRadius: 3, padding: 12, marginTop: 10, marginBottom: 4,
            alignItems: "center", backgroundColor: "#052e16", borderColor: "#22c55e",
          }}>
            <Text style={{ color: "#22c55e", fontWeight: "800", letterSpacing: 1 }}>
              ✅  FICHA REGISTRADA CORRECTAMENTE
            </Text>
          </View>
        )}
        {!saved && Object.keys(errors).length > 0 && (
          <View style={{
            borderWidth: 1.5, borderRadius: 3, padding: 12, marginTop: 10, marginBottom: 4,
            alignItems: "center", backgroundColor: "#1a0000", borderColor: t.danger,
          }}>
            <Text style={{ color: t.danger, fontWeight: "800", letterSpacing: 1 }}>
              ⚠  COMPLETA TODOS LOS CAMPOS
            </Text>
          </View>
        )}

        <View style={{ flexDirection: "row", gap: 10, marginTop: 4 }}>
          <View style={{ flex: 1 }}><PrimaryBtn label="💾  REGISTRAR" onPress={save} t={t} /></View>
          <View style={{ flex: 1 }}><PrimaryBtn label="🗑  LIMPIAR" onPress={clear} t={t} outline /></View>
        </View>
      </View>

      <Divider t={t} />

      {/* INFO CARDS */}
      <SectionHeader icon="⬡" title="SOBRE EL CLUB" t={t} />
      <InfoCard icon="🔧" title="Taller Oficial"
        desc="Mantenimiento y customización de motos por mecánicos certificados." t={t} />
      <InfoCard icon="🛣️" title="Rodadas Grupales"
        desc="Salidas los fines de semana a rutas nacionales e internacionales." t={t} />
      <InfoCard icon="🏁" title="Competencias"
        desc="Representamos al club en circuitos, slalom y drag racing." t={t} />
      <InfoCard icon="🤝" title="Comunidad"
        desc="Más de 134 miembros activos. Hermandad sobre ruedas." t={t} />

      {/* FOOTER */}
      <View style={{
        marginTop: 20, paddingTop: 20, alignItems: "center",
        borderTopWidth: 1, borderTopColor: t.border, paddingBottom: 10,
      }}>
        <Text style={{ fontSize: 22, fontWeight: "900", letterSpacing: 6, color: t.acento }}>⬡ BIKERCITY</Text>
        <Text style={{ fontSize: 12, marginTop: 4, letterSpacing: 1.5, color: t.subtexto }}>
          Club Motorista Oficial • Est. 2018
        </Text>
        <Text style={{ fontSize: 12, marginTop: 2, letterSpacing: 1, color: t.subtexto, fontStyle: "italic" }}>
          "Una vez biker, siempre biker."
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({});
