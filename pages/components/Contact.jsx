export default function Contact() {
  return (
    <section className="contact-section bg-black" id="contact">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5">
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-2 h-100">
              <div className="card-body text-center">
                <i className="fas fa-file-pdf text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">CV</h4>
                <hr className="my-4 mx-auto" />
                <div className="small text-black-50">
                  <strong>
                    <a href="https://drive.google.com/file/d/1iiksUZQBUTWE7i03QGzFjhYTABebXUr1/view?usp=sharing">
                      Curriculum Vitae ENG
                    </a>
                  </strong>
                </div>
                <div className="small text-black-50">
                  <strong>
                    <a href="https://drive.google.com/file/d/1zkMtODb5PDEMWBHsWhcefYceouwSlp2b/view?usp=sharing">
                      Curriculum Vitae SPA
                    </a>
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-2 h-100">
              <div className="card-body text-center">
                <i className="fas fa-envelope text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Email</h4>
                <hr className="my-4 mx-auto" />
                <div className="small text-black-50">
                  <strong>
                    <a href="mailto:albertokarri@gmail.com">
                      albertokarri@gmail.com
                    </a>
                  </strong>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <div className="card py-2 h-100">
              <div className="card-body text-center">
                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                <h4 className="text-uppercase m-0">Phone</h4>
                <hr className="my-4 mx-auto" />
                <div className="small text-black-50">+34644478994</div>
              </div>
            </div>
          </div>
        </div>
        <div className="social d-flex justify-content-center">
          <a
            className="mx-2"
            href="https://www.linkedin.com/in/alberto-f-carrillo/"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a className="mx-2" href="https://github.com/afcarrillo">
            <i className="fab fa-github"></i>
          </a>
          <a
            className="mx-2"
            href="https://discord.com/users/984467981356630057"
          >
            <i className="fab fa-discord"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
