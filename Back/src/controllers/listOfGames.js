const gamesArray = [
    {
      name: "The Legend of Zelda: Breath of the Wild",
      image: "https://i.ebayimg.com/images/g/1dgAAOSwl7peaMU-/s-l1600.jpg",
      description: "An open-world action-adventure game set in the fantasy realm of Hyrule.",
      releaseDate: "March 3, 2017",
      supportedPlatforms: ["Nintendo Switch", "Wii U"],
      genre: "Action-Adventure",
      price: 35.90,
      review: "Metacritic Score - 97/100"
    },
    {
      name: "The Witcher 3: Wild Hunt",
      image: "https://inligtings.com/wp-content/uploads/2021/01/Witcher-3-2021.jpg",
      description: "A sprawling open-world RPG where you play as Geralt of Rivia, a monster hunter.",
      releaseDate: "May 19, 2015",
      supportedPlatforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
      genre: "RPG",
      price: 29.90,
      review: "Metacritic Score - 93/100"
    },
    {
      name: "Red Dead Redemption 2",
      image: "https://images.ctfassets.net/wn7ipiv9ue5v/7KiWwShT7SENAxfHhRQRcW/6e291380c22de8f2fbd19a2d86cb91b8/RDR2_CompareEditions_Standard_1632x831.jpg",
      description: "An epic tale of life in America's unforgiving heartland during the late 1800s.",
      releaseDate: "October 26, 2018",
      supportedPlatforms: ["PC", "PlayStation 4", "Xbox One"],
      genre: "Action-Adventure",
      price: 29.90,
      review: "Metacritic Score - 97/100"
    },
    {
      name: "The Elder Scrolls V: Skyrim",
      image: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheElderScrollsVSkyrim_image1600w.jpg",
      description: "An open-world RPG set in the fantasy world of Tamriel, known for its vastness and modding community.",
      releaseDate: "November 11, 2011",
      supportedPlatforms: ["PC", "PlayStation 3", "PlayStation 4", "Xbox 360", "Xbox One", "Nintendo Switch"],
      genre: "RPG",
      price: 24.90,
      review: "Metacritic Score - 94/100"
    },
    {
      name: "Super Mario Odyssey",
      image: "https://videojuegos.roams.es/images/post/es_ES_videogames/juegos-super-mario-odyssey.jpg",
      description: "Mario embarks on a globe-trotting adventure to save Princess Peach from Bowser.",
      releaseDate: "October 27, 2017",
      supportedPlatforms: ["Nintendo Switch"],
      genre: "Platformer",
      price: 29.90,
      review: "Metacritic Score - 97/100"
    },
    {
      name: "God of War (2018)",
      image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/p3pYq0QxntZQREXRVdAzmn1w.png",
      description: "Kratos returns, this time in Norse mythology, on a quest with his son Atreus.",
      releaseDate: "April 20, 2018",
      supportedPlatforms: ["PlayStation 4", "PlayStation 5"],
      genre: "Action-Adventure",
      price: 11.50,
      review: "Metacritic Score - 94/100"
    },
    {
      name: "Dark Souls III",
      image: "https://livingplaystation.com/wp-content/uploads/2016/04/Dark-Souls-3-Wallpaper-1280x720.jpg",
      description: "A challenging action RPG that tests your skills and patience in a dark and beautifully designed world.",
      releaseDate: "April 12, 2016",
      supportedPlatforms: ["PC", "PlayStation 4", "Xbox One"],
      genre: "Action RPG",
      price: 24.90,
      review: "Metacritic Score - 89/100"
    },
    {
      name: "Hollow Knight",
      image: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/wiiu_download_software_5/H2x1_WiiUDS_HollowKnight_image1280w.jpg",
      description: "An atmospheric and challenging action-adventure game set in a mysterious underground world.",
      releaseDate: "February 24, 2017",
      supportedPlatforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
      genre: "Metroidvania",
      price: 25.50,
      review: "Metacritic Score - 90/100"
    },
    {
      name: "Persona 5",
      image: "https://image.api.playstation.com/cdn/EP4062/CUSA06638_00/0fSaYhFhEVP183JLTwVec7qkzmaHNMS2.png",
      description: "A stylish JRPG where you play as a high school student with secret supernatural powers.",
      releaseDate: "April 4, 2017",
      supportedPlatforms: ["PlayStation 3", "PlayStation 4"],
      genre: "JRPG",
      price: 12.90,
      review: "Metacritic Score - 93/100"
    },
    {
      name: "Overwatch",
      image: "https://www.pcmrace.com/wp-content/uploads/2016/11/553496.jpg",
      description: "A team-based multiplayer first-person shooter with a diverse cast of heroes.",
      releaseDate: "May 24, 2016",
      supportedPlatforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
      genre: "First-Person Shooter",
      price: 14.90,
      review: "Metacritic Score - 90/100"
    },
    {
      name: "Cyberpunk 2077",
      image: "https://www.cyberpunk.net/build/images/social-thumbnail-en-ddcf4d23.jpg",
      description: "An open-world RPG set in a dystopian future, developed by CD Projekt Red.",
      releaseDate: "December 10, 2020",
      supportedPlatforms: ["PC", "PlayStation 4", "Xbox One"],
      genre: "RPG",
      price: 19.90,
      review: "Metacritic Score - 56/100 (Note: This score reflects the state of the game at its troubled launch; it may have improved since.)"
    },
    {
      name: "Celeste",
      image: "https://errekgamer.com/wp-content/uploads/2023/01/1893824.png",
      description: "A challenging platformer with a touching narrative about mental health.",
      releaseDate: "January 25, 2018",
      supportedPlatforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
      genre: "Platformer",
      price: 12.90,
      review: "Metacritic Score - 94/100"
    },
    {
      name: "Minecraft",
      image: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft.jpg",
      description: "A sandbox game that allows players to build and explore their own blocky worlds.",
      releaseDate: "November 18, 2011",
      supportedPlatforms: ["PC", "Various consoles", "Mobile devices"],
      genre: "Sandbox",
      price: 29.90,
      review: "Metacritic Score - 93/100"
    },
    {
      name: "Sekiro: Shadows Die Twice",
      image: "https://generacionxbox.com/wp-content/uploads/2018/06/sekiro__shadows_die_twice_gx.jpg",
      description: "An action-adventure game set in feudal Japan, known for its challenging combat.",
      releaseDate: "March 22, 2019",
      supportedPlatforms: ["PC", "PlayStation 4", "Xbox One"],
      genre: "Action-Adventure",
      price: 15.50,
      review: "Metacritic Score - 90/100"
    },
    {
      name: "Monster Hunter: World",
      image: "https://www.planetagaming.com/wp-content/uploads/2018/02/Monster-Hunter-World-Ventas-Jap%C3%B3n-Planeta-Gaming.jpg",
      description: "An action RPG where you hunt down massive creatures in a lush open world.",
      releaseDate: "January 26, 2018",
      supportedPlatforms: ["PC", "PlayStation 4", "Xbox One"],
      genre: "Action RPG",
      price: 18.90,
      review: "Metacritic Score - 90/100"
    },
    {
      name: "Grand Theft Auto V",
      image: "https://sm.ign.com/t/ign_es/articlepage/g/grand-theft-auto-5-a-new-perspective/grand-theft-auto-5-a-new-perspective_d8py.1280.jpg",
      description: "An open-world action-adventure game that follows the lives of three criminals in Los Santos.",
      releaseDate: "September 17, 2013",
      supportedPlatforms: ["PC", "PlayStation 3", "PlayStation 4", "Xbox 360", "Xbox One"],
      genre: "Action-Adventure",
      price: 29.90,
      review: "Metacritic Score - 96/100"
    },
    {
      name: "Death Stranding",
      image: "https://i.blogs.es/27b361/death-stranding-01/840_560.jpeg",
      description: "A unique open-world game by Hideo Kojima that blends exploration, survival, and a mysterious narrative.",
      releaseDate: "November 8, 2019",
      supportedPlatforms: ["PC", "PlayStation 4"],
      genre: "Action-Adventure",
      price: 12.90,
      review: "Metacritic Score - 82/100"
    },
    {
      name: "Bloodborne",
      image: "https://m.media-amazon.com/images/I/81r53HPxtcL._AC_UF1000,1000_QL80_.jpg",
      description: "An action RPG with a gothic-horror setting and fast-paced, challenging combat.",
      releaseDate: "March 24, 2015",
      supportedPlatforms: ["PlayStation 4"],
      genre: "Action RPG",
      price: 17.80,
      review: "Metacritic Score - 92/100"
    },
    {
      name: "Undertale",
      image: "https://videojuegos.roams.es/images/post/es_ES_videogames/juegos-undertale.jpg",
      description: "A unique indie RPG that allows players to choose between violence and mercy in a world of monsters.",
      releaseDate: "September 15, 2015",
      supportedPlatforms: ["PC", "Various consoles"],
      genre: "RPG",
      price: 15.80,
      review: "Metacritic Score - 92/100"
    },
    {
      name: "Mortal Kombat 11",
      image: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_MortalKombat11.jpg",
      description: "A brutal and fast-paced fighting game featuring a roster of iconic characters.",
      releaseDate: "April 23, 2019",
      supportedPlatforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
      genre: "Fighting",
      price: 29.90,
      review: "Metacritic Score - 83/100"
    },
    {
      name: "Resident Evil Village",
      image: "https://www.residentevil.com/village/assets/images/common/share.png",
      description: "The latest installment in the Resident Evil series, featuring first-person survival horror gameplay.",
      releaseDate: "May 7, 2021",
      supportedPlatforms: ["PC", "PlayStation 4", "PlayStation 5", "Xbox One", "Xbox Series X/S"],
      genre: "Survival Horror",
      price: 22.50,
      review: "Metacritic Score - 84/100"
    },
    {
      name: "Control",
      image: "https://image.api.playstation.com/vulcan/img/cfn/11307xMxsC9RA7A8rQH4GiePP0BxYP_K8tJU1cWXe4eA189Q0ImmN8eZvJBx91eecK_vHIT2WZrrkqwKfiYvNGIu8NA2zvSV.png",
      description: "A paranormal action-adventure game set in a mysterious government building.",
      releaseDate: "August 27, 2019",
      supportedPlatforms: ["PC", "PlayStation 4", "Xbox One"],
      genre: "Action-Adventure",
      price: 10.99,
      review: "Metacritic Score - 82/100"
    },
    {
      name: "Stardew Valley",
      image: "https://i.3djuegos.com/juegos/12908/stardew_valley/fotos/ficha/stardew_valley-3324716.jpg",
      description: "A relaxing life simulation game where you build and customize your own island paradise.",
      releaseDate: "February 26, 2016",
      supportedPlatforms: ["PC", "Various consoles", "Mobile devices"],
      genre: "Life Simulation",
      price: 15.20,
      review: "Metacritic Score - 89/100"
    },
    {
      name: "Super Smash Bros. Ultimate",
      image: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_SuperSmashBrosUltimate_02_image1600w.jpg",
      description: "A crossover fighting game featuring a massive roster of characters from various gaming franchises.",
      releaseDate: "December 7, 2018",
      supportedPlatforms: ["Nintendo Switch"],
      genre: "Fighting",
      price: 29.90,
      review: "Metacritic Score - 93/100"
    },
    {
      name: "Final Fantasy VII Remake",
      image: "https://image.api.playstation.com/vulcan/img/cfn/113075PxnarzRek4cRpjrRWSpLfrcBd23B5e_Yj2azms6nWYKmySv4h3a22G5_R1CM4BQUmSRD6oOArDROKv041NUkgun78-.png",
      description: "A reimagining of the classic RPG with modern graphics and gameplay.",
      releaseDate: "April 10, 2020",
      supportedPlatforms: ["PlayStation 4", "PlayStation 5"],
      genre: "RPG",
      price: 24.50,
      review: "Metacritic Score - 87/100"
    },
    {
      name: "Hades",
      image: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_Hades_image1600w.png",
      description: "A roguelike dungeon crawler with an engaging narrative and fast-paced combat.",
      releaseDate: "September 17, 2020",
      supportedPlatforms: ["PC", "Nintendo Switch"],
      genre: "Roguelike",
      price: 18.20,
      review: "Metacritic Score - 93/100"
    },
    {
      name: "Doom Eternal",
      image: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DoomEternal_image1600w.jpg",
      description: "A high-octane first-person shooter where you battle demons from hell.",
      releaseDate: "March 20, 2020",
      supportedPlatforms: ["PC", "PlayStation 4", "Xbox One"],
      genre: "First-Person Shooter",
      price: 29.90,
      review: "Metacritic Score - 88/100"
    },
    {
      name: "Cuphead",
      image: "https://image.api.playstation.com/vulcan/img/cfn/11307fd0s0uyV-ba4dy5E9qskf6CIntl28sAerYTFbYC7vPUBrfgp7zokliHVbVoJ5ghylOBamo2Q2i5pbEYxQKFnSsiLHaY.png",
      description: "A run-and-gun platformer with a unique 1930s cartoon art style and challenging boss battles.",
      releaseDate: "September 29, 2017",
      supportedPlatforms: ["PC", "Xbox One", "Nintendo Switch"],
      genre: "Platformer",
      price: 15.50,
      review: "Metacritic Score - 86/100"
    },
    {
      name: "The Outer Worlds",
      image: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_TheOuterWorlds_image1600w.jpg",
      description: "An action RPG set in an alternate future where megacorporations control the universe.",
      releaseDate: "October 25, 2019",
      supportedPlatforms: ["PC", "PlayStation 4", "Xbox One"],
      genre: "Action RPG",
      price: 17.85,
      review: "Metacritic Score - 82/100"
    },
    {
      name: "Animal Crossing: New Horizons",
      image: "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_AnimalCrossingNewHorizons.jpg",
      description: "A relaxing life simulation game where you build and customize your own island paradise.",
      releaseDate: "March 20, 2020",
      supportedPlatforms: ["Nintendo Switch"],
      genre: "Life Simulation",
      price: 19.90,
      review: "Metacritic Score - 90/100"
    }
  ];
 module.exports = {gamesArray};

 //Ok
 