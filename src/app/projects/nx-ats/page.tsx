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
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          Below are sample GIFs showcasing ATS test cases in action.
        </p>

        <div className="space-y-10">
          {/* Demo 1 */}
          <figure>
            <figcaption className="mb-3 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              Checking <strong>five display modes</strong> while the model is rotating.<br />
              Left side shows the real assembly, right side displays the mirrored assembly being tested.<br />
              We are verifying that the mirrored assembly renders correctly across modes.<br />
              <em>Test starts at 0:18</em>
            </figcaption>
            <div className="rounded-xl overflow-hidden border bg-gray-50 dark:bg-gray-900">
              <video
                src="/projects/nx-ats/nx-ats-demo1.mkv"
                controls
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </figure>


          {/* Demo 2 */}
          <figure>
            <figcaption className="mb-3 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              Switching from <strong>Wireframe → Shaded → Shaded with Edges</strong> display modes,<br />
              while ensuring that all HD3D tags remain visible and correctly placed.
            </figcaption>
            <div className="rounded-xl overflow-hidden border bg-gray-50 dark:bg-gray-900">
              <img
                src="/projects/nx-ats/nx-ats-demo2.gif"
                alt="ATS Demo 2 — display mode transitions with HD3D tags"
                className="w-full h-full object-cover"
              />
            </div>
          </figure>

          {/* Demo 3 */}
          <figure>
            <figcaption className="mb-3 text-base leading-relaxed text-gray-800 dark:text-gray-200">
              Verifying <strong>HD3D tag placement</strong> consistency while rotating the assembly,<br />
              ensuring accurate positioning regardless of viewing angle.
            </figcaption>
            <div className="rounded-xl overflow-hidden border bg-gray-50 dark:bg-gray-900">
              <img
                src="/projects/nx-ats/nx-ats-demo3.gif"
                alt="ATS Demo 3 — HD3D tag placement verification"
                className="w-full h-full object-cover"
              />
            </div>
          </figure>
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
            <li>Developed <strong>15 interactive</strong> and <strong>17 fully automated</strong> test cases, expanding coverage across critical NX modules</li>
            <li>Helped reduce manual QA effort by enabling repeatable, automation-driven validation workflows</li>
            <li>ATS test cases were <strong>showcased to Siemens NX customers</strong>, demonstrating product capabilities</li>
            <li>Improved early bug detection, shortening feedback loops for dev teams across multiple releases</li>
        </ul>
        </section>

      {/* Divider */}
      <hr className="my-6 border-t border-gray-300 dark:border-gray-700" />

      {/* Closing note */}
      <p className="text-muted-foreground">
        While specific implementation details remain internal to Siemens DISW, this project 
        highlights my ability to work on large-scale enterprise QA infrastructure and 
        deliver practical automation solutions.
      </p>
    </main>
  );
}
