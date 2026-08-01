const Footer = () => {
    return (
        <footer className="border-t border-slate-200 bg-slate-50">
            <div className="text-center mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-600 md:flex-row">
                {/* Copyright */}
                <p> © {new Date().getFullYear()} DevSpace. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;