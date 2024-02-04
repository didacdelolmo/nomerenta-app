import Layout from '../components/Layout';

export default function Home() {
  return (
    <div>
      <Layout />
    </div>
  );
}

// import useGetCurrentUserQuery from '../api/queries/use-get-current-user-query';
// import Register from '../components/Register';
// import useUserStore from '../store/user-store';

// export default function Home() {
//   const { isPending, isError, error, isSuccess } =
//     useGetCurrentUserQuery();
//   const user = useUserStore((state) => state.user);

//   return (
//     <div className="flex flex-col items-center">
//       <h1>Welcome to the Authentication App!</h1>
//       {isPending && <span>Loading...</span>}
//       {isError && <span>{error?.message}</span>}
//       {isSuccess && user && (
//         <div>
//           <h2>User Profile</h2>
//           <span>Name: {user.username}</span>
//         </div>
//       )}
//       <Register />
//     </div>
//   );
// }
