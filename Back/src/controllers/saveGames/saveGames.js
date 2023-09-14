const { Game, Gender, SupportedPlatform } = require('../../db.js');

const gamesArray = [
  {
    "name": "The Legend of Zelda: Breath of the Wild",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694010552/f6yhlgzc47sveuthyom7.jpg",
    "description": "An open-world action-adventure game set in the fantasy realm of Hyrule.",
    "releaseDate": "March 3, 2017",
    "supportedPlatforms": ["Nintendo Switch", "Wii U"],
    "genre": ["Action", "Adventure"],
    "price": 35.90,
    "review": "Metacritic Score - 97/100",
    "stock": 27,
  },
  {
    "name": "The Witcher 3: Wild Hunt",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694108886/tew4ergptn4c1bf7mdyb.jpg",
    "description": "A sprawling open-world RPG where you play as Geralt of Rivia, a monster hunter.",
    "releaseDate": "May 19, 2015",
    "supportedPlatforms": ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    "genre": ["RPG"],
    "price": 29.90,
    "review": "Metacritic Score - 93/100",
    "stock": 44,
  },
  {
    "name": "Red Dead Redemption 2",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694108970/rstfwrq9xp5cv5hkqcf7.jpg",
    "description": "An epic tale of life in America's unforgiving heartland during the late 1800s.",
    "releaseDate": "October 26, 2018",
    "supportedPlatforms": ["PC", "PlayStation 4", "Xbox One"],
    "genre": ["Action", "Adventure"],
    "price": 29.90,
    "review": "Metacritic Score - 97/100",
    "stock": 29,
  },
  {
    "name": "The Elder Scrolls V: Skyrim",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694108988/qtjcu9chowcqgzladhd5.jpg",
    "description": "An open-world RPG set in the fantasy world of Tamriel, known for its vastness and modding community.",
    "releaseDate": "November 11, 2011",
    "supportedPlatforms": ["PC", "PlayStation 3", "PlayStation 4", "Xbox 360", "Xbox One", "Nintendo Switch"],
    "genre": ["RPG"],
    "price": 24.90,
    "review": "Metacritic Score - 94/100",
    "stock": 35,
  },
  {
    "name": "Super Mario Odyssey",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694109009/ibwdc3ibgz14aprsolip.jpg",
    "description": "Mario embarks on a globe-trotting adventure to save Princess Peach from Bowser.",
    "releaseDate": "October 27, 2017",
    "supportedPlatforms": ["Nintendo Switch"],
    "genre": ["Platformer"],
    "price": 29.90,
    "review": "Metacritic Score - 97/100",
    "stock": 22,
  },
  {
    "name": "God of War (2018)",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694453489/vnvuw2f6jwgvxrv51iuz.jpg",
    "description": "Kratos returns, this time in Norse mythology, on a quest with his son Atreus.",
    "releaseDate": "April 20, 2018",
    "supportedPlatforms": ["PlayStation 4", "PlayStation 5"],
    "genre": ["Action", "Adventure"],
    "price": 11.50,
    "review": "Metacritic Score - 94/100",
    "stock": 38,
  },
  {
    "name": "Dark Souls III",
    "image": "https://res.clouinary.com/bits8/image/upload/v1694109053/zlwvlzkcclxk4ez7eegi.jpg",
    "description": "A challenging action RPG that tests your skills and patience in a dark and beautifully designed world.",
    "releaseDate": "April 12, 2016",
    "supportedPlatforms": ["PC", "PlayStation 4", "Xbox One"],
    "genre": ["Action", "RPG"],
    "price": 24.90,
    "review": "Metacritic Score - 89/100",
    "stock": 30,
  },
  {
    "name": "Hollow Knight",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694109152/nttx8tevxr8jy7hmybhq.jpg",
    "description": "An atmospheric and challenging action-adventure game set in a mysterious underground world.",
    "releaseDate": "February 24, 2017",
    "supportedPlatforms": ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    "genre": ["Metroidvania"],
    "price": 25.50,
    "review": "Metacritic Score - 90/100",
    "stock": 25,
  },
  {
    "name": "Persona 5",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694447962/fzpfvxjoc9t7fn2nodv8.png",
    "description": "A stylish JRPG where you play as a high school student with secret supernatural powers.",
    "releaseDate": "April 4, 2017",
    "supportedPlatforms": ["PlayStation 3", "PlayStation 4"],
    "genre": ["JRPG"],
    "price": 12.90,
    "review": "Metacritic Score - 93/100",
    "stock": 40,
  },
  {
    "name": "Overwatch",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694109184/ccy4shisgjdllocrggxv.jpg",
    "description": "A team-based multiplayer first-person shooter with a diverse cast of heroes.",
    "releaseDate": "May 24, 2016",
    "supportedPlatforms": ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    "genre": ["First-Person Shooter"],
    "price": 14.90,
    "review": "Metacritic Score - 90/100",
    "stock": 33,
  },
  {
    "name": "Cyberpunk 2077",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694109667/m60tvbiabbk7htkszktf.jpg",
    "description": "An open-world RPG set in a dystopian future, developed by CD Projekt Red.",
    "releaseDate": "December 10, 2020",
    "supportedPlatforms": ["PC", "PlayStation 4", "Xbox One"],
    "genre": ["RPG"],
    "price": 19.90,
    "review": "Metacritic Score - 56/100 (Note: This score reflects the state of the game at its troubled launch; it may have improved since.)",
    "stock": 20,
  },
  {
    "name": "Celeste",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694109683/yv0luk6srleaxp5fb3b0.png",
    "description": "A challenging platformer with a touching narrative about mental health.",
    "releaseDate": "January 25, 2018",
    "supportedPlatforms": ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    "genre": ["Platformer"],
    "price": 12.90,
    "review": "Metacritic Score - 94/100",
    "stock": 28,
  },
  {
    "name": "Minecraft",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694109702/x4le1esrzgudjww1h7qu.jpg",
    "description": "A sandbox game that allows players to build and explore their own blocky worlds.",
    "releaseDate": "November 18, 2011",
    "supportedPlatforms": ["PC", "Various consoles", "Mobile devices"],
    "genre": ["Sandbox"],
    "price": 29.90,
    "review": "Metacritic Score - 93/100",
    "stock": 24,
  },
  {
    "name": "Sekiro: Shadows Die Twice",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694109715/ccd1lxhi15redfavtczn.jpg",
    "description": "An action-adventure game set in feudal Japan, known for its challenging combat.",
    "releaseDate": "March 22, 2019",
    "supportedPlatforms": ["PC", "PlayStation 4", "Xbox One"],
    "genre": ["Action", "Adventure"],
    "price": 15.50,
    "review": "Metacritic Score - 90/100",
    "stock": 32,
  },
  {
    "name": "Monster Hunter: World",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694109732/nfwdpje31hjv3z0nymm2.jpg",
    "description": "An action RPG where you hunt down massive creatures in a lush open world.",
    "releaseDate": "January 26, 2018",
    "supportedPlatforms": ["PC", "PlayStation 4", "Xbox One"],
    "genre": ["Action", "RPG"],
    "price": 18.90,
    "review": "Metacritic Score - 90/100",
    "stock": 36,
  },
  {
    "name": "Grand Theft Auto V",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694109732/nfwdpje31hjv3z0nymm2.jpg",
    "description": "An open-world action-adventure game that follows the lives of three criminals in Los Santos.",
    "releaseDate": "September 17, 2013",
    "supportedPlatforms": ["PC", "PlayStation 3", "PlayStation 4", "Xbox 360", "Xbox One"],
    "genre": ["Action", "Adventure"],
    "price": 29.90,
    "review": "Metacritic Score - 96/100",
    "stock": 42,
  },
  {
    "name": "Death Stranding",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694446263/ivdjkckqotttiddrk6ze.jpg",
    "description": "A unique open-world game by Hideo Kojima that blends exploration, survival, and a mysterious narrative.",
    "releaseDate": "November 8, 2019",
    "supportedPlatforms": ["PC", "PlayStation 4"],
    "genre": ["Action", "Adventure"],
    "price": 12.90,
    "review": "Metacritic Score - 82/100",
    "stock": 31,
  },
  {
    "name": "Bloodborne",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694448295/onzzbcvglejc6h4g7sqm.gif",
    "description": "An action RPG with a gothic-horror setting and fast-paced, challenging combat.",
    "releaseDate": "March 24, 2015",
    "supportedPlatforms": ["PlayStation 4"],
    "genre": ["Action", "RPG"],
    "price": 17.80,
    "review": "Metacritic Score - 92/100",
    "stock": 26,
  },
  {
    "name": "Undertale",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694109787/h8xtga6ouufcywryc9aa.jpg",
    "description": "A unique indie RPG that allows players to choose between violence and mercy in a world of monsters.",
    "releaseDate": "September 15, 2015",
    "supportedPlatforms": ["PC", "Various consoles"],
    "genre": ["RPG"],
    "price": 15.80,
    "review": "Metacritic Score - 92/100",
    "stock": 34,
  },
  {
    "name": "Mortal Kombat 11",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694109795/ri0xadkrg1pah18ntel0.jpg",
    "description": "A brutal and fast-paced fighting game featuring a roster of iconic characters.",
    "releaseDate": "April 23, 2019",
    "supportedPlatforms": ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    "genre": ["Fighting"],
    "price": 29.90,
    "review": "Metacritic Score - 83/100",
    "stock": 29,
  },
  {
    "name": "Resident Evil Village",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694110023/jvde04qqdotshzvi5dyr.png",
    "description": "The latest installment in the Resident Evil series, featuring first-person survival horror gameplay.",
    "releaseDate": "May 7, 2021",
    "supportedPlatforms": ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X/S"],
    "genre": ["Survival Horror"],
    "price": 22.50,
    "review": "Metacritic Score - 84/100",
    "stock": 25,
  },
  {
    "name": "Control",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694448411/ea9suceh7rmootggfw1p.jpg",
    "description": "A mind-bending action-adventure game with a focus on paranormal abilities.",
    "releaseDate": "August 27, 2019",
    "supportedPlatforms": ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X/S"],
    "genre": ["Action", "Adventure"],
    "price": 18.90,
    "review": "Metacritic Score - 82/100",
    "stock": 30,
  },
  {
    "name": "The Last of Us Part II",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694448531/kdwclwmtgzl71syw42dg.webp",
    "description": "A gripping action-adventure game that explores themes of revenge and redemption in a post-apocalyptic world.",
    "releaseDate": "June 19, 2020",
    "supportedPlatforms": ["PlayStation 4", "PlayStation 5"],
    "genre": ["Action", "Adventure"],
    "price": 24.90,
    "review": "Metacritic Score - 93/100",
    "stock": 27,
  },
  {
    "name": "Ghost of Tsushima",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694448649/p71yeayjkmx9ggebkenn.jpg",
    "description": "An open-world action-adventure game set in feudal Japan, where you play as a samurai.",
    "releaseDate": "July 17, 2020",
    "supportedPlatforms": ["PlayStation 4", "PlayStation 5"],
    "genre": ["Action", "Adventure"],
    "price": 29.90,
    "review": "Metacritic Score - 83/100",
    "stock": 23,
  },
  {
    "name": "Final Fantasy VII Remake",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694448736/win2mytadnnraecxtah8.jpg",
    "description": "A modern reimagining of the classic RPG, with stunning visuals and revamped gameplay.",
    "releaseDate": "April 10, 2020",
    "supportedPlatforms": ["PlayStation 4", "PlayStation 5"],
    "genre": ["RPG"],
    "price": 29.90,
    "review": "Metacritic Score - 87/100",
    "stock": 22,
  },
  {
    "name": "Assassin's Creed Valhalla",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694448805/jvdb44tx9b0rlt7amzet.jpg",
    "description": "Embark on a Viking saga in this action RPG set in the Dark Ages.",
    "releaseDate": "November 10, 2020",
    "supportedPlatforms": ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X/S"],
    "genre": ["Action", "RPG"],
    "price": 24.90,
    "review": "Metacritic Score - 83/100",
    "stock": 19,
  },
  {
    "name": "Demon's Souls (2020)",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694452745/tsnn3dbictj1fvkog2yr.jpg",
    "description": "A remake of the classic action RPG, known for its punishing difficulty and breathtaking visuals.",
    "releaseDate": "November 12, 2020",
    "supportedPlatforms": ["PlayStation 5"],
    "genre": ["Action", "RPG"],
    "price": 34.90,
    "review": "Metacritic Score - 92/100",
    "stock": 18,
  },
  {
    "name": "Hades",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694110290/vzyodg1z25400ztwp7vc.png",
    "description": "A roguelike dungeon crawler where you battle through the underworld of Greek mythology.",
    "releaseDate": "September 17, 2020",
    "supportedPlatforms": ["PC", "Nintendo Switch"],
    "genre": ["Roguelike"],
    "price": 19.90,
    "review": "Metacritic Score - 93/100",
    "stock": 21,
  },
  {
    "name": "The Outer Worlds",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694110448/mdresf872bhozjxokcu3.jpg",
    "description": "A spacefaring RPG with a darkly comedic take on a dystopian future.",
    "releaseDate": "October 25, 2019",
    "supportedPlatforms": ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    "genre": ["RPG"],
    "price": 21.50,
    "review": "Metacritic Score - 82/100",
    "stock": 17,
  },
  {
    "name": "Outer Wilds",
    "image": "https://res.cloudinary.com/bits8/image/upload/v1694449065/bywptvdloerp7du8m89p.jpg",
    "description": "An open-world mystery about a solar system trapped in an endless time loop.",
    "releaseDate": "June 18, 2020",
    "supportedPlatforms": ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    "genre": ["Adventure"],
    "price": 19.90,
    "review": "Metacritic Score - 85/100",
    "stock": 20,
  }
];

