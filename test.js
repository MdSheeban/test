import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from "firebase/auth";

const container = document.querySelector('.container');
console.log(container);

container.addEventListener('click' , ()=>{
  console.log("YES");
  const provider = new GoogleAuthProvider();
  signInWithPopup(authentication, provider).then( (result)=>{
    console.log(result);
  }).catch( (err)=>{
    console.log(err);
  })
} )

// // Create the logo image element
// const logoImg = document.createElement('img');
// logoImg.src = logoSrc;
// logoImg.alt = 'Logo';

// // Set styles for the logo image
// logoImg.style.position = 'absolute';
// logoImg.style.right = '10px'; // Adjust as needed
// logoImg.style.top = '50%';
// logoImg.style.transform = 'translateY(-50%)';
// logoImg.style.width = '24px';
// logoImg.style.height = '24px';

// // Get the input element
// const inputEl = document.querySelector('.container input');

// // Get the container div
// const containerDiv = document.querySelector('.container');

// // Append the logo image to the container div
// containerDiv.appendChild(logoImg);

// // Hide the logo image when the input is focused
// inputEl.addEventListener('focus', function() {
//   logoImg.style.display = 'none';
// });

// // Show the logo image when the input is blurred and empty
// inputEl.addEventListener('blur', function() {
//   if (!inputEl.value) {
//     logoImg.style.display = 'block';
//   }
// });


// const messageURL =
//   "https://be.dolphy.io/api/twitter/v1/public/tweet/personalized_dm";

// // Function To Get User NAME From Profile Page
// function getUserIDFromProfile() {
//     const one = document.querySelector('div[class="css-1dbjc4n r-13awgt0 r-12vffkv"]');
//     if (one) {
//       const two = document.querySelector('div[class="css-1dbjc4n r-18u37iz r-13qz1uu r-417010"]');
//       if (two) {
//         const three = document.querySelector('main[role="main"]');
//         if (three) {
//           const four = document.querySelector('div[class="css-1dbjc4n r-1jgb5lz r-1ye8kvj r-13qz1uu"]');
//           if (four) {
//             const five = document.querySelector('div[data-testid="UserName"]');
//             if (five) {
//               const six = five.querySelector('div[class="css-1dbjc4n r-1wbh5a2 r-dnmrzs r-1ny4l3l"]');
//               if (six) {
//                 const seven = six.querySelector('span[class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"]')
//                 if (seven) {
//                   const userID = seven.textContent;
//                   return userID;
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
  
//   // Function To Get User BIO From Profile Page
//   function getUserBioFromProfile() {
//     const one = document.querySelector('div[class="css-1dbjc4n r-13awgt0 r-12vffkv"]');
//     if (one) {
//       const two = document.querySelector('div[class="css-1dbjc4n r-18u37iz r-13qz1uu r-417010"]');
//       if (two) {
//         const three = document.querySelector('main[role="main"]');
//         if (three) {
//           const four = document.querySelector('div[class="css-1dbjc4n r-1jgb5lz r-1ye8kvj r-13qz1uu"]');
//           if (four) {
//             const five = document.querySelector('div[data-testid="UserDescription"]');
//             if (five) {
//               const spanElements = five.querySelectorAll("span");
//               const spanTexts = [];
  
//               spanElements.forEach((span) => {
//                 spanTexts.push(span.textContent);
//               });
//               const singleLineText = spanTexts.join("");
//                 return singleLineText;
//             } else {
//               return null;
//             }
//           }
//         }
//       }
//     }
//   }
  
//   // Function To Get User TWEET From Profile Page
//   function getUserTweetFromProfile() {
//     const one = document.querySelector('div[class="css-1dbjc4n r-13awgt0 r-12vffkv"]');
//     if (one) {
//       const two = document.querySelector('div[class="css-1dbjc4n r-18u37iz r-13qz1uu r-417010"]');
//       if (two) {
//         const three = document.querySelector('main[role="main"]');
//         if (three) {
//           const four = document.querySelector('div[class="css-1dbjc4n r-1jgb5lz r-1ye8kvj r-13qz1uu"]');
//           if (four) {
//             const five = document.querySelector('section[role="region"]');
//             if (five) {
//               const six = five.querySelector('div[class="css-1dbjc4n r-13qz1uu"]');
//               if (six) {
//                 const seven = six.querySelector('div[data-testid="cellInnerDiv"]');
//                 if (seven) {
//                   const eight = seven.querySelector('div[data-testid="tweetText"]');
//                   if (eight) {
//                     const nine = eight.querySelectorAll("span");
//                     const spanTexts = [];
  
