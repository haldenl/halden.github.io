import ProjectHighlight from "./components/ProjectHighlight";

export default function Home() {
  return (
    <div className="flex flex-col max-w-screen-lg mx-auto">
      <main className="flex flex-col mb-48">
        <div className="flex flex-row items-center mt-12 px-4">
          <img
            src="./prof.jpg"
            alt="A photo of me"
            className="h-24 w-24 mr-4 rounded-full"
          />
          <h1 className="text-5xl font-bold">Halden Lin</h1>
        </div>
        <div className="flex flex-row mt-8 px-4 gap-x-4">
          <a
            href="https://www.linkedin.com/in/halden-lin/"
            target="_blank"
            className="bg-gray-200 dark:bg-gray-700 px-2 rounded-md"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/halden_lin"
            target="_blank"
            className="bg-gray-200 dark:bg-gray-700 px-2 rounded-md"
          >
            Twitter
          </a>
          <a
            href="./halden_lin_resume.pdf"
            target="_blank"
            className="bg-gray-200 dark:bg-gray-700 px-2 rounded-md"
          >
            Resume
          </a>
        </div>
        <div className="text-xl mt-8 max-w-prose px-4 space-y-6">
          <p className="">
            Hi. I&apos;m a Research Engineer at Apple . I&apos;ve built
            visualization frameworks, data tools, and interactive articles for
            Apple&apos;s Platforms and the web.
          </p>
          <p>
            I like to prototype. I like to polish those prototypes into
            products. I like refining the small details that make something{" "}
            <i>great</i> instead of good.
          </p>
          <p>
            Before Apple, I was a part of the{" "}
            <a
              href="https://idl.uw.edu/people"
              target="_blank"
              className="underline text-gray-600 rounded-md"
            >
              Interactive Data Lab
            </a>{" "}
            at the University of Washington, where I completed my MS degree,
            working with{" "}
            <a
              href="https://homes.cs.washington.edu/~jheer/"
              target="_blank"
              className="underline text-gray-600 rounded-md"
            >
              Jeff Heer
            </a>
            .
          </p>
        </div>
        <p className="text-xl mt-8 px-4">
          Here are some things I&apos;ve worked on.
        </p>
        <div className="mt-12 flex flex-col xl:grid xl:grid-cols-2 gap-4 mb-12 p-4 xl:p-0">
          <ProjectHighlight
            title1="Swift Charts"
            description="Beautiful charts on Apple Devices, both at Apple and for 3rd party developers"
            img1="./swift-charts-1.png"
            img2="./swift-charts-2.png"
            img1Meta={{
              title: "Hello Swift Charts @ WWDC",
              link: "https://developer.apple.com/videos/play/wwdc2022/10136/",
              alt: "A screenshot of a part of the Hello Swift Charts talk from WWDC 2022 showing code and the chart it produces.",
            }}
            img2Meta={{
              title: "Swift Charts Developer Documentation",
              link: "https://developer.apple.com/documentation/charts",
              alt: "A screenshot of the Swift Charts developer documentation website.",
            }}
          >
            <div
              className={`absolute transition-all duration-700 w-[130%] h-[130%] translate-x-[0] translate-y-[0] group-hover/card:translate-x-[-20%] group-hover/card:translate-y-[-20%] z-[-1] bg-gradient-to-br from-sky-400 to-green-200`}
            />
          </ProjectHighlight>
          <ProjectHighlight
            title1="Human Interface"
            title2="Guidelines for Charts"
            description="Design guidelines for if, when, and how you should use charts in
              your apps"
            img1="./hig-1.png"
            img2="./hig-2.png"
            img1Meta={{
              title: "Charts",
              link: "https://developer.apple.com/design/human-interface-guidelines/charts",
              alt: "A screenshot of Charts page of the Human Interface Guidelines.",
            }}
            img2Meta={{
              title: "Charting Data",
              link: "https://developer.apple.com/design/human-interface-guidelines/charting-data",
              alt: "A screenshot of Charting Data page of the Human Interface Guidelines.",
            }}
          >
            <div className="absolute transition-all duration-700 w-full h-[130%] translate-x-0 translate-y-[0] group-hover/card:translate-y-[-20%] z-[-1] bg-gradient-to-b from-red-400 to-yellow-200" />
          </ProjectHighlight>
          <ProjectHighlight
            title1="Menstrual cycle length"
            title2="and variability: a visual explanation"
            description="Learn about the Apple Women's Health Study's findings on menstrual
              cycle length and variability"
            img1="./awhs-1.png"
            img2="./awhs-2.png"
            img1Meta={{
              title:
                "Menstrual cycle length and variability: a visual explanation",
              link: "https://awhs-updates.hsph.harvard.edu/cycle-length-variability/",
              alt: "A screenshot of a part of the interactive article showing a visual of a distribution of menstrual cycle length.",
            }}
            img2Meta={{
              link: "https://awhs-updates.hsph.harvard.edu/cycle-length-variability/",
              alt: "A screenshot of a part of the interactive article showing a calendar month with a cycle highlighted.",
            }}
          >
            <div className="absolute transition-all duration-700 w-[130%] h-[130%] translate-x-[-20%] translate-y-[0] z-[-1] group-hover/card:translate-x-[0] group-hover/card:translate-y-[-20%] bg-gradient-to-bl from-violet-400 to-fuchsia-100" />
          </ProjectHighlight>
          <ProjectHighlight
            title1="The Hidden Cost"
            title2="of Digital Consumption"
            description="How does information get to your screen, and at what environmental cost?"
            img1="./parametric-1.png"
            img2="./parametric-2.png"
            img1Meta={{
              title: "The Hidden Cost of Digital Consumption",
              link: "https://parametric.press/issue-02/streaming/",
              alt: "A screenshot of a part of the interactive article showing a visual of internet infrastructure on the west coast of the United States.",
            }}
            img2Meta={{
              link: "https://parametric.press/issue-02/streaming/",
              alt: "A screenshot of a part of the interactive article showing a visual of data transferred for various websites.",
            }}
          >
            <div className="absolute transition-all duration-700 w-[130%] h-[130%] translate-x-[-20%] translate-y-[0] z-[-1] group-hover/card:translate-x-[0] group-hover/card:translate-y-[-20%] bg-gradient-to-bl from-green-300 to-zinc-200" />
          </ProjectHighlight>
          <ProjectHighlight
            title1="Dziban: Balancing Agency and Automation"
            title2="in Visualization Design via Anchored Recommendations"
            description="A python library for recommender-powered visualization authoring."
            img1="./dziban-1.png"
            img2="./dziban-2.png"
            img1Meta={{
              title: "Paper (from CHI 2020 in Honolulu)",
              link: "https://idl.cs.washington.edu/files/2020-Dziban-CHI.pdf",
              alt: "A screenshot of the Dziban paper.",
            }}
            img2Meta={{
              title: "Sample Notebook",
              link: "https://github.com/uwdata/dziban/blob/master/examples/MKIV.ipynb",
              alt: "A screenshot of the a python notebook using Dziban",
            }}
          >
            <div className="absolute transition-all duration-700 w-[130%] h-[130%] translate-x-[-20%] translate-y-[0] z-[-1] group-hover/card:translate-x-[0] group-hover/card:translate-y-[-20%] bg-gradient-to-r from-cyan-300 to-green-100" />
          </ProjectHighlight>
          <ProjectHighlight
            title1="Visualizing Attention"
            title2="in Sequence to Sequence Models"
            description="A tool for understanding attention. Poster presented at IEEE VIS 2018 in Berlin."
            img1="./attention-1.png"
            img2="./attention-2.png"
            img1Meta={{
              title: "Visualizing Attention in Sequence to Sequence Models",
              link: "https://haldenl.github.io/attention-visualizer/",
              alt: "A screenshot of the attention visualization tool.",
            }}
            img2Meta={{
              link: "https://haldenl.github.io/attention-visualizer/",
              alt: "A screenshot of the attention visualization tool.",
            }}
          >
            <div className="absolute transition-all duration-700 w-[130%] h-[130%] translate-x-[-20%] translate-y-[0] z-[-1] group-hover/card:translate-x-[0] group-hover/card:translate-y-[-20%] bg-gradient-to-tr from-sky-300 to-orange-100" />
          </ProjectHighlight>
        </div>
        <div className="p-8 xl:p-0 space-y-4 xl:space-y-2">
          <h2 className="text-xl mb-8">News</h2>
          <p>
            We published an interactive article for the Apple Women&apos;s Health Study in September 2023:{" "}
            <a
              className="underline bg-gray-200/80 dark:bg-gray-700/80 px-1 py-0.5 rounded-md"
              href="https://awhs-updates.hsph.harvard.edu/cycle-length-variability/"
            >
              Menstrual cycle length and variability: a visual explanation
            </a>{" "}
            <i className="text-gray-400">with Samantha Robertson and Fred Hohman</i>
          </p>
          <p>
            We published the Human Interface Guidelines on Charts in September 2022:{" "}
            <a
              className="underline bg-gray-200/80 dark:bg-gray-700/80 px-1 py-0.5 rounded-md"
              href="https://developer.apple.com/design/human-interface-guidelines/charts"
            >
              Charts
            </a>{", "}
            <a
              className="underline bg-gray-200/80 dark:bg-gray-700/80 px-1 py-0.5 rounded-md"
              href="https://developer.apple.com/design/human-interface-guidelines/charting-data"
            >
              Charting Data
            </a>{" "}
            <i className="text-gray-400">with the team at Apple</i>
          </p>
          <p>
            I gave a talk on designing charts at WWDC 2022:{" "}
            <a
              className="underline bg-gray-200/80 dark:bg-gray-700/80 px-1 py-0.5 rounded-md"
              href="https://developer.apple.com/videos/play/wwdc2022/110340"
            >
              Design an Effective Chart
            </a>{" "}
            <i className="text-gray-400">with Lilian De Greef</i>
          </p>
          <p>
            We released Swift Charts at WWDC 2022: {" "}
            <a
              className="underline bg-gray-200/80 dark:bg-gray-700/80 px-1 py-0.5 rounded-md"
              href="https://developer.apple.com/documentation/charts"
            >
              Swift Charts
            </a>{" "}
            <i className="text-gray-400">with the team at Apple</i>
          </p>
          <p>
            I published an article on the Parametric Press in October 2020:{" "}
            <a
              className="underline bg-gray-200/80 dark:bg-gray-700/80 px-1 py-0.5 rounded-md"
              href="https://parametric.press/issue-02/streaming/"
            >
              The Hidden Cost of Digital Consumption
            </a>{" "}
            <i className="text-gray-400">with Aishwarya Nirmal, Shobhit Hathi, and Lilian Liang</i>
          </p>
          <p>
            I published a paper at ACM CHI 2020:{" "}
            <a
              className="underline bg-gray-200/80 dark:bg-gray-700/80 px-1 py-0.5 rounded-md"
              href="https://idl.uw.edu/papers/dziban"
            >
              Dziban: Balancing Agency & Automation in Visualization Design via
              Anchored Recommendations
            </a>{" "}
            <i className="text-gray-400">with Dominik Moritz and Jeffrey Heer</i>
          </p>
          <p>
            I presented a poster at IEEE VIS 2018:{" "}
            <a
              className="underline bg-gray-200/80 dark:bg-gray-700/80 px-1 py-0.5 rounded-md"
              href="https://github.com/haldenl/attention-visualizer"
            >
              Visualizing Attention in Sequence-to-Sequence Summarization Models
            </a>
            <i className="text-gray-400">{" "}
              with Tongshuang Wu, Kanit Wongsuphasawat, Yejin Choi, and Jeffrey
              Heer
            </i>
          </p>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
