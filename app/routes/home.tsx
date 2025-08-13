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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const host = window.location.hostname;
      if (host === "schlapberg.ch") setThemeClass("berg");
      else if (host === "salvisbach.ch") setThemeClass("bach");
      else setThemeClass(null);
    }
  }, []);

  if (!themeClass) return null;
  return <Welcome className={themeClass} />;
}
