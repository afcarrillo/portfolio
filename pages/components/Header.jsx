import Image from "next/image";
import portrait from "../../public/img/portrait.png";

export default function Header() {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <h1 className="mx-auto my-0 text-uppercase">Alberto Carrillo</h1>
            <h2 className="text-primary mx-auto mt-2 mb-5">
              Full Stack Developer
            </h2>
            <Image
              className="img-fluid"
              src={portrait}
              alt="portrait"
              placeholder="blur"
              width="200"
              height="200"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
