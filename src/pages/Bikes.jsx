import { bikes } from "../data/BikeData";
import BikeCard from "../components/BikeCard";

export default function Bikes() {
  return (
    <div className="bikes-list flex flex-wrap justify-center">
      {bikes.map(bike => <BikeCard key={bike.id} bike={bike} />)}
    </div>
  );
}
