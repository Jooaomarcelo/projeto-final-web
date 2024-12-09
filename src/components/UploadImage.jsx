'use client';

import { uploadFile } from '@/utils/crudFraternities';
import Image from 'next/image';
import { useState } from 'react';
import toast from 'react-hot-toast';

export default function UploadImage({ name }) {
  const [isOpen, setIsOpen] = useState(false);
  const [fileName, setFileName] = useState('');

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleCloseForm = () => {
    setIsOpen(false);
    window.location.reload();
  };

  const handleChange = (e) => {
    if (!e.target.files) {
      return;
    }
    const [file] = e.target.files;
    const { name } = file;
    setFileName(name);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const [file] = e.dataTransfer.files;
    const { name } = file;
    setFileName(name);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
    e.stopPropagation();
  };

  const handleAction = async (formData) => {
    const res = await uploadFile(formData, name);

    if (res) {
      toast.error(res.error);
    } else {
      toast.success('Imagem enviada com sucesso!', { duration: 5000 });
    }
  };

  return (
    <>
      <button onClick={handleClick} className="absolute hidden group-hover:block bottom-1 right-0">
        <Image src="/icons/edit.svg" height={48} width={48} alt="Editar" />
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <form action={handleAction} className="user-form items-center w-[75%] sm:w-[50%] lg:w-[35%] py-12 relative">
            <button
              type="button"
              onClick={handleCloseForm}
              className="absolute top-4 right-16 text-white hover:text-black font-bold"
            >
              X
            </button>
            <label
              className="w-full h-48 flex flex-col justify-center items-center my-2 border-dashed border-2 text-[#fff] cursor-pointer"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <span>
                <img src="/icons/upload.svg" alt="Coloque a logo de sua República aqui" />
              </span>
              <p className="text-center">Arraste e solte sua logo aqui ou clique para selecionar um arquivo</p>
              <input onChange={handleChange} type="file" name="file" className="max-w-full hidden" />
            </label>
            {fileName !== '' && <p className="text-center flex-1 break-all">{fileName} selecionado</p>}
            <button className="text-blue-950 text-xl font-bold bg-white px-4 py-2 rounded-full">Enviar</button>
          </form>
        </div>
      )}
    </>
  );
}
