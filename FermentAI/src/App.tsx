import React, { useState, useEffect } from "react";
import DataForm from "/Users/gagy/Desktop/fermentai/FermentAI/src/components/DataForm.tsx";
import DataPlot from "/Users/gagy/Desktop/fermentai/FermentAI/src/components/DataPlot.tsx";
import {
  sendFormData,
  fetchHistoryData,
} from "/Users/gagy/Desktop/fermentai/FermentAI/src/services/api.ts";
import { Container, Row, Col } from "react-bootstrap";

interface FormData {
  temperature: number;
  pH: number;
  humidity: number;
}

interface FormDataWithTimestamp extends FormData {
  timestamp: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    temperature: 0,
    pH: 0,
    humidity: 0,
  });

  const [data, setData] = useState<FormData | null>(null);
  const [historyData, setHistoryData] = useState<FormDataWithTimestamp[]>([]);

  const handleDataSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await sendFormData(formData);
      setData(formData);
      fetchHistory();
    } catch (error) {
      console.error("Errore durante l'invio dei dati al backend:", error);
    }
  };

  const fetchHistory = async () => {
    try {
      const response = await fetchHistoryData();
      setHistoryData(response.data);
    } catch (error) {
      console.error(
        "Errore durante il recupero dello storico dei dati:",
        error
      );
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <Container className="App">
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h1>Inserisci dati di fermentazione</h1>
          <DataForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleDataSubmit}
          />
          {data && (
            <div className="mt-4">
              <h2>Dati inseriti:</h2>
              <p>Temperatura: {data.temperature}°C</p>
              <p>pH: {data.pH}</p>
              <p>Umidità: {data.humidity}%</p>
            </div>
          )}
        </Col>
      </Row>
      <Row className="justify-content-center mt-5">
        <Col md={8}>
          <DataPlot historyData={historyData} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
