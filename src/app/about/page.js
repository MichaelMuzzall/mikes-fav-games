// @ts-ignore
import SimpleGallery from "../components/simplegallery";

const images = [
  {
    imageURL:
      "https://images.unsplash.com/photo-1555864326-5cf22ef123cf?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    thumbnailURL:
      "https://images.unsplash.com/photo-1555864326-5cf22ef123cf?q=80&w=1467&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    width: 960,
    height: 604,
  },
];

export default function About() {
  return (
    <div className="p-12">
      <h1 className="text-4xl font-bold mb-4">About Page</h1>
      <p className="text-base p-5">
        This page is dedicated to a couple of the games I really enjoy playing.
        In my spare time I like to play a lot of games to pass time. Whether
        it's with friends or by myself I really enjoy playing video games. They
        are something that make me really happy and I would like to share more
        of my intrests to people to get more out there.
      </p>
      <SimpleGallery galleryID="image-gallery" images={images} />
    </div>
  );
}
