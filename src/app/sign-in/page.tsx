import { SignIn as SignInClerk } from "@clerk/nextjs";

export default function SignIn() {
  return (
    <div className="flex items-center justify-center ">
      <SignInClerk signUpUrl="/sign-up" />;
    </div>
  );
}
