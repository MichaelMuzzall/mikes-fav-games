import SimpleGallery from "../components/SimpleGallery";
const images = [
  {
    imageURL:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcScl41uHkBqyBfTvzO-GCkm5AwimR8O9yYdz4Hc9Mluq8W0sbXH6q632lFYdSGLteV3Gs-N",
    thumbnailURL:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcScl41uHkBqyBfTvzO-GCkm5AwimR8O9yYdz4Hc9Mluq8W0sbXH6q632lFYdSGLteV3Gs-N",
    width: 960,
    height: 604,
  },
];

export default function Games() {
  return (
    <div className="p-12">
      <h1 className="text-4xl font-bold mb-4">
        This is Super Smash Bros. Ultimate
      </h1>
      <div className="flex flex-wrap md:flex-nowrap gap-8 items-start">
        <div className="w=full md:w-1/2">
          <SimpleGallery galleryID="image-gallery" images={images} />
        </div>
        <div className="w=full md:w-1/2">
          <p className="text-lg leading-relaxed">
            I chose to put this game here as this game hold a place in my heart
            as to being my favorite game of all time. This game is a platform
            fighter in which your main objective is to knock your opponent of a
            floating platform into the void. Think of it as like extreme sumo
            wrestling. Now have that gameplay added with a bunch of different
            gaming icons through out the ages! Want to play as that old hungry
            yellow circle from the arcade machines in the 80's? Enjoy brawling
            it out as Pac-Man. Want to play someone more cooler with a sword?
            Enjoy playing as Cloud Strife from Final Fanatsy. The combonations
            are endless with the roster of 89 playable fighters. Overall this
            game is considered to be a celebration of gaming as a whole and I
            recommend it to anyone who wants a fun party game to play with
            characters you will for sure recognize!
          </p>
          <img
            src="https://ae01.alicdn.com/kf/Sc9f11d1e6d4d4345a94f0e3259c69d7fo.jpg_640x640q90.jpg"
            alt="Super Smash Bros. Ultimate Gameplay"
            className="mt-4 w-500 h-auto mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
