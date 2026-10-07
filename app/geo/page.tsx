import type { Metadata } from "next"; import { ServiceLanding } from "@/components/ServiceLanding"; import { servicePageMap } from "@/lib/servicePages";
const service = servicePageMap.geo; export const metadata: Metadata = { title: service.title, description: service.description, alternates: { canonical: "/geo" } }; export default function Page() { return <ServiceLanding service={service} />; }
