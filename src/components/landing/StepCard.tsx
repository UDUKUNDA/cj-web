type StepCardProps = {
  step: string;
  title: string;
  description: string;
  iconSrc?: string;
  approvedBadge?: boolean;
};

export function StepCard({ step, title, description, iconSrc, approvedBadge }: StepCardProps) {
  return (
    <div className="relative h-auto w-full max-w-[320px] min-h-[230px] sm:min-h-[248px] rounded-xl border border-[rgba(130,251,142,0.26)] bg-[#005244] p-4 transition-transform duration-200 hover:scale-[1.02]">
      <div
        className={
          step === "*"
            ? "absolute left-[14.73px] top-[5.29px] text-center text-[76.3973px] font-bold leading-[92.59px] text-[#003E34]"
            : "absolute left-[12.8px] top-[5.21px] text-center text-[44.5916px] font-bold leading-[54px] text-[#003E34]"
        }
      >
        {step}
      </div>

      {approvedBadge ? (
        <div className="absolute left-[72.91px] top-[52px] h-[36px] w-[178.92px]">
          <div className="absolute left-0 top-0 h-full w-full border-[3px] border-[#6CFF7B] bg-transparent" />
          <div className="absolute left-[5.7px] top-[1px] text-[28px] font-extrabold leading-[34px] text-[#6CFF7B]">
            APPROVED
          </div>
        </div>
      ) : null}

      {iconSrc ? (
        <img src={iconSrc} alt="" className="absolute left-[128px] top-[26px] h-[64px] w-[64px]" />
      ) : null}

      <div className="absolute left-0 top-[108px] w-full text-center text-[20px] font-normal leading-[28px] text-white">
        {title}
      </div>
      <div className="absolute left-0 top-[140px] w-full px-[22px] text-center text-[14px] font-normal leading-[20px] text-white">
        {description}
      </div>
    </div>
  );
}
