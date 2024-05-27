import { AnimeDataType } from "./types";

export const animeData: AnimeDataType = [
  {
    id: "1001",
    title: "Naruto",
    genre: "Action, Adventure, Shounen",
    year: 2002,
    details: {
      episodes: 220,
      studios: ["Studio Pierrot"],
      description:
        "Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.",
      characters: [
        { name: "Naruto Uzumaki", role: "Protagonist" },
        { name: "Sasuke Uchiha", role: "Rival" },
        { name: "Sakura Haruno", role: "Supporting" },
      ],
      rating: 8.3,
    },
  },
  {
    id: "1002",
    title: "Death Note",
    genre: "Mystery, Psychological, Thriller",
    year: 2006,
    details: {
      episodes: 37,
      studios: ["Madhouse"],
      description:
        "Light Yagami, a high school student, discovers a mysterious notebook that allows him to kill anyone by writing the person's name while picturing their face.",
      characters: [
        { name: "Light Yagami", role: "Protagonist" },
        { name: "L", role: "Detective" },
        { name: "Ryuk", role: "Shinigami" },
      ],
      rating: 9.0,
    },
  },
  {
    id: "1003",
    title: "One Piece",
    genre: "Action, Adventure, Comedy",
    year: 1999,
    details: {
      episodes: 1000,
      studios: ["Toei Animation"],
      description:
        "Monkey D. Luffy and his pirate crew in search of the One Piece, the greatest treasure in the world.",
      characters: [
        { name: "Monkey D. Luffy", role: "Protagonist" },
        { name: "Roronoa Zoro", role: "Swordsman" },
        { name: "Nami", role: "Navigator" },
      ],
      rating: 8.6,
    },
  },
  {
    id: "1004",
    title: "Fullmetal Alchemist: Brotherhood",
    genre: "Action, Adventure, Drama",
    year: 2009,
    details: {
      episodes: 64,
      studios: ["Bones"],
      description:
        "Two brothers, Edward and Alphonse Elric, search for the Philosopher's Stone to restore their bodies after a failed alchemy experiment.",
      characters: [
        { name: "Edward Elric", role: "Protagonist" },
        { name: "Alphonse Elric", role: "Supporting" },
        { name: "Roy Mustang", role: "State Alchemist" },
      ],
      rating: 9.2,
    },
  },
  {
    id: "1005",
    title: "Attack on Titan",
    genre: "Action, Drama, Fantasy",
    year: 2013,
    details: {
      episodes: 75,
      studios: ["Wit Studio", "MAPPA"],
      description:
        "In a world where humanity resides within enormous walled cities to protect themselves from Titans, Eren Yeager vows to exterminate the Titans after they destroy his hometown and kill his mother.",
      characters: [
        { name: "Eren Yeager", role: "Protagonist" },
        { name: "Mikasa Ackerman", role: "Supporting" },
        { name: "Armin Arlert", role: "Supporting" },
      ],
      rating: 8.9,
    },
  },
  {
    id: "1006",
    title: "My Hero Academia",
    genre: "Action, Comedy, Superhero",
    year: 2016,
    details: {
      episodes: 88,
      studios: ["Bones"],
      description:
        "In a world where people with superpowers (known as 'Quirks') are the norm, a young boy without them dreams of becoming a hero, enrolling in a prestigious hero academy.",
      characters: [
        { name: "Izuku Midoriya", role: "Protagonist" },
        { name: "Katsuki Bakugo", role: "Rival" },
        { name: "All Might", role: "Mentor" },
      ],
      rating: 8.2,
    },
  },
  {
    id: "1007",
    title: "Demon Slayer",
    genre: "Action, Supernatural, Historical",
    year: 2019,
    details: {
      episodes: 26,
      studios: ["ufotable"],
      description:
        "A young boy joins the Demon Slayer Corps to avenge his family and cure his sister, who was turned into a demon.",
      characters: [
        { name: "Tanjiro Kamado", role: "Protagonist" },
        { name: "Nezuko Kamado", role: "Supporting" },
        { name: "Zenitsu Agatsuma", role: "Supporting" },
      ],
      rating: 8.7,
    },
  },
  {
    id: "1008",
    title: "Sword Art Online",
    genre: "Action, Adventure, Fantasy",
    year: 2012,
    details: {
      episodes: 97,
      studios: ["A-1 Pictures"],
      description:
        "In the year 2022, virtual reality massively multiplayer online role-playing game Sword Art Online is released. Players discover they are trapped inside the game and must defeat the game's creator to escape.",
      characters: [
        { name: "Kirito", role: "Protagonist" },
        { name: "Asuna", role: "Heroine" },
        { name: "Yui", role: "AI" },
      ],
      rating: 7.6,
    },
  },
];
