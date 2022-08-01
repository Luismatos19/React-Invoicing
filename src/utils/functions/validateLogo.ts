import CompanyLogo from "../../assets/images/company-logo.jpg";

export const hasLogo = (logo: string) => {
    if (logo === "") return CompanyLogo;

    return logo;
  };