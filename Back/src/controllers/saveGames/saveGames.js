const { Game, Gender } = require('../../db.js');

const gamesArray = [
  {
      "name": "The Legend of Zelda: Breath of the Wild",
      "image": "https://i.ebayimg.com/images/g/1dgAAOSwl7peaMU-/s-l1600.jpg",
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
      "image": "https://inligtings.com/wp-content/uploads/2021/01/Witcher-3-2021.jpg",
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
      "image": "https://images.ctfassets.net/wn7ipiv9ue5v/7KiWwShT7SENAxfHhRQRcW/6e291380c22de8f2fbd19a2d86cb91b8/RDR2_CompareEditions_Standard_1632x831.jpg",
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
      "image": "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheElderScrollsVSkyrim_image1600w.jpg",
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
      "image": "https://videojuegos.roams.es/images/post/es_ES_videogames/juegos-super-mario-odyssey.jpg",
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
      "image": "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/p3pYq0QxntZQREXRVdAzmn1w.png",
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
      "image": "https://livingplaystation.com/wp-content/uploads/2016/04/Dark-Souls-3-Wallpaper-1280x720.jpg",
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
      "image": "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_download_software_5/H2x1_WiiUDS_HollowKnight_image1280w.jpg",
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
      "image": "https://image.api.playstation.com/cdn/EP4062/CUSA06638_00/0fSaYhFhEVP183JLTwVec7qkzmaHNMS2.png",
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
      "image": "https://www.pcmrace.com/wp-content/uploads/2016/11/553496.jpg",
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
      "image": "https://www.cyberpunk.net/build/images/social-thumbnail-en-ddcf4d23.jpg",
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
      "image": "https://errekgamer.com/wp-content/uploads/2023/01/1893824.png",
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
      "image": "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft.jpg",
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
      "image": "https://generacionxbox.com/wp-content/uploads/2018/06/sekiro__shadows_die_twice_gx.jpg",
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
      "image": "https://www.planetagaming.com/wp-content/uploads/2018/02/Monster-Hunter-World-Ventas-Jap%C3%B3n-Planeta-Gaming.jpg",
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
      "image": "https://sm.ign.com/t/ign_es/articlepage/g/grand-theft-auto-5-a-new-perspective/grand-theft-auto-5-a-new-perspective_d8py.1280.jpg",
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
      "image": "https://i.blogs.es/27b361/death-stranding-01/840_560.jpeg",
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
      "image": "https://m.media-amazon.com/images/I/81r53HPxtcL._AC_UF1000,1000_QL80_.jpg",
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
      "image": "https://videojuegos.roams.es/images/post/es_ES_videogames/juegos-undertale.jpg",
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
      "image": "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_MortalKombat11.jpg",
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
      "image": "https://www.residentevil.com/village/assets/images/common/share.png",
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
      "image": "https://image.api.playstation.com/vulcan/img/cfn/11307xMxsC9RA7A8rQH4GiePP0BxYP_K8tJU1cWXe4eA1897mjimF6IgI4o6wmNE-2bJQu4uI1jJIOIcSty1GTkYS99Tb.jpg",
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
      "image": "https://image.api.playstation.com/cdn/EP9000/CUSA10249_00/OWKTfhNljpEiLP4bucwj5LwnN8RtuaZC.png",
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
      "image": "https://images-na.ssl-images-amazon.com/images/I/81Q6Wxy2pOL._AC_SY679_.jpg",
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
      "image": "https://i.kym-cdn.com/photos/images/original/001/856/158/d0e.jpg",
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
      "image": "https://cdn-products.eneba.com/resized-products/7J7M1TICdj8h6qG3j6Xh8q0ZyS7bKKUKA2cI4zIKRMA_350x200_1x-0.jpg",
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
      "image": "https://images-na.ssl-images-amazon.com/images/I/81zFnzLOnIL._AC_SX522_.jpg",
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
      "image": "https://www.gamerswithjobs.com/sites/default/files/gwj_richard/2020/Hades.jpg",
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
      "image": "https://m.media-amazon.com/images/I/71X5u2vB0OL._AC_SY679_.jpg",
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
      "image": "https://www.nintendo.com/content/dam/noa/en_US/games/switch/o/outer-wilds-switch/outer-wilds-switch-hero.jpg",
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
      const { name, image, description, releaseDate, supportedPlatforms, genre, price, review,stock} = gameData;
      const newGame = await Game.create({
        name,
        image,
        description,
        releaseDate,
        supportedPlatforms,
        genre,
        price,
        review,
        stock,
      });
    }
    res.status(201).json({ message: 'Games Create success' });
  } catch (error) {
    console.error('Error creating games', error);
    res.status(500).json({ error: 'Error creating games' }); 
  }
};

// async function createGame(req, res) {
//   try {
//     for (const gameData of gamesArray) {
//       const { name, image, description, releaseDate, supportedPlatforms, genre, price, review } = gameData;
//       const newGame = await Game.create({
//         name,
//         image,
//         description,
//         releaseDate,
//         supportedPlatforms,
//         genre,
//         price,
//         review,
//       });
      
    
// // ESTO VA EN CONTROLLER --> gameControllers
// // const getAllGames = async () => {
// //   const data = await Game.findAll({
// //       include: Gender
// //   })
// //   return data;
// // };
//       // const genero = await Gender.findByPk(1);
//       // const generoDos = await Gender.findByPk(2);
//       // console.log (genero);
//       // await newGame.addGender(generoDos);
//       // const generoJuego = await Game.findOne({ include: Gender });
//       // console.log(JSON.stringify(generoJuego, null, 2));
//     }
//     res.status(201).json({ message: 'Games Create success' });
//   } catch (error) {
//     console.error('Error creating games', error);
//     res.status(500).json({ error: 'Error creating games' }); 
//   }
// };


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

 const genres = await gameGenres.forEach((genre)=>{
    Gender.findOrCreate({
      where:{name:genre}
    })
  });  
    res.status(201).json({ message: 'Genres loaded with success', genres });
  } catch (error) {
    console.error('Error loading genres', error);
    res.status(500).json({ error: 'Error loading genres' }); 
  }
};

module.exports ={
  createGame,
  loadGenres
}
