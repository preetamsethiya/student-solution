import inIcon from "/src/assets/images/social_icons/in.png";
import instaIcon from "/src/assets/images/social_icons/insta.png";
import xIcon from "/src/assets/images/social_icons/x.png";
import whatsappIcon from "/src/assets/images/social_icons/whatsapp.png";

// cafes collection
const cafes = [
  {
    user_Id: "DK Computer",
    user_Name: "DK Computer",
    city: "Kondagaon",
    avtar_Url: "img.jpg",
    phone_No: "919617709663",
  },
  // {
  //   user_Name: "PS Computer",
  //   city: "Golawand",
  //   avtar_Url: "img.jpg",
  //   phone_No: "917974755379",
  // },
];

// image collection
const images = {
  inIcon,
  instaIcon,
  xIcon,
  whatsappIcon,
};

const profiles = [];

// update collection

// post sample ****
// const post_sample_02 = {
//   post_Id: "",
//   post_Src:
//     "https://drive.google.com/file/d//preview",
//   title: " ",
//   description: ` `,
//   date: ["", ""],
//   links: [
//     {
//       text: "Official site",
//       site: "",
//     },
//   ],
//   category: "updates",
// };

// smkv result
const results = [
  {
    course: "B.Sc Life Science",
    programmes: [
      {
        semester: "1st",
        resultType: "Regular",
        color: "bg-green-600",
        url: "https://smkv.ucanapply.com/results-declared/bachelor-of-science-life-science/eyJpdiI6IjJTbGNWbmlxQUZPdXYwSEVOWWdhakE9PSIsInZhbHVlIjoiM1VjODZxazJkRm9WVXU5em40aHRlQT09IiwibWFjIjoiNTMyZjg5YWFkMjg2NjA4ZTJjZmUzNTY4MDQ2Yzc4ZTNlZjRiMmZmZjM2NGIzNGMwNTgwMWYyZjViZTYyMGRlNyIsInRhZyI6IiJ9",
      },
      {
        semester: "1st",
        resultType: "Private",
        color: "bg-yellow-600",
        url: "https://smkv.ucanapply.com/results-declared/bachelor-of-science-life-science/eyJpdiI6IjJTbGNWbmlxQUZPdXYwSEVOWWdhakE9PSIsInZhbHVlIjoiM1VjODZxazJkRm9WVXU5em40aHRlQT09IiwibWFjIjoiNTMyZjg5YWFkMjg2NjA4ZTJjZmUzNTY4MDQ2Yzc4ZTNlZjRiMmZmZjM2NGIzNGMwNTgwMWYyZjViZTYyMGRlNyIsInRhZyI6IiJ9",
      },
      {
        semester: "3rd",
        resultType: "Regular",
        color: "bg-green-600",
        url: "https://smkv.ucanapply.com/results-declared/bachelor-of-science-life-science/eyJpdiI6InBnWS95eEF2bmFyc3JBZTBaR3JmQ0E9PSIsInZhbHVlIjoiWERCY3dEUkZQZW5TV25aNU9zY3JqQT09IiwibWFjIjoiOGRjNzllNmE4NzlhYWY3NTgzN2YxMDEwZjcwODk5MmMzZDdhMTU4YjFiM2ZmZTliY2FkMTUyMWEyZDE2ZTRmNSIsInRhZyI6IiJ9",
      },
      {
        semester: "3rd",
        resultType: "Private",
        color: "bg-yellow-600",
        url: "https://smkv.ucanapply.com/results-declared/bachelor-of-science-life-science/eyJpdiI6InBnWS95eEF2bmFyc3JBZTBaR3JmQ0E9PSIsInZhbHVlIjoiWERCY3dEUkZQZW5TV25aNU9zY3JqQT09IiwibWFjIjoiOGRjNzllNmE4NzlhYWY3NTgzN2YxMDEwZjcwODk5MmMzZDdhMTU4YjFiM2ZmZTliY2FkMTUyMWEyZDE2ZTRmNSIsInRhZyI6IiJ9",
      },
    ],
  },
  {
    course: "BA ",
    programmes: [
      {
        semester: "1st",
        resultType: "Regular",
        color: "bg-green-600",
        subjects: "",
        url: "https://smkv.ucanapply.com/results-declared/bachelor-of-arts/eyJpdiI6Im5TZ0kzVzVRU0ZRaWFscnphaDlrZkE9PSIsInZhbHVlIjoiR0tDOWQyZEEzY1d0MlZ3ZDI0N0VZQT09IiwibWFjIjoiMjIyOGIwZjg1ZjZhOTQ5ODA1MTY0ZDAyYmM2YzlhNmRhNWYyMTkxNTA0MjQyMzgwMjc3NDhjMjI0ZWQ1ZDNkYiIsInRhZyI6IiJ9",
      },
      {
        semester: "1st",
        resultType: "Private",
        color: "bg-yellow-600",
        subjects: "",
        url: "https://smkv.ucanapply.com/results-declared/bachelor-of-arts/eyJpdiI6Im5TZ0kzVzVRU0ZRaWFscnphaDlrZkE9PSIsInZhbHVlIjoiR0tDOWQyZEEzY1d0MlZ3ZDI0N0VZQT09IiwibWFjIjoiMjIyOGIwZjg1ZjZhOTQ5ODA1MTY0ZDAyYmM2YzlhNmRhNWYyMTkxNTA0MjQyMzgwMjc3NDhjMjI0ZWQ1ZDNkYiIsInRhZyI6IiJ9",
      },
      {
        semester: "3rd",
        resultType: "Regular",
        color: "bg-green-600",
        subjects: "",
        url: "https://smkv.ucanapply.com/results-declared/bachelor-of-arts/eyJpdiI6IlgvTXZBdnh4TVVNM2V6RW10ejNFbEE9PSIsInZhbHVlIjoiN1d5SER5THpMaXhKeXF0YVptZEN4QT09IiwibWFjIjoiMWU4NmJjY2I1Y2M5NWVmZDA1OGI3ZmEzN2Q2NDNiNjNiZDk5YTk4MzU3NzU3ODU5ODY1YTE1YjI0N2JmMWQ4NSIsInRhZyI6IiJ9",
      },
      {
        semester: "3rd",
        resultType: "Private",
        color: "bg-yellow-600",
        subjects: "",
        url: "https://smkv.ucanapply.com/results-declared/bachelor-of-arts/eyJpdiI6IlgvTXZBdnh4TVVNM2V6RW10ejNFbEE9PSIsInZhbHVlIjoiN1d5SER5THpMaXhKeXF0YVptZEN4QT09IiwibWFjIjoiMWU4NmJjY2I1Y2M5NWVmZDA1OGI3ZmEzN2Q2NDNiNjNiZDk5YTk4MzU3NzU3ODU5ODY1YTE1YjI0N2JmMWQ4NSIsInRhZyI6IiJ9",
      },
    ],
  },
];

