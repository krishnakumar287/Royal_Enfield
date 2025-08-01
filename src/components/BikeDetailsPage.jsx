import { useParams, useNavigate } from "react-router-dom";
import { bikes } from "../data/BikeData";

export default function BikeDetailsPage() {
  const { id } = useParams();
  const bike = bikes.find(b => b.id === id);
  const navigate = useNavigate();

  if (!bike) return <div className="p-8 text-center">Bike not found</div>;

  return (
    <div className="max-w-3xl mx-auto p-8">
      <img src={bike.image} alt={bike.name} className="w-full h-80 object-cover rounded-lg mb-6" />
      <h1 className="text-4xl font-bold mb-2">{bike.name}</h1>
      <div className="flex gap-2 mb-4">
        {bike.colors.map((color, i) => (
          <span key={i} style={{ background: color, width: 32, height: 32, display: "inline-block", borderRadius: "50%", border: "2px solid #eee" }} />
        ))}
      </div>
      <div className="text-lg text-gray-600 mb-2">Engine: {bike.engine}</div>
      <div className="text-lg text-gray-600 mb-2">Mileage: {bike.mileage}</div>
      <div className="text-2xl text-red-600 font-bold mb-4">{bike.price}</div>
      <p className="mb-6 text-gray-700">{bike.description}</p>
      <h2 className="text-xl font-semibold mb-2">Key Features</h2>
      <ul className="list-disc list-inside mb-6">
        {bike.features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg font-semibold transition-all duration-300" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
}
