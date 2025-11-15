// Configuration file for EmailJS setup instructions
export const emailJSConfig = {
  instructions: `
    SETUP EMAILJS POUR GOMADE GABON
    ================================
    
    1. Créez un compte sur https://www.emailjs.com
    
    2. Créez un service email (Gmail, Outlook, etc.)
      - Service ID: copier et remplacer YOUR_SERVICE_ID
    
    3. Créez un template email avec les variables suivantes:
      {{from_name}}
      {{from_email}}
      {{phone}}
      {{company}}
      {{service}}
      {{message}}
      Template ID: copier et remplacer YOUR_TEMPLATE_ID
    
    4. Récupérez votre PUBLIC_KEY depuis la section Settings
      Public Key: copier et remplacer YOUR_PUBLIC_KEY
    
    5. Remplacez les trois valeurs dans components/contact/contact-form.tsx:
      - 'YOUR_PUBLIC_KEY'
      - 'YOUR_SERVICE_ID'
      - 'YOUR_TEMPLATE_ID'
    
    6. Testez le formulaire sur la page /contact
  `
}
