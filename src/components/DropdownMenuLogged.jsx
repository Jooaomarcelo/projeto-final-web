import { deleteSessionToken } from "@/utils/auth";

export default function DropdownMenuLogged({ ref }) {
  return (
    <div
      ref={ref}
      className="absolute bg-[#2b4981] top-full mt-3 w-full flex flex-col gap-2 items-center rounded-xl p-4"
      style={{ boxShadow: 'var(--shadow-dark)' }}
    >
      <button className="bg-[#0000006b] text-white w-full rounded-full text-lg font-bold">República</button>
      <button 
      onClick={deleteSessionToken}
      className="text-white hover:underline"
      >
        Sair
      </button>
    </div>
  );
}
