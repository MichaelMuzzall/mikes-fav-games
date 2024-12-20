import Button from "./Button";
import Tag from "./Tag";

const navigationButtons = [
  {
    title: "Home",
    href: "/",
    isNew: false,
  },
  {
    title: "About",
    href: "/about",
    isNew: false,
  },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-sky-200 p-6 items-center sticky top-0 shadow-lg">
      <a
        href="/"
        className=" bg-cyan-500 p-4 rounded-full  hover:scale-105 hover:bg-sky-600 hover:text-blue-600 tansition-all cursor-pointer"
      ></a>
      <div className="flex gap-x-4 items-center">
        {navigationButtons.map(({ href, title, isNew }) => (
          <>
            <Button href={href} classNameProp="flex text-xl">
              {isNew && <Tag classNames="mr-2 animate-pulse" />}
              {title}
            </Button>
          </>
        ))}
      </div>
    </nav>
  );
}
