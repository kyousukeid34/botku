exports.info = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramku, whatsappku, kapanbotaktif) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Berikut adalah info pada bot ini!✨

[ ️ *${tampilTanggal}* ]
[️ *${tampilWaktu}* ]

🔴 INFO BOT! :

=> *AUTHOR*: kyousukeid34


🔴 INFO LAIN! :

OH IYA SCRIPT INI 100% GRATIS KOK.
SCRIPT DIBUAT DENGAN BAHASA PEMROGRAMAN NODE.JS




📺 *Iklan* :

✅ Follow akun instagram ${instagramku}

⚠️ INFORMASI COVID-19 TERBARU!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

♻️ Mau pasang iklan di *${BotName} ?*
☎️ WA : *${whatsappku}*
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️





  
🔰 -----[ *POWERED BY ${BotName}* ]----- 🔰`
}
