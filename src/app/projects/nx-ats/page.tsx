export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 space-y-8">
      {/* Title */}
      <h1 className="text-3xl font-bold">Siemens NX Automated Testing Studio (ATS)</h1>

      {/* Intro summary */}
      <p className="text-muted-foreground">
        Automated Testing Studio (ATS) is a Siemens NX internal tool I worked on as part of 
        the Architecture QA team. Since the project is proprietary, no source code or 
        datasets can be shared, but this page outlines my contributions, videos, and 
        demonstrations of how ATS improved automated validation inside NX.
      </p>

      {/* Technologies Used */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Technologies Used</h2>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
            Python
          </span>
          <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
            NX Open API
          </span>
          <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
            HTML / UI Automation
          </span>
          <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
            Automated Testing Frameworks
          </span>
          <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm">
            QA & Validation
          </span>
        </div>
      </section>

      {/* Media section (videos or GIFs) */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Demonstrations</h2>
        <p className="text-muted-foreground mb-4">
          Below are sample videos and GIFs showcasing ATS test cases in action. 
        </p>
        <div className="grid grid-cols-1 gap-4">
          {/* Example GIF/video slots */}
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Video / GIF 1</span>
          </div>
            <p className="text-muted-foreground mb-4">
          Below are sample videos and GIFs showcasing ATS test cases in action. 
            </p>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Video / GIF 2</span>
          </div>
            <p className="text-muted-foreground mb-4">
            Below are sample videos and GIFs showcasing ATS test cases in action. 
            </p>
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Video / GIF 3</span>
          </div>
        </div>
      </section>

      {/* Key highlights */}
      <section>
        <h2 className="text-xl font-semibold mb-2">Key Contributions</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Designed and executed interactive ATS test cases across multiple NX modules</li>
          <li>Improved automated regression coverage and reduced manual QA effort</li>
          <li>Collaborated with global QA and development teams to integrate ATS workflows</li>
          <li>Mentored interns on scripting, debugging, and validation best practices</li>
        </ul>
      </section>

        {/* Results / Impact */}
        <section>
        <h2 className="text-xl font-semibold mb-2">Results & Impact</h2>
        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Developed <strong>15 interactive</strong> test cases and <strong>17 fully automated</strong> test cases, expanding regression coverage across critical NX modules</li>
            <li>Helped reduce manual QA effort by enabling repeatable, automation-driven validation workflows</li>
            <li>ATS test cases were <strong>showcased to Siemens NX customers</strong>, demonstrating product reliability and innovation</li>
            <li>Improved early bug detection, shortening feedback loops for development teams across multiple release cycles</li>
        </ul>
        </section>


      {/* Closing note */}
      <p className="text-muted-foreground">
        While specific implementation details remain internal to Siemens, this project 
        highlights my ability to work on large-scale enterprise QA infrastructure and 
        deliver practical automation solutions.
      </p>
    </main>
  );
}
