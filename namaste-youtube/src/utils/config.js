export const BUTTON_LIST = [
  "All",
  "Music",
  "Mixes",
  "Stocks",
  "Scene",
  "News",
  "Songs",
  "Education",
  "Favourite",
  "Comedy",
  "Computer Science",
  "Recently uploaded",
];

const API_KEY = "AIzaSyA0RRNzEkg1cKfQ_Mp-VBNEY9M6t0wO4FI";

export const API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;

export const SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_DATA = {
  kind: "youtube#searchListResponse",
  etag: "UnD4CPhxgt3oxg-gzVXHYvbpck0",
  nextPageToken: "CBkQAA",
  regionCode: "IN",
  pageInfo: {
    totalResults: 839726,
    resultsPerPage: 25,
  },
  items: [
    {
      kind: "youtube#searchResult",
      etag: "wkcQubqF2jwfDvVFARKvY__il9Y",
      id: {
        kind: "youtube#video",
        videoId: "Ke90Tje7VS0",
      },
      snippet: {
        publishedAt: "2018-07-16T16:51:44Z",
        channelId: "UCWv7vMbMWH4-V0ZXdmDpPBA",
        title: "React JS - React Tutorial for Beginners",
        description:
          "React JS Tutorial - Get up & running with React JS: the most popular JavaScript library in the world! - Want to master React?",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Ke90Tje7VS0/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Ke90Tje7VS0/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Ke90Tje7VS0/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Programming with Mosh",
        liveBroadcastContent: "none",
        publishTime: "2018-07-16T16:51:44Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "_iUHc9rKLL4ywkquAEponsE2EB4",
      id: {
        kind: "youtube#video",
        videoId: "w7ejDZ8SWv8",
      },
      snippet: {
        publishedAt: "2021-01-18T19:01:11Z",
        channelId: "UC29ju8bIPH5as8OGnQzwJyA",
        title: "React JS Crash Course",
        description:
          "Get started with React in this crash course. We will be building a task tracker app and look at components, props, state, hooks, ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/w7ejDZ8SWv8/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/w7ejDZ8SWv8/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/w7ejDZ8SWv8/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Traversy Media",
        liveBroadcastContent: "none",
        publishTime: "2021-01-18T19:01:11Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "Zr3L1qmzgpfbyIVoBKaF0OzVdIw",
      id: {
        kind: "youtube#video",
        videoId: "QFaFIcGhPoM",
      },
      snippet: {
        publishedAt: "2018-10-22T10:30:00Z",
        channelId: "UC80PWRj_ZU8Zu0HSMNVwKWw",
        title: "ReactJS Tutorial - 1 - Introduction",
        description:
          "Courses - https://learn.codevolution.dev/ Support UPI - https://support.codevolution.dev/ Support PayPal ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/QFaFIcGhPoM/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/QFaFIcGhPoM/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/QFaFIcGhPoM/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Codevolution",
        liveBroadcastContent: "none",
        publishTime: "2018-10-22T10:30:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "0FeSbOpMpHqPyVmAcvBWKAxM4zU",
      id: {
        kind: "youtube#video",
        videoId: "qSRrxpdMpVc",
      },
      snippet: {
        publishedAt: "2019-08-21T15:33:20Z",
        channelId: "UCSJbGtTlrDami-tDGPUV9-w",
        title: "React Native Tutorial for Beginners - Crash Course 2020",
        description:
          "Free React Native Introduction for Beginners: Get Started with React Native and learn how to build an iOS and Android app!",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/qSRrxpdMpVc/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/qSRrxpdMpVc/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/qSRrxpdMpVc/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Academind",
        liveBroadcastContent: "none",
        publishTime: "2019-08-21T15:33:20Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "AHsDoq64z2lpwlR9-cVZqFktN30",
      id: {
        kind: "youtube#video",
        videoId: "BwuLxPH8IDs",
      },
      snippet: {
        publishedAt: "2020-01-21T16:00:03Z",
        channelId: "UCSJbGtTlrDami-tDGPUV9-w",
        title:
          "TypeScript Course for Beginners - Learn TypeScript from Scratch!",
        description:
          "Free TypeScript Introduction for Beginners: Get Started with TypeScript, learn the Basics, its Features, Workflows and how to use it ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/BwuLxPH8IDs/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/BwuLxPH8IDs/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/BwuLxPH8IDs/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Academind",
        liveBroadcastContent: "none",
        publishTime: "2020-01-21T16:00:03Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "yislE7GhhQiRf3jy8QQvJHtZN98",
      id: {
        kind: "youtube#video",
        videoId: "NemyDIUcC64",
      },
      snippet: {
        publishedAt: "2020-01-27T12:30:03Z",
        channelId: "UCvzlnZbePin9kH-1JCKBt8Q",
        title:
          "Complete React CRUD with Asp.Net Core Web API | Full Stack Tutorial",
        description:
          "React js CRUD Operations- Insert, Update, Delete and Retrieve are implemented with Asp.Net Core Web API from Scratch. First of ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/NemyDIUcC64/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/NemyDIUcC64/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/NemyDIUcC64/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "CodAffection",
        liveBroadcastContent: "none",
        publishTime: "2020-01-27T12:30:03Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "EESPeg0Hv1_L3-nLbs8BSk8aIBA",
      id: {
        kind: "youtube#video",
        videoId: "TlB_eWDSMt4",
      },
      snippet: {
        publishedAt: "2018-02-21T23:57:12Z",
        channelId: "UCWv7vMbMWH4-V0ZXdmDpPBA",
        title: "Node.js Tutorial for Beginners: Learn Node in 1 Hour",
        description:
          "Node.js Tutorial for Beginners: Learn Node in 1 Hour Get the complete Node course: http://bit.ly/2NfkpOC Subscribe for more ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/TlB_eWDSMt4/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/TlB_eWDSMt4/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/TlB_eWDSMt4/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Programming with Mosh",
        liveBroadcastContent: "none",
        publishTime: "2018-02-21T23:57:12Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "hQa1KCOplHCu6-4IWyfyCR3mSbk",
      id: {
        kind: "youtube#video",
        videoId: "ur6I5m2nTvk",
      },
      snippet: {
        publishedAt: "2019-11-25T09:47:07Z",
        channelId: "UCW5YeuERMmlnqo4oq8vwUpg",
        title: "React Native Tutorial  #1 - Introduction",
        description:
          "Hey gang, and welcome to your first React Native tutorial for beginners. In this series we'll go from novice to ninja and create a ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/ur6I5m2nTvk/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/ur6I5m2nTvk/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/ur6I5m2nTvk/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "The Net Ninja",
        liveBroadcastContent: "none",
        publishTime: "2019-11-25T09:47:07Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "BYjprPqJ8ez6t1mqdqdt1i_T_ac",
      id: {
        kind: "youtube#video",
        videoId: "x0uinJvhNxI",
      },
      snippet: {
        publishedAt: "2019-07-10T15:00:16Z",
        channelId: "UCSJbGtTlrDami-tDGPUV9-w",
        title:
          "Flutter Crash Course for Beginners - Build a Flutter App with Google&#39;s Flutter &amp; Dart",
        description:
          "Free Flutter Introduction for Beginners: Get Started with Flutter and learn how to build an iOS and Android app with Flutter! Join the ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/x0uinJvhNxI/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/x0uinJvhNxI/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/x0uinJvhNxI/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Academind",
        liveBroadcastContent: "none",
        publishTime: "2019-07-10T15:00:16Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "Pz0kjagK66zDMRVF_uH8qefifh4",
      id: {
        kind: "youtube#video",
        videoId: "Oe421EPjeBE",
      },
      snippet: {
        publishedAt: "2021-04-01T12:37:58Z",
        channelId: "UC8butISFwT-Wl7EV0hUK0BQ",
        title: "Node.js and Express.js - Full Course",
        description:
          "Learn how to use Node and Express in this comprehensive course. First, you will learn the fundamentals of Node and Express.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Oe421EPjeBE/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Oe421EPjeBE/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Oe421EPjeBE/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "freeCodeCamp.org",
        liveBroadcastContent: "none",
        publishTime: "2021-04-01T12:37:58Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "gXHJOWuimZnoZmJ8G6VsiHx83ps",
      id: {
        kind: "youtube#video",
        videoId: "DHvZLI7Db8E",
      },
      snippet: {
        publishedAt: "2019-01-17T15:00:01Z",
        channelId: "UCFbNIlppjAuEX4znoulh0Cw",
        title: "JavaScript Promises In 10 Minutes",
        description:
          "ES6 came with many new features, but one of the best features was the official introduction of Promises. Promises allow you to ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/DHvZLI7Db8E/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/DHvZLI7Db8E/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/DHvZLI7Db8E/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Web Dev Simplified",
        liveBroadcastContent: "none",
        publishTime: "2019-01-17T15:00:01Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "oqs8wLrER5tYcetGjbGFdTgahd8",
      id: {
        kind: "youtube#video",
        videoId: "CdDXbvBFXLY",
      },
      snippet: {
        publishedAt: "2021-03-01T15:18:07Z",
        channelId: "UCzNf0liwUzMN6_pixbQlMhQ",
        title: "Use the Google Maps API to build a custom map with markers",
        description:
          "In this video we'll be building a custom styled Google map with multiple custom markers, using the Google Maps JavaScript API.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/CdDXbvBFXLY/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/CdDXbvBFXLY/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/CdDXbvBFXLY/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Coder Coder",
        liveBroadcastContent: "none",
        publishTime: "2021-03-01T15:18:07Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "I_lPDX17GsISMAATtgvska7HRKE",
      id: {
        kind: "youtube#video",
        videoId: "gxpX_mubz2A",
      },
      snippet: {
        publishedAt: "2020-06-08T18:46:48Z",
        channelId: "UCsnGwSIHyoYN0kiINAGUKxg",
        title: "How to Make Your Own VPN (And Why You Would Want to)",
        description:
          "Sponsored by Linode! Get $20 credit for your first cloud server or VPS here: https://linode.com/wolfgang Text version: ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/gxpX_mubz2A/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/gxpX_mubz2A/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/gxpX_mubz2A/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Wolfgang's Channel",
        liveBroadcastContent: "none",
        publishTime: "2020-06-08T18:46:48Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "OC8HPtTGr_mNuSf48L7drJSfwT8",
      id: {
        kind: "youtube#video",
        videoId: "1kUoOLZ0g6g",
      },
      snippet: {
        publishedAt: "2021-05-31T03:30:00Z",
        channelId: "UCWCGvAu1NDCldmLasELk62g",
        title:
          "🎯 Complete JavaScript Tutorial In Hindi for Beginners With Projects [ Part-1 ] | JS Tutorial in 2023",
        description:
          "Javascript #Tutorial #Hindi Important Tutorial Link --------------------------------------------- JavaScript for Beginners Part-2: ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/1kUoOLZ0g6g/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/1kUoOLZ0g6g/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/1kUoOLZ0g6g/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Tech Gun",
        liveBroadcastContent: "none",
        publishTime: "2021-05-31T03:30:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "-SIJb9BmiJLqvpESHRk37gBnUJs",
      id: {
        kind: "youtube#video",
        videoId: "hKB-YGF14SY",
      },
      snippet: {
        publishedAt: "2020-05-16T17:57:42Z",
        channelId: "UCeVMnSShP_Iviwkknt83cww",
        title: "JavaScript Tutorial In Hindi",
        description:
          "00:00 – Video Introduction 01:10 – JavaScript Introduction 02:43 – Basics of JavaScript 04:55 – Coding First Line of JavaScript ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/hKB-YGF14SY/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/hKB-YGF14SY/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/hKB-YGF14SY/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "CodeWithHarry",
        liveBroadcastContent: "none",
        publishTime: "2020-05-16T17:57:42Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "0PfK_yKX7J5LgBUM8eiXN-WhPLk",
      id: {
        kind: "youtube#video",
        videoId: "Kdz9J5vC4_o",
      },
      snippet: {
        publishedAt: "2021-12-10T13:30:05Z",
        channelId: "UC0T6MVd3wQDB5ICAe45OxaQ",
        title:
          "JavaScript Tutorial for Beginners | Full Course to Learn What is JavaScript in Hindi",
        description:
          "In this free JavaScript tutorial for beginners in Hindi from WsCube Tech, you will learn the programming language from basic to ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Kdz9J5vC4_o/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Kdz9J5vC4_o/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Kdz9J5vC4_o/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "WsCube Tech",
        liveBroadcastContent: "none",
        publishTime: "2021-12-10T13:30:05Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "Os2WRGjvyuIcc77hGG21IL3wvpE",
      id: {
        kind: "youtube#video",
        videoId: "Q33KBiDriJY",
      },
      snippet: {
        publishedAt: "2019-07-28T08:30:00Z",
        channelId: "UCkw4JCwteGrDHIsyIIKo4tQ",
        title:
          "Web Development Full Course - 10 Hours | Learn Web Development from Scratch | Edureka",
        description:
          'Full Stack Web Development Training (Use Code "YOUTUBE20"): ...',
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/Q33KBiDriJY/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/Q33KBiDriJY/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/Q33KBiDriJY/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "edureka!",
        liveBroadcastContent: "none",
        publishTime: "2019-07-28T08:30:00Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "txoR8Tl9CxYNcJR2hRk5JO4qiFE",
      id: {
        kind: "youtube#video",
        videoId: "PayzRm615d8",
      },
      snippet: {
        publishedAt: "2022-06-22T12:30:12Z",
        channelId: "UC41z1c5ZlERyGfItcQdi-Cg",
        title: "200 MEMES in 1 SONG (in 20 minutes)",
        description:
          "200 Memes in 1 song, played on piano, in 20 minutes!! I love reading your comments, your support pushes me to create videos ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/PayzRm615d8/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/PayzRm615d8/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/PayzRm615d8/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "PACIL",
        liveBroadcastContent: "none",
        publishTime: "2022-06-22T12:30:12Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "Fxnfc0B4ruV6PjcE7S9VTIg4pwQ",
      id: {
        kind: "youtube#video",
        videoId: "D-h8L5hgW-w",
      },
      snippet: {
        publishedAt: "2021-01-27T14:15:01Z",
        channelId: "UCVyRiMvfUNMA1UPlDPzG5Ow",
        title: "HTML and CSS Tutorial for 2021 - COMPLETE Crash Course!",
        description:
          "https://bit.ly/3iSlL2H - Become a frontend developer (50% off limited time!) -- https://bit.ly/3F2H8Id Learn UI/UX Today.",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/D-h8L5hgW-w/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/D-h8L5hgW-w/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/D-h8L5hgW-w/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "DesignCourse",
        liveBroadcastContent: "none",
        publishTime: "2021-01-27T14:15:01Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "Si_K6b2K5fz8RB2EQFs1pzwuMnM",
      id: {
        kind: "youtube#video",
        videoId: "q_zrgBobQV4",
      },
      snippet: {
        publishedAt: "2021-07-28T15:00:40Z",
        channelId: "UCgFvT6pUq9HLOvKBYERzXSQ",
        title: "This Japanese Bassist Must Be STOPPED (Bass Battle)",
        description:
          "Reacting to some of the best Japanese bassists of the world... so this means I must STOP them with a bass battle. Subscribe for ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/q_zrgBobQV4/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/q_zrgBobQV4/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/q_zrgBobQV4/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Davie504",
        liveBroadcastContent: "none",
        publishTime: "2021-07-28T15:00:40Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "OSo5eP6sjXdRzt0YQq8JSjKFlu0",
      id: {
        kind: "youtube#video",
        videoId: "SZQz9tkEHIg",
      },
      snippet: {
        publishedAt: "2018-11-13T17:00:22Z",
        channelId: "UCftwRNsjfRo08xYE31tkiyw",
        title:
          "Hacker Breaks Down 26 Hacking Scenes From Movies &amp; TV | WIRED",
        description:
          "Hacker and security researcher Samy Kamkar takes a look at a variety of hacking scenes from popular media and examines their ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/SZQz9tkEHIg/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/SZQz9tkEHIg/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/SZQz9tkEHIg/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "WIRED",
        liveBroadcastContent: "none",
        publishTime: "2018-11-13T17:00:22Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "LmQ2wKD6PNX8aA6dfmq0bWIoNS8",
      id: {
        kind: "youtube#video",
        videoId: "qw--VYLpxG4",
      },
      snippet: {
        publishedAt: "2019-04-04T14:00:12Z",
        channelId: "UC8butISFwT-Wl7EV0hUK0BQ",
        title: "Learn PostgreSQL Tutorial - Full Course for Beginners",
        description:
          "Learn how to use PostgreSQL in this full course. PostgreSQL is a general purpose and object-relational database management ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/qw--VYLpxG4/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/qw--VYLpxG4/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/qw--VYLpxG4/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "freeCodeCamp.org",
        liveBroadcastContent: "none",
        publishTime: "2019-04-04T14:00:12Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "ElsYiqMycvke0JOLrehQQrF2Pfw",
      id: {
        kind: "youtube#video",
        videoId: "UzoESIXjSUE",
      },
      snippet: {
        publishedAt: "2019-02-03T16:14:47Z",
        channelId: "UCyoCNSnqsLGB2a6Rfr8UgXw",
        title: "Useful Youtube Addon Tutorial - Block Tube",
        description:
          "A very short tutorial to show you how to make youtube good again by using the excellent BlockTube available addon for both ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/UzoESIXjSUE/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/UzoESIXjSUE/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/UzoESIXjSUE/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "Crazy Dubs Cartoons",
        liveBroadcastContent: "none",
        publishTime: "2019-02-03T16:14:47Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "-i26b1I3LWdphYnr5H126oOgvwY",
      id: {
        kind: "youtube#video",
        videoId: "4u6A40QTWVI",
      },
      snippet: {
        publishedAt: "2017-04-28T17:02:48Z",
        channelId: "UC0rDDvHM7u_7aWgAojSXl1Q",
        title:
          "You Can MELT METAL In Your HAND! - Liquid Metal Science Experiments",
        description:
          "Gallium metal melts at about 30ºC 86ºF so you can melt it in your hand or warm water, and pour it into molds. Great fun science ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/4u6A40QTWVI/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/4u6A40QTWVI/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/4u6A40QTWVI/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "DaveHax",
        liveBroadcastContent: "none",
        publishTime: "2017-04-28T17:02:48Z",
      },
    },
    {
      kind: "youtube#searchResult",
      etag: "pWu_bBXRfL8oTPfedAO9AVUw_a0",
      id: {
        kind: "youtube#video",
        videoId: "PkZNo7MFNFg",
      },
      snippet: {
        publishedAt: "2018-12-10T14:13:40Z",
        channelId: "UC8butISFwT-Wl7EV0hUK0BQ",
        title: "Learn JavaScript - Full Course for Beginners",
        description:
          "This complete 134-part JavaScript tutorial for beginners will teach you everything you need to know to get started with the ...",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/PkZNo7MFNFg/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/PkZNo7MFNFg/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/PkZNo7MFNFg/hqdefault.jpg",
            width: 480,
            height: 360,
          },
        },
        channelTitle: "freeCodeCamp.org",
        liveBroadcastContent: "none",
        publishTime: "2018-12-10T14:13:40Z",
      },
    },
  ],
};
