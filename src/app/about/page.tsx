import CreateAccountCTA from "@/components/sections/CreateAccountCTA";
import DownloadBanner from "@/components/sections/DownloadBanner";

export const metadata = {
  title: "For business - CREDIJAMBO",
  description: "Bridging Africa's financial gap for the unbanked.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="bg-[#f9fbf9] px-[10%] py-[80px] max-md:px-5 max-md:py-[60px]">
        <div className="mx-auto max-w-[1100px]">
          <div className="flex items-start justify-between gap-[40px] max-md:flex-col max-md:gap-5">
            <div className="flex-1">
              <h1 className="m-0 text-[42px] leading-[1.1] font-extrabold text-[#164232] max-md:text-[32px]">
                Bridging Africa&apos;s financial gap for the unbanked.
              </h1>
            </div>
            <div className="flex-1">
              <p className="m-0 pt-2 text-[18px] leading-[1.6] text-[#4a4a4a]">
                Credit Jambo, licensed NDFSP by the National Bank of Rwanda, offers affordable and
                accessible financial services to low-income earners and SMEs across Rwanda and
                Africa, fostering financial inclusion and supporting the continent&apos;s economic
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full font-['Segoe_UI',Tahoma,Geneva,Verdana,sans-serif]">
        <div className="relative flex min-h-[550px] flex-col items-center justify-end bg-[url('/assets/about-hero.jpg')] bg-cover bg-center px-5 py-[60px]">
          <div className="absolute inset-0 bg-[rgba(11,55,39,0.45)]" />

          <div className="relative z-[2] mb-[50px] flex">
            <span className="h-[70px] w-[70px] rounded-full bg-[#081a14]" />
            <span className="-ml-3 h-[70px] w-[70px] rounded-full bg-[#206233]" />
            <span className="-ml-3 h-[70px] w-[70px] rounded-full bg-[#b8ccbc]" />
          </div>

          <div className="relative z-[2] flex w-full max-w-[1000px] gap-5 max-[800px]:flex-col">
            <article className="flex-1 rounded-[20px] bg-[#e6fdf6] p-10 text-[#164232] shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <img src="/assets/Union-3.svg" alt="Mission" className="h-10 w-10 object-contain" />
              <h2 className="my-[15px] text-[1.6rem]">Our Mission</h2>
              <p className="text-[0.95rem] leading-[1.5]">
                To bridge the gap between millions of unbanked Africans and accessibility of
                tailored finances to fulfil their dreams of prosperity.
              </p>
            </article>

            <article className="flex-1 rounded-[20px] bg-[#064536] p-10 text-white shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
              <img src="/assets/Union-2.svg" alt="Vision" className="h-10 w-10 object-contain" />
              <h2 className="my-[15px] text-[1.6rem]">Our Vision</h2>
              <p className="text-[0.95rem] leading-[1.5]">
                To become the leading financial services provider in Africa, empowering individuals
                and businesses to achieve their financial goals and drive economic development
                across the continent.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#123c2f] px-5 py-20 text-center text-white">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mb-[10px] text-[2.5rem]">Our Values</h2>
          <p className="mb-[50px] opacity-80">
            Trusted by thousands of riders, vendors, and SMEs across Africa.
          </p>

          <div className="mb-5 flex gap-5 max-[800px]:flex-col">
            <article className="flex-1 rounded-[20px] bg-white/5 px-[30px] py-10 text-center transition hover:bg-white/8">
              <img src="/assets/Union-33.svg" alt="Innovation" className="mx-auto mb-5 h-10 w-10 object-contain" />
              <h3 className="mb-[15px] text-[1.4rem]">Innovation</h3>
              <p className="text-[0.95rem] leading-[1.5] opacity-70">
                Lorem ipsum dolor sit amet consectetur. Volutpat ultrices et et
              </p>
            </article>

            <article className="flex-1 rounded-[20px] bg-white/5 px-[30px] py-10 text-center transition hover:bg-white/8">
              <img
                src="/assets/Union-43.svg"
                alt="Customer centric"
                className="mx-auto mb-5 h-10 w-10 object-contain"
              />
              <h3 className="mb-[15px] text-[1.4rem]">Customer centric</h3>
              <p className="text-[0.95rem] leading-[1.5] opacity-70">
                facilisis vel morbi ut at faucibus. Convallis arcu quam ac auctor.
              </p>
            </article>
          </div>

          <div className="flex gap-5 max-[800px]:flex-col">
            <article className="flex-1 rounded-[20px] bg-white/5 px-[30px] py-10 text-center transition hover:bg-white/8">
              <img src="/assets/Union-23.svg" alt="Transparency" className="mx-auto mb-5 h-10 w-10 object-contain" />
              <h3 className="mb-[15px] text-[1.4rem]">Transparency</h3>
              <p className="text-[0.95rem] leading-[1.5] opacity-70">
                Lorem ipsum dolor sit amet consectetur. Massa amet feugiat vel vulputate integer.
              </p>
            </article>

            <article className="flex-1 rounded-[20px] bg-white/5 px-[30px] py-10 text-center transition hover:bg-white/8">
              <img
                src="/assets/Union-133.svg"
                alt="Swift and Flexible"
                className="mx-auto mb-5 h-10 w-10 object-contain"
              />
              <h3 className="mb-[15px] text-[1.4rem]">Swift &amp; Flexible</h3>
              <p className="text-[0.95rem] leading-[1.5] opacity-70">
                Lorem ipsum dolor sit amet consectetur. Consectetur et mauris quis diam. Tellus
                proin.
              </p>
            </article>

            <article className="flex-1 rounded-[20px] bg-white/5 px-[30px] py-10 text-center transition hover:bg-white/8">
              <img
                src="/assets/Union-1.svg"
                alt="Community and Teamwork"
                className="mx-auto mb-5 h-10 w-10 object-contain"
              />
              <h3 className="mb-[15px] text-[1.4rem]">Community &amp; Teamwork</h3>
              <p className="text-[0.95rem] leading-[1.5] opacity-70">
                Lorem ipsum dolor sit amet consectetur. Sit vehicula ut bibendum in dolor.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-[#0d2b22] px-[50px] py-[100px] text-white max-lg:px-5 max-lg:py-20">
        <div className="mx-auto flex max-w-[1200px] items-start justify-between gap-[60px] max-lg:flex-col max-lg:gap-10">
          <div className="flex-1">
            <h2 className="mb-5 text-[84px] leading-[1] font-extrabold max-lg:text-[54px]">
              Terms &amp;
              <br />
              Conditions
            </h2>
            <p className="text-[18px] font-medium text-[#72f29b]">Click Doc to View</p>
          </div>

          <div className="flex-[1.2]">
            <ol className="list-none p-0">
              <li className="mb-[25px] flex items-baseline text-[32px] max-lg:text-[24px]">
                <span className="mr-[15px]">1.</span>
                <a href="#" className="underline underline-offset-[8px] transition hover:text-[#72f29b]">
                  Lending Terms &amp; Conditions
                </a>
                <span className="ml-[10px] text-[14px] opacity-80">(Kinyarwanda)</span>
              </li>
              <li className="mb-[25px] flex items-baseline text-[32px] max-lg:text-[24px]">
                <span className="mr-[15px]">2.</span>
                <a href="#" className="underline underline-offset-[8px] transition hover:text-[#72f29b]">
                  Social Media Policy
                </a>
              </li>
              <li className="mb-[25px] flex items-baseline text-[32px] max-lg:text-[24px]">
                <span className="mr-[15px]">3.</span>
                <a href="#" className="underline underline-offset-[8px] transition hover:text-[#72f29b]">
                  Acceptable Use Policy
                </a>
              </li>
              <li className="mb-[25px] flex items-baseline text-[32px] max-lg:text-[24px]">
                <span className="mr-[15px]">4.</span>
                <a href="#" className="underline underline-offset-[8px] transition hover:text-[#72f29b]">
                  Customer Service Charter
                </a>
              </li>
              <li className="mb-[25px] flex items-baseline text-[32px] max-lg:text-[24px]">
                <span className="mr-[15px]">5.</span>
                <a href="#" className="underline underline-offset-[8px] transition hover:text-[#72f29b]">
                  Workplace Anti-bullying Policy
                </a>
              </li>
              <li className="mb-[25px] flex items-baseline text-[32px] max-lg:text-[24px]">
                <span className="mr-[15px]">6.</span>
                <a href="#" className="underline underline-offset-[8px] transition hover:text-[#72f29b]">
                  Privacy &amp; Cookies Policy
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <CreateAccountCTA />
      <DownloadBanner />
    </div>
  );
}
