'use client';

import useUpdate from "@/hooks/useUpdate";
import { updateFraternity } from "@/utils/crudFraternities";
import { useState } from "react";
import toast from "react-hot-toast";
import useCep from "@/hooks/useCep";
import { useEffect } from "react";

export default function FormUpdate({ fraternity }) {
	const [isOpen, setIsOpen] = useState(false);

	/*
	Description: functions responsibles for changing the visibility of the update form.
	*/
	const handleOpenForm = () => setIsOpen(true);
	const handleCloseForm = () => window.location.reload();

	return (
		<>
			<button onClick={handleOpenForm} className="flex-1 bg-blue-800 rounded-md p-3">
				Editar
			</button>
			{isOpen && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
					<div className="user-form max-w-lg w-full">
						<Form fraternity={fraternity} onClose={handleCloseForm}></Form>
					</div>
				</div>
			)}
		</>
	);
}

function Form({ fraternity, onClose }) {
	const [initialData, setInitialData, errors, checkUpdate] = useUpdate(fraternity);
	const { data, error, fetchCepData } = useCep();

	useEffect(() => {
		if (data) {
			setInitialData(prevData => ({
				...prevData,
				address: {
					...prevData.address,
					city: data.city,
					state: data.state,
					neighborhood: data.neighborhood,
					street: data.street
				}
			}));
		}
	}, [data]);

	/*
	Description: function responsible for changing the value of initialData.
	*/
	const handleChange = (e) => {
		const { name, value } = e.target;

		if (name in initialData.address) {
			setInitialData(prevData => ({
				...prevData,
				address: {
					...prevData.address,
					[name]: value
				}
			}));
		} else {
			setInitialData(prevData => ({
				...prevData,
				[name]: value
			}));
		}
	};


	const handleChangeCep = async (e) => {
		const cep = e.target.value;

		if (cep.length === 8) {
			try {
				await fetchCepData(cep);
				if (data) {
					setInitialData(prevData => ({
						...prevData,
						address: {
							...prevData.address,
							city: data.city,
							state: data.state,
							neighborhood: data.neighborhood,
							street: data.street,
						}
					}));
				} else if (error) {
					toast.error("Erro ao buscar o CEP.");
				}
			} catch (err) {
				console.error("Erro ao buscar CEP:", err);
			}
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

	/*
	Description: responsible for rendering the form with functions calls.
	*/
	return (
		<>
			<div className="relative">
				<button type="button" onClick={onClose} className="absolute top-2 right-2 text-white hover:text-black font-bold">X</button>
			</div>
			<form onSubmit={handleSubmit} className="flex flex-col gap-3">
				<h1 className="text-2xl text-center font-bold">Editar {initialData.name}</h1>
				<InputField label="Descrição" name="description" value={initialData.description || ''} onChange={handleChange} error={errors?.description} />
				<InputField label="CEP" name="cep" value={initialData.address.cep} onChange={handleChange} onBlur={handleChangeCep} error={errors?.cep} />
				<InputField label="Estado" name="state" value={initialData.address.state || ''} onChange={handleChange} error={errors?.state} />
				<InputField label="Cidade" name="city" value={initialData.address.city || ''} onChange={handleChange} error={errors?.city} />
				<InputField label="Bairro" name="neighborhood" value={initialData.address.neighborhood || ''} onChange={handleChange} error={errors?.neighborhood} />
				<InputField label="Rua" name="street" value={initialData.address.street || ''} onChange={handleChange} error={errors?.street} />
				<InputField label="Número" name="res_number" value={initialData.address.res_number} onChange={handleChange} error={errors?.res_number} />
				<InputField label="Capacidade" name="capacity" value={initialData.capacity} onChange={handleChange} error={errors?.capacity} />
				<InputField label="Preço Mínimo" name="min_price" value={initialData.min_price} onChange={handleChange} error={errors?.min_price} />
				<InputField label="Preço Máximo" name="max_price" value={initialData.max_price} onChange={handleChange} error={errors?.max_price} />

				<button className="text-blue-950 text-3xl font-bold bg-white h-14 py-2 rounded-full">Salvar</button>
			</form>
		</>
	)
}

/*
Description: function responsible for avoid code repetition and create input fields.
*/
function InputField({ label, name, value, onChange, error, onBlur }) {
	return (
		<div>
			<section className="flex gap-2 items-center">
				<label htmlFor={name} className="text-nowrap text-lg font-bold">{label}: </label>
				<input
					type={name === "res_number" || name === "min_price" || name === "max_price" ? "number" : "text"}
					id={name}
					name={name}
					value={value}
					onChange={onChange ?? null}
					onBlur={onBlur ?? null}
					className="flex-grow input-user-update"
				/>
			</section>
			{error && <p className="text-red-500">{error}</p>}
		</div>
	);
}