//                     nine.forEach((span) => {
//                       spanTexts.push(span.textContent);
//                     });
//                     const firstTweet = spanTexts.join();
//                     const result = [firstTweet];
//                     result.push("");
//                     return result;
//                   } else {
//                     return [null];
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
  
//   // Function To STORE The User Data[NAME, BIO, Tweet] In The Local Storage Against User ID
//   function userDataToStoreInLocalStorage() {
//     const follower_name = getUserIDFromProfile();
//     const bio = getUserBioFromProfile();
//     const tweets = getUserTweetFromProfile();
  
//     if (
//       follower_name !== undefined &&
//       bio !== undefined &&
//       tweets !== undefined
//     ) {
//       const userDataObject = {
//         follower_name: follower_name,
//         bio: bio,
//         tweets: tweets,
//       };
//       localStorage.setItem(follower_name, JSON.stringify(userDataObject));
//     }
//   }
  
//   // Add the "AIReply" button to the Twitter Message page
//   function observeMessageInput() {
//     const observer = new MutationObserver((mutations) => {
//       mutations.forEach((mutation) => {
//         if (mutation.type === "childList" && mutation.addedNodes.length) {
//           addAIButtonToMessageInput();
//         }
//       });
//     });
  
//     observer.observe(document.body, { childList: true, subtree: true });
//   }
  
//   // Add the "AIReply" button to the Twitter Message page
//   function addAIButtonToMessageInput() {
//     if (window.location.href.includes("twitter.com/messages")) {
//       const messageInput1 = document.querySelector('div[role="textbox"]');

//       if (messageInput1) {
//         // Check if the "Toolbar" div element has already been added
//         if (
//           messageInput1.parentElement &&
//           messageInput1.parentElement.firstElementChild.classList.contains(
//             "extention-toolbar"
//           )
//         ) {
//           return;
//         }  
//         // Insert the new div element above the toolbar
//           messageInput1.parentElement.insertBefore(
//             extensionToolbar1,
//             messageInput1
//         );
//       }
//     }
//   }

//   const extensionToolbar1 = document.createElement("span");
//   extensionToolbar1.classList.add("extention-toolbar");
  
//   // Extension Toolbar IconsContainer
//   const iconsContainer1 = document.createElement("span");
//   iconsContainer1.classList.add("icons-container");
//   extensionToolbar1.appendChild(iconsContainer1);
  
//   // Create the icon-wrapper
//   const iconWrapper1 = document.createElement("span");
//   iconWrapper1.classList.add("icon-wrapper");
//   extensionToolbar1.style.cursor = "pointer";

//   // Extension Toolbar MainIconContainer
//   const mainIconContainer1 = document.createElement("span");
//   mainIconContainer1.classList.add("main-icon-container");
//   iconWrapper1.appendChild(mainIconContainer1);
  
//   // Hover Target Element
//   const hoverContainer1 = document.createElement("span");
//   hoverContainer1.classList.add("hover-container");
//   hoverContainer1.textContent = "Generate Reply";
//   // Changes
//   hoverContainer1.style.color = "Black";
//   iconWrapper1.appendChild(hoverContainer1);
  
//   // Append the icon-wrapper to the extensionToolbar
//   extensionToolbar1.appendChild(iconWrapper1);
  

//   // Add MainIcon to MainIconContainer
//   const mainIcon1 = document.createElement("img");
//   mainIcon1.src = chrome.runtime.getURL("./public/icon-rounded.png");
//   mainIcon1.alt = "main-icon";
//   mainIcon1.width = 25;
//   mainIcon1.height = 25;
//   extensionToolbar1.onclick = handleGenerateMessageReply;
//   mainIconContainer1.appendChild(mainIcon1);
  
//   function check() {
//     if (window.location.href.includes("twitter.com/messages")) {
//       iconWrapper1.id = "iconWrap";

//       // extensionToolbar1.id = "exten"
//       // iconsContainer1.id = "icon-con"
//       // mainIconContainer1.id = "icon-Maincon"
//       // hoverContainer1.id ="hover-con";
//     }
//   }

