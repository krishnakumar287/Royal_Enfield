import { Link } from "react-router-dom";

export default function BikeCard({ bike }) {
  return (
    <div className="bike-card bg-white rounded-lg shadow-lg p-4 m-4 flex flex-col items-center">
      <img src={bike.image} alt={bike.name} className="w-64 h-40 object-cover mb-4 rounded" />
      <h3 className="text-xl font-bold mb-2">{bike.name}</h3>
      <Link to={`/bike/${bike.id}`}>
        <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg font-semibold transition-all duration-300">Explore</button>
      </Link>
    </div>
  );
}
