import { SignIn } from "@/app/components/__organism";

const page = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(to top right, #28A7ED 0%, #A337F6 50%, #E84D70 100%)",
      }}
      className="w-full flex items-center justify-center h-screen min-h-screen
    "
    >
      <SignIn />
    </div>
  );
};

export default page;
