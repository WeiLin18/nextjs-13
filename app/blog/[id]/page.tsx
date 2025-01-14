// https://beta.nextjs.org/docs/api-reference/segment-config
// This option replaces the fallback: true | false | blocking option of getStaticPaths in the pages directory.
// When dynamicParams = true, the segment uses Streaming Server Rendering.
export const dynamicParams = true;

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

async function fetchData(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 15 },
  });
  const data = await res.json();
  return data;
}

export default async function Page({
  params,
}: {
  params?: { id: string };
  children?: React.ReactNode;
}) {
  const { id } = params;

  const data = await fetchData(id);
  return (
    <div>
      <h2>{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}
