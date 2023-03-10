import Image from "next/image";

export default function ProjectItem({ project, i }) {
  return project ? (
    <div
      className={
        i % 2
          ? "row gx-0 mb-5 mb-lg-0 justify-content-center"
          : "row gx-0 mb-5 mb-lg-0 justify-content-center"
      }
    >
      <div className="col-lg-6">
        <Image
          className="img-fluid"
          src={project.image}
          alt="screenshot"
          placeholder="blur"
        />
      </div>
      <div className={i % 2 ? "col-lg-6 order-lg-first" : "col-lg-6"}>
        <div className="bg-black text-center h-100 project">
          <div className="d-flex h-100">
            <div
              className={
                i % 2
                  ? "project-text w-100 my-auto text-center text-lg-end"
                  : "project-text w-100 my-auto text-center text-lg-start"
              }
            >
              <h4 className="text-primary">{project.title}</h4>
              <p className="mb-2 text-white-50">{project.description}</p>
              <p className="stack-w mb-4">{project.stack}</p>
              <a className="repository" href={project.link}>
                Repository <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
