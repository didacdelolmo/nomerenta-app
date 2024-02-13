import DJ from '../assets/dj.gif';
import Premium from './Premium';

export default function Gifs() {
  return (
    <div className="flex flex-col items-center">
      <img width={200} src={DJ} alt="DJ" />
      <Premium />
      <span>contador visitas</span>
      <span>analiticas</span>
    </div>
  );
}
