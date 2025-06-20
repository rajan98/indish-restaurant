import Link from "next/link";
import APP_URL from "../../constants/url";
import APP_CONSTANTS from "../../constants/app_constants";

export default function SiteLogo() {
  return (
    <Link href={APP_URL.home}>
      <img
        src="/images/logo.webp"
        alt={`${APP_CONSTANTS.company_name_title_case} Logo`}
        className="w-16 h-16"
      />
    </Link>
  );
}
