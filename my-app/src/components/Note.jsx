import { useState } from "react";
const slides = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB8Lr6DIDlpPIvsSaV1upKO8d0Lk4WZXZ19g6xZyiWSj2AU3JEa-nsLEqW_BucErSJxZCOwdMYbfw_ySjoXOsp2R3YZ9n7zegionN8yVp-mpLpJQTbvKEtSR4BsaLGZ3yu_E-fT2JLggOVoFRSBbC3hRpOxHdC9fhW1lKTbAoygzGfVrYUF630CW-lGJnizlxkNnSuBigqIdVsVWvdLrY8Kr4EeJcX9vNrjVPWg6lzMkCywLsU8S8nNak5gFuA24NGQBRiya7XFIPk",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDQDq3FmG-YoLBO5AVji80srlVk8oNuQ4HZAfdmw5FSgtnN2208W0j3_LiTD8d7LU-L0NhrqWw7oQP6jVtg6vgEKtBGSgDua0PIHMGIoKb4CMGb0MwLQYKRIi0m6x6Lei4j95eAC3QpI0q21wkbR61zL3orLojCCXBcEbGkiHoRHIisWJQRXsEcmYvZUls6JMTyvJrGXqus7Q5eQfQCt02vlFY2naD6CaKbYQTOXMxnT0buUG6ZW1ZuvIefxyRB-R5y90P2p9XKYSw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAiwtSCc2QomrjRTrepp9BBQwjHu2g5Dh8-xwLzGfiexJE-YZ7rr7Uq5rzxsAjjyhO-PbFeKq1hWhIZstRR4ic9OEKXEs7Zo04s8o3OHOI89-XCG-9JfQbG2ByTpweRkHVuyyYMPOC8uH8NuRqYJKycVyv0hK_Ad93jw3hQkjMzyZPoA78TWcqALTIabigr0UhRGXTFY9oLkb4di2lwzNF5vT41rvHmY5iTHtE1pC5DnQskmft5pyLcxkT0og990rAQ1IyKXowBB1M",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBWqIr_UxMcTlxe6yUf7TRhdcflWMfJR1oYbQBJfDutTaD1QHTqqU5EOy8nOZwZy7RFicVT4gVlqNOET1d0FfEAxMU2VgrPHZXR83ME1iYU9BqJDb9GI8YezLDlj7-ZvSpLX-fs70nansJbwovg37gbhbuCNUg2zYL_kPCwvh86flAgzoA837YvOXPfMKbKoKN2dl8WfUcVH7wBXhLxFtxbf1-jgLbw-Cdvo3HRU5Nv67zScy94KnK9_4ZKeKHbmKq6GWrJvNa_Fm8",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAr-dhwFssq51TdOaVW3AAw37Y_wrRI_dj_GEFZuiB350oOOhqlYLDSWpvtMahHzLEynLMPe2dfMAF8pwDqmRShgfV836SE4khxofTptxnwXH-F-RaT-LgPRqErpDS51FyC3YvRxqlU4OxJTo8KB5uJEsl3qrdjOzqfJF_vYGXYPYqzk_2dBZwZ9MOqfXM-bPmPMsOJNyISgIhh3LNdzIMeZcSHIJGrRLip337ZSnyE058SQH2WyXYoZRlZRS1aIcY-nrEoWYvKD84",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDp5Tq759W_rgL9h7AR_yqL1vFT9INfpPMJ7JnGUknOm3GFeDFeILKnURmdcDV319vAvllC2-VmYEqsuVjkuqZ3uTi0kctEp7V8oZHTqPIh1qn9pySqaCHVTgPqfoUEIuOsmltarj_F1ik6LofEIP1cdVeDWRIHpB2cSQR50vfuPuieRSzlDGmaAY0-IeefJg_vdN0qqy6FL7_0dCmNKgo2mtoMUWFgAIke1alktyEp6ZvS2TMi2vkvUeTU0fc5oFPxMOL_gj1gHyo",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBa25-snfInxisdwrospvQuWAoCdzxrHq8bGglZ0tUe5jy82XG5Aq_Yg6e2eqfMQt4X0qu8SCQblKJipNg3YW0n_4XUGetpVEeZm3N7PpjiJJV8uSvvH102SyZBRKesHD6mKBLBd4evkym191FQO27P-KpumW4u_NUdAq1X_7HR4elrxw54yqAtCfTgDxt48PkMoNYq8lXShWmw8jQrqznZz-czen7hUhsJSstCBGM21AwhHxFYkhWoJ7EV9Tgxf0j_fXP2IHaKCxw",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCbVBBj52H5jPOmctJK6q7-5LxBR1vsSFdQNmLthgd81d9GgKXeLqt5AiJl77QtIMyVW8bMGqqf-JIVZRUQcGpzHzeB7l9yUov3mQlArebz1q7cPpmsEyjmwCfCm7z0LEtiHcNx535FpxQJCt5ppA343a3wllXqzo191uLQ5tCAtDBte6haRezIGSjSpEk3d41-JEYGSLTAEM0yQgtntDayU6Tcbcb1eoVdiNLAh29cLj3d9XoSAJEC0QVru7T7KAQZ7awUQx4B7bU",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD2BG7IuflFV2jr3yW53gvbytmKhCydszMekZBJCLt9iSGpmWebGfzsPU0PI7nO54uYplZpslW5VglPtMXn7WDgELF3ZvBeqMcnpgE2ioorqRiz0SvK1V6_ItWIfZD4jkJGy097wIsDeYG7vToFt8XLU0Pu9XRz7qcu2pnphl0P9NuPcbqwRCr_A909pvGfvFDnjSQFRy5ddw7DOhyZZktIe3whWpt--CmkOxPAsMIBfNGz0E35731Pi4gngaXBccmmbH5plYu6U_Q",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB9WmcEtClsMd2hTMNXQ777HsMddfSHE_XmoboRGdmQMMhaEQZvAEJ951qECIwhbjVz5mPMiQcbgvH8Jj6QtMGtxaoPNfOOqRmA4foWoY4dqIll64rNbya75pMfJA78FdBl6B9UnX_BhyfNdtAUFn_-z9BMzYvRwrqL1E7InMkn7Vqrr_7IhzcdVE6s5sZ81ahBmAvRkqyBttuAtZXm5ppvwVEUUxyk24aEqnEinxfU0HNtW7P-QrRM_kz6CpqOo51tsFFzerAU6lA",
];
const Note = () => {
  // Store current slide index
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  // Store notes per slide as an object: { slideIndex: noteText }
  const [notes, setNotes] = useState({});

  // Handle textarea change
  const handleNoteChange = (e) => {
    setNotes({
      ...notes,
      [currentSlideIndex]: e.target.value,
    });
  };

  // Current note text for selected slide
  const currentNote = notes[currentSlideIndex] || "";

  return (
    <div className="flex max-w-[960px] gap-8 p-4 mx-auto">
      {/* Left side: notes */}
      <div className="flex flex-col flex-1 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#111518] mb-1">Notes</h1>
          <p className="text-sm text-[#617789]">Last edited 2 days ago</p>
        </div>

        <textarea
          className="resize-none p-4 rounded-lg border border-[#dbe1e6] h-64 text-[#111518] text-base font-normal leading-normal"
          placeholder={`Write your notes for Slide ${
            currentSlideIndex + 1
          } here...`}
          value={currentNote}
          onChange={handleNoteChange}
        />

        <div className="flex gap-3">
          <button
            className="flex-1 bg-[#f0f2f4] text-[#111518] rounded-full h-10 font-bold"
            onClick={() => {
              // Example regenerate logic (replace with real AI call)
              alert("Regenerate with AI clicked!");
            }}
          >
            Regenerate with AI
          </button>
          <button
            className="flex-1 bg-[#0f7fdb] text-white rounded-full h-10 font-bold"
            onClick={() => {
              // Example save logic, could save notes somewhere
              alert(
                `Saved notes for Slide ${
                  currentSlideIndex + 1
                }:\n${currentNote}`
              );
            }}
          >
            Save
          </button>
        </div>
      </div>

      {/* Right side: slide preview + thumbnails */}
      <div className="flex flex-col gap-4 w-[400px]">
        {/* Big Slide image */}
        <h1 className="text-3xl font-bold text-[#111518] mb-1">Slides</h1>
        <div
          className="aspect-video rounded-lg bg-center bg-no-repeat bg-cover border border-[#dbe1e6]"
          style={{ backgroundImage: `url(${slides[currentSlideIndex]})` }}
        ></div>

        {/* Thumbnails */}
        <div className="flex gap-3 overflow-x-auto">
          {slides.map((src, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlideIndex(index)}
              className={`cursor-pointer rounded-md border-4 ${
                index === currentSlideIndex
                  ? "border-[#0f7fdb]"
                  : "border-transparent hover:border-[#90caf9]"
              }`}
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "80px",
                height: "45px",
                flexShrink: 0,
              }}
              title={`Slide ${index + 1}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Note;
