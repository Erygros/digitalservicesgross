import type { Metadata } from "next"; import { ServiceLanding } from "@/components/ServiceLanding"; import { servicePageMap } from "@/lib/servicePages";
const service = servicePageMap.aeo; export const metadata: Metadata = { title: service.title, description: service.description, alternates: { canonical: "/aeo" } }; export default function Page() { return <ServiceLanding service={service} />; }
