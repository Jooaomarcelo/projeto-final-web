'use client';

import useMember from '@/hooks/useMember';
import { createMember } from '@/utils/crudFraternityMembers';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function FormFraternityMember({ fraternity, member }) {
  const [initialData, setInitialData, errors, checkMember] = useMember(member);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenForm = () => setIsOpen(true);
  const handleCloseForm = () => window.location.reload();

  const handleChange = (e) => {
    setInitialData({ ...initialData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (await checkMember()) {
      const res = await createMember(fraternity, initialData);
      console.log(res);
      if (res) {
        toast.error(res.error);
      } else {
        toast.success('Membro adicionado com sucesso!', { duration: 5000 });
        handleCloseForm();
      }
    }
  };

  return (
    <>
      <button onClick={handleOpenForm} className="rounded-full bg-blue px-6 py-2 bg-blue-800 text-white font-bold">
        Cadastrar Membro
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="user-form w-[40%] relative py-12">
            <button
              type="button"
              onClick={handleCloseForm}
              className="absolute top-4 right-16 text-white hover:text-black font-bold"
            >
              X
            </button>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Nome"
              value={initialData.name}
              className="rounded-full p-4 text-black"
            />
            {errors && <p className="text-red-500">{errors.name}</p>}
            <input
              onChange={handleChange}
              type="text"
              name="nickname"
              placeholder="Apelido"
              value={initialData.nickname}
              className="rounded-full p-4 text-black"
            />
            {errors && <p className="text-red-500">{errors.nickname}</p>}
            <input
              onChange={handleChange}
              type="text"
              name="Insta"
              placeholder="Instagram"
              value={initialData.Insta}
              className="rounded-full p-4 text-black"
            />
            {errors && <p className="text-red-500">{errors.Insta}</p>}
            <button className="text-blue-950 text-3xl font-bold bg-white h-14 py-2 rounded-full">Enviar</button>
          </form>
          <Toaster></Toaster>
        </div>
      )}
    </>
  );
}
