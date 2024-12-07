'use client';

import useMember from '@/hooks/useMember';
import { createMember, updateFraternityMember } from '@/utils/crudFraternityMembers';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function FormFraternityMember({ action, fraternity, member }) {
  if (!member) member = { id: '', name: '', nickname: '', Insta: '' };
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
      let res;
      if (action === 'create') {
        res = await createMember(fraternity, initialData);
      } else {
        res = await updateFraternityMember(initialData);
      }
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
      {action === 'create' ? (
        <button
          onClick={handleOpenForm}
          className="w-[40%] mx-auto mb-6 rounded-full bg-blue px-6 py-2 bg-blue-800 text-white font-bold"
        >
          Cadastrar Membro
        </button>
      ) : (
        <button
          onClick={handleOpenForm}
          className="rounded-full bg-blue px-6 py-1 bg-blue-800 text-white text-sm flex-1 font-bold"
        >
          Editar
        </button>
      )}
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
