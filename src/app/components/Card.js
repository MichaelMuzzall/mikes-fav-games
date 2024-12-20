export default function Card({ image, title, description, link }) {
  return (
    <a href={link} className="block w-40">
      <div className="w-full bg-stone-50 flex flex-col rounded-lg hover:scale-105 transition-all shadow-lg flex-shrink-0">
        <img className="rounded-t-lg w-full h-auto" src={image} alt={title} />
        <div className="flex flex-col gap-y-4 px-8 py-6">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </a>
  );
}
