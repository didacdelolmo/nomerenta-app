import Gifs from '../components/Gifs';
import PopularPosts from '../components/post/PopularPosts';
import sorteo from '../assets/sorteo.jpeg';

export default function Giveaway() {
  return (
    <div className="flex flex-col lg:grid grid-cols-4 grid-flow-row divide-x divide-gray-600">
      <div className="hidden lg:grid col-span-1 mr-2">
        <PopularPosts />
      </div>
      <div className="col-span-2 flex flex-col gap-2 items-center p-2">
        <img width={500} src={sorteo} alt="Sorteo" />
        <div className="flex flex-col gap-5 items-center md:w-[24rem]">
          <p className="text-lg font-medium text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            cupiditate aliquam repellat cumque ex animi officiis magni
            voluptatum earum at.
          </p>
          <form className="flex flex-col gap-2 w-full">
            <div className="flex flex-col gap-1">
              <label className="font-medium">Nombre</label>
              <input
                type="text"
                className="border border-gray-600 rounded-md px-1 py-0.5 text-gray-800"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium">Apellidos</label>
              <input
                type="text"
                className="border border-gray-600 rounded-md px-1 py-0.5 text-gray-800"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium">Correo electrónico</label>
              <input
                type="email"
                className="border border-gray-600 rounded-md px-1 py-0.5 text-gray-800"
              />
            </div>
            <button className="font-semibold bg-black text-white rounded-md py-0.5 hover:bg-gray-800">
              Participar
            </button>
          </form>
          <span className="italic">124 participantes registrados</span>
        </div>
      </div>
      <div className="hidden lg:grid col-span-1">
        <Gifs />
      </div>
    </div>
  );
}
