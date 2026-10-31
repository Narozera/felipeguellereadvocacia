import Maps from "../Components/Maps";
import { contact, footerText } from "../Constants";

export default function Contact() {
  return (
    <section
      className="w-full bg-navy-50 font-times px-6 py-24 sm:py-16 md:py-16"
      id="contact"
    >
      <div className="container mx-auto grid grid-cols-2 gap-10 items-stretch lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1">
        <div className="bg-navy text-white rounded-[20px] p-10 shadow-xl shadow-navy-300/40 sm:p-6 md:p-6">
          <p className="uppercase tracking-[0.2em] text-[14px] text-navy-200">
            {contact.tag}
          </p>
          <h2 className="font-bold text-[36px] mt-2 sm:text-[28px] md:text-[28px]">
            {contact.title}
          </h2>
          <p className="text-[19px] text-navy-100 mt-4">{contact.text}</p>

          <ul className="mt-8 space-y-4">
            {footerText.map((item) => (
              <li key={item.id} className="flex items-center gap-3 text-[18px]">
                <img className="w-[26px]" src={item.icon} alt={item.alt} />
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

          <a
            href={contact.buttonHref}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-10 bg-white text-navy font-bold text-[18px] px-8 py-3 rounded-full hover:bg-navy-200 ease-linear transition-all duration-150"
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
