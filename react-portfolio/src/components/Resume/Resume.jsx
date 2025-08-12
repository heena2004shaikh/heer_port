import { useState, useEffect } from "react";
import { bggradient } from "../../constants/index";
import resume from "../../assets/pdf/Heena.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "motion/react";

// Log the version to verify
console.log("PDF.js version:", pdfjs.version);

// Use the matching version
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

const Resume = () => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(window.innerWidth);

  // Update the width on window resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <section className="flex text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-800">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="h-full w-full bg-slate-950">
          <div className={bggradient}></div>
        </div>
      </div>
      <motion.div
        // Responsive Pdf Clsses
        className="container flex flex-col justify-center items-center mt-28 overflow-auto mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        
        
          {/* First download button */}
          <a href={resume} download>
            <button className="mb-7 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-purple-600 px-6 font-medium text-neutral-200">
              <span>Download</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
            </button>
          </a>

          {/* PDF Viewer */}
          <Document
            file={resume}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<span style={{ color: "#D8B4FE" }}>Loading PDF...</span>}
          >
            {Array.from({ length: numPages }, (_, index) => index + 1).map(
              (page) => (
                <Page
                  key={page}
                  className="mt-3"
                  pageNumber={page}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  scale={width > 786 ? 1 : 0.5} // Adjust scale based on width
                />
              )
            )}
          </Document>

          {/* Second download button */}
          <a href={resume} download>
            <button className="mt-7 mb-8 group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-purple-600 px-6 font-medium text-neutral-200">
              <span>Download</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
                <div className="relative h-full w-8 bg-white/20"></div>
              </div>
            </button>
          </a>
        
      </motion.div>
    </section>
  );
};

export default Resume;
