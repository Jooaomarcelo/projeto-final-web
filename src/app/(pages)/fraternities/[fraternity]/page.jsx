import { isSessionValid, ownerToken } from '@/utils/auth';
import { getFraternity } from '@/utils/crudFraternities';
import MemberCard from '@/components/MemberCard';
import FormUpdate from '@/components/FormUpdate';
import FormFraternityMember from '@/components/FormFraternityMember';

export default async function Fraternity({ params }) {
  const name = decodeURIComponent((await params).fraternity);
  const fraternity = await getFraternity({ name });
  const session = await isSessionValid(); //Permission to see the members.
  const editPermission = (await ownerToken()) === name; //Permission to edit the fraternity.

  return (
    <section className="flex flex-col min-h-screen gap-3">
      <div className="flex w-full h-auto max-h-[80vh] bg-[url(/unifei-campo.jpg)] bg-cover bg-no-repeat bg-[center_top_100%]">
        <section className="flex flex-row items-end">
          <img src={fraternity.image != '' ? fraternity.image : null} alt="" className="w-auto h-[60vh] pt-[10%]"></img>
          <h1 className="text-7xl text-white font-bold">{fraternity.name}</h1>
        </section>
      </div>
      <div className="w-[80%] mx-auto mt-[1.5%] text-2xl">
        <p>{fraternity.description}</p>
        <section className="flex justify-between mt-[3vh]">
          <div className="h-[5rem] px-[2%] py-[1%] flex gap-9 justify-evenly bg-gray-400 rounded-3xl">
            <img src="/logo-sbornia.png" alt="sla" />
            <p className="my-auto">
              {fraternity.min_price} - {fraternity.max_price}
            </p>
          </div>
          <div className="h-[5rem] px-[2%] py-[1%] flex gap-9 justify-evenly bg-gray-400 rounded-3xl">
            <img src="/logo-sbornia.png" alt="sla" />
            <p className="my-auto">
              {fraternity.address.street}, {fraternity.address.res_number} - {fraternity.address.neighborhood}
            </p>
          </div>
          <div className="h-[5rem] px-[2%] py-[1%] flex gap-9 justify-evenly bg-gray-400 rounded-3xl">
            <img src="/logo-sbornia.png" alt="sla" />
            <p className="my-auto">{fraternity.whatsapp}</p>
          </div>
          <div className="h-[5rem] px-[2%] py-[1%] flex gap-9 justify-evenly bg-gray-400 rounded-3xl">
            <img src="/logo-sbornia.png" alt="sla" />
            <p className="my-auto">{fraternity.capacity}</p>
          </div>
        </section>
      </div>
      <div className="flex justify-center gap-5 mt-[3vh]">
        {editPermission && <FormUpdate fraternity={fraternity}></FormUpdate>}
        {editPermission && <button>CONFIA</button>}
      </div>
      <div>
        {session &&
          fraternity.members.map((member) => {
            return <MemberCard member={member}></MemberCard>;
          })}
        {editPermission && <FormFraternityMember fraternity={fraternity} />}
      </div>
    </section>
  );
}
