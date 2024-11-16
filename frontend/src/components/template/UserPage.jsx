export default function UserPage({ children }){
    return (
        <section className="flex justify-around items-center bg-[url(../assets/unifei-prg.webp)] bg-cover bg-center h-screen">
            <button className="text-2xl text-white font-bold py-8 px-16 rounded-full bg-black/60">Explorar Repúblicas</button>
            {children}
        </section>
    )
}