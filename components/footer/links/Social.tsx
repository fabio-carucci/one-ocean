import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

const Social: React.FC = () => {
  return (
    <div className="mt-6 flex gap-[24px] text-oof-blue-50">
      <a
        href="https://x.com/OneOceanFound"
        target="_blank"
        rel="noopener noreferrer"
        className="transition focus:scale-95"
      >
        <FaXTwitter className="size-6" />
      </a>
      <a
        href="https://www.instagram.com/oneoceanfound/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition focus:scale-95"
      >
        <FaInstagram className="size-6" />
      </a>
      <a
        href="https://it.linkedin.com/company/one-ocean-foundation/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition focus:scale-95"
      >
        <FaLinkedinIn className="size-6" />
      </a>
      <a
        href="https://www.facebook.com/oneoceanfound/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition focus:scale-95"
      >
        <FaFacebookF className="size-6" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCRj5LqQYsILPT4thARV4syA"
        target="_blank"
        rel="noopener noreferrer"
        className="transition focus:scale-95"
      >
        <FaYoutube className="size-6" />
      </a>
    </div>
  );
};

export default Social;
