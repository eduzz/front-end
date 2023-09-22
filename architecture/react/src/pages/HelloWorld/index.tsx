import { useQuery } from '@tanstack/react-query';

import sleep from '@/utils/sleep';

type Data = {
  avatar_url: string;
  name: string;
  email: string;
  public_repos: number;
  followers: number;
  html_url: string;
};

const HelloWorld = () => {
  const { isFetching, isError, data } = useQuery<Data>({
    queryKey: ['hello', 'world'],
    queryFn: async () => {
      await sleep(1500);
      return fetch('https://api.github.com/users/eduzz').then(res => res.json());
    }
  });

  if (isFetching) {
    return <div>Carregando...</div>;
  }

  if (isError) {
    return <div>Erro ao carregar...</div>;
  }

  return (
    <div className='flex h-screen items-center justify-center bg-gray-100'>
      <div className='flex w-full max-w-md items-center gap-6 rounded-lg border border-solid border-gray-200 bg-white p-6 shadow-lg'>
        <img src={data.avatar_url} alt={data.name} className='w-20 rounded-md' />

        <div>
          <h1 className='mb-0 text-2xl font-semibold leading-none'>{data.name}</h1>
          <div className='mb-2 text-base text-gray-500'>{data.email}</div>
          <a target='_blank' href={data.html_url} className='text-blue-500' rel='noreferrer'>
            Visualizar organização
          </a>
        </div>
      </div>
    </div>
  );
};

export default HelloWorld;
