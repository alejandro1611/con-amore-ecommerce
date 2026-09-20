import {defineField, defineType} from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Producto',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre del Producto',
      type: 'string',
      validation: (Rule) => Rule.required().error('El nombre de la torta es obligatorio.'),
    }),
    defineField({
      name: 'slug',
      title: 'Identificador URL (Slug)',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      // Es vital que el slug sea obligatorio para que funcionen las rutas en Astro
      validation: (Rule) => Rule.required().error('Tenés que generar el Slug haciendo clic en "Generate".'),
    }),
    defineField({
      name: 'variantes',
      title: 'Tamaños y Precios',
      description: 'Agrega los diferentes tamaños y precios para esta torta',
      type: 'array',
      // Exige que sí o sí haya al menos una variante cargada
      validation: (Rule) => Rule.required().min(1).error('Tenés que cargar por lo menos un tamaño y su precio.'),
      of: [
        {
          type: 'object',
          fields: [
            { 
              name: 'tamano', 
              title: 'Tamaño (Ej: Chica 18cm)', 
              type: 'string',
              validation: (Rule) => Rule.required().error('Falta el tamaño.')
            },
            { 
              name: 'precio', 
              title: 'Precio ($)', 
              type: 'number',
              // Obliga a que haya precio y prohíbe que ponga números negativos por error
              validation: (Rule) => Rule.required().min(0).error('El precio no puede estar vacío ni ser negativo.')
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'image',
      title: 'Foto del Producto',
      type: 'image',
      options: { hotspot: true },
      // Bloquea la publicación si no hay foto
      validation: (Rule) => Rule.required().error('¡La foto es indispensable para vender!'),
    }),
    defineField({
      name: 'description',
      title: 'Descripción (Ingredientes)',
      type: 'text',
      rows: 3,
    }),
  ],
})