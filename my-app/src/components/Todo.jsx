import React from "react";

// Task Card Component
const TaskCard = ({ due, title, subject, image }) => (
  <div className="p-4">
    <div className="flex items-stretch justify-between gap-4 rounded-xl">
      <div className="flex flex-col gap-1 flex-[2_2_0px]">
        <p className="text-[#60768a] text-sm">{due}</p>
        <p className="text-[#111518] text-base font-bold">{title}</p>
        <p className="text-[#60768a] text-sm">{subject}</p>
      </div>
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex-1"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  </div>
);

const Section = ({ title, tasks }) => (
  <section>
    <h2 className="text-[#111518] text-[22px] font-bold px-4 pb-3 pt-5">
      {title}
    </h2>
    {tasks.map((task, i) => (
      <TaskCard key={i} {...task} />
    ))}
  </section>
);

// Main Page Component
const ToDoPage = () => {
  const tabLabels = ["All", "In Progress", "Completed"];

  const upcomingTasks = [
    {
      due: "Due Today",
      title: "Review Chapter 3",
      subject: "Math 101",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDim8746MebvStPU4qFUBNgS1CGvNC80rJPS5ptTlKgi2szF6IcSJG_O6kMaXq7O9qcLGoLd0aLTPzRVhNfVZRNgb97xbo71MJJwrFVWhPF3Xfz54SKYTmWSGHm85D22VJzRLzc10dcpdl-lO3xtZVFhBKxB4_TCyETP51EmMTwqSXuJd9Vv-i7NSNjmqAlhmkyp5VL8m08gxvaspA0jZnxzu1Tu4QJTgZkh_r37Mg8g1hKmjLx9PGrXlO44wHunCr9tOi5LKKmsYM",
    },
    {
      due: "Due Tomorrow",
      title: "Outline for History Paper",
      subject: "History 202",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAHQx5dlCjZgWTpzehp0eNMG2d20D1ehSQYy89aSnZIhvchPE4YRviVUL-AljVRlvCf-3j_w51XQ4vrsbPIhQZ0oIkIyK2rUB292xQeAjqOCfBGx1HuXiSIMWHeEolDdaK9CKOMxYIq1u9X8x_c9cVmYs-eJ-S8Vj_sFN9ed0igXTndSWeVy_t87kixo3fB6ex745qMNizXNL3EZLgzxDeyaAz5_OezbQzW1SGhF5vbO9sPYI8pDQ1ed6gfvJPgjJH3SjxaLUSnk_c",
    },
  ];

  const inProgressTasks = [
    {
      due: "Due in 2 Days",
      title: "Readings for English Class",
      subject: "English 101",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDshk5Dg_Q5pz40987t1c3Rbd1-DKoqJGnB-YuGxNtjj1q5EJhfLZmOyC1pO4m5GqyPLZ02hmXW9_RCXZPmaUirodfO2j52esfT8jv4PdKd6EPMP1pvMTPC8rFZsL1YZ-6-YM3FteujkyhmBvFXOqWsU8-7ZocXjImB4KeKsb7CEdzVkTb9rJu0oBGqoUa-dcQcBIF8mAoa_CjpRzy89WbBpkmLxJsWc415xBlIQL1bJPUVa9Gf6yZOVhyV09LXOZ2Zp_L-d6vFQ5E",
    },
    {
      due: "Due in 3 Days",
      title: "Lab Report for Chemistry",
      subject: "Chemistry 101",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCaDfIOH7Be2Pj6jUMWMqFxvVrtEhJkO-OpHhlJc9CaforseQpmSCX00yb1BZp88HnFRaiG9ifQyAELvoLKInI7J3tuEu7DXzx53FWtkWoyku4IM6ViNyq4c1MOop1AFPB4Mtlv3_V90i-nTq06ODwVsbkPANkKHlr-35vDZUZzuRpIIti5oa_0rW5_4NPxUmMDwDzwII-G3SjzEnUCgjlOFiYrbG_by-OzmJpqSZ-7TLm2gNNPo11oPvF4cVPydCYRfSEDf8qNZ1s",
    },
  ];

  const completedTasks = [
    {
      due: "Completed",
      title: "Review Chapter 1",
      subject: "Math 101",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAIAwdOcGrDdgMH1I8jD8mYf6fqsOAms7gF7Y7rdKQY8q9B-19NY5vZBeCMbzWjy5ltLfH4rsK2Jh8akncc7D6VMU03e2IKlxr7dZnzp2xpk__bjTtvfOxlTIcU1yJI6y_82tyvIkfC3AVMHdA6xtFVzn5OO9UqnSE5CcTIKmtbKixHvIBbqjNwjsAW5tO2dl5Bc8TdevToi11kvssp2uoXpG4PMhevlaIixboTxektqwjU2rNF8_NtYxB_49QT7oVDxNy7C8dyA_g",
    },
    {
      due: "Completed",
      title: "Readings for History Class",
      subject: "History 202",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDim8746MebvStPU4qFUBNgS1CGvNC80rJPS5ptTlKgi2szF6IcSJG_O6kMaXq7O9qcLGoLd0aLTPzRVhNfVZRNgb97xbo71MJJwrFVWhPF3Xfz54SKYTmWSGHm85D22VJzRLzc10dcpdl-lO3xtZVFhBKxB4_TCyETP51EmMTwqSXuJd9Vv-i7NSNjmqAlhmkyp5VL8m08gxvaspA0jZnxzu1Tu4QJTgZkh_r37Mg8g1hKmjLx9PGrXlO44wHunCr9tOi5LKKmsYM",
    },
  ];

  return (
    <div
      className="flex flex-col font-sans"
      style={{ fontFamily: "Inter, Noto Sans, sans-serif" }}
    >
      <header className="p-4">
        <h2 className="text-3xl font-bold text-[#111518]">To-Do</h2>
      </header>

      {/* Tabs */}
      <nav className="flex gap-8 border-b border-[#dbe1e6] px-4">
        {tabLabels.map((tab, i) => (
          <a
            key={tab}
            href="#"
            className={`pb-3 pt-4 border-b-4 ${
              i === 0
                ? "border-[#111518] text-[#111518]"
                : "border-transparent text-[#60768a]"
            } text-sm font-bold`}
          >
            {tab}
          </a>
        ))}
      </nav>

      {/* Sections */}
      <Section title="Upcoming" tasks={upcomingTasks} />
      <Section title="In Progress" tasks={inProgressTasks} />
      <Section title="Completed" tasks={completedTasks} />
    </div>
  );
};

export default ToDoPage;
