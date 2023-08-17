import { cookies } from 'next/headers';

export const runtime = 'edge';

export default async function Home() {
  const data = await fetch('https://hub.dummyapis.com/delay?seconds=5', {
    cache: 'force-cache',
    next: { revalidate: 1 },
  });
  const foo = cookies().get('foo');
  return (
    <code>
      <pre>{JSON.stringify(await data.text(), null, 2)}</pre>
    </code>
  );
}
