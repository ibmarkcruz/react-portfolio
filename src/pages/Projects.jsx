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
    <section className="relative text-center px-4 md:px-8 py-12 h-auto overflow-hidden">
      <motion.h1
        className="relative text-3xl md:text-5xl xl:text-6xl text-white uppercase font-R1 mb-12 z-10 title"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Featured Projects
        <div className="aurora">
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
          <div className="aurora__item"></div>
        </div>
      </motion.h1>

      <div className="relative max-w-7xl mx-auto my-8 px-4 md:px-0">
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
            320: { slidesPerView: 1 },
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
      </div>
    </section>
  );
}

export default Projects;
