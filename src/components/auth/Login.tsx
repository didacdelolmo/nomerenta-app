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
    <div className="flex flex-col">
      <form onSubmit={handleSubmit} className="flex flex-col items-start gap-1">
        <input
          onChange={handleUsername}
          value={username}
          placeholder="Nombre de usuario"
          type="text"
          className="w-32 sm:w-64 text-sm border border-gray-600 rounded-md px-1"
          required
        />
        <input
          onChange={handlePassword}
          value={password}
          placeholder="Contraseña"
          type="password"
          className="w-32 sm:w-64 text-sm border border-gray-600 rounded-md px-1"
          required
        />
        <div className="flex w-full gap-1">
          <button
            onClick={displayRegister}
            type="button"
            className="w-full border-none hover:underline hover:cursor-pointer text-sm"
          >
            Registrarse
          </button>
          <button
            type="submit"
            className="w-full bg-gray-200 rounded-md border border-gray-600 hover:bg-black hover:text-white text-sm"
            disabled={isPending}
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
