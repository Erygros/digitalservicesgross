import type { Metadata } from "next"; import { ServiceLanding } from "@/components/ServiceLanding"; import { servicePageMap } from "@/lib/servicePages";
const service = servicePageMap.cro; export const metadata: Metadata = { title: service.title, description: service.description, alternates: { canonical: "/cro" } }; export default function Page() { return <ServiceLanding service={service} />; }
