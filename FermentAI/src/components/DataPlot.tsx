import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface FormData {
  temperature: number;
  pH: number;
  humidity: number;
  timestamp: string;
}

interface DataPlotProps {
  historyData: FormData[];
}

function DataPlot({ historyData }: DataPlotProps) {
  const data = {
    labels: historyData.map((entry) => entry.timestamp),
    datasets: [
      {
        label: "Temperature (°C)",
        data: historyData.map((entry) => entry.temperature),
        borderColor: "rgba(75,192,192,1)",
        fill: false,
      },
      {
        label: "pH",
        data: historyData.map((entry) => entry.pH),
        borderColor: "rgba(153,102,255,1)",
        fill: false,
      },
      {
        label: "Humidity (%)",
        data: historyData.map((entry) => entry.humidity),
        borderColor: "rgba(255,159,64,1)",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Storico dei dati di fermentazione",
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default DataPlot;
