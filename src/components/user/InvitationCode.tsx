import useShare from '../../hooks/use-share';
import Invitation from '../../store/types/invitation-interface';

export default function InvitationCode({
  invitation,
}: {
  invitation: Invitation;
}) {
  const { code, redeemed } = invitation;

  const { hasCopied, handleShare } = useShare({
    title: 'NOMERENTA.com',
    text: '¡Únete conmigo a NO ME RENTA y vamos a echarnos unas risas 🤣!',
    url: `https://nomerenta.com?code=${code}`,
  });

  return (
    <div className="flex flex-col">
      <div
        onClick={() => {
          if (!redeemed) {
            handleShare();
          }
        }}
        className={`${
          !redeemed && 'hover:underline hover:cursor-pointer'
        } flex items-center gap-1 w-fit`}
      >
        <span className={`${redeemed && 'line-through'} text-lg`}>{code}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
          />
        </svg>
      </div>
      {hasCopied && <span>Has copiado el enlace!</span>}
    </div>
  );
}
