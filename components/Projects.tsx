"use client";

import { SectionHeader } from "./SectionHeader";
import { AccordionGallery } from "./AccordionGallery";
import { projectsData } from "@/data/SiteSectionData";

export function Projects() {
  const galleryItems = projectsData.items.map((p) => ({
    image: p.image,
    label: p.title,
    link: p.viewMore.href,
  }));

  return (
    <section id="projects" className="bg-[#edf2fb] py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader data={projectsData} />
        <div className="mt-10">
          <AccordionGallery
            items={galleryItems}
            defaultIndex={2}
            accentColor="#fbe87e"
            overlayColor="#060010"
            textColor="#ffffff"
            height={460}
            gap={10}
            radius={12}
            expandRatio={0.52}
            orientation="horizontal"
            trigger="hover"
            showLabels={true}
            grayscale={true}
          />
        </div>
      </div>
    </section>
  );
}