// // Function To Get User NAME From MESSAGE Page
//   function getUserNameFromMessagePage() {
//     if (window.location.href.includes("twitter.com/messages")) {
//       const messageInput1 = document.querySelector('div[role="link"]');
//       if (messageInput1) {
//         const seven = messageInput1.querySelector('div[class="css-1dbjc4n r-1wbh5a2 r-dnmrzs"]');
//         if (seven) {
//           const eight = seven.querySelector('a[class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-1wbh5a2 r-dnmrzs r-1ny4l3l"]');
//           if (eight) {
//             const nine = eight.querySelector(".css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0");
//             const userID = nine.textContent;
//             return userID;
//           }
//         }
//       }
//     }
//   }
  
//   // Function To Check If The USer Data Is Available In The Local Storage
//   function getDataFromLocalStorage() {
//     const checkUserId = getUserNameFromMessagePage();
//     const checkResults = localStorage.getItem(checkUserId);
//     if (checkResults) {
//       return JSON.parse(checkResults);
//     } else {
//       const checkUserName = getUserName();
//       const checkUser = localStorage.getItem(checkUserName);
//       if (checkUser) {
//         return JSON.parse(checkUser);
//       } else {
//         return JSON.parse(checkUserName);
//       }
//     }
//   }
  
//   // Function to paste the generated Message in the Message input box on Twitter Message Page
//   function populateDM(insertText) {
//     if (window.location.href.includes("twitter.com/messages")) {
//       const one = document.querySelector(
//         'section[role="region"]' && 'section[aria-labelledby="detail-header"]'
//       );
//       if (one) {
//         const two = one.querySelector('aside[role="complementary"]');
//         if (two) {
//           const three = two.querySelector('div[data-testid="dmComposerTextInput"]');
//           three.focus();
//           document.execCommand("selectAll", false, null);
//           document.execCommand(
//             "insertText",
//             false,
//             insertText.replace(/\n/g, " ")
//           );
//         } else {
//           console.error("Message input box not found");
//         }
//       }
//     }
//   }
  
//   // Function to generate reply Message
//   function handleGenerateMessageReply() {
//     chrome.storage.sync.get("tweeFeedAccessToken", (data) => {
//       const accessToken = data.tweeFeedAccessToken;
  
