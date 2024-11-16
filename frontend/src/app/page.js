import UserPage from "@/components/template/UserPage";
import FormLogin from "@/components/FormLogin";

export default function Home() {
  return (
    <main>
      <UserPage>
        <FormLogin></FormLogin>
      </UserPage>
    </main>
  );
}