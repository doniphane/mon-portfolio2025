import React, { useState, useEffect, useRef } from 'react';

const Terminal = ({ onExit }) => {
  const [history, setHistory] = useState([
    "Bienvenue dans le terminal de Doniphane Trules.",
    "Tapez `help` pour voir les commandes disponibles.",
    "Tapez `exit` pour quitter le terminal et revenir à la section À propos.\n"
  ]);
  const [input, setInput] = useState("");
  const terminalRef = useRef(null);

  // Fonction pour gérer les commandes dans le terminal
  const handleCommand = (cmd) => {
    const command = cmd.trim().toLowerCase();
    let response = "";

    switch (command) {
      case "help":
        response =
          "Commandes disponibles :\n- whoami : Affiche les infos de l'utilisateur\n- neofetch : Affiche des informations amusantes\n- clear : Nettoie le terminal\n- exit : Quitte le terminal";
        break;
      case "whoami":
        response =
          "Utilisateur : Doniphane Trules\nRôle : Développeur Web & passionné de cybersécurité\nSpécialité : CTF, Hack The Box, TryHackMe";
        break;
      case "neofetch":
        response = `
        Doniphane@Portfolio:~$ neofetch
        ██████████████████████████████████
        OS: MacOS 12.5 (Monterey)
        CPU: Apple M2 (8-core)
        RAM: 8GB
        Storage: 256GB SSD
        Battery: 95% (Running on power)
        User: Doniphane Trules
        Rôle: Développeur Web
        Favourite Hobby: Capture The Flag (CTF)
        Passion: Cybersécurité et bidouille hardware
        ██████████████████████████████████
        `;
        break;
      case "clear":
        setHistory([]);
        return;
      case "exit":
        onExit(); // Appelle la fonction pour fermer le terminal
        return;
      default:
        response = `Commande inconnue : ${command}. Tapez 'help' pour voir les commandes disponibles.`;
        break;
    }

    setHistory((prev) => [
      ...prev,
      `doniphane@portfolio:~$ ${cmd}`,
      response
    ]);
  };

  // Fonction pour gérer l'événement de pression de touche
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleCommand(input);
      setInput("");
    }
  };

  // Scroll automatique vers le bas
  useEffect(() => {
    terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
  }, [history]);

  return (
    <div
      className="bg-black text-green-400 font-mono p-4 rounded-md shadow-lg w-full h-[500px] max-w-4xl mx-auto overflow-y-auto border border-green-500"
      ref={terminalRef}
    >
      {history.map((line, idx) => (
        <div key={idx} className="whitespace-pre-wrap">
          {line}
        </div>
      ))}
      <div className="flex mt-2">
        <span className="mr-2 text-green-500">doniphane@portfolio:~$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent focus:outline-none flex-grow text-green-300 caret-green-500"
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;
