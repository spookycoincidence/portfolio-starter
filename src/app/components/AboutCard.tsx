export default function AboutCard() {
  return (
    <div
      className={`
        w-full max-w-6xl mx-auto mt-12 text-white
        md:bg-gradient-to-br md:from-gray-900 md:via-gray-800 md:to-gray-900
        md:p-12 md:rounded-3xl md:shadow-xl
        p-0 shadow-none rounded-none
      `}
    >
      <h2 className="text-2xl font-bold mb-3 leading-tight md:text-4xl md:mb-4 text-left whitespace-nowrap">
        Professional Experience
      </h2>

      <div className="space-y-6 text-left">
        {/* Example Job 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-1 md:text-2xl md:mb-2">
            Software Developer – Company Name
          </h3>
          <p className="text-gray-400 mb-1 text-xs md:text-base">
            📅 Start Date – End Date | 📍 Location
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-xs md:text-base">
            <li>Short description of your responsibilities and achievements.</li>
            <li>Mention technologies or tools used.</li>
            <li>Highlight improvements or impact you had.</li>
          </ul>
        </div>

        {/* Example Job 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-1 md:text-2xl md:mb-2">
            Full Stack Developer – Another Company
          </h3>
          <p className="text-gray-400 mb-1 text-xs md:text-base">
            📅 Start Date – End Date | 📍 Location
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1 text-xs md:text-base">
            <li>Example: Developed and maintained internal tools.</li>
            <li>Worked on modernizing legacy codebases.</li>
            <li>Improved performance and UX across platforms.</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-lg font-semibold mb-1 md:text-2xl md:mb-2">Tech Stack</h3>
          <p className="text-gray-300 text-xs md:text-base">
            Example: JavaScript, React, Next.js, Node.js, Docker, AWS, PostgreSQL, Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
}
