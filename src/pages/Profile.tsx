import { useParams } from 'react-router-dom';
import useGetUserQuery from '../api/queries/user/use-get-user-query';
import Layout from '../components/Layout';
import PopularPosts from '../components/post/PopularPosts';
import Gifs from '../components/Gifs';
import ProfileContent from '../components/user/ProfileContent';

export default function Profile() {
  const params = useParams();
  const userId = params.userId as string;

  const {
    data: response,
    isPending,
    isError,
    error,
    isSuccess,
  } = useGetUserQuery({ userId });

  return (
    <Layout>
      <div className="flex flex-col md:grid grid-cols-4 gap-2">
        <div className="hidden md:grid md:col-span-1">
          <PopularPosts />
        </div>
        <div className="col-span-2">
          {isPending && <span>Cargando...</span>}
          {isError && (
            <span className="text-red-600 underline">{error.message}</span>
          )}
          {isSuccess && <ProfileContent user={response.data} />}
        </div>
        <div className="hidden md:grid md:col-span-1">
          <Gifs />
        </div>
      </div>
    </Layout>
  );
}
