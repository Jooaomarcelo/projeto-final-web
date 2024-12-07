'use client';

import { deleteSessionToken } from '@/utils/auth';
import { deleteFraternity } from '@/utils/crudFraternities';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function FormDelete({ name }) {
  const [isOpen, setIsOpen] = useState(false);

  /*
    Description: functions responsibles for changing de visibility of the form.
    */
  const handleOpenForm = () => setIsOpen(true);
  const handleCloseForm = () => setIsOpen(false);

  /*
    Description: function responsible for calling the verification function and preventing the form from submitting directly.
    */
  const handleSubmit = async (e) => {
    e.preventDefault();
    /* Checking input. */
    if (await deleteFraternity(name, e.target.elements.password.value)) {
      toast.success('República deletada com sucesso.', { duration: 5000 });
      await deleteSessionToken();
    } else {
      toast.error('Senha incorreta.');
    }
  };

  return (
    <>
      <button onClick={handleOpenForm} className="flex-1 bg-red-700 rounded-md p-3">
        Excluir
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="user-form max-w-lg w-full">
            <div className="relative">
              <button
                type="button"
                onClick={handleCloseForm}
                className="absolute top-2 right-2 text-white hover:text-black font-bold"
              >
                X
              </button>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <h1 className="text-2xl text-center font-bold">Deseja mesmo excluir a república?</h1>
              <div>
                <section className="flex gap-2 items-center">
                  <label htmlFor="password" className="text-nowrap text-lg font-bold">
                    Confirme a senha:{' '}
                  </label>
                  <input type="password" id="password" name="password" className="flex-grow input-user-update" />
                </section>
              </div>
              <button className="text-blue-950 text-3xl font-bold bg-white h-14 py-2 rounded-full">Excluir</button>
            </form>
            <Toaster></Toaster>
          </div>
        </div>
      )}
    </>
  );
}
