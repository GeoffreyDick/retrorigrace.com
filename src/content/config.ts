import { z, defineCollection } from "astro:content";

const racesCollection = defineCollection({
  schema: z.object({
    isDraft: z.boolean().default(false),
    name: z.coerce.string(),
    start: z.string().transform((str) => new Date(str)),
    riders: z.array(
      z
        .object({
          name: z.string(),
          age: z.number().int().positive(),
          categories: z.array(
            z.enum([
              // Depart
              "Grand Depart",
              "ITT",

              // Gender
              "Men",
              "Women",
              "Non-Binary",

              // Gearing
              "Geared",
              "Singlespeed",

              // Era
              "1900s",
              "1910s",
              "1920s",
              "1930s",
              "1940s",
              "1950s",
              "1960s",
              "1970s",
              "1980s",
              "1990s",
              "2000s",
              "Modern",
            ])
          ),
          rig: z.object({
            year: z.number().int().positive(),
            make: z.string(),
            model: z.string(),
            imgSrc: z.string(),
          }),
          result: z.object({
            status: z.enum(["Scratched", "Finished", "Raring to Go"]),
            note: z.string().optional().nullable(),
            time: z
              .string()
              .regex(/^\d+d(0?[1-9]|1[0-9]|2[0-3])h[0-5][0-9]m$/g)
              .optional()
              .nullable(),
          }),
        })
        .required()
    ),
  }),
});

export const collections = {
  races: racesCollection,
};
