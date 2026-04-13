import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const backgrounds = [
  "from-[#0b3d3a] via-[#2c4a6a] to-[#f4f7fb]",
  "from-[#102a43] via-[#334e68] to-[#e6f0ff]",
  "from-[#0f3b2e] via-[#2f5d50] to-[#f5f7ff]",
  "from-[#1b2a41] via-[#324a5f] to-[#f8fafc]",
  "from-[#2a1b3d] via-[#3c4a6b] to-[#f7f9ff]",
];

const questions = [
  {
    section: "SECTION 1: TALKING SKILLS",
    question:
      "Does he talk like a normal human or like he’s buffering on 2% WiFi?",
    options: [
      "Smooth and clear, I understand everything",
      "Sometimes clear, sometimes confusing",
      "I be guessing half the time 😭",
    ],
  },
  {
    section: "SECTION 1: TALKING SKILLS",
    question: "Is he actually listening or just waiting for his turn to speak?",
    options: [
      "Fully listening, locked in",
      "Half listening, half plotting his reply",
      "Not listening at all 💀",
    ],
  },
  {
    section: "SECTION 1: TALKING SKILLS",
    question:
      "Can he explain himself clearly or do you need a translator sometimes?",
    options: [
      "Clear communicator",
      "Needs a little decoding",
      "I need subtitles",
    ],
  },

  {
    section: "SECTION 2: EMOTIONAL SETTINGS",
    question:
      "Can he read your mood or does he ask “you good?” when you clearly are not?",
    options: [
      "Reads me perfectly",
      "Sometimes gets it right",
      "Completely clueless 😭",
    ],
  },
  {
    section: "SECTION 2: EMOTIONAL SETTINGS",
    question:
      "In tense moments, does he stay calm or turn into a reality show contestant?",
    options: [
      "Calm and composed",
      "Slight drama but manageable",
      "Full Netflix episode 🎬",
    ],
  },
  {
    section: "SECTION 2: EMOTIONAL SETTINGS",
    question: "Does he understand emotions or always go “it’s not that deep”?",
    options: [
      "Emotionally intelligent",
      "Tries but struggles",
      "“It’s not that deep” king",
    ],
  },

  {
    section: "SECTION 3: CONSISTENCY",
    question: "Is he consistent or are you dating a new version every week?",
    options: [
      "Same solid energy",
      "Slightly unpredictable",
      "New personality unlocked weekly 💀",
    ],
  },
  {
    section: "SECTION 3: CONSISTENCY",
    question: "When he says “I got you,” does it actually mean something?",
    options: ["Always delivers", "Sometimes delivers", "Just vibes, no delivery"],
  },
  {
    section: "SECTION 3: CONSISTENCY",
    question: "Can you rely on him or should you always keep a backup plan?",
    options: ["Fully reliable", "Depends on the situation", "Backup plan required 😭"],
  },

  {
    section: "SECTION 4: EFFORT & INITIATIVE",
    question: "Does he take initiative or just go with vibes?",
    options: ["Takes charge", "Sometimes steps up", "Just vibing through life"],
  },
  {
    section: "SECTION 4: EFFORT & INITIATIVE",
    question: "Does he keep things fun or is it getting repetitive?",
    options: ["Always fun and exciting", "Sometimes fun", "Same episode every day"],
  },
  {
    section: "SECTION 4: EFFORT & INITIATIVE",
    question: "Does he actually put effort or think showing up is enough?",
    options: [
      "High effort king",
      "Medium effort",
      "Bare minimum specialist 💀",
    ],
  },

  {
    section: "SECTION 5: RESPECT & ENERGY",
    question: "Does he respect your space or act like your GPS tracker?",
    options: ["Respects boundaries", "Slightly clingy", "FBI level tracking"],
  },
  {
    section: "SECTION 5: RESPECT & ENERGY",
    question: "Does he support your goals or just cheer from afar?",
    options: ["Fully supportive", "Somewhat supportive", "Just watching"],
  },
  {
    section: "SECTION 5: RESPECT & ENERGY",
    question:
      "Does he appreciate you or act like you came free with the package?",
    options: ["Shows appreciation", "Sometimes shows it", "Takes me for granted"],
  },

  {
    section: "SECTION 6: CHEMISTRY & VIBES 😏",
    question: "Chemistry check… sparks or just polite proximity?",
    options: ["Sparks flying 🔥", "Decent chemistry", "Just… there"],
  },
  {
    section: "SECTION 6: CHEMISTRY & VIBES 😏",
    question:
      "Does he make you feel wanted or like a “seen 3 hours ago” message?",
    options: ["Always makes me feel wanted", "Sometimes", "Dry energy"],
  },
  {
    section: "SECTION 6: CHEMISTRY & VIBES 😏",
    question: "His vibe… smooth or confused main character?",
    options: ["Smooth operator", "Occasionally confused", "Lost in the plot"],
  },

  {
    section: "SECTION 7: GROWTH MODE",
    question: "Is he improving or stuck on repeat?",
    options: ["Always improving", "Slow progress", "Same mistakes loop"],
  },
  {
    section: "SECTION 7: GROWTH MODE",
    question: "Can he take feedback or does he get defensive?",
    options: ["Takes it well", "Sometimes defensive", "Immediate defense mode"],
  },

  {
    section: "SECTION 8: PRIVATE CHEMISTRY 😏",
    question: "How’s the chemistry in private moments?",
    options: [
      "Electric… sparks flying every time 🔥",
      "Good, but there’s room to level up",
      "A little awkward sometimes 😭",
    ],
  },
  {
    section: "SECTION 8: PRIVATE CHEMISTRY 😏",
    question: "Does he take the lead confidently or hesitate too much?",
    options: [
      "Knows exactly what he’s doing 😏",
      "Sometimes confident, sometimes unsure",
      "Needs guidance like a tutorial level",
    ],
  },
  {
    section: "SECTION 8: PRIVATE CHEMISTRY 😏",
    question: "Overall satisfaction in your intimate moments?",
    options: [
      "Very satisfied… no complaints",
      "It’s good, could be better",
      "Needs improvement",
    ],
  },
  {
    section: "SECTION 8: PRIVATE CHEMISTRY 😏",
    question: "Variety & creativity… is it exciting or predictable?",
    options: [
      "Always keeps it interesting 👀",
      "Some variety here and there",
      "Same routine every time",
    ],
  },
  {
    section: "SECTION 8: PRIVATE CHEMISTRY 😏",
    question: "Does he pay attention to what you like?",
    options: [
      "Very attentive and in tune",
      "Sometimes pays attention",
      "Just guessing and hoping 😭",
    ],
  },
  {
    section: "SECTION 8: PRIVATE CHEMISTRY 😏",
    question: "Confidence level in intimate moments?",
    options: [
      "Confident and in control",
      "Medium confidence",
      "Nervous / unsure energy",
    ],
  },
  {
    section: "SECTION 8: PRIVATE CHEMISTRY 😏",
    question: "Aftercare & connection after… how is it?",
    options: [
      "Makes me feel close and connected",
      "It’s okay",
      "Disappears into “man cave mode” 💀",
    ],
  },
  {
    section: "SECTION 8: PRIVATE CHEMISTRY 😏",
    question: "Communication… can he express what he wants?",
    options: [
      "Clear and confident",
      "Somewhat clear",
      "Expecting mind-reading",
    ],
  },
  {
    section: "SECTION 8: PRIVATE CHEMISTRY 😏",
    question:
      "Banana scale assessment 🍌 (we keeping it playful now…)",
    options: [
      "Premium export quality 🍌✨",
      "Standard supermarket banana",
      "Travel-size snack 😭",
    ],
  },
  {
    section: "SECTION 8: PRIVATE CHEMISTRY 😏",
    question: "Overall performance… what are we saying?",
    options: [
      "MVP status 🏆",
      "Solid player",
      "Needs more training",
    ],
  },
];

