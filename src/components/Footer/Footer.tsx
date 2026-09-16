import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
function Footer() {
const footerLinks = {
    Explore: [
    { name: "Home", to: "/" },
    { name: "Articles", to: "/articles" },
    { name: "Categories", to: "/categories" },
    { name: "Trending", to: "/trending" },
    ],
    Resources: [
    { name: "About Us", to: "/about" },
    { name: "Authors", to: "/authors" },
    { name: "Contact", to: "/contact" },
    { name: "FAQ", to: "/faq" },
    ],
    Legal: [
    { name: "Privacy Policy", to: "/privacy" },
    { name: "Terms & Conditions", to: "/terms" },
    { name: "Cookie Policy", to: "/cookies" },
    ],
};
return (
    <footer className="border-t border-white/10 bg-[#0b0f14] text-white">
    <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        {/* Top section */}
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
        {/* Brand */}
        <div className="max-w-md">
            <Link to="/" className="inline-flex items-center">
            <img
                src={logo}
                width="70"
                height="50"
                alt="DevUI"
                className="object-contain"
            />
            </Link>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight">
            Ideas worth reading.
            </h2>
            <p className="mt-3 text-sm leading-6 text-gray-400">
            Discover thoughtful articles, practical tutorials, and fresh ideas
            from developers and creators.
            </p>
            {/* Newsletter */}
            <div className="mt-7">
            <p className="mb-3 text-sm font-medium text-gray-200">
                Subscribe to our newsletter
            </p>
            <form className="flex max-w-md overflow-hidden rounded-lg border border-white/10 bg-white/4">
                <input
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-gray-500"
                />
                <button
                type="submit"
                className="m-1 rounded-md bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-gray-200"
                >
                Subscribe
                </button>
            </form>
            </div>
        </div>
        {/* Links */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
                <h3 className="mb-5 text-sm font-semibold text-white">
                {category}
                </h3>
                <ul className="space-y-3">
                {links.map((item) => (
                    <li key={item.name}>
                    <Link
                        to={item.to}
                        className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                        {item.name}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
            ))}
        </div>
        </div>
        {/* Divider */} <div className="my-10 h-px bg-white/10" />
        {/* Bottom */}
        <div className="flex flex-col gap-5 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
        <p> © {new Date().getFullYear()} DevUI. All rights reserved. </p>
        <div className="flex items-center gap-5">
            <a
            href="#"
            className="transition-colors hover:text-white"
            aria-label="GitHub"
            >
            GitHub
            </a>
            <a
            href="#"
            className="transition-colors hover:text-white"
            aria-label="Twitter"
            >
            Twitter
            </a>
            <a
            href="#"
            className="transition-colors hover:text-white"
            aria-label="LinkedIn"
            >
            LinkedIn
            </a>
        </div>
        </div>
    </div>
    </footer>
);
}
export default Footer;
