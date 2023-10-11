import {z} from "zod";

export const AntelopeSchema = z.object({
    name: z.string(),
    continent: z.string(),
    weight: z.number(),
    height: z.number(),
    horns: z.enum(['Curved', 'Twisted', 'Straight', 'Spiky', 'Spiraled', 'Lyre-shaped']),
    picture: z.string()
})

export const AntelopesSchema = z.array(AntelopeSchema)

export type Antelope = z.infer<typeof AntelopeSchema>;
