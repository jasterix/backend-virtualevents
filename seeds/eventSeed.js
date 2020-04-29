const faker = require("faker");
const mongoose = require("mongoose");
const Event = require("../api/models/event.js");

const events = [
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Red Hat Summit",
    startDate: "4/28/20",
    endDate: "4/29/20",
    description:
      "Each year, Red Hat Summit is one of our favorite events of the year because it brings together our customers, partners, community members and Red Hatters to talk about the open source innovations and best practices that are enabling the future of enterprise technology.",
    eventLink:
      "https://www.redhat.com/en/blog/moving-red-hat-summit-2020-virtual-experience",
    eventType: "conference",
    techWomen: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Virtual Dreamin 2020",
    startDate: "May 16, 2020, 9:00 CDT",
    endDate: "May 17, 2020, 9:00 CDT",
    description:
      "Virtual Dreamin is a free event for admins, developers, architects or someone who wants to start their career in Salesforce. Three online webinars would be running at the same time for 24 and you can attend them from the location of your choice in your timezone.",
    eventLink: "http://virtualdreamin.com/",
    eventType: "conference",
    techWomen: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Careero's Online Career Fair",
    startDate: "May 7, 2020, 10:00 AM EDT",
    endDate: "May 8, 2020, 10:00 PM EDT",
    description:
      "Careero is hosting an online conference on May 7th - May 8th. We have already lined up amazing hiring companies from some of the world's most innovative companies.\n\nJoin 3,000 others interested in working at companies who are building tech, marketing, and business teams.",
    eventLink: "https://getcareero.com/2020-careero-career-fair-signup",
    eventType: "career fair",
    techWomen: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "TechCity Connect",
    startDate: "May 6 2020, 12:00 PM EST",
    endDate: "May 6  2020, 15:00 EST",
    description:
      "Welcome to TechCity Connect – a free series of digital webinars, roundtables and discussions with leading tech, art and culture experts",
    eventLink: "https://ditto.tv/techcity-connect-06-05-20/",
    eventType: "conference",
    techWomen: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Cognetiks Consulting DevOpsConf",
    startDate: "May 7, 2020, 4:00 eST",
    endDate: "May 7, 2020, 10:00 eST",
    description:
      "Cognetiks Consulting will be hosting a devops conference for all interested engineers to share their passion in a common forum.",
    eventLink:
      "https://extremenetworks.zoom.us/webinar/register/WN_p6g3eznSRnqzCUErkOUdXQ",
    eventType: "workshop",
    techWomen: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Securing Wireless Networks with AirDefense Services Platform",
    startDate: "April 30, 4:00 est",
    endDate: "April 30, 5:00 est",
    description:
      "See the world’s most advanced security solution for wireless networks in action. Learn more about various deployment options, including containerized version of AirDefense Services Platform available on ExtremeCloud Appliance. Walk through common and advanced security threats and mitigation techniques and tools available in AirDefense Services Platform",
    eventLink:
      "https://extremenetworks.zoom.us/webinar/register/WN_p6g3eznSRnqzCUErkOUdXQ",
    eventType: "workshop",
    techWomen: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Playing with APIs: First Steps to Automation",
    startDate: "May 7 2020, 2020 4:00 est",
    endDate: "May 7 2020, 5:00 est",
    description:
      "Explore the capabilities of the new version of Extreme Fabric Automation. Learn how your IP Fabric can be integrated with a virtualized environment to enable automated network provisioning and management. See a live demonstration of IP Fabric integration with Vmware vCenter",
    eventLink:
      "https://extremenetworks.zoom.us/webinar/register/WN_p6g3eznSRnqzCUErkOUdXQ",
    eventType: "workshop",
    techWomen: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title:
      "Leveraging The Tools: Documentation, Dojo Learning Engine, Career Certifications, Case Handling, Designing Solutions with IRIS",
    startDate: "May 14 2020, 4:00 est",
    endDate: "May 14 2020, 5:00 est",
    description:
      "Learn the basics of Application Programming Interfaces. Get yourself familiar with the world of XML, JSON and REST. Understand the basic concepts of scripting. See how automation can be used to achieve day to day operational goals and ease a lot of pains with Extreme Management Center",
    eventLink:
      "https://extremenetworks.zoom.us/webinar/register/WN_p6g3eznSRnqzCUErkOUdXQ",
    eventType: "workshop",
    techWomen: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Ask the expert session: live Q&A session with the NEE SE team",
    startDate: "May 28 2020 4:00 est",
    endDate: "May 28 2020 5:00 est",
    description:
      "Explore the documentation and tools available to you. Learn about the certification paths and available trainings. See the live demonstration of IRIS – the tool that helps you design",
    eventLink:
      "https://extremenetworks.zoom.us/webinar/register/WN_p6g3eznSRnqzCUErkOUdXQ",
    eventType: "workshop",
    techWomen: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "LIFE HACKS WITH LEGO SPIKE PRIME",
    startDate: "May 4 2020  8:15 EST",
    endDate: "May 5 2020  9:15 EST",
    description:
      "An event to discuss how to use the LEGO Spike Prime and its use in STEM activities to create inventions.",
    eventLink:
      "https://www.eventbrite.com/e/life-hacks-with-lego-spike-prime-tickets-103451967620?aff=ebdssbonlinesearch",
    eventType: "workshop",
    techWomen: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Riffyn's Virtual Coffee Break",
    startDate: "6 May 2020, 09:00",
    endDate: "6 May 2020, 09:30",
    description:
      "Riffyn is organizing a “Virtual Coffee Break” with peers from your industry. It's an opportunity for casual and friendly networking with others in science, R&D and manufacturing while everyone is working remotely.\n\nBe part of it! Register here to join this Virtual Coffee Break on Wednesday 6th May at 10am CET and let’s discuss!",
    eventLink: "https://riffyn.com/video-overview-of-riffyn",
    eventType: "misc",
    techWomen: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Product Analytics: Research, Experiments, and Insights",
    startDate: "May 7, 2020, 12:00 EST",
    endDate: "May 7, 2020, 3:00 EST",
    description:
      "Join to learn how experts from Pandora, XSolla, and Wrike run experiments, implement reproducible research, and extract insights from data.",
    eventLink:
      "https://www.eventbrite.com/e/product-analytics-research-experiments-and-insights-tickets-103694350594?aff=ebdssbonlinesearch",
    eventType: "speaker series",
    techWomen: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "WOST Virtual Conference 2020",
    startDate: "May 2, 2020, 11:00 AM",
    endDate: "May 2, 2020, 4:30 PM",
    description:
      "This virtual conference will include talks ranging from reproduction rights to porn and policy and compliance. Special performances by Vally Latini and Jacq The Stripper. Keynote by Cindy Gallop. Streaming link will be sent to registered guests on May 1st.",
    eventLink: "",
    eventType: "",
    techWomen: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "PAYMENTSfn 2020 On-Demand",
    startDate: "May 13, 2020, 9:00 AM EDT",
    endDate: "",
    description:
      "Binge watch content designed specifically for product managers, developers, operations, and others that work in e-commerce, fraud, PCI, 3DS2, and other payments disciplines. Join us starting May 13th, 2020.",
    eventLink: "https://www.paymentsfn.com/",
    eventType: "conference",
    techWomen: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title:
      "The Soft Machine I A reimagination of our collective digital future",
    startDate: "May 21 2020, 2:00 PM",
    endDate: "May 21 2020, 3:30 PM",
    description:
      "On May 21, 2020, the brightest minds of Alberta’s next economy will gather online to reimagine our collective future. The ERA Digital Foundation is proud to present the second chapter of 'The Soft Machine'. Join us online on May 21, 2020, as we reimagine the future of Canada's Digital Economy.",
    eventLink: "https://digital.era.ca/",
    eventType: "speaker series",
    techWomen: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Bit by Bit: Breaking the Barrier for Girls in Tech 2020 Conference",
    startDate: "May 23, 2020, 12:00 PM EDT",
    endDate: "",
    description:
      "Bit by Bit is a conference for high school girls, devoted to bringing together girls interested in computer science. Why? We believe that by gathering successful women with experiences to share, we can ensure that the female coders, entrepreneurs, and leaders of the future are prepared in an industry in which women are underrepresented.",
    eventLink:
      "https://www.eventbrite.com/e/bit-by-bit-breaking-the-barrier-for-girls-in-tech-2020-conference-tickets-91854137197?aff=ebdssbonlinesearch",
    eventType: "conference",
    techWomen: true,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Future.Works Remote Tech Week",
    startDate: "4/27/2020, 9:00 EST",
    endDate: "5/1/2020, 14:00 EST",
    description:
      "The Remote Tech Week is a set of online events filled with training and sharing moments from handpicked speakers. We’re inviting our Tech Community to join us to discuss & design a new remote future filled with purpose.",
    eventLink:
      'https://future.works/techconference/future-works-remote-tech-week-2020/?utm_source=eventbrite&utm_medium=event-platform&utm_term=100125&utm_content=event-"description"&utm_campaign=remote-tech-week',
    eventType: "conference",
    techWomen: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title:
      "MySQL Best Practices for High Performance, Scalability & High Availability",
    startDate: "May 14, 2020, 6:00 PM",
    endDate: "May 14, 2020, 8:30 PM",
    description:
      "This free online meetup is for MySQL users looking to effectively manage growing workloads, unexpected traffic peaks and demanding business requirements such as high availability with maximum possible uptime for the application. Given the current environment with numerous users working from home, we will provide timely recommendations to our fellow MySQL DBAs on how to better configure and manage MySQL clusters at scale.",
    eventLink:
      "https://register.gotowebinar.com/register/8876112586243427852?fbclid=IwAR3oltYJnFX3tCdjztaPnyYpovgIWYM7aP3e7V0yIitZnuKqPckmimWNC_Q",
    eventType: "conference",
    techWomen: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "LessCon - the first Serverless security conference",
    startDate: "May 14, 2020, 1:00 PM EDT",
    endDate: "May 14, 2020, 4:00 PM EDT",
    description:
      "LessSecure is the first Serverless Security dedicated event looking to exchange in-depth knowledge and expertise in from both sides, offensive and defensive.",
    eventLink: "https://www.papercall.io/lesscon",
    eventType: "conference",
    techWomen: false,
  },
  {
    _id: new mongoose.Types.ObjectId(),
    title: "Selfless Hackers: COVID-19 2-Day Hackathon",
    startDate: "May 1, 2020, 5:00 PM EDT",
    endDate: "May 2, 2020, 7:00 PM EDT",
    description:
      "The theme of this Hackathon is to have college students across America come together to use technology to share the accurate information, provide much needed financial, education and medical services, assist medical researchers and provide tele-health solutions in the fight against the spread of COVID-19.",
    eventLink:
      "https://www.eventbrite.com/e/selfless-hackers-covid-19-2-day-hackathon-tickets-101683403798?aff=ebdssbonlinesearch",
    eventType: "conference",
    techWomen: false,
  },
];
const seedOneEvent = () => {
  let event = Event.create({
    _id: new mongoose.Types.ObjectId(),
    title: "Red Hat Summit",
    startDate: "43949",
    endDate: "43950",
    description:
      "Each year, Red Hat Summit is one of our favorite events of the year because it brings together our customers, partners, community members and Red Hatters to talk about the open source innovations and best practices that are enabling the future of enterprise technology.",
    eventLink:
      "https://www.redhat.com/en/blog/moving-red-hat-summit-2020-virtual-experience",
    eventType: "conference",
    free: true,
  });
};

const seedListOfEvents = async () => {
  try {
    events.forEach((event) => {
      new Event(event).save((error) => {
        console.log(error);
      });
      // console.log(event);
    });
  } catch (error) {
    // console.log(error);
  }
  return "done";
};

// Uncomment to seed database
seedListOfEvents();
// seedOneEvent();

// Event.create(
//   {
//     title: "LessCon - the first Serverless security conference",
//     startDate: "May 14, 2020, 1:00 PM EDT",
//     endDate: "May 14, 2020, 4:00 PM EDT",
//     description:
//       "LessSecure is the first Serverless Security dedicated event looking to exchange in-depth knowledge and expertise in from both sides, offensive and defensive.",
//     eventLink: "https://www.papercall.io/lesscon",
//     eventType: "conference",
//     techWomen: false,
//   },
//   (error) => {
//     console.log("hi ", error);
//   }
// );

// console.log(a);
