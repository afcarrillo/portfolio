import Image from "next/image";
import bgHeadPic from "../../public/img/bg-masthead.jpg";
import demoPic from "../../public/img/demo-image-01.jpg";

export default function Projects() {
  return (
    <section className="projects-section bg-light" id="projects">
      <div className="container px-4 px-lg-5">
        {/* <!-- Featured Project Row--> */}
        <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
          <div className="col-xl-8 col-lg-7">
            <Image
              className="img-fluid mb-3 mb-lg-0"
              src={bgHeadPic}
              alt="bgHeadPic"
              placeholder="blur"
            />
          </div>
          <div className="col-xl-4 col-lg-5">
            <div className="featured-text text-center text-lg-left">
              <h4>Mi Turno Web</h4>
              <p className="text-black-50 mb-0">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus ratione eum vitae dicta, alias, architecto aliquid
                sint, earum doloremque laborum optio consequatur adipisci.
                Voluptas dolorem nemo quas corporis cumque at?
              </p>
            </div>
          </div>
        </div>
        {/* <!-- Project One Row--> */}
        <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
          <div className="col-lg-6">
            <Image
              className="img-fluid"
              src={demoPic}
              alt="demoPic"
              placeholder="blur"
            />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">Net Security</h4>
                  <p className="mb-0 text-white-50">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Totam hic accusamus at nam, pariatur excepturi iure dolor
                    sint aspernatur. Dolore sequi ab placeat possimus, et sunt
                    eum aliquam molestias fugiat!
                  </p>
                  <hr className="d-none d-lg-block mb-0 ms-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Project Two Row--> */}
        <div className="row gx-0 justify-content-center">
          <div className="col-lg-6">
            <Image
              className="img-fluid"
              src={demoPic}
              alt="demoPic"
              placeholder="blur"
            />
          </div>
          <div className="col-lg-6 order-lg-first">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-right">
                  <h4 className="text-white">E-commerce</h4>
                  <p className="mb-0 text-white-50">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa asperiores vitae blanditiis explicabo praesentium non,
                    et laborum sequi omnis similique eum, aspernatur excepturi
                    cum ipsum in rerum quidem possimus. Tempore.
                  </p>
                  <hr className="d-none d-lg-block mb-0 me-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Project One Row--> */}
        <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
          <div className="col-lg-6">
            <Image
              className="img-fluid"
              src={demoPic}
              alt="demoPic"
              placeholder="blur"
            />
          </div>
          <div className="col-lg-6">
            <div className="bg-black text-center h-100 project">
              <div className="d-flex h-100">
                <div className="project-text w-100 my-auto text-center text-lg-left">
                  <h4 className="text-white">TMDB</h4>
                  <p className="mb-0 text-white-50">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Totam hic accusamus at nam, pariatur excepturi iure dolor
                    sint aspernatur. Dolore sequi ab placeat possimus, et sunt
                    eum aliquam molestias fugiat!
                  </p>
                  <hr className="d-none d-lg-block mb-0 ms-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
