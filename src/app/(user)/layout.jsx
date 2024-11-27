import UserPage from "@/components/template/UserPage";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }) {
    return (
        <main>
            <UserPage>
                {children}
            </UserPage>
            <Toaster></Toaster>
        </main>
    )
}