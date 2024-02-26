import useUserSearch from '../hooks/user/use-user-search';
import ProfilePreview from './user/ProfilePreview';

export default function SearchContent() {
  const {
    username,
    handleUsername,
    data: response,
    isPending,
    isFetching,
    isError,
    error,
    isSuccess,
  } = useUserSearch();

  return (
    <div className="flex flex-col outline outline-1 outline-gray-600">
      <div className="flex flex-col gap-2 p-2">
        <h2 className='text-2xl font-bold'>Buscador de usuarios</h2>
        <input
          onChange={handleUsername}
          value={username}
          type="text"
          placeholder="Introduce el nombre de usuario"
          className="text-lg px-2 border rounded-md border-gray-600"
        />
      </div>
      <div className="flex flex-col divide-y divide-gray-600">
        <div className='border-gray-600' />
        {isPending && isFetching && <span>Cargando...</span>}
        {isError && (
          <span className="text-red-600 underline">{error.message}</span>
        )}
        {isSuccess && response.data.length === 0 && (
          <span>Aqui no hay ni cristo...</span>
        )}
        {isSuccess &&
          response.data.map((user, index) => (
            <ProfilePreview key={index} user={user} />
          ))}
      </div>
    </div>
  );
}
