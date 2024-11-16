"use client";

export default function UserPage({ children }){
    
    /*
    Description: function responsible for change page.
    */
    const handleButtonClick = () => {
        window.location.href = "/home";
    }

    return (
        <section className="flex justify-around items-center bg-[url(/unifei-prg.webp)] bg-cover bg-center h-screen">
            <button className="text-2xl text-white font-bold py-8 px-16 rounded-full bg-black/60" onClick={handleButtonClick}>Explorar Repúblicas</button>
            {children}
        </section>
    )
}