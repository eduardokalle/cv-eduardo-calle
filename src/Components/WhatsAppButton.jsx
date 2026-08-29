import { useTranslation } from "../i18n";

const cleanPhone = (telephone = "") => telephone.replace(/[^\d+]/g, "");

export const WhatsAppButton = ({ name, telephone }) => {
  const { t } = useTranslation();
  const phone = cleanPhone(telephone);
  const url = `https://wa.me/${phone}`;
  const label = t("profile.whatsapp", { name });

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="social__link"
      title={label}
      aria-label={label}
      data-print={telephone}
    >
      <i className="bx bxl-whatsapp social__icon" />
    </a>
  );
};