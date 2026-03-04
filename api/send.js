export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).send('Non autorisé');
    
    const { device, menace } = req.body;
    const BOT_TOKEN = "8671676965:AAFjSDsyEkyPX7B5d_d49vfYbOrEc18l410";
    const CHAT_ID = "6224971749";

    const text = `🚨 **NDIAYE TECHN SYSTEM** 🚨\n` +
                 `━━━━━━━━━━━━━━━━━━\n` +
                 `⚙️ **Action** : ${device}\n` +
                 `👤 **Infos** : \n${menace}\n` +
                 `━━━━━━━━━━━━━━━━━━\n` +
                 `🌐 *Console d'Administration*`;

    try {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ chat_id: CHAT_ID, text: text, parse_mode: "Markdown" })
        });
        return res.status(200).json({ ok: true });
    } catch (e) {
        return res.status(500).json({ error: "Erreur Telegram" });
    }
}
