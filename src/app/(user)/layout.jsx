import UserPage from "@/components/template/UserPage";

export default function Layout( {children} ){
    return (
        <main>
            <UserPage>
                {children}
            </UserPage>
        </main>
    )
}