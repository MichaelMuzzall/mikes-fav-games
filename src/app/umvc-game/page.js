import SimpleGallery from "../components/SimpleGallery";
const images = [
  {
    imageURL:
      "https://assetsio.gnwcdn.com/co1yej.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
    thumbnailURL:
      "https://assetsio.gnwcdn.com/co1yej.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
    width: 960,
    height: 604,
  },
];

export default function Games() {
  return (
    <div className="p-12">
      <h1 className="text-4xl font-bold mb-4">
        This is Ultimate Marvel VS. Capcom 3
      </h1>
      <div className="flex flex-wrap md:flex-nowrap gap-8 items-start">
        <div className="w=full md:w-1/2">
          <SimpleGallery galleryID="image-gallery" images={images} />
        </div>
        <div className="w=full md:w-1/2">
          <p className="text-lg leading-relaxed">
            I put this game here as I really enjoy playing fighting games. I
            have roughly around 25+ different fighting games. However out of all
            of them this game is my favorite of them. The game is a traditonal
            2D Fighting Game with teams of 3 characters each. The fun part about
            this game is that you can make teams with characters from Marvel
            Comics and Capcom Games! You could have a team of Spider-Man, Ryu
            from Street Fighter, and the Hulk all on one team. The combinations
            are endless and each character has their own unique move set to make
            them feeling different from everyone else. There is for sure a team
            of characters in the game for you. I'd recommend this game to anyone
            who feels like playing against their friends in a fast paced
            tradtional 2D fighting game
          </p>
          <img
            src="https://i0.wp.com/stevivor.com/wp-content/uploads/2012/05/UltimateMarvelVsCapcom3_1.jpg?ssl=1"
            alt="Ultimate Marvel VS Capcom 3 Gameplay"
            className="mt-4 w-500 h-auto mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
