"use client";

import React from "react";
import WrappedContainer from "./WrappedContainer";
import FatHeading from "./FatHeading";
import InfoText from "./InfoText";
import MutedText from "./MutedText";
import { Button } from "../ui/button";
import { ArrowRight, ExternalLink, PlugZap } from "lucide-react";
import Faq from "../Preparation/Faq";
import Footer from "../Footer";

// import MenuBar from '../MenuBar'; // 确保路径正确
// import Projects from "../Projects";

// Client component for example image to avoid hydration mismatch
function ExampleWrappedImage() {
  const imageData = React.useMemo(
    () =>
      encodeURIComponent(
        JSON.stringify({
          name: "John Doe",
          totalWatchTime: 2505600, // 29 days in seconds
          totalVideosWatched: 81737,
          totalWatchSessions: 1823,
          totalComments: 712,
          averageSessionLength: 7200, // 120 minutes in seconds
          mostUsedEmoji: "😂",
          totalLikes: 8237,
          persona: "Interaction Monster",
        })
      ),
    []
  );

  // 确保服务器端和客户端渲染完全相同的结构
  return (
    <div
      style={{
        width: "100%",
        maxHeight: "70vh",
        aspectRatio: "9/16",
        borderRadius: 10,
        position: "relative",
        backgroundColor: "#18181B",
      }}
      suppressHydrationWarning
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/api/image?data=${imageData}`}
        alt="Discord Wrapped Example"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          borderRadius: 10,
        }}
      />
    </div>
  );
}

function IntroInformation({
  onContinue,
  onDemo,
}: {
  onContinue: () => void;
  onDemo: () => void;
}) {
  return (
    <WrappedContainer>
      <div className="w-full max-w-7xl mx-auto" suppressHydrationWarning>
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-8 lg:py-16" suppressHydrationWarning>
          <div className="flex flex-col gap-6 lg:gap-8 text-left">
            <div className="space-y-4">
              <FatHeading className="text-4xl md:text-5xl lg:text-6xl leading-tight">
                Discord Checkpoint
              </FatHeading>
              <InfoText className="text-lg md:text-xl">
                Discover and relive your top Discord moments. Explore your messages, servers, and conversations from the past year.
              </InfoText>
            </div>

            <div className="space-y-4 pt-4">
              <FatHeading className="text-2xl md:text-3xl" component="h2">
                How it works
              </FatHeading>
              <MutedText className="text-base md:text-lg leading-relaxed">
                Uncover the story of your Discord journey! Download your data in the <strong>'JSON - Machine-readable file'</strong> format from Discord Data Download.
                <br /><br />
                Your exported data does not include login credentials! For more info, check the FAQ section below.
              </MutedText>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                className="dark w-full h-12 text-base opacity-60 cursor-not-allowed" 
                disabled
              >
                Open Discord
                <ExternalLink className="ml-2" size={18} />
              </Button>
              <Button 
                className="flex-1 h-12 text-base opacity-60 cursor-not-allowed" 
                disabled
              >
                I have my data
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
            <Button 
              className="w-full sm:w-auto h-12 text-base bg-starship-100 hover:bg-starship-200 opacity-60 cursor-not-allowed" 
              disabled
            >
              <PlugZap className="mr-2" size={18} />
              Show demo Wrapped
            </Button>
          </div>

          <div className="flex justify-center items-center">
            <div className="w-full max-w-sm lg:max-w-md">
              <ExampleWrappedImage />
            </div>
          </div>
        </div>

        {/* Video Showcase Section */}
        <div className="py-12 lg:py-16" suppressHydrationWarning>
          <div className="max-w-4xl mx-auto text-center space-y-6" suppressHydrationWarning>
            <div className="space-y-3">
              <FatHeading className="text-3xl md:text-4xl" component="h2">
                See It In Action
              </FatHeading>
              <InfoText className="text-lg">
                Watch this video to see Discord Wrapped in action and discover what insights await you!
              </InfoText>
            </div>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/lzDVs5Cx1fg"
                title="Discord Checkpoint | Discord Wrapped Showcase"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-12 lg:py-16" suppressHydrationWarning>
          <div className="max-w-4xl mx-auto space-y-8" suppressHydrationWarning>
            <FatHeading className="text-3xl md:text-4xl text-center" component="h2">
              Frequently Asked Questions
            </FatHeading>
            <Faq />
          </div>
        </div>
      </div>

      {/* <Projects /> */}

      {/* <div className="max-w-lg mx-auto mt-6 text-sm font-medium text-zinc-600 text-left">
        <strong>For the Search Engines:</strong>
        <p>
          Welcome to Wrapped for TikTok - Your Ultimate Source for TikTok
          Activity Insights:
        </p>
        <p>
          Are you looking to gain valuable insights into your TikTok activity?
          Look no further than Wrapped for TikTok! It offers comprehensive stats
          and analytics to help you understand your presence on TikTok.
        </p>
        <p>
          With Wrapped for TikTok, you can easily access in-depth information
          about your TikTok performance, including total videos viewed, watch
          session length, and much more.
        </p>
        <p>
          To get started, you'll need to download your TikTok data export from
          the official TikTok website. Simply visit{" "}
          <a href="https://www.tiktok.com/setting/download-your-data">
            https://www.tiktok.com/setting/download-your-data
          </a>{" "}
          and request your data in the "JSON - Machine-readable file" format.
          Don't worry, this file does not contain any sensitive information or
          login credentials. For additional reassurance, please refer to our FAQ
          section for a detailed explanation of how we handle your data.
        </p>
        <p>
          At Wrapped for TikTok, we prioritize your privacy and security. Unlike
          other platforms, your TikTok data is never uploaded or stored on our
          servers. Our tool operates exclusively within your browser, ensuring
          that your information remains confidential. We take pride in being a
          privacy-centered service, committed to protecting your data at all
          times.
        </p>
        <p>
          To provide complete transparency, we have made the full source code of
          Wrapped for TikTok available on GitHub. You can visit our GitHub
          repository at{" "}
          <a href="https://github.com/vantezzen/wrapped">
            https://github.com/vantezzen/wrapped
          </a>{" "}
          to review the code and verify its integrity. We believe in openness
          and accountability, and we want our users to have full confidence in
          our platform.
        </p>
        <p>
          Embrace the power of Wrapped for TikTok and uncover the insights that
          will propel your TikTok journey forward. Join our growing community of
          TikTok enthusiasts who use Wrapped for TikTok to deliver accurate,
          reliable, and actionable statistics.
        </p>
      </div> */}

      <Footer />
    </WrappedContainer>
  );
}

export default IntroInformation;
