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
  FiUsers,
  GrDocumentStore,
  FaCoins,
} from "react-icons/all";
type NavLinksType = {
  name: string;
  link: string;
  icon: React.ReactNode;
};
export const navLinksCustomers: NavLinksType[] = [
  {
    name: "User",
    link: "user",
    icon: <FaUserFriends />,
  },
  {
    name: "Stylists",
    link: "stylist",
    icon: <FaUsers />,
  },
  {
    name: "Orders",
    link: "orders",
    icon: <MdMonetizationOn />,
  },
  {
    name: "Products",
    link: "products",
    icon: <FaPiggyBank />,
  },

  {
    name: "Wishlist",
    link: "wishlist",
    icon: <FaUserCheck />,
  },
  {
    name: "Cancel Orders",
    link: "cancel",
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

type UserInfor = {
  icon: React.ReactNode;
  heading: string;
  numbers: string;
};
export const userInfo: UserInfor[] = [
  {
    icon: <FiUsers />,
    heading: "Users",
    numbers: "230,456",
  },
  {
    icon: <FaUsers />,
    heading: "Active Users",
    numbers: "2,456",
  },
  {
    icon: <GrDocumentStore />,
    heading: "Users with Loans",
    numbers: "12,456",
  },
  {
    icon: <FaCoins />,
    heading: "Users with Savings",
    numbers: "102,456",
  },
];
export interface IndividualType {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: Profile;
  guarantor: Guarantor;
  accountBalance: string;
  accountNumber: string;
  socials: Socials;
  education: Education;
  id: string;
}

export interface Profile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: string;
  address: string;
  currency: string;
}

export interface Guarantor {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
}

export interface Socials {
  facebook: string;
  instagram: string;
  twitter: string;
}

export interface Education {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string[];
  loanRepayment: string;
}
