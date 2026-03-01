import Image from "next/image";

const loanProducts = [
  {
    name: "Jambo Cash",
    minLoan: "RWF 50,000",
    rate: "9%/mo",
    tenure: "30 days",
    target: "Individual*",
  },
  {
    name: "Igisubizo",
    minLoan: "RWF 150,000",
    rate: "6.7%/mo",
    tenure: "90 days",
    target: "Jambo Cash customers",
  },
  {
    name: "Kura (LPO)",
    minLoan: "RWF 1,000,000",
    rate: "6.7%/mo",
    tenure: "180 days",
    target: "Entrepreneurs",
  },
  {
    name: "Kura+ (Capital)",
    minLoan: "RWF 2,500,000",
    rate: "6.7%/mo",
    tenure: "180 days",
    target: "Entrepreneurs",
  },
  {
    name: "ImberePay",
    minLoan: "50% of your Salary",
    rate: "9%/mo",
    tenure: "60 days",
    target: "Employees",
  },
];

export default function LoanTable() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <h2 className="mb-4 text-center text-3xl font-semibold text-black md:text-[4rem]">
          Credit Jambo offers multiple loan options
        </h2>
        <p className="mx-auto mb-12 max-w-[900px] text-center text-base leading-relaxed text-black/80 md:text-[1.65rem]">
          Choose the loan type that matches your needs, from covering daily expenses to growing your business.
        </p>

        <div className="relative overflow-x-auto rounded-[22px] border border-primary/30 bg-white">
          <div className="absolute left-5 top-5 hidden rounded-lg bg-[#d9f4e8] p-2 md:block">
            <Image src="/assets/hero-cash.svg" alt="" width={26} height={26} />
          </div>

          <table className="w-full min-w-[980px] border-collapse text-left">
            <thead>
              <tr>
                <th className="w-[240px] border-b border-primary/25 bg-white px-6 py-4" />
                {loanProducts.map((product) => (
                  <th key={product.name} className="border-b border-l border-primary/20 bg-white px-4 py-4 text-center text-lg font-semibold text-black md:text-3xl">
                    {product.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#d6f2cc]">
                <td className="border-b border-primary/20 px-4 py-4">
                  <span className="block text-base font-semibold text-black md:text-2xl">Min Default Loan</span>
                  <span className="text-xs text-black/75 md:text-base">The smallest amount you can borrow.</span>
                </td>
                {loanProducts.map((product) => (
                  <td key={product.name} className="border-b border-l border-primary/20 px-4 py-6 text-center text-lg font-semibold text-primary md:text-[2.1rem]">
                    {product.minLoan}
                  </td>
                ))}
              </tr>

              <tr className="bg-[#f5f7f6]">
                <td className="border-b border-primary/20 px-4 py-4">
                  <span className="block text-base font-semibold text-black md:text-2xl">Interest Rate</span>
                  <span className="text-xs text-black/75 md:text-base">The extra percentage you pay back.</span>
                </td>
                {loanProducts.map((product) => (
                  <td key={product.name} className="border-b border-l border-primary/20 px-4 py-6 text-center text-lg font-semibold text-primary md:text-[2.1rem]">
                    {product.rate}
                  </td>
                ))}
              </tr>

              <tr className="bg-[#d6f2cc]">
                <td className="border-b border-primary/20 px-4 py-4">
                  <span className="block text-base font-semibold text-black md:text-2xl">Loan Tenure</span>
                  <span className="text-xs text-black/75 md:text-base">The time you have to repay.</span>
                </td>
                {loanProducts.map((product) => (
                  <td key={product.name} className="border-b border-l border-primary/20 px-4 py-6 text-center text-lg font-semibold text-primary md:text-[2.1rem]">
                    {product.tenure}
                  </td>
                ))}
              </tr>

              <tr className="bg-[#f5f7f6]">
                <td className="border-b border-primary/20 px-4 py-4">
                  <span className="block text-base font-semibold text-black md:text-2xl">Target Customers</span>
                  <span className="text-xs text-black/75 md:text-base">Who the loan is meant for.</span>
                </td>
                {loanProducts.map((product) => (
                  <td key={product.name} className="border-b border-l border-primary/20 px-4 py-6 text-center text-sm font-semibold text-primary md:text-2xl">
                    {product.target}
                  </td>
                ))}
              </tr>

              <tr>
                <td colSpan={6} className="bg-secondary px-4 py-3 text-center text-xs text-black/70 md:text-base">
                  * We are currently focusing on bodaboda riders (motari) for our base Jambo Cash product only.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
