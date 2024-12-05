import { isSessionValid, ownerToken } from "@/utils/auth";
import readFraternities from "@/utils/getFraternities";
import MemberCard from "@/components/MemberCard";
import FormUpdate from "@/components/FormUpdate";

export default async function Fraternity({ params }) {
    const name = decodeURIComponent((await params).fraternity);
    const fraternity = await readFraternities({ name });
    const session = await isSessionValid(); //Permission to see the members.
    const editPermission = (await ownerToken()) === name; //Permission to edit the fraternity.

    return (
        <section className="flex flex-col h-screen gap-3">
            <div className="w-screen h-[40%] max-h-96 bg-[url(/unifei.jpg)]">
                <img src={fraternity.image} alt="" className="w-auto h-[40%]"></img>
                {editPermission && <FormUpdate fraternity={fraternity}></FormUpdate>}
            </div>
            <div>
                <h1 className="text-4xl text-black font-bold text-center">{fraternity.name}</h1>
                <p>Descrição: {fraternity.description}</p>
                <p>Capacidade: {fraternity.capacity}</p>
                <p>Preço: {fraternity.min_price} - {fraternity.max_price}</p>
                <p>Endereço: {fraternity.address}</p>
                <p>Contato: {fraternity.whatsapp}</p>
                {session && <h1 className="text-4xl text-black font-bold text-center">Membros: </h1>}
                {session && fraternity.members.map((member) => {
                    return <MemberCard member={member}></MemberCard>
                })}
            </div>
        </section>
    )
}