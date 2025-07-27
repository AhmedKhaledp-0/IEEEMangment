import type { MetaArgs } from "react-router";
import { Section } from "~/components/ui/Section";

export function meta({}: MetaArgs) {
  return [
    { title: "Events - IEEE BSU" },
    {
      name: "description",
      content: "Discover upcoming IEEE BSU events, workshops, and activities",
    },
  ];
}

const Events = () => {
  return (
    <main className="min-h-screen ">
      <Section
        variant="gradient"
        padding="xl"
        className="min-h-screen flex items-center"
      >
        Events
      </Section>
    </main>
  );
};

export default Events;
