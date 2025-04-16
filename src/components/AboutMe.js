import React, { useState, useRef, useEffect } from "react";
import './AboutMe.css';

const AboutMe = () => {
  const [showTerminal, setShowTerminal] = useState(false);
  const [commandHistory, setCommandHistory] = useState([
    "Bienvenue dans le terminal de Doniphane Trules.",
    "Tapez `help` pour voir les commandes disponibles.",
    "Tapez `neofetch` pour voir savoir ma plus grande crainte dans ma vie dévellopeur.",
    "Tapez `exit` pour quitter le terminal et revenir à la section À propos.",
  ]);
  const [currentCommand, setCurrentCommand] = useState("");
  const terminalRef = useRef(null);

  const handleCommand = () => {
    const trimmed = currentCommand.trim().toLowerCase();
    let response;

   
    switch (trimmed) {
      case "help":
        response = "Commandes disponibles : help, whoami, clear, exit, neofetch";
        break;
      case "whoami":
        response =
          "Utilisateur : Doniphane Trules\nRôle : Développeur Web & passionné de cybersécurité.";
        break;
      case "clear":
        setCommandHistory([]);
        setCurrentCommand("");
        return;
        case "neofetch":
          response = `
        Tux - Le pingouin Linux :
        
                .--.
               |o_o |
               |:_/ |
              //   \\ \\
             (|     | )
            /'\\_   _/\\\`
            \\___)=(___/
        
                Système d'exploitation : Linux — la seule interface où je me sens vraiment moi.
                Architecture : 64 bits — comme ma personnalité, fragmentée, empilée en couches.
                Uptime : 5 jours — mais les pensées tournent depuis bien plus longtemps.
                RAM : 8 Go — mais aucune mémoire vive pour oublier mes erreurs.
                CPU : Intel i7 — assez puissant pour faire tourner Kali… et mes regrets.
        
                -----------------------------
                fsociety.log > anecdote :
        
                Elliot n’a pas hésité. Une backdoor, un reverse shell, et il s’est infiltré.
                Il a tapé \`git add .\`, \`git commit -m "Goodbye, E Corp."\`, puis il a appuyé sur Entrée.
                \`git push\`.
        
                En une commande, il a tout changé.
        
                Il n’avait pas besoin d’un VPN pour masquer ses intentions.
                Il *était* le masque. Il *était* le bug dans le système.
        
                Moi ? Je reste figé devant le terminal.
                Je tape \`git status\` comme si j’attendais une validation de mon existence.
                Chaque commit est un cri dans le vide :
                \`git commit -m "j’espère que ça passe en prod"\`.
        
                Mais au moment de pousser, je doute.
        
                Et si on me lisait ?
                Et si on me jugeait ?
                Et si, quelque part, quelqu’un voyait mon code… et y lisait mes failles ?
        
                Elliot n’avait pas peur. Il avait une cause.
                Moi, j’ai des branches non mergées… et trop de commits non poussés.
        
                Un jour, peut-être.
                Un jour, je ferai un \`git push\` sans trembler.
                Et ce ne sera pas juste du code.
                Ce sera moi, en entier.
          `;
          break;
        
        
      case "exit":
        setShowTerminal(false);
        setCommandHistory([
          "Bienvenue dans le terminal de Doniphane Trules.",
          "Tapez `help` pour voir les commandes disponibles.",
          "Tapez `exit` pour quitter le terminal et revenir à la section À propos.",
        ]);
        setCurrentCommand("");
        return;
      default:
        response = `'${trimmed}' : commande non reconnue. Tapez 'help' pour la liste.`;
    }

    setCommandHistory((prev) => [
      ...prev,
      `doniphane@portfolio:~$ ${currentCommand}`,
      response,
    ]);
    setCurrentCommand("");
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);

  return (
    <div className="about-me-container">
      {!showTerminal ? (
        <div className="about-me">
          <h2>À propos de moi</h2>
          <p>
            Je m'appelle <strong>Doniphane Trules</strong>, jeune développeur
            Web & Web Mobile de 24 ans, passionné par la technologie depuis mon
            plus jeune âge. Issu d’un BTS en électronique et communication, j’ai
            décidé de me reconvertir dans le développement Web, une voie dans
            laquelle je m’épanouis pleinement.
          </p>
          <p>
            Après avoir terminé ma formation en développement Web à l'Institut
            de Formation de la Réunion, je poursuis actuellement mes études
            pour devenir Concepteur Développeur d'Applications.
          </p>
          <p>
            En parallèle de mes projets web, je consacre une partie de mon temps
            libre à une de mes grandes passions :{" "}
            <strong>les Capture The Flag</strong> comme celles proposées par
            Hack The Box ou TryHackMe. Ces challenges de cybersécurité me
            permettent d’exercer ma curiosité, de renforcer ma logique et de
            développer mes compétences en hacking éthique. J’adore comprendre
            les vulnérabilités, les mécanismes des failles, et repousser les
            limites de mes connaissances.
          </p>
          <div className="profile-container">
            <div
              className="profile-picture"
              onClick={() => setShowTerminal(true)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={`${process.env.PUBLIC_URL}/2.jpg`}
                alt="Doniphane Trules"
              />
            </div>
            <div className="profile-info">
              <h3>Trules Doniphane</h3>
              <p>Âge : 24 ans</p>
              <p>Ville : Plate Saint-Leu, Réunion</p>
              <p>Passion : Capture The Flag (Hack The Box, TryHackMe)</p>
              <p>Passion : Réparation Informatique & bidouille hardware</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="terminal">
          <div className="terminal-header">
            <span className="circle red"></span>
            <span className="circle yellow"></span>
            <span className="circle green"></span>
            <span className="title">~ Doniphane Terminal</span>
          </div>
          <div className="terminal-body" ref={terminalRef}>
            {commandHistory.map((line, index) => (
              <div key={index} className="terminal-line">
                {line}
              </div>
            ))}
            <div className="terminal-input">
              <span className="prompt">doniphane@portfolio:~$</span>
              <input
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleCommand()}
                autoFocus
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
