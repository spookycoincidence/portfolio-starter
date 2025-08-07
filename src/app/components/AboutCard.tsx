export default function AboutCard() {
  return (
  <div
      className={`
       w-full max-w-6xl mx-auto mt-12 text-white
       md:bg-gradient-to-br md:from-gray-900 md:via-gray-800 md:to-gray-900
       md:p-12 md:rounded-3xl md:shadow-xl
      p-4 shadow-none rounded-none
     `}
     >

      <h2 className="text-2xl font-bold mb-3 leading-tight md:text-4xl md:mb-4 text-left whitespace-nowrap">
        Professional Experience
      </h2>

      <div className="space-y-4 md:space-y-6 text-left">
        {/* Example Job 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-1 md:text-2xl md:mb-2">
            Software Developer – Company Name
          </h3>
          <p className="text-gray-400 mb-1 text-xs md:text-base">
            📅 Jan 2022 – Dec 2022 | 📍 Remote
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-xs md:text-base">
            <li>Designed and built scalable APIs using Node.js and TypeScript.</li>
            <li>Worked closely with product teams to improve user experience and performance.</li>
            <li>Implemented CI/CD pipelines and automated testing strategies.</li>
          </ul>
        </div>

        {/* Example Job 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-1 md:text-2xl md:mb-2">
            Full Stack Developer – Tech Company
          </h3>
          <p className="text-gray-400 mb-1 text-xs md:text-base">
            📅 Feb 2021 – Dec 2021 | 📍 Hybrid
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-xs md:text-base">
            <li>Developed internal tools to support business operations.</li>
            <li>Refactored legacy systems to improve maintainability and performance.</li>
            <li>Led a migration from REST to GraphQL APIs.</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-lg font-semibold mb-1 md:text-2xl md:mb-2">Tech Stack</h3>
          <p className="text-gray-300 text-xs md:text-base">
            JavaScript, TypeScript, React, Next.js, Node.js, PostgreSQL, Docker, AWS, Tailwind CSS, GitHub Actions
          </p>
        </div>
      </div>

      {/* Optional Download Button (Comment out if not needed) */}
      {/* <div className="mt-6 md:mt-8 flex justify-start">
        <a
          href="/your-cv.pdf"
          className="bg-gray-800 border border-gray-700 text-white px-3 py-1 rounded shadow hover:bg-gray-700 transition text-xs md:text-sm"
          download
        >
          Download CV 📄
        </a>
      </div> */}
    </div>
  );
}
