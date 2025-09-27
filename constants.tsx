import React from 'react';

interface SocialLink {
  id: number;
  text: string;
  url: string;
  icon: React.ReactNode;
}

interface ServiceItem {
  id: number;
  name: string;
  icon: React.ReactNode;
  whatsappUrl: string;
}

// Social Icons
const WhatsAppIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);
const InstagramIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/>
  </svg>
);
const FacebookIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/>
  </svg>
);
const XIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);
const WebsiteIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.231-12.231 9.005 9.005 0 00-18.462 0A9.004 9.004 0 0012 21z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.5 9h17v6h-17V9z" />
  </svg>
);
const InvitationIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

// Service Icons
const PrintIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6 3.096m10.56 0L18 3.096m0 0a42.415 42.415 0 00-10.56 0m10.56 0L18 13.828m0 0a42.41 42.41 0 01-10.56 0m10.56 0L18 18.233A2.25 2.25 0 0115.75 20.5H8.25A2.25 2.25 0 016 18.233L6 13.828m12 0a42.41 42.41 0 00-10.56 0" /></svg>;
const StickerIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9" /></svg>;
const CardIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z" /></svg>;
const BookIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" /></svg>;
const ReceiptIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h.01M15 12h.01M10.5 16.5h3m-3.75 3h6.75a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H8.25a2.25 2.25 0 00-2.25 2.25v12.75a2.25 2.25 0 002.25 2.25z" /></svg>;
const StampIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.092 1.21-.138 2.43-.138 3.662 0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.092-1.21.138-2.43.138-3.662zM15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>;
const BoxIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>;


const WHATSAPP_BASE_URL = 'https://wa.me/628979012852';

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    text: 'Hubungi via WhatsApp',
    url: WHATSAPP_BASE_URL,
    icon: WhatsAppIcon,
  },
  {
    id: 2,
    text: 'Instagram',
    url: 'https://www.instagram.com/rafaelaprint',
    icon: InstagramIcon,
  },
  {
    id: 3,
    text: 'Facebook',
    url: 'https://www.facebook.com/share/19v8dL7fFN/',
    icon: FacebookIcon,
  },
  {
    id: 4,
    text: 'X (Twitter)',
    url: 'https://x.com/rafaelaprint',
    icon: XIcon,
  },
  {
    id: 5,
    text: 'Our Website',
    url: 'https://rafaela-landing.vercel.app',
    icon: WebsiteIcon,
  },
  {
    id: 6,
    text: 'Undangan Digital',
    url: 'https://rafaelaprint.momenmu.id',
    icon: InvitationIcon,
  },
];

const createWhatsAppLink = (productName: string) => 
  `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(`Halo Rafaela Print, saya ingin bertanya tentang ${productName}.`)}`;

export const serviceItems: ServiceItem[] = [
  { id: 1, name: 'Banner', icon: PrintIcon, whatsappUrl: createWhatsAppLink('Banner') },
  { id: 2, name: 'Stiker', icon: StickerIcon, whatsappUrl: createWhatsAppLink('Stiker') },
  { id: 3, name: 'Kartu Nama', icon: CardIcon, whatsappUrl: createWhatsAppLink('Kartu Nama') },
  { id: 4, name: 'Brosur', icon: PrintIcon, whatsappUrl: createWhatsAppLink('Brosur') },
  { id: 5, name: 'Undangan', icon: BookIcon, whatsappUrl: createWhatsAppLink('Undangan') },
  { id: 6, name: 'Spanduk', icon: PrintIcon, whatsappUrl: createWhatsAppLink('Spanduk') },
  { id: 7, name: 'Kalender', icon: PrintIcon, whatsappUrl: createWhatsAppLink('Kalender') },
  { id: 8, name: 'Nota', icon: ReceiptIcon, whatsappUrl: createWhatsAppLink('Nota') },
  { id: 9, name: 'Poster', icon: PrintIcon, whatsappUrl: createWhatsAppLink('Poster') },
  { id: 10, name: 'Sertifikat', icon: PrintIcon, whatsappUrl: createWhatsAppLink('Sertifikat') },
  { id: 11, name: 'Kop Surat', icon: PrintIcon, whatsappUrl: createWhatsAppLink('Kop Surat') },
  { id: 12, name: 'Amplop', icon: InvitationIcon, whatsappUrl: createWhatsAppLink('Amplop') },
  { id: 13, name: 'Buku Yasin', icon: BookIcon, whatsappUrl: createWhatsAppLink('Buku Yasin') },
  { id: 14, name: 'Stempel', icon: StampIcon, whatsappUrl: createWhatsAppLink('Stempel') },
  { id: 15, name: 'ID Card', icon: CardIcon, whatsappUrl: createWhatsAppLink('ID Card') },
  { id: 16, name: 'Packaging', icon: BoxIcon, whatsappUrl: createWhatsAppLink('Packaging') },
];