//       // You can use the accessToken here or store it in a variable for later use
//       chrome.runtime.sendMessage(
//         {
//           action: "postPersonalizedDM",
//           url: messageURL,
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`,
//           },
//           data: getDataFromLocalStorage(),
//         },
//         function (response) {
//           if (response.success) {
//             // Handle the response data
//             if (response.data) {
//               if (response.data.generateed_dm) {
//                 populateDM(response.data.generateed_dm);
//               }
//             }
//           } else {
//             // Handle the error
//             console.log("Personalized DM Error", response.error);
//           }
//         }
//       );
//     });
//   }
  
//   // getUserInfo FROM MESSAGE PAGE[USER NAME AND BIO(IF AVAILABLE)]
//   function getUserInfo() {
//     if (window.location.href.includes("twitter.com/messages")) {
//       const messageInput = document.querySelector('div[role="link"]');
//       if (messageInput) {
//         const one = messageInput.querySelector('div[class="css-1dbjc4n r-1wbh5a2 r-dnmrzs"]');
//         if (one) {
//           const two = one.querySelector('a[class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-1wbh5a2 r-dnmrzs r-1ny4l3l"]');
//           if (two) {
//             const three = two.querySelector(".css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0");
//             const follower_name = three.textContent;  
//             const userBIO = messageInput.querySelector('div[data-testid="UserDescription"]');
//             if (userBIO) {
//               const spanElements = userBIO.querySelectorAll("span");
//               const spanTexts = [];
  
//               spanElements.forEach((span) => {
//                 spanTexts.push(span.textContent);
//               });
  
//               const singleLineText = spanTexts.join("");
  
//               if (follower_name) {
//                 const storedData = localStorage.getItem(follower_name);
//                 if (!storedData) {
//                   const userData = { follower_name: follower_name };
//                   if (singleLineText) {
//                     userData.bio = singleLineText;
//                   }
//                   localStorage.setItem(follower_name, JSON.stringify(userData));
//                 }
//               }
//               return userBIO;
//             } else {
//               if (follower_name) {
//                 const storedData = localStorage.getItem(follower_name);
//                 if (!storedData) {
//                   const userData = { follower_name: follower_name };
//                   localStorage.setItem(follower_name, JSON.stringify(userData));
//                 }
//               }
//               return null;
//             }
//           }
//         }
//       }
//     }
//     return null;
//   }
  
// function getUserName() {
//     if (window.location.href.includes("twitter.com/messages")) {
//       const messageInput = document.querySelector('h2[role="heading"]' && 'h2[id="detail-header"]');
//       if (messageInput) {
//         const one = messageInput.querySelector('div[class="css-1dbjc4n r-1awozwy r-xoduu5 r-18u37iz r-dnmrzs"]');
//         if (one) {
//           const two = one.querySelector('span[class="css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-bcqeeo r-qvutc0"]');
//           const follower_name = two.textContent;
//           return follower_name;
//         }
//       }
//     }
// }
  
  // Add the "AIReply" button to the Twitter Message page
  // function observeMessageInput() {
  //   const observer = new MutationObserver((mutations) => {
  //     mutations.forEach((mutation) => {
  //       if (mutation.type === "childList" && mutation.addedNodes.length) {
  //         addAIButtonToMessageInput();
  //       }
  //     });
  //   });
  
  //   observer.observe(document.body, { childList: true, subtree: true });
  // }
  
  // // Add the "AIReply" button to the Twitter Message page
  // function addAIButtonToMessageInput() {
  //   if (window.location.href.includes("twitter.com/messages")) {

  //     const one = document.querySelector('aside[role="complementary"]' && 'aside[aria-label="Start a new message"]')
  //     if (one) {
  //       const two = one.querySelector('label[class="css-1dbjc4n r-1dqbpge r-13awgt0 r-18u37iz"]' && 'label[data-testid="dmComposerTextInput_label"]');
  //       if (two) {
  //         const three = two.querySelector('div[class="public-DraftEditorPlaceholder-inner"]')
  //         // if (three) {
  //         //   const userID = three.textContent;
  //         //   console.log("userID", userID);
  //         // }
  //         if (three) {
  //           // Check if the "Toolbar" div element has already been added
  //           if (
  //             three.parentElement &&
  //             three.parentElement.firstElementChild.classList.contains(
  //               "extention-toolbar"
  //             )
  //           ) {
  //             return;
  //           }  
  //           // Insert the new div element above the toolbar
  //           three.appendChild(
  //               extensionToolbar1,
  //               three
  //           );
  //         }
  //       }
  //     }

  //     if (messageInput1) {
  //       // Check if the "Toolbar" div element has already been added
  //       if (
  //         messageInput1.parentElement &&
  //         messageInput1.parentElement.firstElementChild.classList.contains(
  //           "extention-toolbar"
  //         )
  //       ) {
  //         return;
  //       }  
  //       // Insert the new div element above the toolbar
  //         messageInput1.parentElement.insertBefore(
  //           extensionToolbar1,
  //           messageInput1
  //       );
  //     }
  //   }
  // }
  
  // const extensionToolbar1 = document.createElement("span");
  // extensionToolbar1.classList.add("extention-toolbar");
  
  // // Extension Toolbar IconsContainer
  // const iconsContainer1 = document.createElement("span");
  // iconsContainer1.classList.add("icons-container");
  // extensionToolbar1.appendChild(iconsContainer1);
  
  // // Create the icon-wrapper
  // const iconWrapper1 = document.createElement("span");
  // iconWrapper1.classList.add("icon-wrapper");
  
  // // Extension Toolbar MainIconContainer
  // const mainIconContainer1 = document.createElement("span");
  // mainIconContainer1.classList.add("main-icon-container");
  // iconWrapper1.appendChild(mainIconContainer1);
  
  // // Hover Target Element
  // const hoverContainer1 = document.createElement("span");
  // hoverContainer1.classList.add("hover-container");
  // hoverContainer1.textContent = "Generate Reply";
  // // Changes
  // hoverContainer1.style.color = "Black";
  // iconWrapper1.appendChild(hoverContainer1);
  
  // // Append the icon-wrapper to the extensionToolbar
  // extensionToolbar1.appendChild(iconWrapper1);
  

  // // Add MainIcon to MainIconContainer
  // const mainIcon1 = document.createElement("img");
  // mainIcon1.src = chrome.runtime.getURL("./public/icon-rounded.png");
  // mainIcon1.alt = "main-icon";
  // mainIcon1.width = 24;
  // mainIcon1.height = 24;
  // // extensionToolbar1.onclick = handleGenerateMessageReply;
  // mainIconContainer1.appendChild(mainIcon1);













//   const messageURL =
//   "https://be.dolphy.io/api/twitter/v1/public/tweet/personalized_dm";

// // Function To Get User NAME From Profile Page
// function getUserIDFromProfile() {
//     const one = document.querySelector('div[class="css-1dbjc4n r-13awgt0 r-12vffkv"]');
//     if (one) {
//       const two = document.querySelector('div[class="css-1dbjc4n r-18u37iz r-13qz1uu r-417010"]');
//       if (two) {
//         const three = document.querySelector('main[role="main"]');
//         if (three) {
//           const four = document.querySelector('div[class="css-1dbjc4n r-1jgb5lz r-1ye8kvj r-13qz1uu"]');
//           if (four) {
//             const five = document.querySelector('div[data-testid="UserName"]');
//             if (five) {
//               const six = five.querySelector('div[class="css-1dbjc4n r-1wbh5a2 r-dnmrzs r-1ny4l3l"]');
//               if (six) {
//                 const seven = six.querySelector('span[class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"]')
//                 if (seven) {
//                   const userID = seven.textContent;
//                   return userID;
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
  
//   // Function To Get User BIO From Profile Page
//   function getUserBioFromProfile() {
//     const one = document.querySelector('div[class="css-1dbjc4n r-13awgt0 r-12vffkv"]');
//     if (one) {
//       const two = document.querySelector('div[class="css-1dbjc4n r-18u37iz r-13qz1uu r-417010"]');
//       if (two) {
//         const three = document.querySelector('main[role="main"]');
//         if (three) {
//           const four = document.querySelector('div[class="css-1dbjc4n r-1jgb5lz r-1ye8kvj r-13qz1uu"]');
//           if (four) {
//             const five = document.querySelector('div[data-testid="UserDescription"]');
//             if (five) {
//               const spanElements = five.querySelectorAll("span");
//               const spanTexts = [];
  
//               spanElements.forEach((span) => {
//                 spanTexts.push(span.textContent);
//               });
//               const singleLineText = spanTexts.join("");
//                 return singleLineText;
//             } else {
//               return null;
//             }
//           }
//         }
//       }
//     }
//   }
  
//   // Function To Get User TWEET From Profile Page
//   function getUserTweetFromProfile() {
//     const one = document.querySelector('div[class="css-1dbjc4n r-13awgt0 r-12vffkv"]');
//     if (one) {
//       const two = document.querySelector('div[class="css-1dbjc4n r-18u37iz r-13qz1uu r-417010"]');
//       if (two) {
//         const three = document.querySelector('main[role="main"]');
//         if (three) {
//           const four = document.querySelector('div[class="css-1dbjc4n r-1jgb5lz r-1ye8kvj r-13qz1uu"]');
//           if (four) {
//             const five = document.querySelector('section[role="region"]');
//             if (five) {
//               const six = five.querySelector('div[class="css-1dbjc4n r-13qz1uu"]');
//               if (six) {
//                 const seven = six.querySelector('div[data-testid="cellInnerDiv"]');
//                 if (seven) {
//                   const eight = seven.querySelector('div[data-testid="tweetText"]');
//                   if (eight) {
//                     const nine = eight.querySelectorAll("span");
//                     const spanTexts = [];
  
//                     nine.forEach((span) => {
//                       spanTexts.push(span.textContent);
//                     });
//                     const firstTweet = spanTexts.join();
//                     const result = [firstTweet];
//                     result.push("");
//                     return result;
//                   } else {
//                     return [null];
//                   }
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
  
//   // Function To STORE The User Data[NAME, BIO, Tweet] In The Local Storage Against User ID
//   function userDataToStoreInLocalStorage() {
//     const follower_name = getUserIDFromProfile();
//     const bio = getUserBioFromProfile();
//     const tweets = getUserTweetFromProfile();
  
//     if (
//       follower_name !== undefined &&
//       bio !== undefined &&
//       tweets !== undefined
//     ) {
//       const userDataObject = {
//         follower_name: follower_name,
//         bio: bio,
//         tweets: tweets,
//       };
//       localStorage.setItem(follower_name, JSON.stringify(userDataObject));
//     }
//   }
  
//   // Add the "AIReply" button to the Twitter Message page
//   function observeMessageInput() {
//     const observer = new MutationObserver((mutations) => {
//       mutations.forEach((mutation) => {
//         if (mutation.type === "childList" && mutation.addedNodes.length) {
//           addAIButtonToMessageInput();
//         }
//       });
//     });
  
//     observer.observe(document.body, { childList: true, subtree: true });
//   }
  
//   // Add the "AIReply" button to the Twitter Message page
//   function addAIButtonToMessageInput() {
//     if (window.location.href.includes("twitter.com/messages")) {
//       const messageInput1 = document.querySelector('div[role="textbox"]');
//       if (messageInput1) {
//         // Check if the "Toolbar" div element has already been added
//         if (
//           messageInput1.parentElement &&
//           messageInput1.parentElement.firstElementChild.classList.contains(
//             "extention-toolbar"
//           )
//         ) {
//           return;
//         }  
//         // Insert the new div element above the toolbar
//           messageInput1.parentElement.insertBefore(
//             extensionToolbar1,
//             messageInput1
//         );
//       }
//     }
//   }

//   const extensionToolbar1 = document.createElement("span");
//   extensionToolbar1.classList.add("extention-toolbar");
  
//   // Extension Toolbar IconsContainer
//   const iconsContainer1 = document.createElement("span");
//   iconsContainer1.classList.add("icons-container");
//   extensionToolbar1.appendChild(iconsContainer1);
  
//   // Create the icon-wrapper
//   const iconWrapper1 = document.createElement("span");
//   iconWrapper1.classList.add("icon-wrapper");
//   extensionToolbar1.style.cursor = "pointer";

//   // Extension Toolbar MainIconContainer
//   const mainIconContainer1 = document.createElement("span");
//   mainIconContainer1.classList.add("main-icon-container");
//   iconWrapper1.appendChild(mainIconContainer1);
  
//   // Hover Target Element
//   const hoverContainer1 = document.createElement("span");
//   hoverContainer1.classList.add("hover-container");
//   hoverContainer1.textContent = "Generate Reply";
//   hoverContainer1.style.color = "Black";
//   iconWrapper1.appendChild(hoverContainer1);
  
//   // Append the icon-wrapper to the extensionToolbar
//   extensionToolbar1.appendChild(iconWrapper1);
  
//   // Add MainIcon to MainIconContainer
//   const mainIcon1 = document.createElement("img");
//   mainIcon1.src = chrome.runtime.getURL("./public/icon-rounded.png");
//   mainIcon1.alt = "main-icon";
//   mainIcon1.width = 25;
//   mainIcon1.height = 25;
//   extensionToolbar1.onclick = handleGenerateMessageReply;
//   mainIconContainer1.appendChild(mainIcon1);
  

// // Function To Get User NAME From MESSAGE Page
//   function getUserNameFromMessagePage() {
//     if (window.location.href.includes("twitter.com/messages")) {
//       const messageInput1 = document.querySelector('div[role="link"]');
//       if (messageInput1) {
//         const seven = messageInput1.querySelector('div[class="css-1dbjc4n r-1wbh5a2 r-dnmrzs"]');
//         if (seven) {
//           const eight = seven.querySelector('a[class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-1wbh5a2 r-dnmrzs r-1ny4l3l"]');
//           if (eight) {
//             const nine = eight.querySelector(".css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0");
//             const userID = nine.textContent;
//             return userID;
//           }
//         }
//       }
//     }
//   }
  
//   // Function To Check If The USer Data Is Available In The Local Storage
//   function getDataFromLocalStorage() {
//     const checkUserId = getUserNameFromMessagePage();
//     const checkResults = localStorage.getItem(checkUserId);
//     if (checkResults) {
//       return JSON.parse(checkResults);
//     } else {
//       const checkUserName = getUserName();
//       const checkUser = localStorage.getItem(checkUserName);
//       if (checkUser) {
//         return JSON.parse(checkUser);
//       } else {
//         return JSON.parse(checkUserName);
//       }
//     }
//   }
  
//   // Function to paste the generated Message in the Message input box on Twitter Message Page
//   function populateDM(insertText) {
//     if (window.location.href.includes("twitter.com/messages")) {
//       const one = document.querySelector(
//         'section[role="region"]' && 'section[aria-labelledby="detail-header"]'
//       );
//       if (one) {
//         const two = one.querySelector('aside[role="complementary"]');
//         if (two) {
//           const three = two.querySelector('div[data-testid="dmComposerTextInput"]');
//           three.focus();
//           document.execCommand("selectAll", false, null);
//           document.execCommand(
//             "insertText",
//             false,
//             insertText.replace(/\n/g, " ")
//           );
//         } else {
//           console.error("Message input box not found");
//         }
//       }
//     }
//   }
  
//   // Function to generate reply Message
//   function handleGenerateMessageReply() {
//     chrome.storage.sync.get("tweeFeedAccessToken", (data) => {
//       const accessToken = data.tweeFeedAccessToken;
  
//       // You can use the accessToken here or store it in a variable for later use
//       chrome.runtime.sendMessage(
//         {
//           action: "postPersonalizedDM",
//           url: messageURL,
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`,
//           },
//           data: getDataFromLocalStorage(),
//         },
//         function (response) {
//           if (response.success) {
//             // Handle the response data
//             if (response.data) {
//               if (response.data.generateed_dm) {
//                 populateDM(response.data.generateed_dm);
//               }
//             }
//           } else {
//             // Handle the error
//             console.log("Personalized DM Error", response.error);
//           }
//         }
//       );
//     });
//   }
  
