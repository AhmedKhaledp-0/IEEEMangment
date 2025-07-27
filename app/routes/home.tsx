import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { Section } from "../components/ui/Section";
import type { MetaArgs } from "react-router";

export function meta({}: MetaArgs) {
  return [
    { title: "IEEE BSU - Boise State University Student Branch" },
    {
      name: "description",
      content:
        "Join IEEE BSU - Connecting students with technology, innovation, and professional development opportunities in electrical engineering and related fields.",
    },
  ];
}

export default function Home() {
  const isDark = useSelector((state: RootState) => state.theme.isDark);

  return (
    <Section
      variant="gradient"
      padding="xl"
      className="min-h-screen flex items-center"
    >
      Home
    </Section>
  );
}
