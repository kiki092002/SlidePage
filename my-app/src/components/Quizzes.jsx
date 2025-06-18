const Quiz = () => {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex flex-wrap gap-2 p-4">
          <a
            className="text-[#617689] text-base font-medium leading-normal"
            href="#"
          >
            Quizzes
          </a>
          <span className="text-[#617689] text-base font-medium leading-normal">
            /
          </span>
          <span className="text-[#111518] text-base font-medium leading-normal">
            Quiz 1
          </span>
        </div>
        <h2 className="text-[#111518] tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">
          Quiz 1
        </h2>
        <div className="flex flex-col gap-3 p-4">
          <div className="flex gap-6 justify-between">
            <p className="text-[#111518] text-base font-medium leading-normal">
              Question 1 of 5
            </p>
          </div>
          <div className="rounded bg-[#dbe1e6]">
            <div
              className="h-2 rounded bg-[#111518]"
              style={{ width: "20%" }}
            ></div>
          </div>
        </div>
        <div className="p-4">
          <div
            className="bg-cover bg-center flex flex-col items-stretch justify-end rounded-xl pt-[132px]"
            style={{
              backgroundImage:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD0GnOQpMw4jCcocuO7NOPyWLkhgbSjx7Iju0FzP_B-cpFZHOA-n2cXG3ZOZ5nXPSHV_R56d2Uz2S0S7qi4P0aODTCnDTcD1tcANC1fv1ixJIQALGfbZPdvADs531lmEvYr_UVavS2uyOfZwDT6JNA_Xfp-cQf3vEV91kTpwAZ-JPDUBPSVh-NzZr_Dw8aVk65ox5eBLwHy_DQDZzP53CZq_uBfD4hsMIu3q2PmiwpQ9WFkri7pCguwsTDb9P2CaDApiwsdbQU-65c")',
            }}
          >
            <div className="flex w-full items-end justify-between gap-4 p-4">
              <div className="flex max-w-[440px] flex-1 flex-col gap-1">
                <p className="text-white tracking-light text-2xl font-bold leading-tight max-w-[440px]">
                  What is the main topic of this slide?
                </p>
                <p className="text-white text-base font-medium leading-normal">
                  Click to reveal the answer
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-stretch">
          <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-between">
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#f0f2f4] text-[#111518] text-sm font-bold leading-normal tracking-[0.015em]"
              type="button"
            >
              <span className="truncate">Previous</span>
            </button>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1383eb] text-white text-sm font-bold leading-normal tracking-[0.015em]"
              type="button"
            >
              <span className="truncate">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Quiz;
