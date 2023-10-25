import { BlogBuilder } from "../../components/blog/BlogBuilder";

export default new BlogBuilder({
  id: "windows-lubuntu-comparison",
  title: "Windows 8.1 and Lubuntu 20.04 Performance on an Old Laptop",
  cover: require("../../assets/blog/windows-lubuntu-comparison/bios.jpg"),
  publishedDate: "2023-03-16",
  description: (
    <>
      A performance test was conducted to compare the resource usage of Windows
      8.1 and Lubuntu 20.04 on an old laptop. How old you say? Well, the laptop
      is so old that it has a black hole on its screen. Various benchmarks was
      used to measure their resource usage, such as CPU utilization, RAM usage,
      and disk usage.
    </>
  ),
})
  .addParagraph(
    <>
      So, why do I choose these operating systems to be compared? It doesn't
      seem fair. I know it doesn't. Windows 8.1 was released in 2013, it has
      since been replaced by newer versions of Windows, and support for Windows
      8.1 has officially ended. While Lubuntu 20.04 is an LTS released in 2020,
      it's still kinda popular. I just happened to have an old laptop with both
      OS installed.
    </>
  )
  .addImage({
    image: require("../../assets/blog/windows-lubuntu-comparison/windows-no-longer-supported.png"),
    caption: "Windows 8.1 ends its support on 10 January 2023",
  })
  .addHeading("Laptop Specs")
  .addParagraph(
    <>
      The laptop I tested is a 2012 ASUS X45C model that was bought in June
      2013. It has a 512 GB HDD and an Intel Core i3-2370M processor, which has
      two physical cores and four logical cores. Initially, it had 2 GB of RAM
      then later upgraded to 6 GB. At first, it had Windows 7 installed. But
      somehow it was corrupted, I need to install Windows 8.1 but never activate
      it.
    </>
  )
  .addImage({
    image: require("../../assets/blog/windows-lubuntu-comparison/specs.png"),
    caption: "Laptop specifications",
  })
  .addHeading("Resource Usage")
  .addParagraph(
    <>
      The laptop condition was idle when both OS is being monitored and within
      10 minutes after booted up. For monitoring the resource usage, I used the
      task manager on Windows because duh, and for Lubuntu I used{" "}
      <a href="https:htop.dev/">htop</a>.
    </>
  )
  .addHeadingTwo("CPU Utilization")
  .addParagraph(
    <>
      Windows shows a higher CPU utilization of 8% compared to Lubuntu's average
      of 3.7%. However, these numbers cannot actually be compared directly. In
      Lubuntu and other Linuxes, system monitoring tools typically show the CPU
      utilization percentage for each logical processor separately, unlike
      Windows Task Manager that shows the total utilization.
    </>
  )
  .addImage({
    image: require("../../assets/blog/windows-lubuntu-comparison/windows-resource.png"),
    caption: "Windows resources usage on idle",
  })
  .addHeadingTwo("RAM Usage")
  .addParagraph(
    <>
      Windows used more RAM (2,0 GB) than Lubuntu (1,68 GB). It's important to
      note that Windows and Linux handle memory differently, but it is generally
      accepted Linux is more efficient when it comes to managing memory.
    </>
  )
  .addHeadingTwo("Disk Usage")
  .addParagraph(
    <>
      Unfortunately, htop doesn't show the disk usage monitoring feature at
      least for the version I used, so it's hard to make a comparison, perhaps
      I'll add it later. However, on Windows, it's showing 100% disk usage,
      which could be happened by several causes like outdated drivers, some
      applications and background services using it heavily, or hardware faulty.
    </>
  )
  .addImage({
    image: require("../../assets/blog/windows-lubuntu-comparison/lubuntu-resource.png"),
    caption: "Lubuntu resources usage on idle",
  })
  .addHeadingTwo("Resource when not idle")
  .addParagraph(
    <>
      When a browser with several tabs opened, I see a different approach to
      how the resource is being used. Windows shows a higher usage on both the
      CPU and RAM but is still fairly stable with around 50% of CPU utilization
      and 4-5 GB of RAM usage. While on Lubuntu, the CPU usage tends to be much
      higher reached up to 80% on each core, but the RAM usage is still under 2
      GB.
    </>
  )
  .addHeading("Conclusion")
  .addParagraph(
    <>
      Based on the test results, Lubuntu 20.04 appears to be using fewer system
      resources than Windows 8.1 on idle. However, it's important to note that
      the number of installed programs and processes running in the background
      can impact the performance on both operating systems. I might add that
      in Windows, I installed many programs which of course affect resource
      usage.
    </>
  )
  .addParagraph(
    <>
      The upgrade from 2GB to 6GB of RAM also likely contributed to the improved
      performance of the laptop. Overall, the results suggest that Lubuntu 20.04
      may be a good choice for users with older laptops looking for a
      lightweight OS that uses fewer resources.
    </>
  );
