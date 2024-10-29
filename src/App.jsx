// components/App.jsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WelcomeScreen from "./components/welcome";
import ImageScreen from "./components/image";

const imageScreens = [
  {
    title: "Das primeiras idas no ônibus juntos.",
    imageSrc: "/foto1.jpeg",
    description:
      "Quase o começo de tudo aqui. Quando a gente ainda era só 2 adolescentes se conhecendo.",
  },
  {
    title: "Dos primeiros presentes dados.",
    imageSrc: "/foto2.jpeg",
    description:
      "O começo da paixão sendo aflorada na gente, do romantismo e do companheirismo.",
  },
  {
    title: "Das primeiras idas ao açai.",
    imageSrc: "/foto3.jpeg",
    description:
      "Nada mudou né, a gente ainda ama um açai :), e sempre que dá a gente vai.",
  },
  {
    title: "Do primeiro beijo no açai kk.",
    imageSrc: "/foto4.jpeg",
    description:
      "Podia ter sido em outro lugar? Talvez, mas foi no açai e por iniciativa dela :)",
  },
  {
    title: "Das primeiras saídas para jantar.",
    imageSrc: "/foto5.jpeg",
    description: "Avançando um pouco mais no relacionamento e nas etapas né :)",
  },
  {
    title: "Do tão esperado laser.",
    imageSrc: "/foto6.jpeg",
    description: "Dispensa comentários :)",
  },
  {
    title: "Da tão amada camisa :)",
    imageSrc: "/foto7.jpeg",
    description: "Eu vou te dar outra camisa igual a essa, é serio :)",
  },
  {
    title: "Da primeira ida a praia a sós.",
    imageSrc: "/foto8.jpeg",
    description:
      "Nem aproveitei o pôr do sol, ela tava tão bonita que roubou minha antenção :)",
  },
  {
    title: "Ainda da primeira ida a praia a sós kk",
    imageSrc: "/foto9.jpeg",
    description:
      "BEIJO BEIJO BEIJO BEIJO, beijinho, beijão, todo dia tem um beijo na televisão :)",
  },
  {
    title: "Só mais uma da praia kkk",
    imageSrc: "/foto10.jpeg",
    description: "Tava com medo dela fugir, ai eu apertei :)",
  },
  {
    title: "Uma foto aí kk",
    imageSrc: "/foto11.jpeg",
    description:
      "Uma foto mostrando a hora, pra dizer que tá quase na hora de nós noivar viu :)",
  },
  {
    title: "Da evolução viu :)",
    imageSrc: "/foto12.jpeg",
    description:
      "Rapaz, aqui nós tá parecendo adulto, nem parece o casal das primeiras fotos. (Na real a gente é adulto né kk)",
  },
  {
    title: "Essa aqui é pq te achei mó linda",
    imageSrc: "/foto13.jpeg",
    description: "Sem comentários, a beleza fala por si só",
  },
  {
    title: "Mó linda (Lá em casa ainda)",
    imageSrc: "/foto14.jpeg",
    description: "Na minha casa, jájá na nossa, eita, recebe aí :)",
  },
];

const App = () => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);

  const nextScreen = () => {
    if (showWelcome) {
      setShowWelcome(false);
    } else {
      setCurrentScreen((prev) => (prev + 1) % imageScreens.length);
    }
  };

  const prevScreen = () => {
    if (!showWelcome) {
      setCurrentScreen(
        (prev) => (prev - 1 + imageScreens.length) % imageScreens.length
      );
    }
  };

  return (
    <main className="flex justify-center h-screen relative overflow-hidden">
      <AnimatePresence mode="wait">
        {showWelcome ? (
          <motion.div
            key="welcome"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <WelcomeScreen />
          </motion.div>
        ) : (
          <motion.div
            key={currentScreen}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ImageScreen
              title={imageScreens[currentScreen].title}
              imageSrc={imageScreens[currentScreen].imageSrc}
              description={imageScreens[currentScreen].description}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={prevScreen}
        className="absolute left-4 top-1/2 text-white px-4 py-2"
      >
        <i className="fa fa-arrow-left fa-2x"></i>
      </button>
      <button
        onClick={nextScreen}
        className="absolute right-4 top-1/2 text-white px-4 py-2"
      >
        <i className="fa fa-arrow-right fa-2x"></i>
      </button>
    </main>
  );
};

export default App;
