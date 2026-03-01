import CreateAccountCTA from "@/components/sections/CreateAccountCTA";
import DownloadBanner from "@/components/sections/DownloadBanner";

export const metadata = {
  title: "Contact Us - CREDIJAMBO",
  description: "Talk to us for support and business inquiries.",
};

export default function ContactPage() {
  const wrapper = "mx-auto w-full max-w-[1200px]";

  return (
    <div>
      <section className="bg-[#063b2f] px-6 pt-[80px] pb-[150px] text-white md:px-10 lg:px-14">
        <div className={wrapper}>
          <div className="mb-[50px] flex flex-wrap items-start justify-between gap-5">
            <h1 className="m-0 text-[clamp(40px,8vw,64px)] leading-none font-medium">Talk to us</h1>
            <p className="max-w-[400px] leading-[1.5] opacity-90">
              If you have questions or need any general information, please complete this form to
              request the information you need. It will be an honor to help you
            </p>
          </div>

          <div className="relative z-10 mt-10 grid overflow-hidden rounded-[24px] bg-white text-[#333] shadow-[0_20px_40px_rgba(0,0,0,0.2)] max-[850px]:grid-cols-1 md:grid-cols-[1fr_1.5fr]">
            <div className="border-r border-[#eee] p-[clamp(30px,5vw,60px)] max-[850px]:border-r-0 max-[850px]:border-b">
            <div className="mb-10 flex gap-[15px]">
              <span className="inline-flex h-[22px] w-[22px] items-center justify-center text-[#8a8a8a]">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full fill-current">
                  <path d="M12 22s7-5.6 7-12a7 7 0 10-14 0c0 6.4 7 12 7 12zm0-8.5a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
                </svg>
              </span>
              <div>
                <strong className="mb-[5px] block text-[13px] text-[#888]">Visit us at Head Office</strong>
                <p className="m-0 text-[16px] font-medium text-[#222]">
                  NM 233 St, Nyamagumba, Musanze, Rwanda
                </p>
              </div>
            </div>

            <div className="mb-10 flex gap-[15px]">
              <span className="inline-flex h-[22px] w-[22px] items-center justify-center text-[#8a8a8a]">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full fill-current">
                  <path d="M6.6 10.8a15 15 0 006.6 6.6l2.2-2.2a1 1 0 011-.24c1.1.36 2.25.56 3.45.56a1 1 0 011 1V21a1 1 0 01-1 1C10.9 22 2 13.1 2 2a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.35.56 3.45a1 1 0 01-.24 1L6.6 10.8z" />
                </svg>
              </span>
              <div>
                <strong className="mb-[5px] block text-[13px] text-[#888]">Phone</strong>
                <p className="m-0 text-[16px] font-medium text-[#222]">+250 788 268 451</p>
              </div>
            </div>

            <div className="mb-10 flex gap-[15px]">
              <span className="inline-flex h-[22px] w-[22px] items-center justify-center text-[#8a8a8a]">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-full w-full fill-current">
                  <path d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm9 7l8-5H4l8 5zm0 2L4 9v9h16V9l-8 5z" />
                </svg>
              </span>
              <div>
                <strong className="mb-[5px] block text-[13px] text-[#888]">Email</strong>
                <p className="m-0 text-[16px] font-medium text-[#222]">hello@creditjambo.com</p>
              </div>
            </div>

            <div>
              <p className="text-[16px] text-[#444]">Follow us on social media for updates</p>
              <div className="mt-[15px] flex gap-[10px]">
                <a href="#" aria-label="LinkedIn" className="inline-flex h-[18px] w-[18px] items-center justify-center opacity-70">
                  <img
                    src="/assets/linked-in.svg"
                    alt="LinkedIn"
                    className="h-full w-full object-contain [filter:brightness(0)_saturate(100%)_opacity(0.6)]"
                  />
                </a>
                <a href="#" aria-label="Instagram" className="inline-flex h-[18px] w-[18px] items-center justify-center opacity-70">
                  <img
                    src="/assets/instageam.svg"
                    alt="Instagram"
                    className="h-full w-full object-contain [filter:brightness(0)_saturate(100%)_opacity(0.6)]"
                  />
                </a>
                <a href="#" aria-label="Facebook" className="inline-flex h-[18px] w-[18px] items-center justify-center opacity-70">
                  <img
                    src="/assets/facebook.svg"
                    alt="Facebook"
                    className="h-full w-full object-contain [filter:brightness(0)_saturate(100%)_opacity(0.6)]"
                  />
                </a>
                <a href="#" aria-label="WhatsApp" className="inline-flex h-[18px] w-[18px] items-center justify-center opacity-70">
                  <img
                    src="/assets/whatsapp.svg"
                    alt="WhatsApp"
                    className="h-full w-full object-contain [filter:brightness(0)_saturate(100%)_opacity(0.6)]"
                  />
                </a>
                <a
                  href="#"
                  aria-label="X"
                  className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-[4px] border border-[#bcc8c3] text-[11px] font-bold text-[#58615e]"
                >
                  X
                </a>
              </div>
            </div>
            </div>

            <form className="p-[clamp(30px,5vw,60px)]">
              <div className="grid grid-cols-2 gap-5 max-[850px]:grid-cols-1">
              <div className="mb-5">
                <label htmlFor="first-name" className="mb-2 block text-[13px] font-semibold text-[#444]">
                  First Name
                </label>
                <input
                  id="first-name"
                  type="text"
                  className="w-full rounded-[8px] border border-[#d1f2e8] bg-[#e9fdf7] px-[15px] py-3 text-[15px] outline-none"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="last-name" className="mb-2 block text-[13px] font-semibold text-[#444]">
                  Last Name
                </label>
                <input
                  id="last-name"
                  type="text"
                  className="w-full rounded-[8px] border border-[#d1f2e8] bg-[#e9fdf7] px-[15px] py-3 text-[15px] outline-none"
                />
              </div>
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="mb-2 block text-[13px] font-semibold text-[#444]">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-[8px] border border-[#d1f2e8] bg-[#e9fdf7] px-[15px] py-3 text-[15px] outline-none"
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-[13px] font-semibold text-[#444]"
                >
                  Add subject *
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  className="w-full rounded-[8px] border border-[#d1f2e8] bg-[#e9fdf7] px-[15px] py-3 text-[15px] outline-none"
                />
              </div>

              <div className="mb-5">
                <label htmlFor="message" className="mb-2 block text-[13px] font-semibold text-[#444]">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full rounded-[8px] border border-[#d1f2e8] bg-[#e9fdf7] px-[15px] py-3 text-[15px] outline-none"
                />
              </div>

              <button
                type="submit"
                className="float-right inline-flex items-center gap-[10px] rounded-[8px] bg-[#063b2f] px-7 py-[14px] text-[15px] font-semibold text-white transition hover:scale-[1.02]"
              >
                Send message <span>➤</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="-mt-[60px] bg-[#e9fdf7] px-6 pt-[100px] pb-[50px] md:px-10 lg:px-14">
        <div className={`${wrapper} relative h-[450px] overflow-hidden rounded-[20px] border border-[#c8e6de] bg-[#ddeeea]`}>
          <div className="h-full w-full bg-[url('/assets/contact-map.jpg')] bg-cover bg-center" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[12px] bg-white p-[15px] text-center text-[#333] shadow-[0_5px_15px_rgba(0,0,0,0.1)]">
            <strong>Credit Jambo</strong>
            <p>NM 233 St, Nyamagumba...</p>
            <a href="#" className="underline">
              Directions
            </a>
          </div>
        </div>
      </section>

      <CreateAccountCTA />
      <DownloadBanner />
    </div>
  );
}
