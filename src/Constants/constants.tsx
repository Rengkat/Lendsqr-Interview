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
    name: "Customers",
    link: "customers",
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
export const customerData = [
  {
    month: "Jan",
    signUp: 300,
    deleted: 20,
  },
  {
    month: "Feb",
    signUp: 30,
    deleted: 3,
  },
  {
    month: "March",
    signUp: 45,
    deleted: 2,
  },
  {
    month: "April",
    signUp: 30,
    deleted: 10,
  },
  {
    month: "May",
    signUp: 99,
    deleted: 0,
  },
  {
    month: "Jun",
    signUp: 201,
    deleted: 7,
  },
];
export const StylistData = [
  {
    month: "Jan",
    signUp: 10,
    deleted: 2,
  },
  {
    month: "Feb",
    signUp: 30,
    deleted: 0,
  },
  {
    month: "March",
    signUp: 49,
    deleted: 2,
  },
  {
    month: "April",
    signUp: 25,
    deleted: 9,
  },
  {
    month: "May",
    signUp: 190,
    deleted: 5,
  },
  {
    month: "Jun",
    signUp: 201,
    deleted: 7,
  },
];
export const sales = [
  {
    name: "January",
    canceled: 40,
    delivered: 1400,
    pending: 10,
  },
  {
    name: "February",
    canceled: 90,
    delivered: 9900,
    pending: 100,
  },
  {
    name: "March",
    canceled: 0,
    delivered: 1800,
    pending: 10,
  },
  {
    name: "April",
    canceled: 5,
    delivered: 1200,
    pending: 2,
  },
  {
    name: "May",
    canceled: 8,
    delivered: 900,
    pending: 21,
  },
  {
    name: "Jun",
    canceled: 51,
    delivered: 800,
    pending: 14,
  },
];
