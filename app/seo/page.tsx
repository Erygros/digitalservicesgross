import type { Metadata } from "next"; import { ServiceLanding } from "@/components/ServiceLanding"; import { servicePageMap } from "@/lib/servicePages";
const service = servicePageMap.seo; export const metadata: Metadata = { title: service.title, description: service.description, alternates: { canonical: "/seo" } }; export default function Page() { return <ServiceLanding service={service} />; }
