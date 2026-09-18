import React from "react";
import { Link } from "gatsby";

const Footer = ({ facebook, instagram, whatsApp, email }) => (
  <footer className="site-footer bg-secondary-color text-white border-t border-white/20">
    <div className="max-w-6xl mx-6 md:mx-10 xl:mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10">
        <div>
          <Link to="/" className="font-lato font-bold text-2xl">
            Punta Cana Tour Store
          </Link>
          <p className="text-sm leading-7 text-slate-300 mt-4 max-w-sm">
            Tours, travel planning and transport in Punta Cana, Dominican
            Republic. Information to help you choose. Services to help you get
            there.
          </p>
        </div>
        <nav aria-label="Footer travel services">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary-color mb-5">
            Explore & plan
          </h2>
          <div className="grid gap-3 text-sm text-slate-200">
            <Link to="/tours/">Tours & excursions</Link>
            <Link to="/transfers/punta-cana/">Airport transfers</Link>
            <Link to="/hotels/">Hotels & hostels</Link>
            <Link to="/carrental/">Car rental</Link>
            <Link to="/transfers/flights/">Helicopter transfers</Link>
            <Link to="/blog/">Punta Cana travel guide</Link>
          </div>
        </nav>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary-color mb-5">
            Talk to us
          </h2>
          <div className="grid gap-3 text-sm text-slate-200 break-words">
            <Link to="/contact/">Contact our team</Link>
            <Link to="/about/">About Punta Cana Tour Store</Link>
            {email && <a href={"mailto:" + email}>{email}</a>}
            {whatsApp && (
              <a
                href={
                  "https://api.whatsapp.com/send?phone=" +
                  encodeURIComponent(whatsApp)
                }
              >
                WhatsApp enquiries
              </a>
            )}
            <div className="flex gap-5 pt-2">
              {facebook && (
                <a href={facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              )}
              {instagram && (
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between gap-5 text-xs text-slate-300">
        <p>© {new Date().getFullYear()} Punta Cana Tour Store</p>
        <nav
          aria-label="Legal information"
          className="flex flex-wrap gap-x-5 gap-y-3"
        >
          <Link to="/information/cancellation/">Cancellation policy</Link>
          <Link to="/information/privacy/">Privacy</Link>
          <Link to="/information/termsconditions/">Terms & conditions</Link>
        </nav>
      </div>
      <p className="text-xs text-slate-400 mt-5">
        Built by{" "}
        <a
          href="https://dr-webstudio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4"
        >
          DR Web Studio
        </a>
      </p>
    </div>
  </footer>
);
export default Footer;
