module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100014220751394") {
    var aid = ["100014220751394"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না _Prince Morshed বস এর মন মন ভালো নেই আজকে-!💔🥀", "- যা বলার আমাকে বলুন Prince Morshed বস বিজি আছে🫂💔", "আমার একটা প্রিয়র খুব দরকার কারন আমার চোখে পানি আসার আগে নাকে সর্দি চলে আসে🤣🤣"," Prince Morshed বস‌ ইসলামিয়া ফাউন্ডেশন নিয়ে বিজি 😘🥒"," Mantion_ এতো মেনশন দেও কেনো 😾😾🔨","Prince Morshed না ডেকে জিকির করো 😭😭","Prince Morshed বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এত মেনশন দিও না Prince Morshed বস এখন ব্যস্ত 😒 😏","Mantion_এত মেনশন দাও কেন পার্সোনাল কথা থাকলে ইনবক্সে আসো","মেনশন দিসনা ","Mantion_এত মেনশন দেছ কেন তোর খবর আছে 🥵🥀🤐","Prince Morshed বস এখন ঘুমিয়ে আছে ডিস্টার্ব করবেন না🤗"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
