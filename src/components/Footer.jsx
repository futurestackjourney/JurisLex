import React from "react";

const Footer = () => {
  return (
    <footer className="bg-surface text-primary">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* <!-- Firm Info --> */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-3">
            Hussain Employment Law
          </h3>
          <p className="text-sm leading-relaxed text-primary-dark">
            A boutique employment law firm providing strategic, results-driven
            legal services to individuals and businesses.
          </p>
        </div>

        {/* <!-- Practice Areas --> */}
        <div>
          <h4 className="text-sm font-semibold text-primary uppercase mb-3">
            Practice Areas
          </h4>
          <ul className="space-y-2 text-sm ">
            <li className="text-zinc-600 hover:text-primary-dark">
              Employment Litigation
            </li>
            <li className="text-zinc-600 hover:text-primary-dark">
              Workplace Disputes
            </li>
            <li className="text-zinc-600 hover:text-primary-dark">
              Employer Advisory
            </li>
            <li className="text-zinc-600 hover:text-primary-dark">
              Employee Representation
            </li>
          </ul>
        </div>

        {/* <!-- Quick Links --> */}
        <div>
          <h4 className="text-sm font-semibold text-primary uppercase mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-zinc-600 hover:text-primary-dark">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-zinc-600 hover:text-primary-dark">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-zinc-600 hover:text-primary-dark">
                Insights
              </a>
            </li>
            <li>
              <a href="#" className="text-zinc-600 hover:text-primary-dark">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* <!-- Contact --> */}
        <div>
          <h4 className="text-sm font-semibold text-primary uppercase mb-3">
            Contact
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Email: info@hussainemploymentlaw.com</li>
            <li>Phone: +1 (000) 000-0000</li>
            <li>By Appointment Only</li>
          </ul>
        </div>
      </div>

      {/* <!-- Bottom Bar --> */}
      <div className="border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-xs text-muted">
          <p>
            © <span id="year"></span> Hussain Employment Law. All rights
            reserved.
          </p>
          <p>Founded by Ashar Hussain</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
