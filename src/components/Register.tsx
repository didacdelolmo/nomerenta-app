import { useRegisterForm } from "../hooks/use-register-form";

export default function Register() {
  const {
    username,
    password,
    handleUsername,
    handlePassword,
    handleSubmit,
    isPending,
    isError,
    error,
    isSuccess,
  } = useRegisterForm();

  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          value={username}
          onChange={handleUsername}
          type="text"
          placeholder="Name"
        />
        <input
          value={password}
          onChange={handlePassword}
          type="password"
          placeholder="Password"
        />
        <button type="submit" disabled={isPending}>
          Submit
        </button>
      </form>
      {isError && error?.message}
      {isSuccess && <p>Registered successfully!</p>}
    </div>
  );
}
