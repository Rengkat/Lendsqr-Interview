export type UserTypeRoot = Root2[];

export interface Root2 {
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
// TABLE DATA=========
export type UserTableDataType = UserTableData[];

export interface UserTableData {
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
  // status: string;
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

export const tableHead = ["s/No.", "name", "phone", "address", "email", "status"];
export const stylistTableHead = ["s/No.", "company", "phone", "address", "email", "status"];
export const orderTableHead = ["s/No.", "product", "reference No.", "price", "Amt Payed", "status"];
export const productsTableHead = ["s/No.", "product", "slug", "price", "quantity", "in stock"];
export const products = [
  {
    id: "REYR23458",
    name: "red jalabia",
    price: "18000",
    quantity: 0,
    inStock: false,
  },
  {
    id: "WETYR23458",
    name: "south south dress",
    price: "20000",
    quantity: 22,
    inStock: true,
  },
  {
    id: "HER23058",
    name: "red jalabia",
    price: "18000",
    quantity: 1700,
    inStock: true,
  },
  {
    id: "erty45678",
    name: "the great wears ",
    price: "130",
    quantity: 900,
    inStock: true,
  },
  {
    id: "vjggjjt65483",
    name: "amezing wears",
    price: "14000",
    quantity: 567,
    inStock: true,
  },
  {
    id: "Rrhhvurnvv",
    name: "alex express ",
    price: "400",
    quantity: 33,
    inStock: true,
  },
  {
    id: "7e456y567",
    name: "jalabia",
    price: "18000",
    quantity: 1000,
    inStock: false,
  },
  {
    id: "5ert567",
    name: "Aba jalabia",
    price: "18000",
    quantity: 40,
    inStock: true,
  },
  {
    id: "REwert5578",
    name: "jos jalabia",
    price: "18000",
    quantity: 1100,
    inStock: true,
  },
  {
    id: "wertyu567",
    name: "red kaftan",
    price: "18000",
    quantity: 0,
    inStock: false,
  },
  {
    id: "REYR23458",
    name: "green jalabia",
    price: "14400",
    quantity: 1200,
    inStock: true,
  },
  {
    id: "REYR23458",
    name: "all ladies",
    price: "13300",
    quantity: 800,
    inStock: true,
  },
  {
    id: "REYR23458",
    name: "red kano express",
    price: "19000",
    quantity: 300,
    inStock: true,
  },
  {
    id: "REYR23458",
    name: "red enugu",
    price: "20000",
    quantity: 0,
    inStock: false,
  },
  {
    id: "REYR23458",
    name: "red jeff design",
    price: "18000",
    quantity: 1700,
    inStock: true,
  },
  {
    id: "REYR23458",
    name: "red amazing style",
    price: "13000",
    quantity: 100,
    inStock: true,
  },
];
export const customers = [
  {
    firstName: "Darian",
    lastName: "Rolfson",
    phoneNumber: "4942780946",
    status: "active",
    address: "Gusikowski Locks",
    email: "alex@gmail.com",
  },
  {
    firstName: "Mia",
    lastName: "Padberg",
    phoneNumber: "91234556786",
    status: "active",
    address: "Meagan Islands",
    email: "emma@gmail.com",
  },
  {
    firstName: "Alfonso",
    lastName: "Feil",
    phoneNumber: "08056445443",
    status: "deleted",
    address: "Mraz Fields",
    email: "john@gmail.com",
  },
  {
    firstName: "Nolan",
    lastName: "Berge",
    phoneNumber: "090443356",
    status: "active",
    address: "Asha Isle",
    email: "israel@gmail.com",
  },
  {
    firstName: "Faye",
    lastName: "Ward",
    phoneNumber: "08060494932",
    status: "deleted",
    address: "Larson Inlet",
    email: "jeni@gmail.com",
  },
  {
    firstName: "Raymond",
    lastName: "Prosacco",
    phoneNumber: "070345678432",
    status: "deleted",
    address: "Colt Lock",
    email: "happy@gmail.com",
  },
];
export const stylists = [
  {
    company: "alex fashion",
    firstName: "Darian",
    lastName: "Rolfson",
    phoneNumber: "4942780946",
    status: "active",
    address: "Gusikowski Locks",
    email: "alex@gmail.com",
  },
  {
    company: "nanmet stiches",
    firstName: "Mia",
    lastName: "Padberg",
    phoneNumber: "91234556786",
    status: "active",
    address: "Meagan Islands",
    email: "emma@gmail.com",
  },
  {
    company: "jenifer fashion",
    firstName: "Alfonso",
    lastName: "Feil",
    phoneNumber: "08056445443",
    status: "active",
    address: "Mraz Fields",
    email: "john@gmail.com",
  },
  {
    company: "vivian style",
    firstName: "Nolan",
    lastName: "Berge",
    phoneNumber: "090443356",
    status: "active",
    address: "Asha Isle",
    email: "israel@gmail.com",
  },
  {
    company: "abosh fashion",
    firstName: "Faye",
    lastName: "Ward",
    phoneNumber: "08060494932",
    status: "deleted",
    address: "Larson Inlet",
    email: "jeni@gmail.com",
  },
  {
    company: "Wagnar fashion",
    firstName: "Raymond",
    lastName: "Prosacco",
    phoneNumber: "070345678432",
    status: "active",
    address: "Colt Lock",
    email: "happy@gmail.com",
  },
];
export const orderProducts = [
  {
    id: "REYR23458",
    name: "red jalabia",
    price: "18000",
    amtPayed: "12000",
    status: "delivered",
  },
  {
    id: "WETYR23458",
    name: "south south dress",
    price: "20000",
    amtPayed: "15500",
    status: "delivered",
  },
  {
    id: "HER23058",
    name: "red jalabia",
    price: "18000",
    amtPayed: "12000",
    status: "pending",
  },
  {
    id: "erty45678",
    name: "the great wears ",
    price: "13000",
    amtPayed: "9000",
    status: "canceled",
  },
  {
    id: "vjggjjt65483",
    name: "amezing wears",
    price: "14000",
    amtPayed: "8000",
    status: "delivered",
  },
  {
    id: "Rrhhvurnvv",
    name: "alex express ",
    price: "40000",
    amtPayed: "32000",
    status: "delivered",
  },
  {
    id: "7e456y567",
    name: "jalabia",
    price: "18000",
    amtPayed: "12000",
    status: "pending",
  },
  {
    id: "5ert567",
    name: "Aba jalabia",
    price: "18000",
    amtPayed: "12000",
    status: "canceled",
  },
  {
    id: "REwert5578",
    name: "jos jalabia",
    price: "18000",
    amtPayed: "12000",
    status: "pending",
  },
  {
    id: "wertyu567",
    name: "red kaftan",
    price: "18000",
    amtPayed: "12000",
    status: "delivered",
  },
  {
    id: "REYR23458",
    name: "green jalabia",
    price: "14400",
    amtPayed: "12000",
    status: "canceled",
  },
  {
    id: "REYR23458",
    name: "all ladies",
    price: "13300",
    amtPayed: "12000",
    status: "delivered",
  },
  {
    id: "REYR23458",
    name: "red kano express",
    price: "19000",
    amtPayed: "12000",
    status: "pending",
  },
  {
    id: "REYR23458",
    name: "red enugu",
    price: "20000",
    amtPayed: "16000",
    status: "delivered",
  },
  {
    id: "REYR23458",
    name: "red jeff design",
    price: "18000",
    amtPayed: "17000",
    status: "canceled",
  },
  {
    id: "REYR23458",
    name: "red amazing style",
    price: "13000",
    amtPayed: "11000",
    status: "delivered",
  },
];
