var Steam = require("steam");
var SteamUser = require ("steam-user");
var client = new SteamUser();

var friends = new Steam.SteamFriends(client.client);

var SteamCommunity = require('steamcommunity');
var community = new SteamCommunity();

var client;

var SteamID = require("steamid");

var SteamTrade = require("steam-trade");
var SteamTrade = new SteamTrade();

////////////////////// CHANGE ONLY YourAccountName, YourPassword and STEAMID IN WITHDRAW

client.logOn({
   "accountName": "steamvacreport",
   "password": "izzetefe15"
 });

 client.on("loggedOn", function(details){
   console.log("Logged On To Steam Server With The ID Of " + client.steamID.getSteam3RenderedID());
   client.setPersona(SteamUser.Steam.EPersonaState.Online);
   client.gamesPlayed(440);
 });
console.log("------------------------------------------------------------------")
console.log("CHANGE ONLY YourAccountName, YourPassword and STEAMID IN WITHDRAW")
console.log("##  SteamBot Made by GumikCZ  ##")
console.log("Have a problem?? My youtube channel: https://www.youtube.com/channel/UCd2ujTlK79FsUfF1aEJnh3w")
console.log("My GitHub with Projects: https://github.com/DrGumik")
console.log("------------------------------------------------------------------")

client.on("webSession", function(steamID, cookies){
community.setCookies(cookies);
SteamTrade.sessionID = cookies[0].split("=")[1];
cookies.forEach(function(cookie)  {
SteamTrade.setCookie(cookie);
});

 client.on("error", function(error){
   console.log("Error");
});

friends.on("friendMsg", function(user, msg, type){
 if(type == Steam.EChatEntryType.ChatMsg){
  if(msg == "!yardım"){
   friends.sendMessage(user,"!Raporla [1-2-3-4-5] Yazarak Raporlayabilirsiniz, 1.Numara CT'DE 1. Adamı İşaret Eder 6.numara T'de 1. Adamı İşaret Eder, Umarım Anlamıssınızdır. ⚠️ Rekabetci Maç'ta Değilseniz Boş Raporlar! ⚠️");
   }
 }
})
/////////////////////////////////////////////////////// WITHDRAW SYSTEM
friends.on("friendMsg", function(user, msg, type){
 if(type == Steam.EChatEntryType.ChatMsg){
  if(msg == "!raporla 1"){
   friends.sendMessage(user,"10 Kullanıcı Tarafından Raporlandı, Oyunda Değil İseniz Boş Raporlar! Nasıl Rapor Edeceğinizi Bilmiyorsanız !yardım Yazınız.");
   }
 }
})
/////////////////////////////////////////////////////// WITHDRAW SYSTEM
friends.on("friendMsg", function(user, msg, type){
 if(type == Steam.EChatEntryType.ChatMsg){
  if(msg == "!raporla 2"){
   friends.sendMessage(user,"7 Kullanıcı Tarafından Raporlandı, Oyunda Değil İseniz Boş Raporlar! Nasıl Rapor Edeceğinizi Bilmiyorsanız !yardım Yazınız.");
   }
 }
})
/////////////////////////////////////////////////////// WITHDRAW SYSTEM
friends.on("friendMsg", function(user, msg, type){
 if(type == Steam.EChatEntryType.ChatMsg){
  if(msg == "!raporla 3"){
   friends.sendMessage(user,"12 Kullanıcı Tarafından Raporlandı, Oyunda Değil İseniz Boş Raporlar! Nasıl Rapor Edeceğinizi Bilmiyorsanız !yardım Yazınız.");
   }
 }
})
/////////////////////////////////////////////////////// WITHDRAW SYSTEM
friends.on("friendMsg", function(user, msg, type){
 if(type == Steam.EChatEntryType.ChatMsg){
  if(msg == "!raporla 4"){
   friends.sendMessage(user,"5 Kullanıcı Tarafından Raporlandı, Oyunda Değil İseniz Boş Raporlar! Nasıl Rapor Edeceğinizi Bilmiyorsanız !yardım Yazınız.");
   }
 }
})
/////////////////////////////////////////////////////// WITHDRAW SYSTEM
friends.on("friendMsg", function(user, msg, type){
 if(type == Steam.EChatEntryType.ChatMsg){
  if(msg == "!raporla 5"){
   friends.sendMessage(user,"16 Kullanıcı Tarafından Raporlandı, Oyunda Değil İseniz Boş Raporlar! Nasıl Rapor Edeceğinizi Bilmiyorsanız !yardım Yazınız.");
   }
 }
})
/////////////////////////////////////////////////////// WITHDRAW SYSTEM
friends.on("friendMsg", function(user, msg, type){
 if(type == Steam.EChatEntryType.ChatMsg){
  if(msg == "!raporla 6"){
   friends.sendMessage(user,"9 Kullanıcı Tarafından Raporlandı, Oyunda Değil İseniz Boş Raporlar! Nasıl Rapor Edeceğinizi Bilmiyorsanız !yardım Yazınız.");
   }
 }
})
/////////////////////////////////////////////////////// WITHDRAW SYSTEM
friends.on("friendMsg", function(user, msg, type){
 if(type == Steam.EChatEntryType.ChatMsg){
  if(msg == "!raporla 7"){
   friends.sendMessage(user,"13 Kullanıcı Tarafından Raporlandı, Oyunda Değil İseniz Boş Raporlar! Nasıl Rapor Edeceğinizi Bilmiyorsanız !yardım Yazınız.");
   }
 }
})
/////////////////////////////////////////////////////// WITHDRAW SYSTEM
friends.on("friendMsg", function(user, msg, type){
 if(type == Steam.EChatEntryType.ChatMsg){
  if(msg == "!raporla 8"){
   friends.sendMessage(user,"12 Kullanıcı Tarafından Raporlandı, Oyunda Değil İseniz Boş Raporlar! Nasıl Rapor Edeceğinizi Bilmiyorsanız !yardım Yazınız.");
   }
 }
})
/////////////////////////////////////////////////////// WITHDRAW SYSTEM
friends.on("friendMsg", function(user, msg, type){
 if(type == Steam.EChatEntryType.ChatMsg){
  if(msg == "!raporla 9"){
   friends.sendMessage(user,"16 Kullanıcı Tarafından Raporlandı, Oyunda Değil İseniz Boş Raporlar! Nasıl Rapor Edeceğinizi Bilmiyorsanız !yardım Yazınız.");
   }
 }
})
/////////////////////////////////////////////////////// WITHDRAW SYSTEM
friends.on("friendMsg", function(user, msg, type){
 if(type == Steam.EChatEntryType.ChatMsg){
  if(msg == "!raporla 10"){
   friends.sendMessage(user,"17 Kullanıcı Tarafından Raporlandı, Oyunda Değil İseniz Boş Raporlar! Nasıl Rapor Edeceğinizi Bilmiyorsanız !yardım Yazınız.");
   }
 }
})
/////////////////////////////////////////////////////// WITHDRAW SYSTEM
SteamTrade.on("chatMsg", function(msg)  {
if (msg == "!itemcsgo" && "Your STEAMID") //// You can find steamID on steamrep.com
console.log("Giving Items from CSGO!");
SteamTrade.loadInventory(730,2, function(items){
SteamTrade.addItems(items);
   })
 })
})
/////////////////////////////////////////////////////////////////
SteamTrade.on("ready", function()  {
SteamTrade.ready(function()  {
  SteamTrade.confirm();
 })
})

client.on("tradeStarted", function(steamID){
  SteamTrade.open(steamID);
})

client.on("tradeRequest", function(steamID, respond){
  console.log("Somone Is Ready To Trade"+ client.steamID.getSteam3RenderedID());
  respond(true);
})

SteamTrade.on('end', function(status, getItems) {
  if (status == 'complete') {
    getItems(function(items) {
      console.log(items);
    });
  }
});

client.on('friendRelationship', function(sid, relationship) {
    if(relationship == 2) {
        client.addFriend(sid);
        console.log("BOT #1: Added a new friend!");
        client.chatMessage(sid, 'Merhabalar, Ben VacReport, Beni Eklediğin İçin Teşekkürler. !yardım Yazarak Bilgi Alabilirsinz.');
    }
});
///////////////////////////////////////////////////////////////////////////////
////My GitHub: https://github.com/DrGumik
///////////////////////////////////////////////////////////////////////////////
