import SimpleGallery from "../components/simplegallery";
const images = [
  {
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfqI3laT7oMMKNDel0XdNrGbWs2Tkv-wNkPFDKIAbn-YjATxTOMbDxusjjtoHpK89SZUP",
    thumbnailURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfqI3laT7oMMKNDel0XdNrGbWs2Tkv-wNkPFDKIAbn-YjATxTOMbDxusjjtoHpK89SZUP",
    width: 960,
    height: 604,
  },
];

export default function Games() {
  return (
    <div className="p-12">
      <h1 className="text-4xl font-bold mb-4">This is Cookie Clicker</h1>
      <div className="flex flex-wrap md:flex-nowrap gap-8 items-start">
        <div className="w=full md:w-1/2">
          <SimpleGallery galleryID="image-gallery" images={images} />
        </div>
        <div className="w=full md:w-1/2">
          <p className="text-lg leading-relaxed">
            I put Cookie Clicker on this list because it is one of the first
            ever web browser games that I played. The games premise is rather
            simple. You click on the giant cookie to produce cookies for your
            bakery. With those clicked cookies you generate money which you can
            spend on upgrades to your bakery like having Grandma workers and
            Cookie Factories. This game is rather silly but I think its pretty
            calm and relaxing because since it is a browser game it's data gets
            attached to your actual web browser cookies and thats where it
            stores the save. Don't worry about it being there though, it doesn't
            do any harm to your browser cookies. I recommend this to someone who
            likes to watch a small number go up to a bigger number and have fun
            idlely.
          </p>
          <img
            src="https://i0.wp.com/www.lifeisxbox.eu/wp-content/uploads/2021/09/Cookie-Clicker-1.jpg?ssl=1"
            alt="Cookie Clicker Image"
            className="mt-4 w-500 h-auto mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
