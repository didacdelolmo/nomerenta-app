import { Link } from "react-router-dom";

export default function GiveawayButton() {
  return (
    <Link to="/giveaway">
      <button className="text-2xl w-full py-1.5 font-bold rounded-md px-2 hover:bg-black hover:text-white border border-gray-600">
        SORTEO
      </button>
    </Link>
  );
}
