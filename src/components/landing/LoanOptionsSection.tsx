import { CreateAccountforbusiness } from "@/components/landing/CreateAccountforbusiness";

export function LoanOptionsSection() {
  const tableContent = (
    <div className="flex h-full w-full flex-col">
      <div className="grid min-h-0 flex-1 grid-cols-[calc(100%/6)_calc(5*100%/6)]">
        <div className="flex h-full flex-col bg-white">
          <div className="grid w-full flex-1 grid-rows-5">
            <div className="flex items-center justify-center bg-[#E6FFFB]">
              <div className="flex items-center justify-center rounded-[12px] border border-[#77C7BC]/40 bg-[#F5FFFD] h-[clamp(26px,3vw,40px)] w-[clamp(26px,3vw,40px)]">
                <img src="/assets/cashme.svg" alt="" className="h-[70%] w-[70%] object-contain" />
              </div>
            </div>

            {[
              { title: "Min Default Loan", desc: "The smallest amount you can borrow." },
              { title: "Interest Rate", desc: "The extra percentage you pay back" },
              { title: "Loan Tenure", desc: "The time you have to repay." },
              { title: "Target Customers", desc: "Who the loan is meant for." },
            ].map((row) => (
              <div
                key={row.title}
                className={`flex flex-col justify-center ${
                  row.title === "Min Default Loan" || row.title === "Loan Tenure"
                    ? "bg-[#82FB8E63]"
                    : row.title === "Target Customers" || row.title === "Interest Rate"
                      ? "bg-[#E6FFFB]"
                      : "bg-white"
                } px-3`}
              >
                <div className="text-[#004D40] font-medium tracking-[-0.01em]" style={{ fontSize: "clamp(10px, 1.2vw, 18px)" }}>
                  {row.title}
                </div>
                <div className="text-[#004D40]/80" style={{ fontSize: "clamp(8px, 0.95vw, 12px)", lineHeight: "1.35" }}>
                  {row.desc}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[#E6FFFB] px-3 py-2" style={{ fontSize: "clamp(10px, 0.95vw, 14px)", lineHeight: "1.35" }}>
            {"\u00A0"}
          </div>
        </div>

        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[22px] border border-[#77C7BC] bg-white">
          <div className="grid w-full flex-1 grid-cols-5 grid-rows-5">
            {["Jambo Cash", "Igisubizo", "Kura (LPO)", "Kura+ (Capital)", "ImberePay"].map((label, colIndex) => (
              <div
                key={label}
                className={`${colIndex === 0 ? "" : "border-l border-[#77C7BC]"} border-b border-[#77C7BC] flex items-center justify-center px-2 text-center font-medium tracking-[-0.01em] text-black`}
                style={{ fontSize: "clamp(10px, 1.2vw, 18px)", lineHeight: "1.15" }}
              >
                {label}
              </div>
            ))}

            {[
              ["RWF 50,000", "RWF 150,000", "RWF 1,000,000", "RWF 2,500,000", "50%\nof your salary"],
              ["9%/mo", "6.7%/mo", "6.7%/mo", "6.7%/mo", "9%/mo"],
              ["30 days", "90 days", "180 days", "180 days", "60 days"],
              ["Individual*", "Jambo Cash customers", "Entrepreneurs", "Entrepreneurs", "Employees"],
            ].flatMap((row, rowIndex) =>
              row.map((value, colIndex) => {
                const isLastRow = rowIndex === 3;
                const borderLeft = colIndex === 0 ? "" : "border-l border-[#77C7BC]";
                const borderBottom = isLastRow ? "" : "border-b border-[#77C7BC]";
                const textColor = rowIndex === 0 ? "text-[#1D5E5A]" : "text-black";
                const bgColor = rowIndex === 0 || rowIndex === 2 ? "bg-[rgb(206,253,211)]" : "bg-white";

                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`${borderLeft} ${borderBottom} ${bgColor} flex items-center justify-center px-2 py-2 text-center whitespace-pre-line ${textColor}`}
                    style={{ fontSize: "clamp(10px, 1.15vw, 18px)", lineHeight: "1.2" }}
                  >
                    {value}
                  </div>
                );
              }),
            )}
          </div>
          <div
            className="border-t border-[#77C7BC] bg-[#E6FFFB] px-3 py-2 text-center text-[#004D40]"
            style={{ fontSize: "clamp(10px, 0.95vw, 14px)", lineHeight: "1.35" }}
          >
            * We are currently focusing on bodaboda riders (motari) for our base Jambo Cash product only.
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="w-full bg-[#E6FFFB]">
      <div className="mx-auto w-full max-w-[1512px]">
        <div className="lg:hidden px-4 py-10">
          <div className="mx-auto max-w-[680px] text-center">
            <div className="text-black font-medium leading-[1.11] tracking-[-0.015em]" style={{ fontSize: "clamp(22px, 6vw, 32px)" }}>
              Credit Jambo offers multiple loan options
            </div>
            <div className="mt-3 text-black/80 font-normal leading-[1.4] tracking-[0.01em]" style={{ fontSize: "clamp(14px, 4vw, 18px)" }}>
              Choose the loan type that matches your needs, from covering daily expenses to growing your business.
            </div>
          </div>

          <div className="mt-8 overflow-x-auto">
            <div style={{ width: "max-content", height: "clamp(360px, 60vw, 520px)" }} className="min-w-[760px]">
              {tableContent}
            </div>
          </div>

          <div className="mt-10">
            <CreateAccountforbusiness embedded />
          </div>
        </div>

        <div className="hidden lg:block relative w-full aspect-[1512/1305.7]">
          <div className="absolute inset-0 bg-[#E6FFFB]" />

          <div
            className="absolute text-left text-black font-inter font-extrabold leading-[1] tracking-[0]"
            style={{
              left: "118.34px",
              top: "250.24px",
              width: "692.5433959960938px",
              height: "246px",
              fontSize: "67.76px",
              opacity: 1,
              letterSpacing: "0em",
            }}
          >
            Credit Jambo offers multiple loan options
          </div>

          <div
            className="absolute text-center text-black/80 font-normal leading-[1.4] tracking-[0.01em]"
            style={{
              left: "28.76%",
              top: "10.49%",
              width: "42.55%",
              fontSize: "clamp(14px, 1.6vw, 20px)",
            }}
          >
            Choose the loan type that matches your needs, from covering daily expenses to growing your business.
          </div>

          <div
            className="absolute"
            style={{
              left: "5.40%",
              top: "18.85%",
              width: "88.23%",
              height: "42.20%",
            }}
          >
            {tableContent}
          </div>

          <div
            className="absolute"
            style={{
              left: "5.40%",
              top: "71.10%",
              width: "90.00%",
              height: "29.40%",
            }}
          >
            <CreateAccountforbusiness embedded />
          </div>
        </div>
      </div>
    </section>
  );
}
