import DJ from '../assets/dj.gif';

export default function Gifs() {
  return (
    <div className="flex flex-col items-center">
      <img width={200} src={DJ} alt="DJ" />
      <span>contador internacional</span>
      <span>analiticas</span>
    </div>
  );
}
