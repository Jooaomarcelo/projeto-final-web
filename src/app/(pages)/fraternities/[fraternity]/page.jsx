import { isSessionValid, ownerToken } from '@/utils/auth';
import { getFraternity } from '@/utils/crudFraternities';
import MemberCard from '@/components/MemberCard';
import FormUpdate from '@/components/FormUpdate';
import FormFraternityMember from '@/components/FormFraternityMember';
import FormDelete from '@/components/FormDelete';
import Image from 'next/image';

export default async function Fraternity({ params }) {
  const name = decodeURIComponent((await params).fraternity);
  const fraternity = await getFraternity({ name });
  const session = await isSessionValid(); //Permission to see the members.
  const editPermission = (await ownerToken()) === name; //Permission to edit the fraternity.

  return (
    <section className="flex flex-col gap-3">
      <div className="flex flex-col min-h-screen w-full">
        <div className="flex items-end w-full min-h-[45vh] sm:min-h-[55vh] h-auto bg-[url(/unifei/unifei-campo.jpg)] bg-cover bg-no-repeat bg-[center_top_100%] pt-[10%]">
          <section className="container flex flw-wrap flex-row items-end">
            <div className="w-[25%] sm:w-[15%]">
              <img src={fraternity.image != '' ? fraternity.image : null} alt="" className="object-cover"></img>
            </div>
            <h1 className="text-4xl sm:text-7xl text-white font-bold">{fraternity.name}</h1>
          </section>
        </div>
        <div className="container mt-6 sm:mt-auto text-2xl">
          <p className="text-base sm:text-lg">{fraternity.description}</p>
          <section className="flex flex-col items-center lg:flex-row flex-wrap gap-6 mt-6">
            <div className="h-16 min-w-[20%] px-[2%] py-[1%] flex justify-between items-center bg-gray-400 rounded-full">
              <Image src="/icons/wallet.svg" height={48} width={48} alt="Preço" />
              <span className="text-base ext-center">
                {fraternity.min_price} - {fraternity.max_price}
              </span>
            </div>
            <div className="h-16 px-[2%] py-[1%] flex min-w-[35%] justify-between items-center bg-gray-400 rounded-full">
              <Image src="/icons/local.svg" height={48} width={48} alt="Preço" />
              <span className="text-base text-center">
                {fraternity.address.street}, {fraternity.address.res_number} - {fraternity.address.neighborhood}
              </span>
            </div>
            <div className="h-16 min-w-[20%] px-[2%] py-[1%] flex justify-between items-center bg-gray-400 rounded-full">
              <Image src="/icons/msg.svg" height={48} width={48} alt="Preço" />
              <span className="text-base text-center">{fraternity.whatsapp}</span>
            </div>
            <div className="h-16 min-w-[15%] px-[2%] py-[1%] flex justify-between items-center bg-gray-400 rounded-full">
              <Image src="/icons/members.svg" height={48} width={48} alt="Preço" />
              <span className="text-base">{fraternity.capacity}</span>
            </div>
          </section>
        </div>
        <div className="flex flex-wrap w-[40%] mx-auto gap-5 m-6 text-white text-xl sm:text-2xl font-bold">
          {editPermission && <FormUpdate fraternity={fraternity}></FormUpdate>}
          {editPermission && <FormDelete name={name}></FormDelete>}
        </div>
      </div>
      {/* Members section */}
      {session && <h2 className="text-center m-6 text-4xl font-bold">Membros</h2>}
      <div className="mb-6 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {session &&
          fraternity.members.map((member) => {
            return <MemberCard key={member.id} name={name} member={member} editPermission={editPermission}></MemberCard>;
          })}
      </div>
      {session && fraternity.members.length < fraternity.capacity && editPermission && (
        <FormFraternityMember action={'create'} fraternity={fraternity} />
      )}
    </section>
  );
}
