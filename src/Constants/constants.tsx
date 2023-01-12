import {
  FaUsers,
  FaUserFriends,
  FaRegHandshake,
  MdMonetizationOn,
  FaPiggyBank,
  FaHandHoldingUsd,
  FaUserCheck,
  FaUserTimes,
  FaBriefcase,
  BsBank,
  GrStorage,
  GrTransaction,
  GrServices,
  FaUserCog,
  RiFilePaper2Line,
  FaChartBar,
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
    icon: <FaPiggyBank />,
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
    icon: <FaBriefcase />,
  },
  {
    name: "Loan Products",
    link: "/loanProducts",
    icon: <FaHandHoldingUsd />,
  },
  {
    name: "Savings Products",
    link: "/savingProducts",
    icon: <BsBank />,
  },
  {
    name: "Fees and Charges",
    link: "/feesAndCharges",
    icon: <GrStorage />,
  },
  {
    name: "Transactions",
    link: "/transactions",
    icon: <GrTransaction />,
  },
  {
    name: "Services",
    link: "/services",
    icon: <GrServices />,
  },
  {
    name: "Service Account",
    link: "/servicesAccount",
    icon: <FaUserCog />,
  },
  {
    name: "Settlement",
    link: "/settlement",
    icon: <RiFilePaper2Line />,
  },
  {
    name: "Reports",
    link: "/reports",
    icon: <FaChartBar />,
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
