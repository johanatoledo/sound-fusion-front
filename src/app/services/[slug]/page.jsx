import { notFound } from "next/navigation";
import  ServiceDetail  from "@/components/services/ServiceDetail";
import { getServiceBySlug, services, } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params, }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Sound Fusion Entertainment",
    };
  }

  return {
    title: `${service.title} | Sound Fusion Entertainment`,
    description: service.shortDescription,
    alternates: { canonical: `/services/${service.slug}`, },
    openGraph: { 
      title: `${service.title} | Sound Fusion Entertainment`,
      description: service.shortDescription,
      type: "website",
      images: [
        {
          url: service.image,
          alt: service.imageAlt,
        },
      ],
    },
  };
}

export default async function ServicePage({ params, }) {
  const { slug } = await params;

  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-sound-black">
      <ServiceDetail service={service} />
    </main>
  );
}