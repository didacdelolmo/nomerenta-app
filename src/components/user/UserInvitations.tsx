import useGetCurrentUserInvitationsQuery from '../../api/queries/user/use-get-current-user-invitations-query';
import useCreateInvitations from '../../hooks/invitation/use-create-invitations';
import useUserStore from '../../store/user-store';
import InvitationCode from './InvitationCode';

export default function UserInvitations() {
  const user = useUserStore((state) => state.user);
  const {
    data: response,
    isPending,
    isError,
    error,
    isSuccess,
  } = useGetCurrentUserInvitationsQuery();

  return (
    <div className="px-2 pb-2">
      {!user?.email ? (
        <InputEmail />
      ) : (
        <>
          {isPending && <span>Cargando...</span>}
          {isError && <span className="text-red-600">{error.message}</span>}
          {isSuccess && (
            <div className="flex flex-col">
              {response.data.map((invitation, index) => (
                <InvitationCode key={index} invitation={invitation} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

function InputEmail() {
  const { email, handleEmail, handleSubmit, isError, error } =
    useCreateInvitations();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label>
        Introduce tu correo electrónico para obtener las invitaciones:
      </label>
      <div className="flex">
        <input
          onChange={handleEmail}
          value={email}
          type="email"
          placeholder="nomerentas@gmail.com"
          className="border border-r-0 border-gray-600 rounded-md rounded-r-none px-1 w-full"
          required
        />
        <button
          type="submit"
          className="bg-gray-200 w-full px-2 rounded-md rounded-l-none border border-gray-600 hover:bg-black hover:text-white font-medium"
        >
          Obtener
        </button>
      </div>
      {isError && <span className="text-red-600">{error.message}</span>}
    </form>
  );
}
