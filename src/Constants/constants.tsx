import { FaUsers, FaUserFriends, FaPiggyBank, FaUserTimes, FaCoins } from "react-icons/fa";
import { MdMonetizationOn } from "react-icons/md";
import { GrDocumentStore } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";
type NavLinksType = {
  name: string;
  link: string;
  icon: React.ReactNode;
};
export const navLinksCustomers: NavLinksType[] = [
  {
    name: "Users",
    link: "users",
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
    name: "Cancel Orders",
    link: "cancel",
    icon: <FaUserTimes />,
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
