export const runtime = 'edge';

export default async function Home() {
  const data = await fetch('https://hub.dummyapis.com/delay?seconds=5', {
    next: {
      revalidate: 1,
    },
  });
  return (
    <code>
      <pre>{JSON.stringify(await data.text(), null, 2)}</pre>
    </code>
  );
}
