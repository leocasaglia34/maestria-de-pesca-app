"use client";

import { useMemo, useState } from "react";
import {
  Fish,
  Home,
  ListChecks,
  BookOpen,
  User,
  Search,
  CheckCircle2,
  AlertTriangle,
  Target,
  Wrench,
  MapPinned,
  Clock3,
} from "lucide-react";

export default function MaestriaDePescaApp() {
  const [tab, setTab] = useState("inicio");
  const [fish, setFish] = useState("Tararira");

  const fishData = {
    Tararira: {
      habitat: "Lagunas, juncales, orillas con cobertura y zonas con estructura.",
      bait: "Mojarra, rana artificial, señuelos de media agua y soft baits.",
      gear: "Caña media, reel frontal o baitcaster, nylon 0.30/0.35 o multifilamento fino.",
      time: "Amanecer, atardecer y días templados con poca presión.",
      technique: "Lances cortos cerca de cobertura y pausas marcadas.",
      mistake: "Traer demasiado rápido la carnada o pescar lejos de estructura.",
    },
    Pejerrey: {
      habitat: "Lagunas, espejos abiertos y sectores con profundidad media.",
      bait: "Mojarra viva, filet, boyas y líneas livianas.",
      gear: "Caña liviana, reel frontal, nylon fino y aparejo de flote.",
      time: "Mañanas frías, otoño e invierno.",
      technique: "Buscar profundidad correcta y deriva prolija.",
      mistake: "Pescar a mala profundidad o usar línea muy pesada.",
    },
    Dorado: {
      habitat: "Ríos con correntada, estructuras, palos y remansos activos.",
      bait: "Señuelos, carnada viva y artificiales de reacción.",
      gear: "Caña media/pesada, multifilamento, líder resistente y reel firme.",
      time: "Momentos de actividad alta y agua en movimiento.",
      technique: "Buscar agresividad, cambios de velocidad y zonas calientes.",
      mistake: "Usar equipo débil o no revisar líder y anzuelos.",
    },
    Bagre: {
      habitat: "Pozones, fondos y sectores tranquilos.",
      bait: "Carnada natural con olor y fondo bien presentado.",
      gear: "Equipo medio, plomada acorde y anzuelo firme.",
      time: "Tarde/noche y momentos tranquilos.",
      technique: "Paciencia, fondo y presentación estable.",
      mistake: "Mover demasiado la línea o usar poca carnada.",
    },
  };

  const current = useMemo(() => fishData[fish as keyof typeof fishData], [fish]);

  const checklist = [
    "Caña",
    "Reel",
    "Tanza / multifilamento",
    "Anzuelos",
    "Plomadas",
    "Carnada / señuelos",
    "Pinza",
    "Cuchillo",
    "Conservadora",
    "Agua",
    "Repelente",
    "Linterna",
  ];

  const cards = [
    { key: "inicio", title: "Inicio", icon: Home },
    { key: "rapido", title: "Modo rápido", icon: Target },
    { key: "biblioteca", title: "Biblioteca", icon: BookOpen },
    { key: "checklist", title: "Checklist", icon: ListChecks },
    { key: "perfil", title: "Perfil", icon: User },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#020617", color: "white", paddingBottom: "110px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px" }}>
        <section
          style={{
            background: "linear-gradient(135deg, #047857, #0f172a 60%, #020617)",
            borderRadius: "28px",
            padding: "28px",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              background: "rgba(255,255,255,0.08)",
              padding: "8px 12px",
              borderRadius: "999px",
              marginBottom: "16px",
            }}
          >
            <Fish size={16} /> Maestría de Pesca PRO
          </div>

          <h1 style={{ fontSize: "40px", lineHeight: 1.05, margin: 0 }}>
            Tu asistente de pesca en el bolsillo.
          </h1>

          <p style={{ fontSize: "18px", color: "rgba(255,255,255,0.8)", maxWidth: "700px", marginTop: "16px" }}>
            Consultá qué usar, cómo pescar mejor y salí más preparado en cada jornada.
          </p>

          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "20px" }}>
            <button
              onClick={() => setTab("rapido")}
              style={{
                background: "#34d399",
                color: "#020617",
                border: "none",
                borderRadius: "18px",
                padding: "14px 18px",
                fontWeight: 700,
              }}
            >
              Abrir modo rápido
            </button>

            <button
              onClick={() => setTab("biblioteca")}
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "white",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "18px",
                padding: "14px 18px",
                fontWeight: 700,
              }}
            >
              Ver biblioteca
            </button>
          </div>
        </section>

        {tab === "inicio" && (
          <>
            <section
              style={{
                marginTop: "24px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "16px",
              }}
            >
              {[
                ["Qué pescar hoy", "Elegí la especie y obtené una recomendación rápida.", Fish],
                ["Carnadas", "Qué usar según pez, clima y momento del día.", Search],
                ["Equipos", "Armados recomendados para pescar mejor.", Wrench],
                ["Errores comunes", "Lo que te hace volver con las manos vacías.", AlertTriangle],
              ].map(([title, desc, Icon], i) => {
                const Cmp = Icon as typeof Fish;
                return (
                  <div
                    key={i}
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "24px",
                      padding: "20px",
                    }}
                  >
                    <Cmp size={28} color="#6ee7b7" />
                    <h3 style={{ fontSize: "22px", marginTop: "16px", marginBottom: "8px" }}>{title}</h3>
                    <p style={{ color: "rgba(255,255,255,0.7)", margin: 0 }}>{desc}</p>
                  </div>
                );
              })}
            </section>

            <section
              style={{
                marginTop: "28px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "20px",
              }}
            >
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "24px",
                  padding: "24px",
                }}
              >
                <div style={{ color: "#6ee7b7", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                  Acceso rápido
                </div>
                <h2 style={{ fontSize: "32px", marginTop: "10px" }}>Checklist antes de salir</h2>

                <div
                  style={{
                    marginTop: "20px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: "12px",
                  }}
                >
                  {checklist.slice(0, 8).map((item) => (
                    <div
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        background: "#0f172a",
                        borderRadius: "18px",
                        padding: "14px",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <CheckCircle2 size={18} color="#6ee7b7" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                style={{
                  background: "linear-gradient(135deg, #0f172a, #1e293b)",
                  border: "1px solid rgba(52,211,153,0.2)",
                  borderRadius: "24px",
                  padding: "24px",
                }}
              >
                <div style={{ color: "#6ee7b7", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                  Promesa de valor
                </div>
                <h2 style={{ fontSize: "32px", marginTop: "10px" }}>Esto no se vende como ebook.</h2>
                <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.6 }}>
                  Se vende como una herramienta práctica que te ayuda a decidir qué llevar, qué usar y cómo encarar
                  mejor cada salida.
                </p>

                <div style={{ marginTop: "18px", display: "grid", gap: "10px" }}>
                  {[
                    "Consultás desde el celu antes de cada salida",
                    "Todo ordenado y fácil de encontrar",
                    "Más valor percibido que un PDF común",
                  ].map((b) => (
                    <div
                      key={b}
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        borderRadius: "16px",
                        padding: "14px",
                        border: "1px solid rgba(255,255,255,0.06)",
                        fontWeight: 600,
                      }}
                    >
                      {b}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </>
        )}

        {tab === "rapido" && (
          <section
            style={{
              marginTop: "24px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "24px",
                padding: "24px",
              }}
            >
              <div style={{ color: "#6ee7b7", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                Modo rápido
              </div>
              <h2 style={{ fontSize: "32px", marginTop: "10px" }}>Decime qué querés pescar hoy</h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: "12px",
                  marginTop: "20px",
                }}
              >
                {Object.keys(fishData).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFish(f)}
                    style={{
                      borderRadius: "18px",
                      padding: "16px 12px",
                      fontWeight: 700,
                      border: fish === f ? "1px solid #a7f3d0" : "1px solid rgba(255,255,255,0.1)",
                      background: fish === f ? "#34d399" : "#0f172a",
                      color: fish === f ? "#020617" : "white",
                    }}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div
              style={{
                background: "linear-gradient(135deg, #0f172a, #1e293b)",
                border: "1px solid rgba(52,211,153,0.2)",
                borderRadius: "24px",
                padding: "24px",
              }}
            >
              <div style={{ color: "#6ee7b7", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em" }}>
                Recomendación para {fish}
              </div>
              <h2 style={{ fontSize: "32px", marginTop: "10px" }}>Qué llevar y cómo encararla</h2>

              <div style={{ marginTop: "18px", display: "grid", gap: "12px" }}>
                {[
                  ["Hábitat", current.habitat, MapPinned],
                  ["Carnada ideal", current.bait, Fish],
                  ["Equipo sugerido", current.gear, Wrench],
                  ["Mejor horario", current.time, Clock3],
                  ["Técnica rápida", current.technique, Target],
                  ["Error a evitar", current.mistake, AlertTriangle],
                ].map(([label, value, Icon], i) => {
                  const Cmp = Icon as typeof Fish;
                  return (
                    <div
                      key={i}
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        borderRadius: "18px",
                        padding: "14px",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          color: "#6ee7b7",
                          fontSize: "14px",
                          marginBottom: "6px",
                        }}
                      >
                        <Cmp size={16} /> {label}
                      </div>
                      <div style={{ color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>{value as string}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {tab === "biblioteca" && (
          <section
            style={{
              marginTop: "24px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              ["Especies", "Fichas prácticas para entender cómo pescar cada pez."],
              ["Carnadas", "Qué usar según especie, lugar y momento."],
              ["Nudos", "Los nudos más útiles explicados simple."],
              ["Equipos", "Qué caña, reel y armado usar en cada caso."],
              ["Tips rápidos", "Consejos accionables para no improvisar."],
              ["Errores comunes", "Lo que más te hace fallar sin darte cuenta."],
            ].map(([title, desc]) => (
              <div
                key={title}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "24px",
                  padding: "24px",
                }}
              >
                <h3 style={{ fontSize: "28px", marginTop: 0 }}>{title}</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>{desc}</p>
                <button
                  style={{
                    marginTop: "10px",
                    background: "#34d399",
                    color: "#020617",
                    border: "none",
                    borderRadius: "16px",
                    padding: "12px 16px",
                    fontWeight: 700,
                  }}
                >
                  Abrir
                </button>
              </div>
            ))}
          </section>
        )}

        {tab === "checklist" && (
          <section
            style={{
              marginTop: "24px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "24px",
              padding: "24px",
            }}
          >
            <div style={{ color: "#6ee7b7", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em" }}>
              Checklist de salida
            </div>
            <h2 style={{ fontSize: "36px", marginTop: "10px" }}>No te olvides nada antes de salir</h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "12px",
                marginTop: "24px",
              }}
            >
              {checklist.map((item) => (
                <label
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    background: "#0f172a",
                    borderRadius: "16px",
                    padding: "14px",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <input type="checkbox" />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          </section>
        )}

        {tab === "perfil" && (
          <section
            style={{
              marginTop: "24px",
              background: "linear-gradient(135deg, #0f172a, #1e293b)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "24px",
              padding: "24px",
            }}
          >
            <div style={{ color: "#6ee7b7", fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.2em" }}>
              Perfil
            </div>
            <h2 style={{ fontSize: "36px", marginTop: "10px" }}>Tu producto puede ser mucho más que un ebook</h2>
            <p style={{ color: "rgba(255,255,255,0.75)", maxWidth: "820px", lineHeight: 1.6 }}>
              Esta app puede venderse como acceso premium, bonus exclusivo o sistema práctico para pescadores que
              quieren decidir más rápido y salir mejor preparados.
            </p>

            <div
              style={{
                marginTop: "24px",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "12px",
              }}
            >
              {[
                "Ebook + App + Bonus",
                "Acceso desde el celular",
                "Más valor, más percepción premium",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "18px",
                    padding: "16px",
                    fontWeight: 700,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      <nav
        style={{
          position: "fixed",
          bottom: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "94%",
          maxWidth: "900px",
          background: "rgba(15,23,42,0.92)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "28px",
          padding: "8px",
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "8px" }}>
          {cards.map((item) => {
            const Icon = item.icon;
            const active = tab === item.key;

            return (
              <button
                key={item.key}
                onClick={() => setTab(item.key)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "4px",
                  padding: "12px 8px",
                  borderRadius: "18px",
                  border: "none",
                  background: active ? "#34d399" : "transparent",
                  color: active ? "#020617" : "rgba(255,255,255,0.75)",
                  fontWeight: 700,
                }}
              >
                <Icon size={18} />
                <span style={{ fontSize: "11px" }}>{item.title}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
