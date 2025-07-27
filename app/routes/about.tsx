import type { MetaArgs } from "react-router";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
} from "../components/ui/Section";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import {
  Users,
  Award,
  Target,
  Eye,
  Heart,
  Calendar,
  Code,
  Network,
  Lightbulb,
  ExternalLink,
  ArrowRight,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export function meta({}: MetaArgs) {
  return [
    { title: "About - IEEE BSU" },
    {
      name: "description",
      content: "Learn about IEEE BSU and our mission at Boise State University",
    },
  ];
}

const About = () => {
  return (
    <main className="min-h-screen ">
      <Section
        variant="gradient"
        padding="xl"
        className="min-h-screen flex items-center"
      >
        About
      </Section>
    </main>
  );
};

export default About;