async function createGame(req, res) {
  try {
    for (const gameData of gamesArray) {
      const { name, image, description, releaseDate, supportedPlatform, genre, price, review, stock } = gameData;
      const newGame = await Game.create({
        name,
        image,
        description,
        releaseDate,
        price,
        review,
        stock,
      });

      for (const genreName of genre) {
        const genreInstance = await Gender.findOne({ where: { name: genreName } });
        if (genreInstance) {
          await newGame.addGender(genreInstance);
        }
      }

      for (const platformName of supportedPlatform) {
        const platformInstance = await SupportedPlatform.findOne({ where: { name: platformName } });
        if (platformInstance) {
          await newGame.addSupportedPlatform(platformInstance);
        }
      }
    }
    res.status(201).json({ message: 'Games created successfully' });
  } catch (error) {
    console.error('Error creating games', error);
    res.status(500).json({ error: 'Error creating games' });
  }
}



const gameGenres = [
  "Action",
  "Adventure",
  "Role-Playing",
  "First-Person Shooter",
  "Third-Person Shooter",
  "Platformer",
  "Racing",
  "Sports",
  "Simulation",
  "Strategy",
  "Puzzle",
  "Fighting",
  "Survival Horror",
  "Open World",
  "Sandbox",
  "Stealth",
  "Tactical",
  "Educational",
  "Music/Rhythm",
  "Party/Mini-Games",
  "Card and Board Games",
  "Visual Novel",
  "Point-and-Click",
  "Horror",
  "Science Fiction (Sci-Fi)",
  "Fantasy",
  "Historical",
  "Western",
  "Anime",
  "Cartoon/Cel-Shaded",
  "Mystery",
  "Interactive Fiction",
  "Roguelike/Roguelite",
  "Metroidvania",
  "Tower Defense",
  "MOBA (Multiplayer Online Battle Arena)",
  "Battle Royale",
  "MMO (Massively Multiplayer Online)",
  "Farming/Simulation",
  "City Building/Management",
  "Life Simulation",
  "Action RPG",
  "Roguelike",
  "Action-Adventure",
  "JRPG",
  "RPG",
  "Run and Gun",
];

async function loadGenres(req, res) {
  try {
    const genres = await gameGenres.forEach((genre) => {
      Gender.findOrCreate({
        where: { name: genre }
      })
    });
    res.status(201).json({ message: 'Genres loaded with success', genres });
  } catch (error) {
    console.error('Error loading genres', error);
    res.status(500).json({ error: 'Error loading genres' });
  }
};

const listPlatform = [
  "Nintendo Switch",
  "Wii U",
  "PC",
  "PlayStation 4",
  "Xbox One",
  "PlayStation 3",
  "Xbox 360",
  "PlayStation 5",
  "Xbox Series X/S",
  "Various consoles",
  "Mobile devices"
];

async function loadSupportedPlatform(req, res) {
  try {
    const platform = await listPlatform.forEach((e) => {
      SupportedPlatform.findOrCreate({
        where: { name: e }
      })
    });
    res.status(201).json({ message: 'Supported Platform loaded with success', platform });
  } catch (error) {
    console.error('Error loading Supported Platform', error);
    res.status(500).json({ error: 'Error loading Supported Platform' });
  }
};

module.exports = {
  createGame,
  loadGenres,
  loadSupportedPlatform,
};
