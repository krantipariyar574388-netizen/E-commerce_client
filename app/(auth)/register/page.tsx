// "use client"
import RegisterForm from "@/components/common/form/register.form";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register | Ecommerce App",
  description: "Ecommerce App register Page",
};

// const queryClient = new QueryClient()

const RegisterPage = () => {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <section className="border border-gray-300 px-5 py-6 rounded-lg min-w-80">
        <div>
          <h1 className="text-xl font-semibold text-center text-sky-600">
            Register
          </h1>
        </div>

        {/* <QueryClientProvider client = {queryClient}> */}
        <RegisterForm />
        {/* </QueryClientProvider> */}
        
        <div className="mt-1">
          <p className="text-center text-[14px]">
            Already have an account?
            <Link href={"/login"}>
              <span className="text-sky-500 font-semibold">Login</span>
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
