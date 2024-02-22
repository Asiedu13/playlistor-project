// "use client";

// // import { google } from "googleapis";
// // const { google } = require("googleapis");
// // const youtube = google.youtube("v3");

// export default function Page() {

//   const handleLinkFetch = async (e) => {
//     e.preventDefault();
//     // const res = await fetch(
//     //   `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
//     // );
//     // const auth = new google.auth.GoogleAuth({
//     //   scopes: [
//     //     "https://www.googleapis.com/auth/youtube",
//     //     "https://www.googleapis.com/auth/youtube.force-ssl",
//     //     "https://www.googleapis.com/auth/youtube.readonly",
//     //     "https://www.googleapis.com/auth/youtubepartner",
//     //     "https://www.googleapis.com/auth/youtubepartner-channel-audit",
//     //   ],
//     // });

//     // const authClient = await auth.getClient();
//     // google.options({auth: authClient})

//     // const res = await youtube.channels.list(
//     //   {
//     //     forUsername: 'princeasiedu6533',
//     //     part: 'snippet,contentDetails'
//     //   }
//     // )
//     // console.log(res.data);

//     // const response = await res.json();
//     // console.log( response );
//     // const target = e.target;
//     // `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`;

//     // console.log(target.search.value);

//   };
//   return (
//     <section>
//       <header className="px-[200px] mt-[100px]">
//         <h1 className="text-5xl text-specifics">YouTube</h1>
//         <p className="text-accent">Get all video links from a playlist</p>
//       </header>
//       <section className="px-[200px] py-[50px]">
//         <form className="flex items-center" onSubmit={handleLinkFetch}>
//           <input
//             type="text"
//             name="search"
//             placeholder="Paste link here"
//             className="p-5 w-full outline-none rounded-md h-[60px]"
//           />
//           <button className="w-[200px] h-[60px] rounded-r-md bg-specifics text-background">
//             Fetch links
//           </button>
//         </form>
//       </section>
//     </section>
//   );
// }
