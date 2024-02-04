import useAuthForm from '../../hooks/auth/use-auth-form';

export default function Auth() {
  const {
    username,
    password,
    handleUsername,
    handlePassword,
    handleRegister,
    handleLogin,
    isPending,
    isError,
    error,
  } = useAuthForm();

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="flex flex-col">
        <input
          onChange={handleUsername}
          value={username}
          type="text"
          placeholder="Nombre de usuario"
        />
        <input
          onChange={handlePassword}
          value={password}
          type="password"
          placeholder="Contraseña"
        />
      </div>
      <div>
        <button onClick={handleLogin} disabled={isPending}>
          Iniciar sesión
        </button>
        <button onClick={handleRegister} disabled={isPending}>
          Registrarse
        </button>
      </div>
      {isError && <span className='text-red-600 underline'>{error?.message}</span>}
    </form>
  );
}
