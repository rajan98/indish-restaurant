import Link from "next/link";
import APP_CONSTANTS from "../../constants/app_constants";
import APP_URL from "../../constants/url";

export default function SiteLogo() {
  return (
    <Link href={APP_URL.home}>
      <img
        src="/images/logo.webp"
        alt={`${APP_CONSTANTS.company_name_title_case} Logo`}
        className="w-40 h-14 rounded-md"
      />
    </Link>
  );
}
