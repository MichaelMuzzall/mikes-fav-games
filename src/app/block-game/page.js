import SimpleGallery from "../components/SimpleGallery";
const images = [
  {
    imageURL:
      "https://m.media-amazon.com/images/M/MV5BNjQzMDlkNDctYmE3Yi00ZWFiLTlmOWYtMjI4MzQ4Y2JhZjY2XkEyXkFqcGc@._V1_.jpg",
    thumbnailURL:
      "https://m.media-amazon.com/images/M/MV5BNjQzMDlkNDctYmE3Yi00ZWFiLTlmOWYtMjI4MzQ4Y2JhZjY2XkEyXkFqcGc@._V1_.jpg",
    width: 960,
    height: 604,
  },
];

export default function Games() {
  return (
    <div className="p-12">
      <h1 className="text-4xl font-bold mb-4">This is Minecraft</h1>
      <div className="flex flex-wrap md:flex-nowrap gap-8 items-start">
        <div className="w=full md:w-1/2">
          <SimpleGallery galleryID="image-gallery" images={images} />
        </div>
        <div className="w=full md:w-1/2">
          <p className="text-lg leading-relaxed">
            Minecraft has a really special place in my heart as it is one of the
            first games I have ever played. This game basically introduced me to
            video games as a whole and I wouldn't know as many games as I do, or
            even play them with out this game. Think of it like the LEGO of
            video games. There are plenty more features such like Mining
            minerals and Crafting tools and weapons. I would like to recommend
            this game to anyone who is just trying to relax after a hard day and
            just live in a virtual sandbox where you can make whatever you want
            out of blocks.
          </p>
          <img
            src="https://staticg.sportskeeda.com/editor/2022/01/f8df0-16434037074144-1920.jpg"
            alt="Minecraft Small Image"
            className="mt-4 w-500 h-auto mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
