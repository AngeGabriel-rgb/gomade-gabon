// Configuration file for EmailJS setup instructions
export const emailJSConfig = {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,

  instructions: `
    SETUP EMAILJS POUR GOMADE GABON
    ================================
    
    1. Créez un compte sur https://www.emailjs.com
    
    2. Créez un service email (Gmail, Outlook, etc.)
      - Service ID: copier dans NEXT_PUBLIC_EMAILJS_SERVICE_ID
    
    3. Créez un template email avec les variables suivantes:
      {{from_name}}
      {{from_email}}
      {{phone}}
      {{company}}
      {{service}}
      {{message}}
      Template ID: copier dans NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    
    4. Récupérez votre PUBLIC_KEY depuis la section Settings
      Public Key: copier dans NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    
    5. Ajoutez les valeurs dans le fichier .env.local:
      NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_clé_publique
      NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
      NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
    
    6. Testez le formulaire sur la page /contact
  `
};
