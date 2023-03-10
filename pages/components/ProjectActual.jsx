"use client";
import Image from "next/image";

export default function ProjectActual({ project }) {
  return (
    <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
      <div className="col-xl-8 col-lg-7">
        <Image
          className="img-fluid mb-3 mb-lg-0"
          src={project.image}
          alt="screenshot"
          placeholder="blur"
        />
      </div>
      <div className="col-xl-4 col-lg-5">
        <div className="featured-text text-center text-lg-start">
          <h4>{project.title}</h4>
          <p className="text-black-50 mb-2">{project.description}</p>
          <p className="stack-b mb-4">{project.stack}</p>
          <a className="repository" href={project.link}>
            Repository <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
