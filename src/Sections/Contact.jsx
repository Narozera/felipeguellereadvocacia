import Maps from "../Components/Maps";
import { contact, footerText } from "../Constants";

export default function Contact() {
  return (
    <section className="section bg-navy-50" id="contact">
      <div className="container mx-auto grid grid-cols-2 gap-6 items-stretch lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
        <div className="card bg-navy text-white shadow-xl shadow-navy-300/40">
          <p className="eyebrow text-navy-200">{contact.tag}</p>
          <h2 className="section-title">{contact.title}</h2>
          <p className="lead text-navy-100">{contact.text}</p>

          <address className="not-italic">
            <ul className="mt-12 space-y-3">
              {footerText.map((item) => (
                <li key={item.id} className="flex items-center gap-3 text-[18px]">
                  <img
                    className="w-[26px]"
                    src={item.icon}
                    alt={item.alt}
                    width="26"
                    height="26"
                  />
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-light hover:text-navy-200 ease-linear transition-all duration-150"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="font-light">{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </address>

          <a
            href={contact.buttonHref}
            target="_blank"
            rel="noreferrer"
            className="btn mt-12 bg-white text-navy hover:bg-navy-200"
          >
            {contact.button}
          </a>
        </div>

        <div className="rounded-[20px] overflow-hidden border border-navy-200 shadow-xl shadow-navy-300/30 bg-white">
          <Maps />
        </div>
      </div>
    </section>
  );
}
