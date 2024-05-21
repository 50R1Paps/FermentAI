import React from "react";
import { Form, Button } from "react-bootstrap";

interface FormData {
  temperature: number;
  pH: number;
  humidity: number;
}

interface DataFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

function DataForm({ formData, setFormData, onSubmit }: DataFormProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof FormData
  ) => {
    setFormData({ ...formData, [field]: parseFloat(e.target.value) });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="formTemperature">
        <Form.Label>Temperatura (°C)</Form.Label>
        <Form.Control
          type="number"
          value={formData.temperature}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e, "temperature")
          }
          required
        />
      </Form.Group>
      <Form.Group controlId="formPH" className="mt-3">
        <Form.Label>pH</Form.Label>
        <Form.Control
          type="number"
          value={formData.pH}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e, "pH")
          }
          required
        />
      </Form.Group>
      <Form.Group controlId="formHumidity" className="mt-3">
        <Form.Label>Umidità (%)</Form.Label>
        <Form.Control
          type="number"
          value={formData.humidity}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(e, "humidity")
          }
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-4 d-block mx-auto">
        Invia
      </Button>
    </Form>
  );
}

export default DataForm;
