import FormSignUp from "@/components/FormSignUp";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <FormSignUp></FormSignUp>
      <Toaster></Toaster>
    </>
  );
}