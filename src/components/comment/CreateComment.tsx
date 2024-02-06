export default function CreateComment() {
  return (
    <form className="flex flex-col gap-2">
      <textarea rows={5} placeholder="¿Cuáles son tus pensamientos?" className="p-2 text-lg"></textarea>
      <button className="text-lg">Publicar comentario</button>
    </form>
  );
}
