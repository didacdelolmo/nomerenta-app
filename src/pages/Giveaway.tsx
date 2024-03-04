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
        <div className="flex flex-col gap-5 items-center">
          <p className="text-lg font-medium md:text-center md:w-[32rem]">
            ¿Quieres lucir el estilo más exclusivo de nuestra comunidad?
            ¡Rellena el formulario y entra en el sorteo de 5 camisetas que
            gritan "joer, soy la hostia" por todos lados! Solo necesitas tu
            suerte y tu sex appeal que nunca te falla. El día 31 de marzo
            haremos el sorteo y publicaremos los resultados. ¡Que la suerte te
            acompañe, la necesitas!
          </p>
          <form className="flex flex-col gap-2 w-full md:w-[20rem]">
            <div className="flex flex-col gap-1">
              <label className="font-medium">Nombre</label>
              <input
                type="text"
                className="border border-gray-600 rounded-md px-2 py-0.5 text-gray-800"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium">Apellidos</label>
              <input
                type="text"
                className="border border-gray-600 rounded-md px-2 py-0.5 text-gray-800"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium">Correo electrónico</label>
              <input
                type="email"
                className="border border-gray-600 rounded-md px-2 py-0.5 text-gray-800"
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
