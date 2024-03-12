// import React from "react";

// export function Contact() {
//   async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         access_key: "2c6d9507-5de1-4c6d-b34e-2e487bc25ce9",
//         name: e.currentTarget.name.value,
//         email: e.currentTarget.email.value,
//         message: e.currentTarget.message.value,
//       }),
//     });
//     const result = await response.json();
//     if (result.success) {
//       console.log(result);
//     }
//   }

//   return (
//     <form
//       onSubmit={(e) => handleSubmit(e)}
//       className="max-w-lg mx-auto mt-4 bg-neutral-950 p-6 rounded-md border border-neutral-800"
//     >
//       <div className="mb-4">
//         <label htmlFor="name" className="text-neutral-200 block mb-1">
//           Name
//         </label>
//         <input
//           type="text"
//           name="name"
//           id="name"
//           required
//           placeholder="Your name"
//           className="w-full rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 p-2 text-neutral-200"
//           autoComplete="name"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="email" className="text-neutral-200 block mb-1">
//           Email
//         </label>
//         <input
//           type="email"
//           name="email"
//           id="email"
//           required
//           placeholder="email@example.com"
//           className="w-full rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 p-2 text-neutral-200"
//           autoComplete="email"
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="message" className="text-neutral-200 block mb-1">
//           Message
//         </label>
//         <textarea
//           name="message"
//           id="message"
//           required
//           rows={3}
//           placeholder="Enter Message"
//           className="w-full rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 p-2 text-neutral-200"
//           autoComplete="off"
//         ></textarea>
//       </div>
//       <button
//         type="submit"
//         className="bg-gradient-to-b from-teal-400 to-teal-600 text-neutral-900 px-4 py-2 rounded-md mx-auto block"
//       >
//         Submit Form
//       </button>
//     </form>
//   );
// }
