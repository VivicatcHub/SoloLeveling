import { useState } from "react";
import "./App.css";

// Données de test intégrées pour éviter les problèmes de chargement
const testData = {
  characters: [
    {
      id: 1,
      name: "Sung Jin-Woo",
      rank: "S-Rank",
      guild: "Solo Player",
      level: 100,
      strength: 999,
      agility: 999,
      intelligence: 999,
      vitality: 999,
      sense: 999,
      class: "Shadow Monarch",
      status: "Active",
      avatar: "https://via.placeholder.com/150x150/8B5CF6/ffffff?text=SJW",
    },
    {
      id: 2,
      name: "Cha Hae-In",
      rank: "S-Rank",
      guild: "Hunters Guild",
      level: 85,
      strength: 340,
      agility: 450,
      intelligence: 280,
      vitality: 380,
      sense: 420,
      class: "Assassin",
      status: "Active",
      avatar: "https://via.placeholder.com/150x150/F97316/ffffff?text=CHI",
    },
  ],
  guilds: [
    {
      id: 1,
      name: "Ahjin Guild",
      master: "Sung Jin-Woo",
      rank: "S-Rank",
      members: 12,
      founded: "2023-03-15",
      reputation: 9500,
    },
  ],
  dungeons: [
    {
      id: 1,
      name: "Shadow Dungeon",
      rank: "S-Rank",
      type: "Boss",
      difficulty: "Extreme",
      rewards: ["Shadow Extraction", "Rare Items", "High EXP"],
      status: "Cleared",
      clearedBy: "Sung Jin-Woo",
    },
  ],
};

function App() {
  const [activeTab, setActiveTab] = useState("characters");
  const [data] = useState(testData);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-orange-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            ⚔️ Solo Leveling
          </h1>
          <p className="text-purple-200 text-lg md:text-xl">
            Dashboard des Chasseurs et Donjons
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("characters")}
            className={`px-6 py-3 rounded-lg font-bold transition-all ${
              activeTab === "characters"
                ? "bg-purple-600 text-white"
                : "bg-purple-800/50 text-purple-200 hover:bg-purple-700"
            }`}
          >
            👤 Chasseurs
          </button>
          <button
            onClick={() => setActiveTab("guilds")}
            className={`px-6 py-3 rounded-lg font-bold transition-all ${
              activeTab === "guilds"
                ? "bg-orange-600 text-white"
                : "bg-orange-800/50 text-orange-200 hover:bg-orange-700"
            }`}
          >
            🏰 Guildes
          </button>
          <button
            onClick={() => setActiveTab("dungeons")}
            className={`px-6 py-3 rounded-lg font-bold transition-all ${
              activeTab === "dungeons"
                ? "bg-gradient-to-r from-purple-600 to-orange-600 text-white"
                : "bg-gradient-to-r from-purple-800/50 to-orange-800/50 text-purple-200 hover:from-purple-700 hover:to-orange-700"
            }`}
          >
            🏛️ Donjons
          </button>
        </div>

        {/* Content */}
        {activeTab === "characters" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.characters.map((character) => (
              <div
                key={character.id}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {character.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {character.name}
                    </h3>
                    <p className="text-purple-200">{character.class}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-bold ${
                        character.rank === "S-Rank"
                          ? "bg-purple-600 text-white"
                          : "bg-orange-600 text-white"
                      }`}
                    >
                      {character.rank}
                    </span>
                    <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-bold">
                      {character.status}
                    </span>
                  </div>
                  <div className="text-purple-100">
                    <p>
                      <strong>Guilde:</strong> {character.guild}
                    </p>
                    <p>
                      <strong>Niveau:</strong> {character.level}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm text-purple-200">
                    <div>💪 Force: {character.strength}</div>
                    <div>⚡ Agilité: {character.agility}</div>
                    <div>🧠 Intelligence: {character.intelligence}</div>
                    <div>❤️ Vitalité: {character.vitality}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "guilds" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.guilds.map((guild) => (
              <div
                key={guild.id}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-orange-500/30 hover:border-orange-400/50 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {guild.name}
                </h3>
                <p className="text-orange-200 mb-4">Maître: {guild.master}</p>
                <div className="space-y-2">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-bold ${
                      guild.rank === "S-Rank"
                        ? "bg-purple-600 text-white"
                        : "bg-orange-600 text-white"
                    }`}
                  >
                    {guild.rank}
                  </span>
                  <div className="text-orange-100">
                    <p>
                      <strong>👥 Membres:</strong> {guild.members}
                    </p>
                    <p>
                      <strong>📅 Fondée:</strong> {guild.founded}
                    </p>
                    <p>
                      <strong>⭐ Réputation:</strong>{" "}
                      {guild.reputation.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "dungeons" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.dungeons.map((dungeon) => (
              <div
                key={dungeon.id}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-purple-500/30 hover:border-orange-400/50 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {dungeon.name}
                </h3>
                <p className="text-purple-200 mb-4">
                  {dungeon.type} - {dungeon.difficulty}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-bold ${
                        dungeon.rank === "S-Rank"
                          ? "bg-purple-600 text-white"
                          : "bg-orange-600 text-white"
                      }`}
                    >
                      {dungeon.rank}
                    </span>
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-bold">
                      {dungeon.status}
                    </span>
                  </div>
                  <div className="text-purple-100">
                    <p>
                      <strong>🎁 Récompenses:</strong>
                    </p>
                    <ul className="text-sm text-purple-200">
                      {dungeon.rewards.map((reward, index) => (
                        <li key={index}>• {reward}</li>
                      ))}
                    </ul>
                    {dungeon.clearedBy && (
                      <p className="text-green-400 mt-2">
                        <strong>✅ Complété par:</strong> {dungeon.clearedBy}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-purple-300">
            🎮 Application Solo Leveling - Interface de test
          </p>
          <p className="text-purple-400 text-sm mt-2">
            Thème: Orange & Violet | Données: {data.characters.length}{" "}
            chasseurs, {data.guilds.length} guildes, {data.dungeons.length}{" "}
            donjons
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
