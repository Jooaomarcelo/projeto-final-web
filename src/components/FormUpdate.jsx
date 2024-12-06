"use client";

import useUpdate from "@/hooks/useUpdate";
import { updateFraternity } from "@/utils/crudFraternities";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function FormUpdate({ fraternity }) {
    const [isOpen, setIsOpen] = useState(false);

    /*
    Description: functions responsibles for changing de visibility of the update form.
    */
    const handleOpenForm = () => setIsOpen(true);
    const handleCloseForm = () => window.location.reload();

    return (
        <>
            <button onClick={handleOpenForm} className="text-white text-3xl font-bold bg-blue-800 rounded-md p-3">Editar</button>
            {isOpen &&
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                    <div className="user-form max-w-lg w-full">
                        <Form fraternity={fraternity} onClose={handleCloseForm}></Form>
                    </div>
                </div>
            }
        </>
    )
}

function Form({ fraternity, onClose }) {
    const [initialData, setInitialData, errors, checkUpdate] = useUpdate(fraternity);

    /*
    Description: function responsible for changing the value of initialData.
    */
    const handleChange = (e) => {
        if (e.target.name === "cep" || e.target.name === "res_number") {
            setInitialData({ ...initialData, address: { ...initialData.address, [e.target.name]: e.target.value } });
        } else {
            setInitialData({ ...initialData, [e.target.name]: e.target.value });
        }
    };

    /*
    Description: function responsible for calling the verification function and preventing the form from submitting directly.
    */
    const handleSubmit = async (e) => {
        e.preventDefault();
        /* Checking inicial inputs. */
        if (await checkUpdate()) {
            /* Trying to update fraternity. */
            const ret = await updateFraternity(initialData);
            if (ret) {
                toast.error(ret.error);
            } else {
                toast.success("Dados atualizados com sucesso!");
            }
        }
    }

    return (
        <>
            <div className="relative">
                <button type="button" onClick={onClose} className="absolute top-2 right-2 text-white hover:text-black font-bold">X</button>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <h1 className="text-2xl text-center font-bold">Editar {initialData.name}</h1>
                <div>
                    <section className="flex gap-2 items-center">
                        <label htmlFor="description" className="text-lg font-bold">Descrição: </label>
                        <textarea
                            type="text"
                            id="description"
                            name="description"
                            value={initialData.description}
                            onChange={handleChange}
                            className="flex-grow input-user-update"
                        />
                    </section>
                    {errors && <p className="text-red-500">{errors.description}</p>}
                </div>
                <div>
                    <section className="flex gap-2">
                        <label htmlFor="cep" className="text-lg font-bold">CEP: </label>
                        <input
                            type="number"
                            id="cep"
                            name="cep"
                            value={initialData.address.cep}
                            onChange={handleChange}
                            className="flex-grow input-user-update"
                        />
                    </section>
                    {errors && <p className="text-red-500">{errors.cep}</p>}
                </div>
                <div>
                    <section className="flex gap-2">
                        <label htmlFor="res_number" className="text-lg font-bold">Número: </label>
                        <input
                            type="number"
                            id="res_number"
                            name="res_number"
                            value={initialData.address.res_number}
                            onChange={handleChange}
                            className="flex-grow input-user-update"
                        />
                    </section>
                    {errors && <p className="text-red-500">{errors.res_number}</p>}
                </div>
                <div>
                    <section className="flex gap-2">
                        <label htmlFor="capacity" className="text-lg font-bold">Capacidade: </label>
                        <input
                            type="number"
                            id="capacity"
                            name="capacity"
                            value={initialData.capacity}
                            onChange={handleChange}
                            className="flex-grow input-user-update"
                        />
                    </section>
                    {errors && <p className="text-red-500">{errors.capacity}</p>}
                </div>
                <div>
                    <section className="flex gap-2">
                        <label htmlFor="min_price" className="text-nowrap text-lg font-bold">Preço Mínimo: </label>
                        <input
                            type="number"
                            id="min_price"
                            name="min_price"
                            value={initialData.min_price}
                            onChange={handleChange}
                            className="flex-grow input-user-update"
                        />
                    </section>
                    {errors && <p className="text-red-500">{errors.min_price}</p>}
                </div>
                <div>
                    <section className="flex gap-2">
                        <label htmlFor="max_price" className="text-nowrap text-lg font-bold">Preço Máximo: </label>
                        <input
                            type="number"
                            id="max_price"
                            name="max_price"
                            value={initialData.max_price}
                            onChange={handleChange}
                            className="flex-grow input-user-update"
                        />
                    </section>
                    {errors && <p className="text-red-500">{errors.max_price}</p>}
                </div>
                <button className="text-blue-950 text-3xl font-bold bg-white h-14 py-2 rounded-full">Salvar</button>
            </form>
            <Toaster></Toaster>
        </>
    )
}