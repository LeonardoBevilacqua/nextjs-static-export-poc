export default async function Home() {
  const json = await fetchJson();
  async function fetchJson() {
    const res = await fetch("https://dummyjson.com/todos/random");

    return res.json();
  }

  return (
    <main>
      <h1>Hello World</h1>
      <pre>
        <code>{JSON.stringify(json, "", 2)}</code>
      </pre>
    </main>
  );
}
