import Image from "next/image";

const steps = [
  {
    number: "1",
    icon: "/assets/Frame.svg",
    title: "Loan Request",
    description: "Choose your preferred loan type and submit a request directly from the app.",
  },
  {
    number: "2",
    icon: "/assets/loan-request-approved.svg",
    title: "Loan Approval",
    description: "Our system reviews your request and quickly determines your eligibility.",
  },
  {
    number: "3",
    icon: "/assets/Frame-1.svg",
    title: "Loan Disbursement",
    description: "Once approved, your loan is sent instantly to your mobile money account.",
  },
  {
    number: "*",
    icon: "/assets/Frame-2.svg",
    title: "Repayment",
    description: "Repay your loan through flexible daily, weekly, or monthly payment options via the app.",
  },
];

export default function Steps() {
  return (
    <section className="bg-primary pb-16">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-7 grid grid-cols-1 gap-3 text-white md:grid-cols-2 md:items-end">
          <h2 className="text-3xl font-semibold leading-tight md:text-6xl">Simple Steps to Get Your Loan</h2>
          <p className="text-base text-white/80 md:justify-self-end md:text-right md:text-[1.7rem]">
            Our loan process is fast and reliable
            <br />
            you can get your loan in as little as 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="relative rounded-xl border border-white/10 bg-[#2f5f4f] p-5 text-white/90 backdrop-blur"
            >
              <span className="absolute left-4 top-3 text-5xl font-bold leading-none text-black/20 md:text-6xl">{step.number}</span>
              <div className="mb-5 mt-5 h-16">
                <Image src={step.icon} alt={step.title} width={68} height={42} className="h-full w-auto" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white md:text-[1.75rem]">{step.title}</h3>
              <p className="text-sm leading-relaxed text-white/75 md:text-[1.2rem]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
