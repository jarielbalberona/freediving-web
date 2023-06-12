import { SignUp as SignUpClerk } from "@clerk/nextjs";

export default function SignUp() {
  return (
    <div className="flex items-center justify-center ">
      <SignUpClerk signInUrl="/sign-in" />;
    </div>
  );
}
