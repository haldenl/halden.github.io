import ProjectHighlight from "./components/ProjectHighlight";

export default function Home() {
  return (
    <div className="flex flex-col max-w-screen-lg mx-auto">
      <main className="flex flex-col mb-48">
        <div className="flex flex-row items-center mt-12 px-4">
          <img src="./prof.jpg" className="h-24 w-24 mr-4 rounded-full" />
          <h1 className="text-5xl font-bold">Halden Lin</h1>
        </div>
        <div className="flex flex-row mt-8 px-4 gap-x-4">
          <a href="https://www.linkedin.com/in/halden-lin/" target="_blank" className="bg-gray-200 dark:bg-gray-700 px-2 rounded-md">LinkedIn</a>
          <a href="https://x.com/halden_lin" target="_blank" className="bg-gray-200 dark:bg-gray-700 px-2 rounded-md">Twitter</a>
          <a href="./resume.pdf" target="_blank" className="bg-gray-200 dark:bg-gray-700 px-2 rounded-md">Resume</a>
        </div>
        <p className="text-xl mt-8 max-w-prose px-4">
          Hi. I&apos;m a Research Engineer at Apple. I&apos;ve built visualization
          frameworks, data tools, and interactive articles for Apple&apos;s Platforms
          and the web. I helped create Swift Charts for Apple devices. I love
          writing code, but I also do a lot of design thinking. I helped write
          the Human Interface Guidelines for Charts. I&apos;ve authored a number of
          data-driven interactive articles. I like to prototype. I like to
          polish those prototypes into products. I like refining the small
          details that make something <i>great</i> instead of good.
        </p>
        <p className="text-xl mt-4 px-4">Here are some things I&apos;ve worked on.</p>
        <div className="mt-12 flex flex-col xl:grid xl:grid-cols-2 gap-4 mb-12 p-4 xl:p-0">
          <ProjectHighlight
            title1="Swift Charts"
            description="Beautiful Charts on Apple Devices, both at Apple and for 3rd party developers."
            img1="./swift-charts-1.png"
            img2="./swift-charts-2.png"
            img1Meta={{
              title: "Hello Swift Charts @ WWDC",
              link: "https://developer.apple.com/videos/play/wwdc2022/10136/",
            }}
            img2Meta={{
              title: "Swift Charts Developer Documentation",
              link: "https://developer.apple.com/documentation/charts",
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
              your apps."
            img1="./hig-1.png"
            img2="./hig-2.png"
            img1Meta={{
              title: "Charts",
              link: "https://developer.apple.com/design/human-interface-guidelines/charts",
            }}
            img2Meta={{
              title: "Charting Data",
              link: "https://developer.apple.com/design/human-interface-guidelines/charting-data",
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
            }}
            img2Meta={{
              link: "https://awhs-updates.hsph.harvard.edu/cycle-length-variability/",
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
            }}
            img2Meta={{ link: "https://parametric.press/issue-02/streaming/" }}
          >
            <div className="absolute transition-all duration-700 w-[130%] h-[130%] translate-x-[-20%] translate-y-[0] z-[-1] group-hover/card:translate-x-[0] group-hover/card:translate-y-[-20%] bg-gradient-to-bl from-green-300 to-zinc-200" />
          </ProjectHighlight>
        </div>
        <div className="p-8 xl:p-0 space-y-4 xl:space-y-2">
          <h2 className="text-xl mb-8">And a few other things of note</h2>
          <p>I gave a talk on designing charts at WWDC 2022: <a className="underline bg-gray-200/80 dark:bg-gray-700/80 px-1 py-0.5 rounded-md" href="https://developer.apple.com/videos/play/wwdc2022/110340">Design an Effective Chart.</a></p>
          <p>I published a paper at ACM CHI 2020: <a className="underline bg-gray-200/80 dark:bg-gray-700/80 px-2 py-0.5 rounded-md" href="https://idl.uw.edu/papers/dziban">Dziban: Balancing Agency & Automation in Visualization Design via Anchored Recommendations.</a></p>
          <p>I presented a poster at IEEE VIS 2018: <a className="underline bg-gray-200/80 dark:bg-gray-700/80 px-2 py-0.5 rounded-md" href="https://github.com/haldenl/attention-visualizer">Visualizing Attention in Sequence-to-Sequence Summarization Models.</a></p>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