//   // getUserInfo FROM MESSAGE PAGE[USER NAME AND BIO(IF AVAILABLE)]
//   function getUserInfo() {
//     if (window.location.href.includes("twitter.com/messages")) {
//       const messageInput = document.querySelector('div[role="link"]');
//       if (messageInput) {
//         const one = messageInput.querySelector('div[class="css-1dbjc4n r-1wbh5a2 r-dnmrzs"]');
//         if (one) {
//           const two = one.querySelector('a[class="css-4rbku5 css-18t94o4 css-1dbjc4n r-1loqt21 r-1wbh5a2 r-dnmrzs r-1ny4l3l"]');
//           if (two) {
//             const three = two.querySelector(".css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0");
//             const follower_name = three.textContent;  
//             const userBIO = messageInput.querySelector('div[data-testid="UserDescription"]');
//             if (userBIO) {
//               const spanElements = userBIO.querySelectorAll("span");
//               const spanTexts = [];
  
//               spanElements.forEach((span) => {
//                 spanTexts.push(span.textContent);
//               });
  
//               const singleLineText = spanTexts.join("");
  
//               if (follower_name) {
//                 const storedData = localStorage.getItem(follower_name);
//                 if (!storedData) {
//                   const userData = { follower_name: follower_name };
//                   if (singleLineText) {
//                     userData.bio = singleLineText;
//                   }
//                   localStorage.setItem(follower_name, JSON.stringify(userData));
//                 }
//               }
//               return userBIO;
//             } else {
//               if (follower_name) {
//                 const storedData = localStorage.getItem(follower_name);
//                 if (!storedData) {
//                   const userData = { follower_name: follower_name };
//                   localStorage.setItem(follower_name, JSON.stringify(userData));
//                 }
//               }
//               return null;
//             }
//           }
//         }
//       }
//     }
//     return null;
//   }
  
