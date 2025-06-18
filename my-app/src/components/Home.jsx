import React from "react";
export default function Home() {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="@container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl items-center justify-center p-4"
            style={{
              backgroundImage:
                'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAE8Tv429WFrCnCLQM9oXZC98_dFvw_coMNpjy3zDXjMeDbDmoZimEd-gY4RnJk8YKj7FcZ3C8KoQGXEm23iqiUh8aJCGyNFL71l5soInb-lqkMecX-ljfcl9T0mIw5dAS-hnNO7Qq7bx8yhOSa1TU_yF7cgTFkqLoIjkLbkVjzsK_889BCDCWxGzcRJlTn0rgaA4MNrMTfOjl-uvQ4BCj-R1V8SG6Ux0ctgJ6Hzyow7fYAqPTOhq47lQAdSYkF7rIiJ09Bs_tcZD0")',
            }}
          >
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                Upload your slides and start studying
              </h1>
              <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base">
                Upload your presentation slides and let SlideSage help you study
                smarter, not harder.
              </h2>
            </div>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1085de] text-white text-sm font-bold tracking-[0.015em] @[480px]:text-base">
              <span className="truncate">Upload Slides</span>
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Recent Uploads
      </h2>
      <div className="flex flex-col p-4">
        <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-[#dbe1e6] px-6 py-14">
          <div className="flex max-w-[480px] flex-col items-center gap-2">
            <p className="text-[#111518] text-lg font-bold text-center">
              No recent uploads
            </p>
            <p className="text-[#111518] text-sm font-normal text-center">
              Your recent uploads will appear here. Start by uploading your
              slides.
            </p>
          </div>
          <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#f0f3f4] text-[#111518] text-sm font-bold tracking-[0.015em]">
            <span className="truncate">Upload Slides</span>
          </button>
        </div>
      </div>

      <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Tips for Effective Studying
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        {/* Tip Card 1 */}
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe1e6] bg-white p-4 flex-col">
          <div className="text-[#111518]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111518] text-base font-bold leading-tight">
              Organize Your Slides
            </h2>
            <p className="text-[#617889] text-sm font-normal">
              Group related slides together to create a coherent study flow. Use
              SlideSage's organization tools to structure your study materials.
            </p>
          </div>
        </div>
        {/* Tip Card 2 */}
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe1e6] bg-white p-4 flex-col">
          <div className="text-[#111518]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111518] text-base font-bold leading-tight">
              Take Notes Effectively
            </h2>
            <p className="text-[#617889] text-sm font-normal">
              Use the note-taking feature to summarize key points and add
              personal insights directly on your slides. This helps reinforce
              your understanding.
            </p>
          </div>
        </div>
        {/* Tip Card 3 */}
        <div className="flex flex-1 gap-3 rounded-lg border border-[#dbe1e6] bg-white p-4 flex-col">
          <div className="text-[#111518]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM96,192H32V64H96a24,24,0,0,1,24,24V200A39.81,39.81,0,0,0,96,192Zm128,0H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h64Z"></path>
            </svg>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[#111518] text-base font-bold leading-tight">
              Review Regularly
            </h2>
            <p className="text-[#617889] text-sm font-normal">
              Schedule regular review sessions to revisit your slides and notes.
              Consistent review is crucial for retaining information and
              mastering the material.
            </p>
          </div>
        </div>
      </div>

      <div className="layout-content-container flex flex-col">
        <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          To Do
        </h2>
        {[
          "Review Chapter 3 Slides",
          "Summarize Key Concepts",
          "Create Study Guide",
        ].map((task, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white px-4 min-h-[72px] py-2"
          >
            <div className="flex size-7 items-center justify-center">
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-[#dbe1e6] border-2 bg-transparent text-[#1085de] checked:bg-[#1085de] checked:border-[#1085de] focus:ring-0 focus:ring-offset-0 focus:border-[#dbe1e6] focus:outline-none"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-[#111518] text-base font-medium leading-normal line-clamp-1">
                {task}
              </p>
              <p className="text-[#617889] text-sm font-normal leading-normal line-clamp-2">
                {index === 0
                  ? "Due Today"
                  : index === 1
                  ? "Due Tomorrow"
                  : "Due Next Week"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
