import './home.css';

const GameRows = 4;
const GameColumns = 8;

const gameList = [
    ["PigTacToe", "Sowcraft", "Baconborne", "Truffle Hunter", "Porker's Creed", "Hogwarts", "Boarcraft", "Pork Souls"],
    ["Snoutbound", "Porker Kart", "Piggy Gear Solid", "Oink Theft Auto V", "Piggy Odyssey", "PiggyCraft: Bacon Edition", "Piggy Fantasy", "Pig Schmunch"],
    ["Piggy Crossing: New Leaf", "Piggy Crossing: Wild World", "Minesweeper", "Piggy Crossing: New Horizons", "Piggy Kart 8 Deluxe", "Piggy Crossing: Happy Home Designer", "Piggy Crossing: City Folk", "Piggy Crossing: Amiibo Festival"],
    ["Piggy Scrolls V: Swine-rim", "Piggyborn", "Pigout 76", "Pigout: New Vegas", "Pigout: Skyrim", "Pigout: Oblivion", "Pigout: Morrowind", "Pigout: Daggerfall"]
  ];

export default function Home() {
    const games = [];
    
    for (let i = 0; i < GameRows; i++) {
        for (let j = 0; j < GameColumns; j++) {
            games.push(
                <div className="gameSpot">
                    <img src="https://ih1.redbubble.net/image.1607873225.2586/raf,360x360,075,t,fafafa:ca443f4786.jpg" alt="pig" height="50px" width="50px" className='gameImage'/>
                    <button className='gameButton' id={gameList[i][j]} onClick={() => window.location.href = `/game/${gameList[i][j]}`}>{gameList[i][j]}</button>
                </div>
            )
        }
    }

    return(<div className="home">{games}</div>);
}


{/* <div className="webkinz-homepage">
            <header>
                <h1>Welcome to Webkinz World!</h1>
                <p>Your virtual pet adventure begins here.</p>
            </header>

            <section className="featured-pets">
                Display some featured pets
                <div className="pet-card">
                    <img src="path/to/featured-pet1.jpg" alt="Featured Pet 1" />
                    <h2>Fluffy the Unicorn</h2>
                    <p>Adopt Fluffy and explore magical lands!</p>
                </div>
                <div className="pet-card">
                    <img src="path/to/featured-pet2.jpg" alt="Featured Pet 2" />
                    <h2>Rusty the Adventure Dog</h2>
                    <p>Join Rusty on exciting quests and treasure hunts.</p>
                </div>
                Add more featured pets here
            </section>

            <section className="news">
                Display latest news or updates
                <h2>Latest News</h2>
                <ul>
                    <li>🎉 New mini-games added!</li>
                    <li>🌟 Collect rare items in the Trading Room.</li>
                    <li>🏆 Compete in the Kinzville Championship!</li>
                </ul>
            </section>

            <a href="#" className="game-link">Play Now</a>

            <footer>
                <p>© 2024 Webkinz World. All rights reserved.</p>
            </footer>
        </div>
      ); */}