import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projectsData";

function Projects() {
  return (
    <section className="relative text-center h-dvh p-8 md:p-24 overflow-hidden">
      <motion.h1
        className="relative text-3xl text-white uppercase font-R1 mb-6 z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Featured Projects
      </motion.h1>

      <div className="relative max-w-7xl mx-auto">
        <Swiper
          spaceBetween={30}
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
            {projectsData.map((project) => (
            <SwiperSlide key={project.id}>
                <ProjectCard
                logo={project.image}
                title={project.title}
                description={project.shortDescription}
                detailLink={project.detailLink}
                />
            </SwiperSlide>
            ))}
        </Swiper>

        <div className="swiper-button-prev text-white text-3xl absolute top-1/2 -left-8 z-10 cursor-pointer select-none">
          &lt;
        </div>
        <div className="swiper-button-next text-white text-3xl absolute top-1/2 -right-8 z-10 cursor-pointer select-none">
          &gt;
        </div>
      </div>
    </section>
  );
}

export default Projects;