const updates = [
  {
    post_Id: "1",
    user_Id: "scholarship",
    post_Src:
      "https://drive.google.com/file/d/190xK-yFF4o_DcSQWYYJ6yNEhbgNlsVHk/preview",
    title: " National scholarship for who scored 80+ parcentage in 12th ",
    description: `* 📌नेशनल स्कॉलरशिप(छात्रवृत्ति) का ऑनलाइन आवेदन हेतु सूचना/पोस्ट मैट्रिक छात्रवृत्ति पोर्टल, छत्तीसगढ़ | आदिम जाति तथा ...
📢 * $
                                                   
इस वर्ष 2025 मे 12 वी पढ़ के निकले सभी मानविकी, विज्ञान और वाणिज्य विषय वाले छात्र जिनका प्रतिशत/मार्क्स 80% या उससे उपर है वे सभी इस SCHOLARSHIP के लिए आवेदन कर सकते है। इसमें केवल नियमित अध्यनरत छात्रों को कॉलेज के 3 साल 12000₹ प्रत्येक वर्ष मिलता है
केन्द्रीय क्षेत्रीय छात्रवृत्ति योजना
👉🏻जो विद्यार्थी पूर्व में भरे थे उनका नवीनीकरण का भी ऑनलाईन प्रारम्भ हो गया है। नवीनीकरण हेतु पिछले वर्ष का पुराना यूजर आईडी-पासवर्ड लगेगा ।
👉🏻नोट- छात्र केवल राज्य या केन्द्रीय छात्रवृत्ति दोनों में से केवल एक ही छात्रवृत्ति के लिए पात्र होगा। दोनों भरने से उनके छात्रवृत्ति फॉर्म निरस्त हो सकते हैं। $
👉🏻शर्ते - 1. छात्र का नाम अंकसुची में और आधार में नाम और स्पेलिंग एक सामान होना चाहिए। $
2. बैंक में और आधार में मो.नं. लिंक और आधार सीडिंग होना चाहिए। $
3. 18 वर्ष की आयु पूर्ण होनी चाहिए। $
👉🏻छात्र अधिक जानकारी के लिए हेल्पलाईन नं. 0120-6619540 पर संपर्क कर सकते है।* $
आवश्यक दस्तावेज - $
1. आय प्रमाण पत्र (ओरिजिनल)$
2. जाति प्रमाण पत्र$
3. निवास प्रमाण पत्र$
4. 10वी, 12वी अंकसूची$
5. अंतिम कक्षा की अंकसूची$
6. आधार कार्ड$
7. पासपोर्ट फ़ोटो-1$
8. कॉलेज प्रवेश की रशीद$
9. OTR$
10. मोबाइल नं. व ईमेल id$
11. बैंक पासबुक `,
    date: [],
    links: [
      {
        text: "Official site",
        site: "https://scholarships.gov.in/Students",
      },
    ],
    category: "scholarship",
  },

  {
    post_Id: "2",
    user_Id: "scholarship",
    post_Src:
      "https://drive.google.com/file/d/130ZzKjaKVke2LGvmAbWSm5jj9SDLdIw9/preview",
    title: " CG post metric scholarship 2025-26 ",
    description: `छत्तीसगढ़ पोस्ट मेट्रिक स्कॉलरशिप का ऑनलाइन आवेदन शुरू हो चुका है।विद्यार्थियों को उनके आधार सीडेड बैंक खाते में भुगतान 07 कार्य दिवस में प्राप्त होगा। पोस्ट मेट्रिक स्कॉलरशिप फॉर्म भरने की अंतिम तिथि 30- 11- 2025 तक है। निर्धारित तिथि के पश्चात शिक्षा सत्र 2025-26 की पोस्ट मेट्रिक स्कॉलरशिप ऑनलाइन आवेदन के लिए पोर्टल बंद कर दिया जाएगा। $ 
छात्रवृति के लिए निम्नानुसार पात्रता निर्धारित है:- $ अनुसूचित जाति अनुसूचित जनजाति विद्यार्थियों के पलक की आय सीमा ₹ 2.50 लाख प्रतिवर्ष, अन्य पिछड़ा वर्ग के लिए आया सीमा ₹ 1.00 लाख प्रतिवर्ष, सक्षम अधिकारी द्वारा जारी स्थाई जाति प्रमाण पत्र, छत्तीसगढ़  मूल निवासी प्रमाण पत्र, स्टूडेंट का पिछले वर्ष का परीक्षा परिणाम। $ 
PFMS के माध्यम से आधार सीडेड बैंक खाते में पोस्ट मेट्रिक स्कॉलरशिप का payment किया जा रहा है । इसलिए सभी स्टूडेंट्स अपने active and aadhaar seeded bank account की details ही online आदेवदन करते समय करें। $ 
Year 2025- 26 में अनुसूचित जाति, अनुसूचित जनजाति एवं अन्य पिछड़ा वर्ग  के स्टूडेंट्स को NSP portal से OTR ( one time registration) प्राप्त करना आवश्यक है। $ आप आवेदन हेतु संपर्क कर सकते हैं, आवश्यक दस्तावेज निम्नलिखित हैं🔰 $

1. 10वीं, 12वीं अंकसूची, पूर्व कक्षा का रिजल्ट $
2. OTR Number  $
3. आय,जाति,निवास  $
4. बैंक पासबुक  $
5. आधार कार्ड  $
6. फोटो, हस्ताक्षर  $
7. मोबाइल नंबर, जीमेल $
8. राशन कार्ड  $
9. कॉलेज रसीद  $`,
    date: [
      "ऑनलाइन स्टार्ट डेट - ऑनलाइन जारी है",
      "ऑनलाइन लास्ट डेट - 30-11-2025",
      "पेमेंट - एप्लीकेशन लॉक करने के 07 दिनों में",
    ],
    links: [
      {
        text: "Official site",
        site: "https://postmatric-scholarship.cg.nic.in/",
      },
      {
        text: "नया रजिस्ट्रेशन",
        site: "https://postmatric-scholarship.cg.nic.in/StudentRegistration.aspx",
      },
      {
        text: "नवीनीकरण",
        site: "https://postmatric-scholarship.cg.nic.in/LoginPage.aspx",
      },
      {
        text: "Renew form fill up video",
        site: "https://youtu.be/9vIcWOGuteo?si=jLT6H-ufTTx9VrDr",
      },
      {
        text: "New registration form fill up video",
        site: "https://youtu.be/PnSbxYV6_2U?si=UmyPmOcNUwIQMluz",
      },
    ],
    category: "scholarship",
    time_Stamp: "14-08-2025",
  },

  {
    post_Id: "3",
    user_Id: "smkv",
    title: "SMKV all  syllabus",
    description: ``,

    links: [
      {
        text: "UG (FINAL) ALL SYLLABUS",
        site: "https://smkvbastar.ac.in/en/page/affilitated-university-syllabus.aspx?tag=MQ==&type=MQ==",
      },
      {
        text: "PG (OLD) ALL SYLLABUS",
        site: "https://smkvbastar.ac.in/en/page/affilitated-university-syllabus.aspx?tag=Mg==&type=Mg==",
      },
      {
        text: "NEP, session 2025-26 all syllabus",
        site: "https://drive.google.com/drive/folders/1a65txXAJgfXSaBn0YA9-hw32nit4vC8v",
      },
    ],
    category: "updates",
  },
];

export { cafes, profiles, results, updates, images };
