import NextAuth, { type DefaultSession, DefaultUser } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  role: "ADMIN" | "USER" | "SELLER";
};

declare module "next-auth" {
  interface User extends DefaultUser {
    emailVerified?: boolean;
  }
  interface Session {
    user: ExtendedUser;
  }
}

// import { JWT } from "@auth/core/jwt";

// declare module "@auth/core/jwt" {
//   interface JWT {
//     role?: "ADMIN" | "USER";
//   }
// }
