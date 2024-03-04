import { Plus, X } from 'lucide-react';
import useNewReplacement from '../hooks/replacement/use-new-replacement';
import useUpdateReplacements from '../hooks/replacement/use-update-replacements';
import useUserStore from '../store/user-store';

export default function Replacements() {
  const {
    replacements,
    addReplacement,
    removeReplacement,
    updateReplacements,
    isUpdateSuccess,
    isPending,
    isError,
    error,
    isSuccess,
  } = useUpdateReplacements();
  const {
    originalText,
    newReplacement,
    handleOriginalText,
    handleNewReplacement,
    clearNewReplacement,
  } = useNewReplacement();

  const user = useUserStore((state) => state.user);
  if (!user || user.roleId !== 'dictator') {
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5 my-5">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-bold">Editar reemplazos</h2>
        {isSuccess && (
          <span className="italic text-gray-800">
            Actualmente existen {replacements.length} reemplazos
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        {replacements.map(({ originalText, replacement }, index) => (
          <div key={index} className="flex gap-2">
            <input
              value={originalText}
              type="text"
              className="border border-gray-600 rounded-md px-2 py-0.5"
              disabled
            />
            <input
              value={replacement}
              type="text"
              className="border border-gray-600 rounded-md px-2 py-0.5"
              disabled
            />
            <button
              onClick={() => removeReplacement(index)}
              className="p-2 rounded-md hover:bg-gray-200"
            >
              <X className="size-4" />
            </button>
          </div>
        ))}
        <div className="flex gap-2">
          <input
            onChange={handleOriginalText}
            value={originalText}
            type="text"
            placeholder="Palabra original"
            className="border border-gray-600 rounded-md px-2 py-0.5"
          />
          <input
            onChange={handleNewReplacement}
            value={newReplacement}
            type="text"
            placeholder="Reemplazo"
            className="border border-gray-600 rounded-md px-2 py-0.5"
          />
          <button
            onClick={() => {
              addReplacement({ originalText, replacement: newReplacement });
              clearNewReplacement();
            }}
            className="p-2 rounded-md hover:bg-gray-200"
          >
            <Plus className="size-4" />
          </button>
        </div>
        <button
          onClick={updateReplacements}
          className="bg-black hover:bg-gray-800 text-white font-semibold px- py-0.5 rounded-md"
        >
          Guardar cambios
        </button>
      </div>
      {isPending && <span>Cargando...</span>}
      {isError && <span className="text-red-600">{error.message}</span>}
      {isUpdateSuccess && <span>¡Has realizado la operación con éxito!</span>}
    </div>
  );
}
