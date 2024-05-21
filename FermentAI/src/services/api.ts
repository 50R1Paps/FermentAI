import axios from "axios";

const baseURL = "http://localhost:8080/api";

interface FormData {
  temperature: number;
  pH: number;
  humidity: number;
}

interface FormDataWithTimestamp extends FormData {
  timestamp: string;
}

export const sendData = async (formData: FormData) => {
  try {
    await axios.post(`${baseURL}/data`, formData);
  } catch (error) {
    throw new Error(
      `Errore durante l'invio dei dati al backend: ${(error as Error).message}`
    );
  }
};

export const fetchHistoryData = async (): Promise<{
  data: FormDataWithTimestamp[];
}> => {
  try {
    return await axios.get(`${baseURL}/data/history`);
  } catch (error) {
    throw new Error(
      `Errore durante il recupero dello storico dei dati: ${
        (error as Error).message
      }`
    );
  }
};

export const sendFormData = async (formData: FormData) => {
  try {
    await sendData(formData);
  } catch (error) {
    throw new Error(
      `Errore durante l'invio dei dati al backend: ${(error as Error).message}`
    );
  }
};