// function getUserName() {
//     if (window.location.href.includes("twitter.com/messages")) {
//       const messageInput = document.querySelector('h2[role="heading"]' && 'h2[id="detail-header"]');
//       if (messageInput) {
//         const one = messageInput.querySelector('div[class="css-1dbjc4n r-1awozwy r-xoduu5 r-18u37iz r-dnmrzs"]');
//         if (one) {
//           const two = one.querySelector('span[class="css-901oao css-16my406 css-1hf3ou5 r-poiln3 r-bcqeeo r-qvutc0"]');
//           const follower_name = two.textContent;
//           return follower_name;
//         }
//       }
//     }
// }



// Import the Twitter OAuth library
// const TwitterAuthProvider = require('twitter-oauth');

// Create a TwitterAuthProvider object
// const provider = new TwitterAuthProvider({

//   consumerKey: '2yGJchhLKdgcPE6SN1JWuQZcV',
//   consumerSecret: 'UC4x5M3TGZcWObLs63JkWXZOy3XJ1Bbch9scQuW7baOdTyDY60',
  // consumerKey: '1676107024264830976-GtlRM99JWqd4QgNQHRfgp1tcwCqbI8',
  // consumerSecret: 'WlPUz0z43ZTzERRYYyc1dYZYCFPtidhw5KAtlJ5EvesAG',
// });

// Listen for the Twitter login event
// document.addEventListener('twitter:login', async (event) => {
  // Get the user's access token
  // const accessToken = await event.credential.accessToken;

  // Do something with the user's access token
// });