export const WHATSAPP_NUMBER = "51916842610";
export const BRAND_NAME = "LuisAmador — Alta Sastrería";

export const whatsappUrl = (message: string): string =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
