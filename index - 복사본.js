const Discord = require('discord.js')
const client = new Discord.Client()

client.on('Ready', ()=>{
    console.log("봇이 준비되었습니다.")
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity("덕배 귀요미~", {
      type: "", //서버 들어오기 |
      url: "https://discord.gg/YUybtqNT6c" //type 이 STREAMING 일때 아래 보기 버튼이 추가됨
    });
  });

  client.login('ODM5ODc1ODkzOTk1ODk2ODYy.YJQBYQ.GtNZyPlS_g321DXmAV7yIStZM6s')