export default function StoryQuestionnaire() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showFinal, setShowFinal] = useState(false);
  const [result, setResult] = useState(null);
  const [returnConfirm, setReturnConfirm] = useState(false);

  // 🔥 background crossfade system
  const [bgIndex, setBgIndex] = useState(0);
  const [prevBgIndex, setPrevBgIndex] = useState(0);
  const [bgTransition, setBgTransition] = useState(false);

  const handleAnswer = (option) => {
    setAnswers([...answers, option]);

    // smooth background transition trigger
    setPrevBgIndex(bgIndex);
    const next = (bgIndex + 1) % backgrounds.length;
    setBgIndex(next);
    setBgTransition(true);

    setTimeout(() => setBgTransition(false), 800);

    if (step === questions.length - 1) {
      setShowFinal(true);
      return;
    }

    setStep(step + 1);
  };

  const handleResult = (choice) => {
    if (choice === "Keep him 😏") setResult("keep");
    else if (choice === "Train him 🧠") setResult("train");
    else setResult("return");
  };

  if (!started) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white text-center p-6">
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Hey Daria… you thought I forgot? nah 😏
          </h1>
          <p className="text-white/70 mb-6">
            Better answer carefully… this is a full recap now.
          </p>
          <button
            onClick={() => setStarted(true)}
            className="px-6 py-3 bg-white text-black rounded-full hover:scale-105 transition"
          >
            start 👀
          </button>
        </div>
      </div>
    );
  }

  if (showFinal && !result) {
    return (
      <div className="h-screen flex items-center justify-center text-center p-6 relative overflow-hidden text-white">
        {/* old bg */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${backgrounds[prevBgIndex]}`}
          animate={{ opacity: bgTransition ? 0 : 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* new bg */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${backgrounds[bgIndex]}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        <div className="absolute inset-0 backdrop-blur-[80px] bg-white/10" />

        <div className="relative max-w-md">
          <h1 className="text-xl font-bold mb-6">
            After answering this entire chaotic questionnaire… choose your conclusion like a responsible relationship scientist 🧪
          </h1>

          <div className="flex flex-col gap-3">
            {["Keep him 😏", "Train him 🧠", "Return to sender 📦"].map((opt) => (
              <button
                key={opt}
                onClick={() => handleResult(opt)}
                className="px-5 py-3 rounded-full bg-white text-black hover:scale-105 transition"
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (result) {
    return (
      <div className="h-screen flex items-center justify-center bg-black text-white text-center p-6">
        {result === "keep" && (
          <h1 className="text-2xl font-bold">
            You lucky girl… yeah you definitely enjoyed your time 😌
          </h1>
        )}

        {result === "train" && (
          <h1 className="text-2xl font-bold">
            Respect… potential detected. I accept coaching 😂
          </h1>
        )}

        {result === "return" && (
          <div>
            {!returnConfirm ? (
              <>
                <h1 className="text-2xl font-bold mb-6">You sure? 🤨</h1>
                <button
                  onClick={() => setReturnConfirm(true)}
                  className="px-6 py-3 bg-white text-black rounded-full"
                >
                  yes
                </button>
              </>
            ) : (
              <h1 className="text-2xl font-bold">
                Damn… we could’ve made cute kids together 
              </h1>
            )}
          </div>
        )}
      </div>
    );
  }

  const q = questions[step];

  return (
    <div className="h-screen w-full relative overflow-hidden text-white">
      {/* background crossfade */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${backgrounds[prevBgIndex]}`}
        animate={{ opacity: bgTransition ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${backgrounds[bgIndex]}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      {/* glass layer */}
      <div className="absolute inset-0 backdrop-blur-[80px] bg-white/10" />

      {/* UI */}
      <div className="relative z-10 h-full flex items-center justify-center p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-xl w-full"
          >
            <p className="text-white/70 mb-2">{q.section}</p>
            <h2 className="text-white text-2xl md:text-4xl font-bold mb-8">
              {q.question}
            </h2>

            <div className="flex flex-col gap-3">
              {q.options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  className="px-5 py-3 rounded-full bg-white/90 text-black hover:scale-105 transition"
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
