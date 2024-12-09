import { getFraternity } from "@/utils/crudFraternities"
import Image from "next/image";

export default async function admin() {
    const fraternities = await getFraternity();
    let nFraternities = 0, nMembers = 0;
    for (const frat of fraternities) {
        nFraternities++;
        nMembers += frat.members.length;
    }

    return (
        <section className="flex justify-center gap-4 my-auto">
            <div className="h-16 min-w-[20%] px-[2%] py-[1%] flex justify-between items-center bg-gray-400 rounded-full">
                <Image src="/icons/user-unlogged.svg" height={48} width={48} alt="Preço" />
                <span className="text-base ext-center">
                    Quantidade de repúblicas cadastradas: {nFraternities}
                </span>
            </div>
            <div className="h-16 min-w-[20%] px-[2%] py-[1%] flex justify-between items-center bg-gray-400 rounded-full">
                <Image src="/icons/members.svg" height={48} width={48} alt="Preço" />
                <span className="text-base ext-center">
                    Quantidade de membros cadastrados: {nMembers}
                </span>
            </div>
        </section>
    )
}