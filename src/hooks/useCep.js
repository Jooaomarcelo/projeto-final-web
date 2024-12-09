import { useState } from "react";
import axios from "axios";

export default function useCep() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchCepData = async (cep) => {
        setLoading(true);
        setError(null);
        setData(null);

        try {
            const response = await axios.get(`https://brasilapi.com.br/api/cep/v2/${cep}`);
            setData(response.data);
        } catch (err) {
            setError(err.response?.data?.message || "Erro ao buscar o CEP.");
        } finally {
            setLoading(false);
        }
    };

    return { data, error, loading, fetchCepData };
};
