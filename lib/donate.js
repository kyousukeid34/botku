exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramku, whatsappku, kapanbotaktif) => {
	return `🔰 -----[ *MENU ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️


⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*


   





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
