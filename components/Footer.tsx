export default function Footer() {
  return (
    <footer className="bg-navy-900 text-offwhite/70 py-10 px-4 text-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2">
            <a className="hover:text-offwhite/90" href="/">
              Home
            </a>
            <a className="hover:text-offwhite/90" href="/#products">
              Products
            </a>
            <a className="hover:text-offwhite/90" href="/#capabilities">
              Capabilities
            </a>
            <a className="hover:text-offwhite/90" href="/#contact">
              Contact
            </a>
            <a className="hover:text-offwhite/90" href="/privacy">
              Privacy
            </a>
          </div>
          <p className="text-center md:text-left">
            &copy; 2026 Sapiens AeroComp Pvt. Ltd. All rights reserved. Pune, India.{" "}
            <br/> Created by{" "}
            <a href="mailto:official.creativedevs@gmail.com">Creativedevs</a>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
}

