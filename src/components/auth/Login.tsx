import useLogin from '../../hooks/auth/use-login';

export default function Login({ displayRegister }) {
  const {
    username,
    password,
    handleUsername,
    handlePassword,
    handleSubmit,
    isPending,
    isError,
    error,
  } = useLogin();

  return (
    <div className='flex flex-col'>
      <form onSubmit={handleSubmit} className="flex flex-col items-start gap-1">
        <input
          onChange={handleUsername}
          value={username}
          placeholder="Nombre de usuario"
          type="text"
          className="w-32 sm:w-64"
          required
        />
        <input
          onChange={handlePassword}
          value={password}
          placeholder="Contraseña"
          type="password"
          className="w-32 sm:w-64"
          required
        />
        <div className="flex w-full gap-1">
          <button
            onClick={displayRegister}
            type="button"
            className="w-full bg-white border-none hover:underline hover:cursor-pointer"
          >
            Registrarse
          </button>
          <button type="submit" className="w-full" disabled={isPending}>
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
