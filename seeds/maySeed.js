const faker = require( "faker" );
const mongoose = require( "mongoose" );
const Event = require( "../api/models/event.js" );

let events = [
  {
    free: true,
    title: "Red Hat Summit",
    startDate: "2020-04-28T04:00:00Z",
    endDate: "2020-04-29T04:00:00Z",
    description:
      "Each year, Red Hat Summit is one of our favorite events of the year because it brings together our customers, partners, community members and Red Hatters to talk about the open source innovations and best practices that are enabling the future of enterprise technology.",
    eventLink:
      "https://www.redhat.com/en/blog/moving-red-hat-summit-2020-virtual-experience",
    eventType: "conference",
    techWomen: false,
  },
  {
    free: true,
    title: "Virtual Dreamin 2020",
    startDate: "2020-05-16T14:00:00Z",
    endDate: "2020-05-17T14:00:00Z",
    description:
      "Virtual Dreamin is a free event for admins, developers, architects or someone who wants to start their career in Salesforce. Three online webinars would be running at the same time for 24 and you can attend them from the location of your choice in your timezone.",
    eventLink: "http://virtualdreamin.com/",
    eventType: "conference",
    techWomen: false,
  },
  {
    free: true,
    title: "TechCity Connect",
    startDate: "2020-05-06T17:00:00Z",
    endDate: "2020-05-06T20:00:00Z",
    description:
      "Welcome to TechCity Connect – a free series of digital webinars, roundtables and discussions with leading tech, art and culture experts",
    eventLink: "https://ditto.tv/techcity-connect-06-05-20/",
    eventType: "conference",
    techWomen: false,
  },
  {
    free: true,
    title: "Careero's Online Career Fair",
    startDate: "2020-05-07T14:00:00Z",
    endDate: "2020-05-09T02:00:00Z",
    description:
      "Careero is hosting an online conference on May 7th - May 8th. We have already lined up amazing hiring companies from some of the world's most innovative companies.\n\nJoin 3,000 others interested in working at companies who are building tech, marketing, and business teams.",
    eventLink: "https://getcareero.com/2020-careero-career-fair-signup",
    eventType: "career fair",
    techWomen: false,
  },
  {
    free: true,
    title: "Securing Wireless Networks with AirDefense Services Platform",
    startDate: "2001-04-30T09:00:00Z",
    endDate: "2001-04-30T10:00:00Z",
    description:
      "See the world’s most advanced security solution for wireless networks in action. Learn more about various deployment options, including containerized version of AirDefense Services Platform available on ExtremeCloud Appliance. Walk through common and advanced security threats and mitigation techniques and tools available in AirDefense Services Platform",
    eventLink:
      "https://extremenetworks.zoom.us/webinar/register/WN_p6g3eznSRnqzCUErkOUdXQ",
    eventType: "workshop",
    techWomen: false,
  },
  {
    free: true,
    title: "Playing with APIs: First Steps to Automation",
    startDate: "2020-05-07T09:00:00Z",
    endDate: "2020-05-07T10:00:00Z",
    description:
      "Explore the capabilities of the new version of Extreme Fabric Automation. Learn how your IP Fabric can be integrated with a virtualized environment to enable automated network provisioning and management. See a live demonstration of IP Fabric integration with Vmware vCenter",
    eventLink:
      "https://extremenetworks.zoom.us/webinar/register/WN_p6g3eznSRnqzCUErkOUdXQ",
    eventType: "workshop",
    techWomen: false,
  },
  {
    free: true,
    title: "LIFE HACKS WITH LEGO SPIKE PRIME",
    startDate: "2020-05-04T13:15:00Z",
    endDate: "2020-05-05T14:15:00Z",
    description:
      "An event to discuss how to use the LEGO Spike Prime and its use in STEM activities to create inventions.",
    eventLink:
      "https://www.eventbrite.com/e/life-hacks-with-lego-spike-prime-tickets-103451967620?aff=ebdssbonlinesearch",
    eventType: "workshop",
    techWomen: false,
  },
  {
    free: true,
    title: "Riffyn's Virtual Coffee Break",
    startDate: "2020-05-06T13:00:00Z",
    endDate: "2020-05-06T13:30:00Z",
    description:
      "Riffyn is organizing a “Virtual Coffee Break” with peers from your industry. It's an opportunity for casual and friendly networking with others in science, R&D and manufacturing while everyone is working remotely.\n\nBe part of it! Register here to join this Virtual Coffee Break on Wednesday 6th May at 10am CET and let’s discuss!",
    eventLink: "https://riffyn.com/video-overview-of-riffyn",
    eventType: "misc",
    techWomen: false,
  },
  {
    free: true,
    title: "PAYMENTSfn 2020 On-Demand",
    startDate: "2020-05-13T13:00:00Z",
    endDate: null,
    description:
      "Binge watch content designed specifically for product managers, developers, operations, and others that work in e-commerce, fraud, PCI, 3DS2, and other payments disciplines. Join us starting May 13th, 2020.",
    eventLink: "https://www.paymentsfn.com/",
    eventType: "conference",
    techWomen: false,
  },
  {
    free: true,
    title:
      "The Soft Machine I A reimagination of our collective digital future",
    startDate: "2020-05-21T18:00:00Z",
    endDate: "2020-05-21T19:30:00Z",
    description:
      "On May 21, 2020, the brightest minds of Alberta’s next economy will gather online to reimagine our collective future. The ERA Digital Foundation is proud to present the second chapter of 'The Soft Machine'. Join us online on May 21, 2020, as we reimagine the future of Canada's Digital Economy.",
    eventLink: "https://digital.era.ca/",
    eventType: "speaker series",
    techWomen: false,
  },
  {
    free: true,
    title: "WOST Virtual Conference 2020",
    startDate: "2020-05-02T15:00:00Z",
    endDate: "2020-05-02T20:30:00Z",
    description:
      "This virtual conference will include talks ranging from reproduction rights to porn and policy and compliance. Special performances by Vally Latini and Jacq The Stripper. Keynote by Cindy Gallop. Streaming link will be sent to registered guests on May 1st.",
    eventLink: "",
    eventType: "",
    techWomen: false,
  },
  {
    free: true,
    title: "Product Analytics: Research, Experiments, and Insights",
    startDate: "2020-05-07T17:00:00Z",
    endDate: "2020-05-07T08:00:00Z",
    description:
      "Join to learn how experts from Pandora, XSolla, and Wrike run experiments, implement reproducible research, and extract insights from data.",
    eventLink:
      "https://www.eventbrite.com/e/product-analytics-research-experiments-and-insights-tickets-103694350594?aff=ebdssbonlinesearch",
    eventType: "speaker series",
    techWomen: false,
  },
  {
    free: true,
    title: "Future.Works Remote Tech Week",
    startDate: "2020-04-27T14:00:00Z",
    endDate: "2020-05-01T19:00:00Z",
    description:
      "The Remote Tech Week is a set of online events filled with training and sharing moments from handpicked speakers. We’re inviting our Tech Community to join us to discuss & design a new remote future filled with purpose.",
    eventLink:
      'https://future.works/techconference/future-works-remote-tech-week-2020/?utm_source=eventbrite&utm_medium=event-platform&utm_term=100125&utm_content=event-"description"&utm_campaign=remote-tech-week',
    eventType: "conference",
    techWomen: false,
  },
  {
    free: true,
    title: "Bit by Bit: Breaking the Barrier for Girls in Tech 2020 Conference",
    startDate: "2020-05-23T16:00:00Z",
    endDate: null,
    description:
      "Bit by Bit is a conference for high school girls, devoted to bringing together girls interested in computer science. Why? We believe that by gathering successful women with experiences to share, we can ensure that the female coders, entrepreneurs, and leaders of the future are prepared in an industry in which women are underrepresented.",
    eventLink:
      "https://www.eventbrite.com/e/bit-by-bit-breaking-the-barrier-for-girls-in-tech-2020-conference-tickets-91854137197?aff=ebdssbonlinesearch",
    eventType: "conference",
    techWomen: true,
  },
  {
    free: true,
    title:
      "MySQL Best Practices for High Performance, Scalability & High Availability",
    startDate: "2020-05-14T22:00:00Z",
    endDate: "2020-05-15T00:30:00Z",
    description:
      "This free online meetup is for MySQL users looking to effectively manage growing workloads, unexpected traffic peaks and demanding business requirements such as high availability with maximum possible uptime for the application. Given the current environment with numerous users working from home, we will provide timely recommendations to our fellow MySQL DBAs on how to better configure and manage MySQL clusters at scale.",
    eventLink:
      "https://register.gotowebinar.com/register/8876112586243427852?fbclid=IwAR3oltYJnFX3tCdjztaPnyYpovgIWYM7aP3e7V0yIitZnuKqPckmimWNC_Q",
    eventType: "conference",
    techWomen: false,
  },
  {
    free: true,
    title: "Selfless Hackers: COVID-19 2-Day Hackathon",
    startDate: "2020-05-01T21:00:00Z",
    endDate: "2020-05-02T23:00:00Z",
    description:
      "The theme of this Hackathon is to have college students across America come together to use technology to share the accurate information, provide much needed financial, education and medical services, assist medical researchers and provide tele-health solutions in the fight against the spread of COVID-19.",
    eventLink:
      "https://www.eventbrite.com/e/selfless-hackers-covid-19-2-day-hackathon-tickets-101683403798?aff=ebdssbonlinesearch",
    eventType: "conference",
    techWomen: false,
  },
  {
    free: true,
    title:
      "Leveraging The Tools: Documentation, Dojo Learning Engine, Career Certifications, Case Handling, Designing Solutions with IRIS",
    startDate: "2020-05-14T09:00:00Z",
    endDate: "2020-05-14T10:00:00Z",
    description:
      "Learn the basics of Application Programming Interfaces. Get yourself familiar with the world of XML, JSON and REST. Understand the basic concepts of scripting. See how automation can be used to achieve day to day operational goals and ease a lot of pains with Extreme Management Center",
    eventLink:
      "https://extremenetworks.zoom.us/webinar/register/WN_p6g3eznSRnqzCUErkOUdXQ",
    eventType: "workshop",
    techWomen: false,
  },
  {
    free: true,
    title: "Ask the expert session: live Q&A session with the NEE SE team",
    startDate: "2020-05-28T09:00:00Z",
    endDate: "2020-05-28T10:00:00Z",
    description:
      "Explore the documentation and tools available to you. Learn about the certification paths and available trainings. See the live demonstration of IRIS – the tool that helps you design",
    eventLink:
      "https://extremenetworks.zoom.us/webinar/register/WN_p6g3eznSRnqzCUErkOUdXQ",
    eventType: "workshop",
    techWomen: false,
  },
];

const seed = ( array ) => {
  let seeded = false;
  if ( !seeded ) {
    events.forEach( ( event ) => {
      Event.create( event ).then( ( result ) => {
        console.log( result );
      } );
    } );
    seeded = true;
    console.log( "seeded" );
  }

  console.log( "Already seeded" );
};

// events.forEach((event) => {
//     Event.create(event).then((result) => {
//       console.log(result);
//     });
//   });
// } catch (error) {
//   console.log(error);
// }
// };

seed();
