/**
 * Centralized image URL registry for the Danil Scenic Tours application
 * All image references should be imported from this file to maintain consistency
 * and simplify future updates to image URLs
 */

// Local images
export const LOCAL_IMAGES = {
  LOGO: '/logo.webp',
  CHEETAH_RESTING: '/images/cheetah-resting.webp',
  IMPALA_HERD: '/images/impala-herd.webp',
  LEOPARD_CUB: '/images/leopard-cub.webp',
  CROWNED_CRANE: '/images/crowned-crane.webp',
  ELEPHANT_KILIMANJARO: '/images/elephant-kilimanjaro.webp',
  AMBOSELI_ELEPHANTS: '/images/amboseli-elephants.webp',
  BEACH_DIVING: '/images/beach-diving.webp',
  ZEBRAS_SAVANNA: '/images/zebras-savanna.webp',
  CULTURAL_GATHERING: '/images/cultural-gathering.webp',
}

// Blob storage images
export const BLOB_IMAGES = {
  // Diani Beach / Beach Escapes
  DIANI_BEACH: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2813%29-dvsdfGxqdqYzb94D6e93B8K10dhmKW.webp',

  // Lake Nakuru
  LAKE_NAKURU: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2812%29-s02sGMy6RmxVwGRkXsuExT87bOTlVI.webp',

  // Maasai Mara
  MAASAI_MARA: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2814%29-PPbHtHwWOiOCF897LhCVKG6lE946GY.webp',

  // Tsavo East
  TSAVO_EAST: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2815%29-3ELJ3hQTT33H8nK1hqEBM53zsX5JEk.webp',

  // Mount Kenya
  MOUNT_KENYA: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-03-27%20094056-epSavrISmZLiwYYh4tsgGqat52e34W.webp',

  // Watamu
  WATAMU: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-03%20105006-p0LsV0tdCnZNmkjIG5Aey8nntoVSAo.webp',

  // Samburu
  SAMBURU: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-03%20105056-xa82k3Wfrb10L11nrnWTuyqp0AybAo.webp',

  // Aberdare
  ABERDARE: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-04-03%20105258-8JEgBeQ61PSLAly1hdLtvwRg4Q28qR.webp',

  // Adventure - Rock climbing/hiking
  ADVENTURE_HIKING: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-loren-nelson-iii-393937649-14779646-JNYFWwU42lFLNOQPguKoXD6t0DPdE7.webp',

  // Safari experience photos
  SAFARI_PHOTO_1: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-31%20at%2010.39.00-zWbc5Kff8Ov83PkpY3KGpLCAFeWlks.webp',
  SAFARI_PHOTO_2: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-31%20at%2022.58.01-CLCCC7SKHsOzZrZZbCo84McmWU3mT7.webp',

  // CTA Banner / Hero alternate
  CTA_BANNER: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20%2816%29-okv68gOhxJpXw4n1wmi6LzVWsS5NI3.webp',
}

/**
 * Hero section image carousel
 * Used in: components/hero.tsx
 */
export const HERO_IMAGES = [
  LOCAL_IMAGES.CHEETAH_RESTING,
  BLOB_IMAGES.CTA_BANNER,
  BLOB_IMAGES.LAKE_NAKURU,
  BLOB_IMAGES.DIANI_BEACH,
  BLOB_IMAGES.MAASAI_MARA,
]

/**
 * Destination image mapping
 * Used in: components/featured-destinations.tsx, app/destinations/page.tsx
 */
export const DESTINATION_IMAGES = {
  MOUNT_KENYA: BLOB_IMAGES.MOUNT_KENYA,
  AMBOSELI: LOCAL_IMAGES.AMBOSELI_ELEPHANTS,
  LAKE_NAKURU: BLOB_IMAGES.LAKE_NAKURU,
  MAASAI_MARA: BLOB_IMAGES.MAASAI_MARA,
  WATAMU: BLOB_IMAGES.WATAMU,
  SAMBURU: BLOB_IMAGES.SAMBURU,
}

/**
 * Service/Safari package images
 * Used in: components/services-grid.tsx, app/safaris/page.tsx
 */
export const SERVICE_IMAGES = {
  SAFARI_TOURS: LOCAL_IMAGES.ELEPHANT_KILIMANJARO,
  CULTURAL_EXPEDITIONS: LOCAL_IMAGES.CULTURAL_GATHERING,
  ADVENTURE_SAFARIS: BLOB_IMAGES.ADVENTURE_HIKING,
  BEACH_ESCAPES: BLOB_IMAGES.DIANI_BEACH,
  CUSTOMIZED_SAFARIS: LOCAL_IMAGES.ZEBRAS_SAVANNA,
}
