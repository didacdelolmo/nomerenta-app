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
    <>
      <form onSubmit={handleSubmit} className="flex flex-col items-start gap-1">
        <div className="flex gap-1">
          <input
            onChange={handleUsername}
            value={username}
            placeholder="Nombre de usuario"
            type="text"
            className="w-20 sm:w-32"
            required
          />
          <input
            onChange={handlePassword}
            value={password}
            placeholder="Contraseña"
            type="password"
            className="w-20 sm:w-32"
            required
          />
        </div>
        <input
          onChange={handleCode}
          value={code}
          title="wenos dias a todos guapos"
          placeholder="Código de invitación"
          type="text"
          className="box-border w-full"
          required
        />
        <div className="flex w-full gap-1">
          <button type="submit" className="w-full">
            Registrarse
          </button>
          <button
            onClick={displayLogin}
            type="button"
            className="w-full bg-white border-none hover:underline hover:cursor-pointer"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
      {isPending && <span>Cargando...</span>}
      {isError && (
        <span className="text-red-600 underline">{error.message}</span>
      )}
    </>
  );
}
