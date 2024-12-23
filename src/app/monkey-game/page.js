import SimpleGallery from "../components/SimpleGallery";
const images = [
  {
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLM2jmuFDTnxF0I3keHlQHInQtcdZW--LvYdtyThe6lEkPgUZ2WkK21v4qiPvGFWVUO7Gdw",
    thumbnailURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLM2jmuFDTnxF0I3keHlQHInQtcdZW--LvYdtyThe6lEkPgUZ2WkK21v4qiPvGFWVUO7Gdw",
    width: 960,
    height: 604,
  },
];

export default function Games() {
  return (
    <div className="p-12">
      <h1 className="text-4xl font-bold mb-4">
        This is Bloons Tower Defense 6
      </h1>
      <div className="flex flex-wrap md:flex-nowrap gap-8 items-start">
        <div className="w=full md:w-1/2">
          <SimpleGallery galleryID="image-gallery" images={images} />
        </div>
        <div className="w=full md:w-1/2">
          <p className="text-lg leading-relaxed">
            The reason I put Bloons Tower Defense 6 here is because it a bit of
            a comfort game for me in which I like to play whenever I am bored.
            The gameplay is really simple you just place monkeys on a map using
            coins and they will pop the balloons that approach the path. As the
            game goes on there are different monkeys each with different skills
            and abilites that you will unlock and the game begins to look a lot
            more chaotic. Overall though all you have to do is put down the
            monkeys and they do the work. So in that sense it's a bit of an idle
            game. If you just want to relax and not think much I recommend
            trying out BTD6!
          </p>
          <img
            src="https://play-lh.googleusercontent.com/HbB-IToELKoEpnWpe5Gguh3_CIjfcDRsqDc3l4xaZrLVmr3fqqOZsKrzgbTSpsWLuw=w526-h296-rw"
            alt="Bloons Tower Defense 6 Gameplay"
            className="mt-4 w-500 h-auto mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
