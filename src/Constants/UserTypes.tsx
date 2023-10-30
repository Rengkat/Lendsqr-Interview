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

export const tableHead = ["first name", "last name", "phone", "address", "email", "status"];

export const stylists = [
  {
    orgName: "alex fashion",
    firstName: "Darian",
    lastName: "Rolfson",
    phoneNumber: "4942780946",
    status: "active",
    address: "Gusikowski Locks",
    email: "alex@gmail.com",
  },
  {
    orgName: "nanmet stiches",
    firstName: "Mia",
    lastName: "Padberg",
    phoneNumber: "91234556786",
    status: "active",
    address: "Meagan Islands",
    email: "emma@gmail.com",
  },
  {
    orgName: "jenifer fashion",
    firstName: "Alfonso",
    lastName: "Feil",
    phoneNumber: "08056445443",
    status: "pending",
    address: "Mraz Fields",
    email: "john@gmail.com",
  },
  {
    orgName: "vivian style",
    firstName: "Nolan",
    lastName: "Berge",
    phoneNumber: "090443356",
    status: "active",
    address: "Asha Isle",
    email: "israel@gmail.com",
  },
  {
    orgName: "abosh fashion",
    firstName: "Faye",
    lastName: "Ward",
    phoneNumber: "08060494932",
    status: "cancel",
    address: "Larson Inlet",
    email: "jeni@gmail.com",
  },
  {
    orgName: "Wagnar fashion",
    firstName: "Raymond",
    lastName: "Prosacco",
    phoneNumber: "070345678432",
    status: "cancel",
    address: "Colt Lock",
    email: "happy@gmail.com",
  },
];
