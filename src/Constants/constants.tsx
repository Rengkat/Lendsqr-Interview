import {
  FaUsers,
  FaUserFriends,
  FaRegHandshake,
  MdMonetizationOn,
  BsPiggyBankFill,
  FaHandHoldingUsd,
  FaUserCheck,
  FaUserTimes,
} from "react-icons/all";
type NavLinksType = {
  name: string;
  link: string;
  icon: React.ReactNode;
};
export const navLinksCustomers: NavLinksType[] = [
  {
    name: "User",
    link: "/user",
    icon: <FaUserFriends />,
  },
  {
    name: "Guarantors",
    link: "/guarantors",
    icon: <FaUsers />,
  },
  {
    name: "Loan",
    link: "/loan",
    icon: <MdMonetizationOn />,
  },
  {
    name: "Decision Model",
    link: "/decisionModel",
    icon: <FaRegHandshake />,
  },
  {
    name: "Savings",
    link: "/savings",
    icon: <BsPiggyBankFill />,
  },
  {
    name: "Loan Request",
    link: "/loanRequest",
    icon: <FaHandHoldingUsd />,
  },
  {
    name: "Wishlist",
    link: "/wishlist",
    icon: <FaUserCheck />,
  },
  {
    name: "Karma",
    link: "/karma",
    icon: <FaUserTimes />,
  },
];

export const navLinksBusinesses: NavLinksType[] = [
  {
    name: "Organization",
    link: "/organization",
    icon: "",
  },
  {
    name: "Loan Products",
    link: "/loanProducts",
    icon: "",
  },
  {
    name: "Savings Products",
    link: "/savingProducts",
    icon: "",
  },
  {
    name: "Fees and Charges",
    link: "/feesAndCharges",
    icon: "",
  },
  {
    name: "Transactions",
    link: "/transactions",
    icon: "",
  },
  {
    name: "Services",
    link: "/services",
    icon: "",
  },
  {
    name: "Service Account",
    link: "/servicesAccount",
    icon: "",
  },
  {
    name: "Settlement",
    link: "/settlement",
    icon: "",
  },
  {
    name: "Reports",
    link: "/reports",
    icon: "",
  },
];
export const navLinksSetting: NavLinksType[] = [
  {
    name: "Preferences",
    link: "/preferences",
    icon: "",
  },
  {
    name: "Fees and Pricing",
    link: "/feesAndPricing",
    icon: "",
  },
  {
    name: "Audit Logs",
    link: "/auditLogs",
    icon: "",
  },
];
