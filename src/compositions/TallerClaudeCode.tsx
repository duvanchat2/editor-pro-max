import React from "react";
import {
  AbsoluteFill,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import {AnimatedTitle} from "../components/text/AnimatedTitle";
import {GradientBackground} from "../components/backgrounds/GradientBackground";
import {ParticleField} from "../components/backgrounds/ParticleField";
import {ProgressBar} from "../components/overlays/ProgressBar";
import {SafeArea} from "../components/layout/SafeArea";
import {loadDefaultFonts} from "../presets/fonts";

const NEON = "#00ff88";
const PURPLE = "#8b5cf6";
const RED = "#f43f5e";
const CYAN = "#06b6d4";
const WHITE = "#ffffff";
const FONT = "'Inter', 'Helvetica Neue', sans-serif";

// ─── Urgency Badge ──────────────────────────────────────────────────────────
const UrgencyBadge: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const pulse = Math.sin(frame * 0.18) * 0.25 + 0.75;
  const scaleSpring = spring({fps, frame, config: {damping: 10, stiffness: 200}});
  const scale = interpolate(scaleSpring, [0, 1], [0.2, 1]);
  const opacity = interpolate(frame, [0, 12], [0, 1], {extrapolateRight: "clamp"});

  const labelOpacity = interpolate(frame, [15, 30], [0, 1], {extrapolateRight: "clamp"});
  const labelY = interpolate(frame, [15, 30], [20, 0], {extrapolateRight: "clamp"});

  return (
    <AbsoluteFill style={{justifyContent: "center", alignItems: "center"}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <div
          style={{
            fontSize: 44,
            fontWeight: 900,
            fontFamily: FONT,
            color: RED,
            textTransform: "uppercase" as const,
            letterSpacing: 6,
            opacity: pulse,
            textShadow: `0 0 40px ${RED}`,
          }}
        >
          ⚡ CUPOS LIMITADOS
        </div>
        <div
          style={{
            fontSize: 200,
            fontWeight: 900,
            fontFamily: FONT,
            color: WHITE,
            lineHeight: 1,
            textShadow: `0 0 80px ${RED}, 0 0 120px ${RED}44`,
          }}
        >
          50
        </div>
        <div
          style={{
            opacity: labelOpacity,
            transform: `translateY(${labelY}px)`,
            fontSize: 48,
            fontWeight: 700,
            fontFamily: FONT,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          cupos disponibles
        </div>
        <div
          style={{
            opacity: labelOpacity,
            transform: `translateY(${labelY}px)`,
            fontSize: 32,
            fontWeight: 500,
            fontFamily: FONT,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          No hay lista de espera
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ─── Price Display ───────────────────────────────────────────────────────────
const PriceDisplay: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const scaleSpring = spring({fps, frame, config: {damping: 10, stiffness: 180}});
  const scale = interpolate(scaleSpring, [0, 1], [0.4, 1]);
  const opacity = interpolate(frame, [0, 15], [0, 1], {extrapolateRight: "clamp"});
  const detailOpacity = interpolate(frame, [30, 50], [0, 1], {extrapolateRight: "clamp"});
  const detailY = interpolate(frame, [30, 50], [24, 0], {extrapolateRight: "clamp"});

  return (
    <AbsoluteFill style={{justifyContent: "center", alignItems: "center"}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
          opacity,
          transform: `scale(${scale})`,
        }}
      >
        <div
          style={{
            fontSize: 36,
            fontFamily: FONT,
            color: "rgba(255,255,255,0.45)",
            textDecoration: "line-through",
            fontWeight: 400,
          }}
        >
          Normalmente $97 USD
        </div>
        <div
          style={{
            fontSize: 200,
            fontWeight: 900,
            fontFamily: FONT,
            color: NEON,
            lineHeight: 1,
            textShadow: `0 0 80px ${NEON}88, 0 0 160px ${NEON}33`,
          }}
        >
          $19
        </div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 700,
            fontFamily: FONT,
            color: WHITE,
            letterSpacing: 4,
          }}
        >
          USD
        </div>
        <div
          style={{
            opacity: detailOpacity,
            transform: `translateY(${detailY}px)`,
            fontSize: 34,
            fontFamily: FONT,
            color: "rgba(255,255,255,0.65)",
            textAlign: "center" as const,
            lineHeight: 1.4,
          }}
        >
          Acceso completo · 2 noches intensivas
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ─── Guarantee Card ──────────────────────────────────────────────────────────
const GuaranteeCard: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const slideSpring = spring({fps, frame, config: {damping: 14, stiffness: 100}});
  const y = interpolate(slideSpring, [0, 1], [140, 0]);
  const opacity = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: "clamp"});

  const textOpacity = interpolate(frame, [25, 45], [0, 1], {extrapolateRight: "clamp"});

  return (
    <AbsoluteFill style={{justifyContent: "center", alignItems: "center", padding: "0 50px"}}>
      <div
        style={{
          opacity,
          transform: `translateY(${y}px)`,
          background: "rgba(0,255,136,0.06)",
          border: `3px solid ${NEON}`,
          borderRadius: 40,
          padding: "56px 48px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
          boxShadow: `0 0 80px ${NEON}22, inset 0 0 40px ${NEON}08`,
          width: "100%",
        }}
      >
        <div style={{fontSize: 80}}>🛡️</div>
        <div
          style={{
            fontSize: 44,
            fontWeight: 900,
            fontFamily: FONT,
            color: NEON,
            textTransform: "uppercase" as const,
            letterSpacing: 4,
            textAlign: "center" as const,
            textShadow: `0 0 30px ${NEON}66`,
          }}
        >
          GARANTÍA TOTAL
        </div>
        <div
          style={{
            opacity: textOpacity,
            fontSize: 38,
            fontWeight: 600,
            fontFamily: FONT,
            color: WHITE,
            textAlign: "center" as const,
            lineHeight: 1.45,
          }}
        >
          {`"Si no tienes tu agente\nfuncionando, te devolvemos\nel dinero."`}
        </div>
        <div
          style={{
            opacity: textOpacity,
            fontSize: 28,
            fontFamily: FONT,
            color: "rgba(255,255,255,0.5)",
            textAlign: "center" as const,
          }}
        >
          Sin preguntas. Sin letra pequeña.
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ─── CTA Final Scene ─────────────────────────────────────────────────────────
const CTAScene: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  const titleSpring = spring({fps, frame, config: {damping: 12, stiffness: 150}});
  const titleScale = interpolate(titleSpring, [0, 1], [0.3, 1]);
  const opacity = interpolate(frame, [0, 15], [0, 1], {extrapolateRight: "clamp"});

  const urlOpacity = interpolate(frame, [40, 60], [0, 1], {extrapolateRight: "clamp"});
  const urlY = interpolate(frame, [40, 60], [40, 0], {extrapolateRight: "clamp"});

  const urgencyOpacity = interpolate(frame, [70, 90], [0, 1], {extrapolateRight: "clamp"});
  const pulse = Math.sin(frame * 0.12) * 0.06 + 0.94;

  return (
    <AbsoluteFill style={{justifyContent: "center", alignItems: "center", padding: "0 60px"}}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 36,
          width: "100%",
        }}
      >
        <div
          style={{
            fontSize: 36,
            fontFamily: FONT,
            color: "rgba(255,255,255,0.6)",
            textAlign: "center" as const,
            opacity,
            letterSpacing: 1,
          }}
        >
          6 y 7 de Abril · 6PM–9PM COL
        </div>

        <div
          style={{
            fontSize: 104,
            fontWeight: 900,
            fontFamily: FONT,
            color: WHITE,
            textAlign: "center" as const,
            transform: `scale(${titleScale})`,
            opacity,
            lineHeight: 1.05,
            textShadow: `0 0 80px ${PURPLE}`,
          }}
        >
          {"REGÍSTRATE\nAHORA"}
        </div>

        <div
          style={{
            opacity: urlOpacity,
            transform: `translateY(${urlY}px) scale(${pulse})`,
            background: `linear-gradient(135deg, ${PURPLE}, ${CYAN})`,
            borderRadius: 28,
            padding: "36px 52px",
            width: "100%",
            textAlign: "center" as const,
            boxShadow: `0 8px 60px ${PURPLE}55`,
          }}
        >
          <div
            style={{
              fontSize: 38,
              fontWeight: 800,
              fontFamily: FONT,
              color: WHITE,
              letterSpacing: 0.5,
            }}
          >
            claude.automatizaya.site
          </div>
        </div>

        <div
          style={{
            opacity: urgencyOpacity,
            fontSize: 32,
            fontWeight: 700,
            fontFamily: FONT,
            color: RED,
            textAlign: "center" as const,
            textShadow: `0 0 30px ${RED}`,
          }}
        >
          ⚡ Solo quedan pocos cupos · $19 USD
        </div>
      </div>
    </AbsoluteFill>
  );
};

// ─── Main Composition ────────────────────────────────────────────────────────
// 60 seconds = 1800 frames @ 30fps
//
// Scene layout (frame ranges):
//   0   – 150  Hook line 1
//   130 – 290  Hook line 2
//   270 – 410  Pivot
//   390 – 590  Hero title
//   570 – 730  Dates & time
//   710 – 880  Promise
//   860 – 1040 Urgency
//  1020 – 1190 Price
//  1170 – 1390 Guarantee
//  1370 – 1800 CTA

export const TallerClaudeCode: React.FC = () => {
  loadDefaultFonts();

  return (
    <AbsoluteFill style={{background: "#000000"}}>
      {/* Subtle gradient base */}
      <GradientBackground
        colors={["#05020f", "#0d0520", "#050a14"]}
        angle={160}
        animateAngle
        animateSpeed={0.2}
      />

      {/* Floating particles */}
      <ParticleField
        count={35}
        color="rgba(139,92,246,0.25)"
        speed={0.4}
        direction="up"
      />

      {/* ── Scene 1: Hook line 1 (0–150) ─────────────────────────── */}
      <Sequence from={0} durationInFrames={150}>
        <SafeArea paddingHorizontal={60} paddingVertical={180}>
          <AbsoluteFill style={{justifyContent: "center", alignItems: "center"}}>
            <AnimatedTitle
              text="¿Llevas meses hablando de IA..."
              fontSize={66}
              fontWeight={900}
              color={WHITE}
              enterAnimation="scale"
              exitAnimation="slideUp"
              enterDuration={18}
              holdDuration={94}
              exitDuration={18}
              textShadow={`0 4px 40px rgba(139,92,246,0.5)`}
              lineHeight={1.25}
            />
          </AbsoluteFill>
        </SafeArea>
      </Sequence>

      {/* ── Scene 2: Hook line 2 (130–290) ───────────────────────── */}
      <Sequence from={130} durationInFrames={160}>
        <SafeArea paddingHorizontal={60} paddingVertical={180}>
          <AbsoluteFill style={{justifyContent: "center", alignItems: "center"}}>
            <AnimatedTitle
              text="...y todavía no tienes NADA funcionando?"
              fontSize={60}
              fontWeight={900}
              color={RED}
              enterAnimation="scale"
              exitAnimation="fade"
              enterDuration={18}
              holdDuration={104}
              exitDuration={18}
              textShadow={`0 0 50px ${RED}88`}
              lineHeight={1.25}
            />
          </AbsoluteFill>
        </SafeArea>
      </Sequence>

      {/* ── Scene 3: Pivot (270–410) ──────────────────────────────── */}
      <Sequence from={270} durationInFrames={140}>
        <SafeArea paddingHorizontal={60} paddingVertical={180}>
          <AbsoluteFill style={{justifyContent: "center", alignItems: "center"}}>
            <AnimatedTitle
              text={"Eso cambia\neste abril."}
              fontSize={92}
              fontWeight={900}
              color={WHITE}
              enterAnimation="slideUp"
              exitAnimation="fade"
              enterDuration={18}
              holdDuration={90}
              exitDuration={18}
              lineHeight={1.15}
            />
          </AbsoluteFill>
        </SafeArea>
      </Sequence>

      {/* ── Scene 4: Hero title (390–590) ────────────────────────── */}
      <Sequence from={390} durationInFrames={200}>
        <SafeArea paddingHorizontal={40} paddingVertical={140}>
          <AbsoluteFill
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: 12,
            }}
          >
            <AnimatedTitle
              text="TALLER"
              fontSize={120}
              fontWeight={900}
              color={WHITE}
              enterAnimation="scale"
              exitAnimation="fade"
              enterDuration={18}
              holdDuration={142}
              exitDuration={20}
              letterSpacing={10}
            />
            <AnimatedTitle
              text="CLAUDE CODE"
              fontSize={68}
              fontWeight={900}
              color={PURPLE}
              enterAnimation="blur"
              exitAnimation="fade"
              enterDuration={24}
              holdDuration={136}
              exitDuration={20}
              textShadow={`0 0 60px ${PURPLE}, 0 0 120px ${PURPLE}44`}
              letterSpacing={5}
            />
          </AbsoluteFill>
        </SafeArea>
      </Sequence>

      {/* ── Scene 5: Dates & time (570–730) ──────────────────────── */}
      <Sequence from={570} durationInFrames={160}>
        <SafeArea paddingHorizontal={60} paddingVertical={180}>
          <AbsoluteFill style={{justifyContent: "center", alignItems: "center"}}>
            <AnimatedTitle
              text={"6 y 7 de Abril\n6PM – 9PM COL"}
              fontSize={80}
              fontWeight={900}
              color={CYAN}
              enterAnimation="slideUp"
              exitAnimation="fade"
              enterDuration={18}
              holdDuration={102}
              exitDuration={20}
              textShadow={`0 0 50px ${CYAN}55`}
              lineHeight={1.35}
            />
          </AbsoluteFill>
        </SafeArea>
      </Sequence>

      {/* ── Scene 6: Promise (710–880) ────────────────────────────── */}
      <Sequence from={710} durationInFrames={170}>
        <SafeArea paddingHorizontal={60} paddingVertical={180}>
          <AbsoluteFill style={{justifyContent: "center", alignItems: "center"}}>
            <AnimatedTitle
              text={"En 2 noches,\nconstruyes tu\npropio agente de IA."}
              fontSize={62}
              fontWeight={800}
              color={WHITE}
              enterAnimation="slideUp"
              exitAnimation="fade"
              enterDuration={18}
              holdDuration={112}
              exitDuration={20}
              lineHeight={1.35}
            />
          </AbsoluteFill>
        </SafeArea>
      </Sequence>

      {/* ── Scene 7: Urgency badge (860–1040) ────────────────────── */}
      <Sequence from={860} durationInFrames={180}>
        <UrgencyBadge />
      </Sequence>

      {/* ── Scene 8: Price (1020–1190) ───────────────────────────── */}
      <Sequence from={1020} durationInFrames={170}>
        <PriceDisplay />
      </Sequence>

      {/* ── Scene 9: Guarantee (1170–1390) ───────────────────────── */}
      <Sequence from={1170} durationInFrames={220}>
        <SafeArea paddingHorizontal={40} paddingVertical={100}>
          <GuaranteeCard />
        </SafeArea>
      </Sequence>

      {/* ── Scene 10: CTA (1370–1800) ────────────────────────────── */}
      <Sequence from={1370} durationInFrames={430}>
        <CTAScene />
      </Sequence>

      {/* Progress bar */}
      <ProgressBar color={PURPLE} height={4} />

      {/* Watermark */}
      <div
        style={{
          position: "absolute",
          top: 44,
          left: 60,
          fontSize: 28,
          fontWeight: 700,
          fontFamily: FONT,
          color: "rgba(255,255,255,0.45)",
          letterSpacing: 0.5,
        }}
      >
        @automatizaya
      </div>
    </AbsoluteFill>
  );
};
