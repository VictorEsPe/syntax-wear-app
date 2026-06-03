const menus = [
  {
    title: "Masculino",
    href: "#",
    items: ["Casual", "Esporte", "Moderno", "Futurista"],
  },
  {
    title: "Feminino",
    href: "#",
    items: ["Casual", "Esporte", "Moderno", "Futurista"],
  },
  { title: "Outlet", href: "#", items: ["Masculino", "Feminino"] },
  { title: "Sobre", href: "#", items: ["Quem Somos", "Missão"] },
];

export function MenuItems() {
  return (
    <div className="flex flex-col sm:flex-row gap-8">
      {menus.map(({ title, href, items }) => (
        <nav key={title}>
          <ul className="flex flex-col gap-4">
            <li>
              <p className="font-normal text-[#EDEDED] text-xl">{title}</p>
            </li>

            {items.map((item) => (
              <li key={item}>
                <a
                  href={href}
                  className="font-medium hover:text-[#ccc] transition-colors text-xl"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
}
