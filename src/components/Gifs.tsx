import DJ from '../assets/dj.gif';
import { useCounter } from '../context/counter-context';
// import GiveawayButton from './GiveawayButton';
import Premium from './Premium';

export default function Gifs() {
  const { count } = useCounter();

  return (
    <div className="flex flex-col items-center gap-2">
      <img width={200} src={DJ} alt="DJ" />
      <Premium />
      {/* <GiveawayButton /> */}
      <span className='italic'>Eres el visitante número {count}</span>
    </div>
  );
}
