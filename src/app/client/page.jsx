"use client";

import { useEffect, useState } from "react";

export default function HomeClient() {
  const [json, setJson] = useState({});

  useEffect(() => {
    async function fetchJson() {
      const res = await fetch("https://dummyjson.com/todos/random", {
        next: {
          revalidate: 0,
        },
      });

      setJson(await res.json());
    }

    fetchJson();
  }, []);
  return (
    <main>
      <h1>Hello World</h1>
      <pre>
        <code>{JSON.stringify(json, "", 2)}</code>
      </pre>
    </main>
  );
}
