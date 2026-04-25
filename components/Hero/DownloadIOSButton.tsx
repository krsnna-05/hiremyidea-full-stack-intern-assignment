const DownloadIOSButton = () => {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full bg-[#253612] px-6 py-3 text-sm md:text-base font-medium text-white shadow-[0_8px_24px_rgba(37,54,18,0.26)] transition-colors hover:bg-[#2f4318]"
    >
      <span aria-hidden="true" className="text-[34px] leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M16.12 2.34c.02 1.34-.5 2.34-1.12 3.06-.65.75-1.7 1.33-2.74 1.24-.13-1.12.37-2.27 1.01-3 .63-.72 1.78-1.28 2.85-1.3z" />
          <path d="M20.77 17.39c-.49 1.13-.72 1.64-1.36 2.66-.89 1.43-2.14 3.2-3.68 3.22-1.37.01-1.72-.89-3.58-.88-1.86.01-2.25.89-3.62.88-1.54-.02-2.72-1.61-3.62-3.04-2.52-4-2.78-8.69-1.23-11.09 1.1-1.71 2.84-2.72 4.48-2.72 1.67 0 2.72.9 4.09.9 1.33 0 2.14-.9 4.08-.9 1.46 0 3.01.8 4.11 2.19-3.6 1.97-3.01 7.12.33 8.78z" />
        </svg>
      </span>
      <span>Download for iOS</span>
    </button>
  );
};

export default DownloadIOSButton;
