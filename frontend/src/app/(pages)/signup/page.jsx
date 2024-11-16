import UserPage from "@/components/template/UserPage";
import FormSignUp from "@/components/FormSignUp";

export default function Home() {
  return (
    <main>
      <UserPage>
        <FormSignUp></FormSignUp>
      </UserPage>
    </main>
  );
}