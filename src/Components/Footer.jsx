import { footerIcons, footerText, footerTitle } from "../Constants";

export default function Footer() {
  return (
    <footer className="w-full px-6 py-16 bg-navy-900 font-times" id="footer">
      <div className="container mx-auto grid grid-cols-3 gap-10 items-center lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:text-center md:text-center sm:text-center">
        <a href="#hero">
          <img
            className="w-72 lg:mx-auto md:mx-auto sm:mx-auto"
            src="/logo.png"
            alt="Guellere Sociedade de Advogados"
            width="288"
            height="57"
            loading="lazy"
          />
        </a>

        <address className="not-italic mx-auto">
          <ul className="space-y-3">
            {footerText.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 text-white font-light text-[16px] lg:justify-center md:justify-center sm:justify-center"
              >
                <img
                  className="w-[22px]"
                  src={item.icon}
                  alt={item.alt}
                  width="22"
                  height="22"
                />
                {item.href ? (
                  <a
                    href={item.href}
                    className="hover:text-navy-200 ease-linear transition-all duration-150"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
              </li>
            ))}
          </ul>
        </address>

        <div className="mx-auto text-center">
          <h2 className="text-[20px] text-white font-bold">{footerTitle}</h2>
          <div className="flex justify-center gap-3 mt-3">
            {footerIcons.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noreferrer me"
                aria-label={item.alt}
              >
                <img
                  className="w-[44px]"
                  src={item.icon}
                  alt={item.alt}
                  width="44"
                  height="44"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="text-center text-navy-300 font-light text-[14px] mt-16">
        © {new Date().getFullYear()} Guellere Sociedade de Advogados · Felipe
        Guellere, advogado trabalhista em São Paulo
      </p>
    </footer>
  );
}
