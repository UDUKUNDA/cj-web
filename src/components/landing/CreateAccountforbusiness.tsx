"use client";
import { CreateAccount } from "@/components/landing/CreateAccount";

/**
 * CreateAccountforbusiness Component
 * Renders the create-account CTA as either:
 * - standalone full-width section, or
 * - embedded block inside another section (e.g LoanOptionsSection).
 */
type CreateAccountforbusinessProps = {
  embedded?: boolean;
};

export function CreateAccountforbusiness({ embedded = false }: CreateAccountforbusinessProps) {
  if (!embedded) return <CreateAccount />;

  return (
    <div className="createAccountBusinessEmbedded w-full h-full">
      <CreateAccount />
      <style jsx global>{`
        .createAccountBusinessEmbedded section {
          padding: 0 !important;
          background: transparent !important;
        }
        .createAccountBusinessEmbedded .max-w-\\[1440px\\] {
          max-width: none !important;
        }
        .createAccountBusinessEmbedded .bg-\\[\\#004D40\\] {
          margin-top: 0 !important;
          height: 100% !important;
          min-height: 0 !important;
        }
        .createAccountBusinessEmbedded div.relative.hidden.lg\\:flex {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
