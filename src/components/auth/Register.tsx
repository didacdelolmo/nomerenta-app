import { useSearchParams } from 'react-router-dom';
import useRegister from '../../hooks/auth/use-register';

export default function Register({ displayLogin }) {
  const [searchParams] = useSearchParams();
  const invitationCode = searchParams.get('code');

  const {
    username,
    password,
    code,
    handleUsername,
    handlePassword,
    handleCode,
    handleSubmit,
    isPending,
    isError,
    error,
  } = useRegister({ invitationCode: invitationCode ?? '' });

  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit} className="flex flex-col items-start gap-1">
        <div className="flex gap-1 w-full">
          <input
            onChange={handleUsername}
            value={username}
            placeholder="Nombre de usuario"
            type="text"
            className="w-24 rounded-md border border-gray-600 px-1 text-sm"
            required
          />
          <input
            onChange={handlePassword}
            value={password}
            placeholder="Contraseña"
            type="password"
            className="w-24 rounded-md border border-gray-600 px-1 text-sm"
            required
          />
        </div>
        <input
          onChange={handleCode}
          value={code}
          title="wenos dias a todos guapos"
          placeholder="Código de invitación"
          type="text"
          className="box-border w-full rounded-md border border-gray-600 px-1 text-sm"
          required
        />
        <div className="flex w-full gap-1">
          <button
            type="submit"
            className="w-full bg-gray-200 hover:bg-black hover:text-white border border-gray-600 rounded-md text-sm"
            disabled={isPending}
          >
            Registrarse
          </button>
          <button
            onClick={displayLogin}
            type="button"
            className="w-full bg-white border-none hover:underline hover:cursor-pointer text-sm"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
      {isPending && <span>Cargando...</span>}
      {isError && (
        <span className="text-red-600 underline">{error.message}</span>
      )}
    </div>
  );
}
