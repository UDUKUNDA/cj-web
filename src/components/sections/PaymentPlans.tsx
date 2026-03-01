import Image from "next/image";

const plans = [
  {
    title: "Daily Payment",
    description:
      "Make small, manageable payments every day to stay on track without affecting your cash flow. Perfect for riders with daily income.",
    icon: "/assets/calendar-1.svg",
  },
  {
    title: "Monthly Payment",
    description: "A simple plan that lets you spread your repayments across the month without stress.",
    icon: "/assets/calendar-2.svg",
    featured: true,
  },
  {
    title: "Weekly Payment",
    description: "Perfect for small businesses who prefer smaller, more frequent repayment cycles.",
    icon: "/assets/calendar-3.svg",
  },
];

export default function PaymentPlans() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-5">
            {plans.map((plan) => (
              <article
                key={plan.title}
                className={`rounded-3xl border px-6 py-5 ${
                  plan.featured
                    ? "relative z-10 scale-[1.03] border-primary/45 bg-white shadow-lg"
                    : "border-[#d4ddda] bg-white/80"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-[#e9f7f4]">
                    <Image src={plan.icon} alt={plan.title} width={34} height={34} />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-xl font-semibold text-black md:text-[2rem]">{plan.title}</h3>
                      {plan.featured && <Image src="/assets/star.svg" alt="Featured" width={24} height={24} />}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-gray-700 md:text-[1.22rem]">{plan.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div>
            <h2 className="mb-6 text-4xl font-medium leading-[1.06] text-black md:text-[4.5rem]">
              Choose the payment
              <br />
              plan that suits you
            </h2>
            <p className="mb-5 text-base leading-relaxed text-black/80 md:text-[1.7rem]">
              Whether you earn daily, weekly, or monthly, Jambo lets you repay your loan in a way that aligns with your hustle.
            </p>
            <p className="text-base leading-relaxed text-black/80 md:text-[1.7rem]">
              We offer you income-tailored repayment plans that match your income circle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
