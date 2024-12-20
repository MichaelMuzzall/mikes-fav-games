import Card from "./Card";

const cards = [
  {
    title: "Super Smash Bros. Ultimate",
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcScl41uHkBqyBfTvzO-GCkm5AwimR8O9yYdz4Hc9Mluq8W0sbXH6q632lFYdSGLteV3Gs-N",
    description: "Crossover Platform Fighting Game Action!",
    link: "/ssbu-game",
  },
  {
    title: "Cookie Clicker",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHfqI3laT7oMMKNDel0XdNrGbWs2Tkv-wNkPFDKIAbn-YjATxTOMbDxusjjtoHpK89SZUP",
    description: "Idle Pastry Business Simulator.",
    link: "/cookie-game",
  },
  {
    title: "Ultimate Marvel VS Capcom 3",
    img: "https://assetsio.gnwcdn.com/co1yej.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
    description:
      "Traditonal Fighting Game Action with Marvel and Capcom Characters.",
    link: "/umvc-game",
  },
  {
    title: "Bloons Tower Defense 6",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMLM2jmuFDTnxF0I3keHlQHInQtcdZW--LvYdtyThe6lEkPgUZ2WkK21v4qiPvGFWVUO7Gdw",
    description:
      "Tower Defense Game where you help the Monkeys defend against the evil Balloons.",
    link: "/monkey-game",
  },
  {
    title: "Minecraft",
    img: "https://m.media-amazon.com/images/M/MV5BNjQzMDlkNDctYmE3Yi00ZWFiLTlmOWYtMjI4MzQ4Y2JhZjY2XkEyXkFqcGc@._V1_.jpg",
    description:
      "3D Sandbox game where you play and survive in a virtual world.",
    link: "/block-game",
  },
];

export default function Main() {
  return (
    <div className="flex flex-wrap gap-6 justify-start p-6" id="card-container">
      {cards.map((card, index) => (
        <Card
          key={index}
          description={card.description}
          title={card.title}
          image={card.img}
          link={card.link}
        />
      ))}
    </div>
  );
}
