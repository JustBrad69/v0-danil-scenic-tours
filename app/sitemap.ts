import type { MetadataRoute } from 'next'

const baseUrl = 'https://danilscenictours.co.ke'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      priority: 1,
      changeFrequency: 'weekly',
    },
    {
      url: `${baseUrl}/safari-tours`,
      priority: 0.9,
      changeFrequency: 'weekly',
    },
    {
      url: `${baseUrl}/destinations`,
      priority: 0.9,
      changeFrequency: 'weekly',
    },
    {
      url: `${baseUrl}/safari-packages`,
      priority: 0.9,
      changeFrequency: 'weekly',
    },

    {
      url: `${baseUrl}/safari-tours/5-day-amboseli-nakuru-masai-mara`,
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/safari-tours/7-days-6-nights-maasai-mara-lake-nakuru-amboseli`,
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/safari-tours/10-day-kenya-wildlife-diani-beach`,
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/safari-tours/13-day-kenya-safari-coastal-escape`,
      priority: 0.8,
      changeFrequency: 'monthly',
    },

    {
      url: `${baseUrl}/destinations/maasai-mara-safari-tours`,
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/destinations/amboseli-safari-tours`,
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/destinations/tsavo-safari-tours`,
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/destinations/nairobi-national-park-safari-tours`,
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/destinations/ol-pejeta-safari-tours`,
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/destinations/lake-naivasha-safari-tours`,
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/destinations/lake-nakuru-safari-tours`,
      priority: 0.8,
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/destinations/diani-beach-safari-tours`,
      priority: 0.8,
      changeFrequency: 'monthly',
    },

    {
      url: `${baseUrl}/about`,
      priority: 0.7,
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/gallery`,
      priority: 0.6,
      changeFrequency: 'monthly',
    },
    {
      url: `${baseUrl}/book`,
      priority: 0.7,
      changeFrequency: 'monthly',
    },
  ]
}
