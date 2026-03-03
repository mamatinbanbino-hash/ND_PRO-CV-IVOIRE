
# 👑 ND-PRO-cv_IVoIRE | Ndiaye Techn

**ND-PRO-cv_IVoIRE** est une application web mobile-first de création de CV professionnels, spécialement conçue pour le marché ivoirien. Développée par **Ndiaye Techn**, cette plateforme permet de générer des CV au format PDF haute qualité directement depuis un smartphone (Android & iOS).

## 🚀 Concept & Modèle Économique (SaaS Freemium)

Le projet intègre un système de monétisation autonome adapté aux réalités locales (Mobile Money) sans nécessiter d'API bancaire complexe.

* **Mode Standard (Gratuit)** : Limité à 3 générations de CV. Nécessite un partage WhatsApp obligatoire pour débloquer le téléchargement. Rendu avec un design violet classique et un filigrane de l'application.
* **Mode VIP (500 FCFA / 30 Jours)** : Débloqué via un paiement autonome Wave ou Orange Money. Le CV passe en "Or massif" (bordures dorées, badge certifié, suppression des publicités).

## 🛠️ Fonctionnalités Techniques Avancées

* **Génération PDF Client-Side** : Utilisation de `html2pdf.js` pour transformer le DOM HTML en un document PDF A4 parfait, garantissant la confidentialité des données (pas de stockage serveur des CV).
* **Système Anti-Piratage (Base64)** : L'abonnement VIP est stocké localement et chiffré. Le système valide automatiquement les dates d'expiration (30 jours) et bloque les tentatives de triche logicielle.
* **Paiement Auto par Transaction ID** : Un algorithme vérifie la validité du format des ID de transaction Wave/Orange Money saisis par l'utilisateur pour activer l'abonnement en temps réel.
* **Tracking Telegram API** : Le système utilise les *Serverless Functions* de Vercel (`api/send.js`) pour envoyer des notifications silencieuses à l'administrateur via un Bot Telegram à chaque étape clé (génération, tentative de paiement, abonnement VIP).

## 💻 Stack Technologique

* **Frontend** : HTML5, Vanilla JavaScript
* **Styling** : Tailwind CSS (via CDN pour la rapidité)
* **Librairies** : html2pdf.bundle.min.js
* **Backend / API** : Node.js (Vercel Serverless Functions)
* **Base de données** : LocalStorage (Côté client avec chiffrement)

## 📦 Déploiement

Ce projet est optimisé pour un déploiement en 1 clic sur **Vercel**.
Le fichier `vercel.json` est déjà configuré pour router correctement les requêtes vers l'API Telegram.

1. Clonez ce dépôt.
2. Liez le dépôt à votre compte Vercel.
3. Le déploiement se fait automatiquement.

---
*Un produit pensé, designé et développé par **Ndiaye Techn** - Abidjan, Côte d'Ivoire.* 🇨🇮
