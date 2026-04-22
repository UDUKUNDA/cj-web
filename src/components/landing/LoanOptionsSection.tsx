 'use client';
import { CreateAccountforbusiness } from "@/components/landing/CreateAccountforbusiness";

export function LoanOptionsSection() {
  // Responsive table content (from first code) – uses clamp() for perfect scaling on all screens
  const tableContent = (
    <div className="flex h-full w-full flex-col">
      <div className="grid min-h-0 flex-1 grid-cols-[calc(100%/6)_calc(5*100%/6)]">
        <div className="flex h-full flex-col bg-white">
          <div className="grid w-full flex-1 grid-rows-5">
            <div className="flex items-center justify-start bg-[#E6FFFB] pl-3">
              <div className="flex items-center justify-center h-[clamp(34px,4.2vw,56px)] w-[clamp(34px,4.2vw,56px)]">
                <img src="/assets/cashme.svg" alt="" className="h-[78%] w-[78%] object-contain" />
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
                <div className="text-[#000000] font-inter font-bold" style={{ fontSize: "clamp(14px, 1.1vw, 18px)", lineHeight: "1.4", letterSpacing: "0em" }}>
                  {row.title}
                </div>
                <div className="text-[#000000] font-inter font-normal" style={{ fontSize: "clamp(11px, 0.9vw, 14px)", lineHeight: "1.3", letterSpacing: "0em" }}>
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
                className={`${colIndex === 0 ? "" : "border-l border-[#77C7BC]"} border-b border-[#77C7BC] flex items-center justify-center px-2 text-center font-inter font-bold text-black`}
                style={{ fontSize: "clamp(14px, 1.2vw, 24px)", lineHeight: "1.3", letterSpacing: "0em", padding: "clamp(8px, 1.5vw, 12px)" }}
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
                const isFirstRow = rowIndex === 0;
                const isSecondRow = rowIndex === 1;
                const isThirdRow = rowIndex === 2;
                const isFourthRow = rowIndex === 3;
                const textColor = (isFirstRow || isSecondRow || isThirdRow || isFourthRow) ? "text-[#1D5E5A] font-inter font-bold" : "text-black";
                const bgColor = rowIndex === 0 || rowIndex === 2 ? "bg-[rgb(206,253,211)]" : "bg-white";
                
                let customStyle = {};
                if (isFirstRow || isSecondRow || isThirdRow) {
                  customStyle = { fontSize: "clamp(14px, 1.2vw, 24px)", lineHeight: "1.3", letterSpacing: "0em", width: "100%", height: "auto", opacity: 1 };
                } else if (isFourthRow) {
                  customStyle = { fontSize: "clamp(12px, 1vw, 18px)", lineHeight: "1.3", letterSpacing: "0em", width: "100%", height: "auto", opacity: 1 };
                } else {
                  customStyle = { fontSize: "clamp(11px, 0.9vw, 18px)", lineHeight: "1.2" };
                }

                let content: React.ReactNode = value;
                if (isFirstRow && typeof value === "string" && value.startsWith("RWF ")) {
                  content = (
                    <>
                      <span className="font-normal text-[clamp(12px,1vw,18px)] mr-1">RWF</span>
                      {value.replace("RWF ", "")}
                    </>
                  );
                }

                return (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`${borderLeft} ${borderBottom} ${bgColor} flex items-center justify-center px-2 py-2 text-center whitespace-pre-line ${textColor}`}
                  >
                    <div style={customStyle}>{content}</div>
                  </div>
                );
              }),
            )}
          </div>
          <div
            className="border-t border-[#77C7BC] bg-[#E6FFFB] px-3 py-2 text-center font-inter font-normal text-[#004D40]"
            style={{ fontSize: "clamp(12px, 1vw, 16px)", lineHeight: "1.4", letterSpacing: "0em" }}
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
        {/* Mobile version: table with horizontal scroll, but the table itself is responsive via clamp */}
        <div className="lg:hidden px-4 py-10">
          <div className="mx-auto max-w-[680px] text-center">
            <div className="text-black font-inter font-medium text-center text-[clamp(28px,6vw,36px)] leading-tight">
              Credit Jambo offers multiple loan options
            </div>
            <div className="mt-3 text-black/80 font-inter text-[clamp(16px,4vw,20px)] leading-relaxed">
              Choose the loan type that matches your needs, from covering daily expenses to growing your business.
            </div>
          </div>

          <div className="mt-8 overflow-x-auto">
            <div className="loanOptionsMobileTable min-w-[760px]" style={{ height: "var(--loan-options-table-height)" }}>
              {tableContent}
            </div>
          </div>
          <style jsx>{`
            .loanOptionsMobileTable {
              --loan-options-table-height: auto;
            }
            @media (min-width: 640px) {
              .loanOptionsMobileTable {
                --loan-options-table-height: clamp(360px, 60vw, 520px);
              }
            }
          `}</style>

          <div className="mt-10">
            <CreateAccountforbusiness embedded />
          </div>
        </div>

        {/* Desktop version – absolutely positioned, untouched */}
        <div className="hidden lg:block relative w-full aspect-[1512/1305.7]">
          <div className="absolute inset-0 bg-[#E6FFFB]" />

          <div
            className="absolute z-10 text-center text-black font-inter font-medium"
            style={{
              left: "50%",
              top: "6.04%",
              width: "min(840px, 72%)",
              transform: "translateX(-50%)",
              fontSize: "36px",
              lineHeight: "40px",
              opacity: 1,
              letterSpacing: "0em",
            }}
          >
            Credit Jambo offers multiple loan options
          </div>

          <div
            className="absolute text-center text-black/80 font-inter font-normal"
            style={{
              left: "50%",
              top: "11.45%",
              width: "min(560px, 58%)",
              transform: "translateX(-50%)",
              fontSize: "20px",
              lineHeight: "28px",
              letterSpacing: "0em",
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
