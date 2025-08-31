import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [themeClass, setThemeClass] = useState<string | null>(null);

  // Try using https://tailwindcss.com/docs/adding-custom-styles#adding-custom-variants
  useEffect(() => {
    if (typeof window !== "undefined") {
      const host = window.location.hostname;
      if (host === "schlapberg.ch") setThemeClass("berg");
      else Math.random() > 0.5 ? setThemeClass("bach") : setThemeClass("berg");
    }
  }, []);

  if (!themeClass) return null;
  return (
    <div data-theme={themeClass}>
      <Welcome />
    </div>
  );
}
