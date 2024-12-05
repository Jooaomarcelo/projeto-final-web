import { isSessionValid } from '@/utils/auth';
import getFraternities from '@/utils/getFraternities';
import MemberCard from '@/components/MemberCard';

export default async function Fraternity({ params }) {
  const name = decodeURIComponent((await params).fraternity);
  const fraternity = await getFraternities({ name });
  const session = await isSessionValid();

  return (
    <section className="flex flex-col h-screen gap-3">
      <div className="w-screen h-[40%] max-h-96 bg-[url(/unifei.jpg)]">
        <img src={fraternity.image} alt="" className="w-auto h-[40%]"></img>
      </div>
      <div>
        <h1 className="text-4xl text-black font-bold text-center">{fraternity.name}</h1>
        <p>Descrição: {fraternity.description}</p>
        <p>Capacidade: {fraternity.capacity}</p>
        <p>
          Preço: {fraternity.min_price} - {fraternity.max_price}
        </p>
        <p>Endereço: {fraternity.address}</p>
        <p>Contato: {fraternity.whatsapp}</p>
        {session && <h1 className="text-4xl text-black font-bold text-center">Membros: </h1>}
        {session &&
          fraternity.members.map((member) => {
            return <MemberCard member={member}></MemberCard>;
          })}
      </div>
    </section>
  );
}
