import { isStoreOpen } from '../utils/storeStatus.js';

const APP_CONSTANTS = {
    company_name_title_case: "Indish",
    phone_number1: "045232 8901",
    phone_number2: "(02) 4031 5255",
    short_location: "6/115 Darby Street, Cooks Hill, NSW 2300",
    full_address_line1: "6/115 Darby Street",
    full_address_line2: "Cooks Hill, NSW 2300",

    website_url: "indish.com.au",
    full_website_url: "https://www.indish.com.au/",
    opening: "Mon 5-10pm | Wed-Sun 11:30am-2:30pm, 5-10pm | Tue Closed",
    email: "info@Indish.com.au",
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    twitter: "https://www.x.com/",
    opened: isStoreOpen(), // Automatically checks if today is Tuesday in Australian timezone
    closedDay: 'Tuesday'
}

export default APP_CONSTANTS;