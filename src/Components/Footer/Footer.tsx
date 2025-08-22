import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type IconLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
  external?: boolean;
};

const IconLink: React.FC<IconLinkProps> = ({ href, label, children, external }) => (
  <a href={href} aria-label={label} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
    {children}
  </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="text-white mt-20 bg-[#222222ed] py-5" aria-label="Footer">
      <div className="grid grid-cols-1 md:grid-cols-3 text-center gap-4 md:gap-0 items-center">
        <h6 className="font-semibold md:col-span-1 col-span-1">Designed and Developed by Heba Saber</h6>
        <p className="font-semibold col-span-1 md:col-span-1">Copyright © 2025 HS.</p>
        <nav aria-label="Social links" className="flex gap-8 justify-center col-span-1 md:col-span-1">
          <IconLink href="https://www.linkedin.com/in/heba-saber-377033235" label="LinkedIn profile" external>
            <FaLinkedin size={20} className="text-[var(--light-color)]" />
          </IconLink>

          <IconLink href="https://github.com/heba39920/" label="GitHub profile" external>
            <FaGithub size={20} className="text-[var(--light-color)]" />
          </IconLink>

          <IconLink href="mailto:hbhsabr47@gmail.com" label="Email me">
            <MdEmail size={20} className="text-[var(--light-color)]" />
          </IconLink>

          <IconLink href="tel:+201150575025" label="Call me" external={false}>
            <FaPhoneAlt size={20} className="text-[var(--light-color)]" />
          </IconLink>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;