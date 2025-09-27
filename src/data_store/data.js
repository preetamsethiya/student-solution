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

const updates = [
  {
    post_Id: "1",
    user_Id: "blog",
    post_Src:
      "https://drive.google.com/file/d/18iHnH9UUiUi10t24pduCXjvx5X_beuKC/preview",
    title: " How to  apply for domicile certificate using edistrict portal? ",
    description: `Aapko google par search karna hai "cg lsk" udke baad cgedistrict wale page par click karein. Aapko portal ke home page ke log in section par 4 option dikhenge, aapko simply nagrik wale option par click karna hai. $ Fir aapke samne log in form khul kar aa jayega, aap langauge select kar user id and password enter karke  registered mobile number par  prapt OTP ko submit karke log in karen. $ log in karne ke baad atirikt nagrik panjikaran ka option aayega aapko "home" ke button par click karna hai. $ fir aap portal ke home page par aajayenge, fir aapko "sabhi savayein dekhen" wale option par click karen aur niche ki taraf scroll karke 6 number ke page me 51ven number par nivas praman patra ke option ko choose karen. $ Fir aavashyak dastavej se related page open hoga vha se aage ke button par click karna hai. Uske baad aavedak ki buniyadi jankari se related form khul kar aa jayega, jaruri jankari bhar kar jama karen par click karna hai. $ Uske baad hitgrahi ki jankari bharne ka form khul kar aa jayega jankari bharne ke baad sageje or purvavlokan ke button par click karen. Uske baad anulagn ka vivaran yani document upload karne ke liye page open ho jayega, jin documents ke naam ke aage * ka nishan laga rhega un documents ko bharna anivarya hai aur # nishan wale kam se kam ek document upload karna anivarya hai aapko total 21 documents upload karne ka vikalpa diya rhega . $ Document upload karne ke baad anulagn saheje ke button par click karna hai. Fir nivas
     praman patra ka purvavlokan khul kar aajayega. $ Uske baad aavedan jama kare wale option par tik laga kar jama karen. Fri aapke aavedan ka pavati generate ho kar aajayega. Pavti ka print out nikalne ke liye chhape ke button par click karen  `,
    date: ["", ""],
    links: [
      {
        text: "Official site",
        site: "https://cgedistrict.cgstate.gov.in/workflow/trackAppStatus.html",
      },
      {
        text: "Watch on youtube",
        site: "https://youtu.be/YFjv2c6qWbo?si=qJCKL2PM_lis4j7d",
      },
    ],
  },
  {
    post_Id: "2",
    user_Id: "blog",
    post_Src:
      "https://drive.google.com/file/d/18kQTMlYeWlogY5NLUYXP7Os65ML-ZBbJ/preview",
    title: "How to  apply for income certificate using edistrict portal? ",
    description: `Aapko google par search karna hai "cg lsk" udke baad cgedistrict wale page par click karein. Aapko portal ke home page ke log in section par 4 option dikhenge, aapko simply nagrik wale option par click karna hai. $ Fir aapke samne log in form khul kar aa jayega, aap langauge select kar user id and password enter karke  registered mobile number par  prapt OTP ko submit karke log in karen. $ log in karne ke baad atirikt nagrik panjikaran ka option aayega aapko "home" ke button par click karna hai. $ fir aap portal ke home page par aajayenge, fir aapko "sabhi savayein dekhen" wale option par click karen aur niche ki taraf scroll karke 5 number ke page me 50ven number par aay praman patra ke option ko choose karen. $ Fir aavashyak dastavej se related page open hoga vha se aage ke button par click karna hai. Uske baad aavedak ki buniyadi jankari se related form khul kar aa jayega, jaruri jankari bhar kar jama karen par click karna hai. $ Uske baad hitgrahi ki jankari bharne ka form khul kar aa jayega jankari bharne ke baad sageje or purvavlokan ke button par click karen. Uske baad anulagn ka vivaran yani document upload karne ke liye page open ho jayega, jin documents ke naam ke aage * ka nishan laga rhega un documents ko bharna anivarya hai aur # nishan wale kam se kam ek document upload karna anivarya hai. $ Document upload karne ke baad anulagn saheje ke button par click karna hai. Fir aay praman patra ka purvavlokan khul kar aajayega. $ Uske baad aavedan jama kare wale option par tik laga kar jama karen. Fri aapke aavedan ka pavati generate ho kar aajayega. Pavti ka print out nikalne ke liye chhape ke button par click karen  `,
    date: ["", ""],
    links: [
      {
        text: "Official site",
        site: "https://cgedistrict.cgstate.gov.in/workflow/trackAppStatus.html",
      },
      {
        text: " Watch on youtube",
        site: "https://youtu.be/Nnb9-S9wF3A?si=ct3lfcJhTKHIA2OD",
      },
    ],
    category: "updates",
  },
  {
    post_Id: "3",
    user_Id: "blog",
    post_Src:
      "https://drive.google.com/file/d/18i9AGG1h5HCmPseeGsdMqLSt37c82Yph/preview",
    title: " How to create  e-distric citizen ID?  ",
    description: ` Nagarik ID create karne ke liye aapko google par "cg lsk" search karna hai uske baad cgedistrict wale link pe click karein. Home page par aapko 4 option dekhne ko milega (1) lok seva kendra, (2) Department, (3) nagrik, (4) admin $ to aap ghar se hi aay praman patra, jati praman patra, nivas praman patra banana jahte hain to simpli nagril ke option pe click karein. $ Uske baad ek naya page khul kar aayega jisme language select karne aur user id and password bharne ka option rhega, aapke pass koi user id aur password nhi hai to aap "new registration" wale option par click karein. $ Uske baad nagrik panjikaran ka form khul kar aa jayega. Form me aap upyogkarta naam, pura naam, jila, gopaniya prashna, gopaniya prashna ka uttar, mobile number enter karein email id aur pate jaruri nahi isliye aap email id aur pata ko khali chhod sakte hain aur agresit karein par click karein. $ Fir aapka registration summary open ho kar aa jayega jise aap print karke ya screenshort le kar rakh sakte hain aur password registered mobile number par bhej diya jayega.  `,
    date: ["", ""],
    links: [
      {
        text: "Official site",
        site: "https://cgedistrict.cgstate.gov.in/workflow/trackAppStatus.html",
      },
      {
        text: " Watch on youtube",
        site: "https://youtu.be/DM2l4vOXE24?si=-pIxVc2H4DX850CK",
      },
    ],
    category: "updates",
  },
  {
    post_Id: "4",
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
    post_Id: "5",
    user_Id: "blog",
    post_Src:
      "https://drive.google.com/file/d/18JOi2G3GoUC_5G--MgAJe__eG5ivAsmR/preview",
    title: "How to check aadhar seeded bank account? ",
    description: ` Aadhar seeding $ Aadhar seeding vah prakriya hai jiske madhyam se bank dwara NPCI mapper par aadhar number map kiya jata hai. Bank dwara sansadhit  aadhar seeding ke safal samapan ke baad hi subsidy ko aadhar payment print ke madhyam se account me jama kiya jata hai. $ Aadhar linkkinh or aadhar seeding me antar. $  Aadhar linking vah prakriya hai jisme bank pate aur pahachan ke praman ke rup mein apne core banking me saving account ke sath aadhar number ko link karte hain. Jabki aadhar seeding me bank NPCI maper me apne core banking system ke sath aadhar number ko bhi map karte hain. $ Kya multiple accounts ko NPCI  mapper ke sath map kar sakte hain ? $ Nhi, ek samay par  aap sirf ek bank account ko NPCI  mapper ke sath map kar sakte hain. $ Aadhar seeding ke liye anurodh kaise karen? $ Aap bank me vyaktigat rup se ja kar consent form bhar kar aadhar seeding request submit kar sakte hain ya jo bank online banking ke madhyam se yah suvidha upalbdh karate hain un  banks ke online banking website me ja kar aadhar seeding  anurodh kar sakte hain. $ Kaise pata lagaye ki koi bank account pahle se hi seeded hai ya nhi. $ Aap www.uidai.gov.in website par ja kar prefered language choose karen aur "my aadhar" tab me jayein fir "aadhar service menu" me jayein aur "bank seeding status" option ko select karein.  Aadhar number aur captcha code enter karne ke baad mobile par prapt OTP submit karke aap apna aadhar seeded bank account check kar sakte hain.  `,
    date: [],
    links: [
      {
        text: "Official site",
        site: "https://uidai.gov.in/",
      },
      {
        text: "Watch on youtube",
        site: "https://youtu.be/gjPkUF23UTg?si=7iSNJzYKYnn48ygZ",
      },
    ],
    category: "updates",
  },
  {
    post_Id: "6",
    user_Id: "vyapam",
    post_Src:
      "https://drive.google.com/file/d/19TQWIKOwXkFWiUU0vXrT_pbNFKvnYMK2/preview",
    download_Link:
      "https://drive.google.com/file/d/1cUSqQVfPYYX6tUUlXbRScXVn-7EggzgB/view?usp=sharing",
    title: "CG police online form 2025 (PHQC25) ",
    description: `छत्तीसगढ़ पुलिस भर्ती 2024 के  फिजिकल टेस्ट का रिजल्ट जारी हो चुका है । जिन उम्मीदवारों ने फिजिकल टेस्ट दिया था, उनमें से चयनित अभ्यर्थियों की सूची आधिकारिक वेबसाइट पर अपलोड की गई है। ये उम्मीदवार अब लिखित परीक्षा के लिए पात्र माने जाएंगे। $ छत्तीसगढ़ पुलिस फिजिकल रिजल्ट 2025 के बाद अब लिखित परीक्षा के लिए छत्तीसगढ़ पुलिस ऑनलाइन फॉर्म 2025 भरने की प्रक्रिया शुरू हो चुकी है `,
    overView: [
      "भर्ती का नाम - छत्तीसगढ़ पुलिस कांस्टेबल भर्ती 2023 ",
      " विभाग - छत्तीसगढ़ पुलिस विभाग ",
      "पद का नाम - कांस्टेबल जीडी , वाहन चालक, ट्रेड्समैन ",
      " कुल रिक्तियां - 5967 पद",
      "अधिसूचना जारी होने की तिथि - 20 अक्टूबर 2023 ",
      "आवदेन प्रक्रिया - ऑनलाइन",
    ],

    date: [
      "ऑनलाइन स्टार्ट डेट -  05-08-2025",
      "ऑनलाइन लास्ट डेट - 27-08- 2025",
      "एग्जाम डेट - 14-09-2025",
      "एग्जाम टाइम - पूर्वान्ह 02 घंटे",
      "प्रवेश पत्र जारी करने की तिथि -  08-09-2025",
      "परीक्षा केंद्र - 05 संभागीय मुख्यालयों में",
    ],
    links: [
      {
        text: "Official site",
        site: "https://vyapamcg.cgstate.gov.in/",
      },
      {
        text: "Apply",
        site: "https://vyapamprofile.cgstate.gov.in/online/",
      },
      {
        text: "Syllabus",
        site: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/50a0e834-7dbe-45cf-996c-11a477eb3386.pdf",
      },
      {
        text: "Form fill up instruction",
        site: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/9888164e-6e23-4b77-8d56-aa9b42cfe795.pdf",
      },
    ],

    category: "updates",
    time_Stamp: "12-08-2025",
  },
  {
    post_Id: "7",
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
    post_Id: "8",
    user_Id: "blog",
    post_Src:
      "https://drive.google.com/file/d/136YsL3BLW8cGbpbX72T0uzyZlI_PGka8/preview",
    title: " How to Get OTR Number, NSP OTR registration ",
    description: ` छत्तीसगढ़ पोस्ट मेट्रिक स्कॉलरशिप के लिए (st/sc/obc) स्टूडेंट्स को  OTR आनिवार्य कर दिया गया है। $ एनएसपी (नेशनल स्कॉलरशिप पोर्टल) पर छात्रवृत्ति के लिए आवेदन करने के लिए OTR (वन-टाइम रजिस्ट्रेशन) आवश्यक है। यह एक विशिष्ट 14-अंकीय नंबर है जो आधार/आधार नामांकन आईडी के आधार पर जारी किया जाता है और छात्र के पूरे शैक्षणिक जीवन के लिए मान्य होता है। $
एनएसपी ओटीआर क्यों जरूरी है? $
दोहराव कम करना: $
ओटीआर एक ही छात्र को एक ही योजना के लिए बार-बार आवेदन करने से रोकता है, जिससे आवेदन प्रक्रिया में दोहराव कम होता है। $
सुरक्षा बढ़ाना: $
ओटीआर एक विशिष्ट पहचान प्रदान करता है, जिससे धोखाधड़ी और गलत पहचान की संभावना कम हो जाती है। $
छात्रों का बेहतर ट्रैक रखना: $
ओटीआर छात्रों को उनके आवेदन की स्थिति और छात्रवृत्ति विवरण को ट्रैक करने में मदद करता है। $
पारदर्शिता: $
ओटीआर प्रक्रिया छात्रों के लिए अधिक पारदर्शी और निष्पक्ष है। 
संक्षेप में, एनएसपी ओटीआर छात्रों के लिए छात्रवृत्ति आवेदन प्रक्रिया को सरल, सुरक्षित और कुशल बनाने के लिए आवश्यक है `,
    date: [],
    links: [
      {
        text: "Official site",
        site: "https://scholarships.gov.in/Students",
      },
      {
        text: "Apply for OTR ",
        site: "https://scholarships.gov.in/otrapplication/#/login-page",
      },
      {
        text: "NSP OTR APP",
        site: "https://play.google.com/store/apps/details?id=in.gov.scholarships.nspotr",
      },
      {
        text: "Face RD app ",
        site: "https://play.google.com/store/apps/details?id=in.gov.uidai.facerd",
      },
      {
        text: "Watch video on youtube ",
        site: "https://youtu.be/AIRDXMHAYO8?si=0bLtV20YVVjkYVZS",
      },
    ],
    category: "updates",
  },
  {
    post_Id: "9",
    user_Id: "vyapam",
    post_Src:
      "https://drive.google.com/file/d/19JzIjUSr0Ur6ZnB_1v8HzIlcMpETQWWv/preview",
    title: " CG Staff nursing vacancy 2025 ",
    description: `CG vyapam ने स्वास्थ्य सेवाएं विभाग के अंतर्गत स्टाफ नर्स के 225 पदों के लिए HSSN 25 भर्ती परीक्षा 2025 का आधिकारिक नोटिफिकेशन जारी कर दिया है। यह भर्ती छत्तीसगढ़ के विभिन्न जिलों में कार्यरत हॉस्पिटल्स और स्वास्थ्य संस्थानों में स्टाफ नर्स पदों पर नियुक्ति के लिए आयोजित की जाएगी। 
$
किसी भी अभ्यर्थी को परीक्षा केंद्र के संबंध में कठिनाई होती है तो हेल्पलाइन नंबर 0771-2972780 एवं मोबाइल नंबर 8269801982 पर समय प्रातः 10:00 से सायं 5:30 बजे तक सम्पर्क कर सकते हैं। $
प्रश्न पत्र के मुख्य पृष्ठ पर तीन समान बार  कोड स्टिकर संलग्न हैं। परीक्षार्थी एक बार code स्टिकर ko OMR seat पर, दूसरे बार कोड स्टिकर को प्रश्न पत्र के मुख्य पृष्ठ पर व तीसरे बार code को  स्टिकर को उपस्थित पत्रक पर सावधानीपूर्वक इंगित स्थान पर अवश्य छिपाएं। $
ऋणात्मक मूल्यांकन का प्रावधान है तदानुसार नियत अंक का 1/4 अंक कटा जाएगा। परीक्षार्थी द्वारा जिन प्रश्नों के उत्तर अंकित नहीं किए जाएंगे उनके लिए शून्य अंक प्रदान किया जाएगा। $
व्यापम द्वारा जारी परीक्षा कोड तथा समन्वयक केंद्रों के नाम - $ 
सरगुजा (अंबिकापुर) code - (11 ) राजीव गांधी शासकीय पी जी महाविद्यालय , अंबिकापुर मो. (07774-230921) $
बिलासपुर code - (13) शासकीय ई. राघवेंद्र राव, पीजी विज्ञान महा. , बिलासपुर मो. (07752-246430) $
दुर्ग code ( 16) विश्वनाथ तामस्कर शासकीय कला एवं विज्ञान महा. , दुर्ग मो.(0788-2211688) $
जगदलपुर code(17) शासकीय पीजी महा., जगदलपुर मो.(07782-229340) $
रायपुर code (25) शासकीय नागार्जुन पीजी विज्ञान महा. , रायपुर मो.(0771-2263131) $ `,
    overView: [
      "विभाग - स्वास्थ्य सेवाएं, छत्तीसगढ़",
      "भर्ती - CG vyapam, रायपुर",
      "परीक्षा - HSSN 25 ",
      "पद का नाम - स्टाफ नर्स ",
      "आवेदन - ऑनलाइन ",
      "वेतन - ₹28,700 - 91,300 ( लेवल - 07)",
    ],
    date: [
      "Online स्टार्ट - 13 - 08 - 2025 ",
      "Online लास्ट डेट - 03-09-2025",
      "त्रुटि सुधार तिथि - 04 से 06 -09-2025",
      "प्रवेश पत्र जारी - 15-09-2025",
      "परीक्षा तिथि - 21-09-2025 ( 11:00 AM - 1:15 pm )",
    ],
    links: [
      {
        text: "Official site",
        site: "https://vyapamcg.cgstate.gov.in/",
      },
      {
        text: "Apply online ",
        site: "https://vyapamprofile.cgstate.gov.in/online/",
      },
      {
        text: "Syllabus ",
        site: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/985e0d9b-1c58-4c35-9f9f-6dfc9c93bb70.pdf",
      },
      {
        text: "Form fill up instruction PDF ",
        site: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/84fe0d36-827b-4766-b867-54bd5089637c.pdf",
      },
    ],
    category: "updates",
  },
  {
    post_Id: "10",
    user_Id: "blog",
    post_Src:
      "https://drive.google.com/file/d/17sNfpmXyOu7Zb_wPAO2LMD6ck3Znfv3T/preview",
    title:
      "NSPOTR app problem solved (initialization failed. Please restart application) ",
    description: `Hi, $
अगर आपको भी NSP OTR ऐप में "initialization failed. Please restart application" वाली ऐरर देखने को मिल रही है, तो  आप बिल्कुल सही जगह पर आए हैं । $
दरअसल इस प्रकार के  ऐरर  का  कारण है आपका मोबाइल फोन क्योंकि "NSPOTR " ऐप किसी भी 4G mobile phone या 4G SIM वाले मोबाइल फोन में कम नहीं करता है । NSPOTR ऐप 5G mobile or 5G SIM के साथ ही काम करता है । $
 अगर आपके फोन में NSPOTR का ऐप काम नहीं कर रहा है तो आप किसी 5G mobile phone यूज़र के मोबाइल में NSPOTR का ऐप डाउनलोड करके अपना OTR नंबर जनरेट कर सकते हैं । $

( यह जानकारी सिर्फ उन लोगों के   लिए हैं जिनके मोबाइल में NSPOTR का ऐप काम नहीं कर रहा है। हो सकता है आपका mobile 4G हो लेकिन एंड्रॉयड वर्जन 10 से उपर हो ऐसी स्थिति में ऐप आपके फोन में काम कर सकता है, क्यूंकि एंड्रॉयड वर्जन 10 से नीचे वाले मोबाइल्स में NSPOTR का ऐप काम नहीं करता।)$
 `,
    date: [],
    links: [
      {
        text: "Official site",
        site: "https://scholarships.gov.in/Students",
      },
      {
        text: "Apply for OTR ",
        site: "https://scholarships.gov.in/otrapplication/#/login-page",
      },
      {
        text: "NSP OTR APP",
        site: "https://play.google.com/store/apps/details?id=in.gov.scholarships.nspotr",
      },
      {
        text: "Face RD app ",
        site: "https://play.google.com/store/apps/details?id=in.gov.uidai.facerd",
      },
      {
        text: "Watch video on youtube ",
        site: "https://youtu.be/AIRDXMHAYO8?si=0bLtV20YVVjkYVZS",
      },
    ],
    category: "updates",
  },
  {
    post_Id: "11",
    user_Id: "vyapam",
    post_Src:
      "https://drive.google.com/file/d/1CdggGAs8zQJ6rINEfTwydT7jVHqG_alg/preview",
    title: "Ward boy and ward aaya vacancy 2025, CG vyapam",
    description: `व्यापम 8वीं पास नौकरी $
🥳 छ.ग. व्यापम वार्ड ब्वॉय एवं वार्ड आया (पद-100) 8वीं पास सरकारी नौकरी 🥳 $
 Cg Vyapam Ward Boy & Ward Aaya Online 2025: $

🗞 स्वास्थ्य विभाग 8वीं पास $
🗞 ऑनलाइन आवेदन शुरू$
➖➖👇🏻👇🏻👇🏻➖➖ 
 _8वीं पास छत्तीसगढ़ निवासियों के लिए सरकारी नौकरी$

👍🏻 व्यापम स्वास्थ्य सेवाएं 8वीं पास वैकेंसी (शेयर करें)$
 `,
    date: [],
    links: [
      {
        text: "Official site",
        site: "https://vyapamcg.cgstate.gov.in/",
      },
    ],
    category: "updates",
  },
  {
    post_Id: "12",
    user_Id: "results",
    siteUrl_Id: "smkv_result",
    siteUrl: "https://smkvbj.uonex.in/GetResultsexam",
    title: "smkv result",
    category: "results",
  },
  {
    post_Id: "13",
    user_Id: "admitcards",
    siteUrl_Id: "smkv_admitcard",
    siteUrl: "https://smkvbj.uonex.in/login?usertype=Student",
    title: "smkv admit card",
    category: "admitcard",
  },
  {
    post_Id: "14",
    user_Id: "vyapam",
    new: "true",
    title: " Amin vacancy 2025, CG vyapam ",
    description: `जल संसाधन विभाग के अंतर्गत लिखित चयन परीक्षा आयोजित कर अमीन के 50 रिक्त पदों की पूर्ति हेतु सीधी भर्ती के लिए व्यापम द्वारा आवेदन पत्र आमंत्रित किया गया है `,
    overView: [
      "वेतनमान:- ",
      "पद का नाम: - अमीन ",
      "वेतन मेट्रिक:- 22400-71200 लेवल -5",
      " भर्ती का तरीका:- प्रतियोगी परीक्षा/चयन/साक्षात्कार द्वारा सीधी भर्ती",
    ],
    eligibilities: [
      "पात्रता, शैक्षणिक योग्यता:-",
      "12th पास",
      "चयन के पश्चात 06 माह के प्रशिक्षण में प्राप्त अंकों के आधार पर अभ्यर्थियों को मान्यता दी जाएगी।",
      "न्यूनतम आयु:- 18 वर्ष",
      "अधिकतम आयु:- 30 वर्ष",
      "ST, SC, OBC अभ्यर्थियों को उच्चतर आयु सीमा अधिकतम 5 वर्ष की छूट मिलेगी।",
    ],
    date: [
      "महत्वपूर्ण तिथियां:- ",
      "ऑनलाइन स्टार्ट डेट:- 23-09-2025",
      "ऑनलाइन लास्ट डेट:- 17-10-2025 सायं 5:00 बजे तक",
      "त्रुटि सुधार:-  18-10-2025 से 20-10-2025",
      "परीक्षा की संभावित तिथि:- 07-12-2025 (रविवार)",
      "परीक्षा का समय:- 11:00 से 1:15 बजे तक",
      "प्रवेश पत्र जारी करने की तिथि:- 01-12-2025",
      "परीक्षा केंद्र:- 16 जिला मुख्यालयों में ",
    ],
    fees: [
      "परीक्षा शुल्क:-",
      "जनरल :- ₹350",
      "OBC :- ₹250",
      "ST/SC :- ₹200",
      "CG स्थानीय निवासी परीक्षार्थी, जो परीक्षा में उपस्थित होंगे, उनकी परीक्षा शुल्क की राशि उसी बैंक खाता में वापस की जाएगी, जिस खाते से अभ्यर्थी ने परीक्षा शुल्क का भुगतान किया है|",
    ],
    links: [
      {
        text: "Official site",
        site: "https://vyapamcg.cgstate.gov.in/",
      },
      {
        text: "Video",
        site: "https://youtu.be/2xAMPYUn_BM?si=T9JHO-30ypo4zHc_",
      },
      {
        text: "Preview",
        site: "https://drive.google.com/file/d/14zAzhKH7NVWndgmvPsRFpHdAgiccgGpB/view?usp=drivesdk",
      },
      {
        text: "Apply online ",
        site: "https://vyapamprofile.cgstate.gov.in/online/",
      },
      {
        text: "Syllabus ",
        site: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/b59f0e19-6582-4635-8b05-08dc43ef76c7.pdf",
      },
      {
        text: "Form fill up instruction PDF ",
        site: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/8886c46b-03f3-42e0-977c-25b6824ec884.pdf",
      },
      {
        text: "Pariksha nirdesh",
        site: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/e087ea83-4b1c-4f3a-88f9-2efc8c3e9148.pdf",
      },
      {
        text: "Vistrit jankari",
        site: "https://vyapamcg.cgstate.gov.in/uploads/pdfs/23c158ef-ddac-4fa9-b31e-f54c6a37697e.pdf",
      },
    ],
    category: "updates",
  },
];

export { cafes, profiles, updates, images };
