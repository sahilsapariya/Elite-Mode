import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import styles from "../auth.module.css";
import Link from "next/link";

const AuthError = () => {
  return (
    <>
      <h1 className={styles.heading}>Opps! Something went wrong!</h1>

      <div className="p-5 bg-destructive/15 rounded-md items-center flex justify-center">
        <ExclamationTriangleIcon
          className="text-destructive"
          width={24}
          height={24}
        />
      </div>

      <div className="my-5 px-5 text-center py-2 bg-black rounded-md text-white">
        <Link href={"/auth/login"}>Back to login</Link>
      </div>
    </>
  );
};

export default AuthError;
