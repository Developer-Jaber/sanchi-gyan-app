import { UserRole } from "./auth";

export interface User {
  _id: string;
  email: string;
  password: string;
  name: string;
  image?: string;
  provider?: string;
  createdAt?: Date;
  lastLogin?: Date;
  role?:string;
  department?: string;
}

export interface CustomUser {
  _id: string;
  email: string;
  name?: string;
  role: UserRole;
  department?: string;
}