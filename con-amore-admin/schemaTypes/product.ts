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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Identificador URL (Slug)',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
    }),
    // ELIMINAMOS EL CAMPO 'price' VIEJO Y PONEMOS ESTE:
    defineField({
      name: 'variantes',
      title: 'Tamaños y Precios',
      description: 'Agrega los diferentes tamaños y precios para esta torta',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'tamano', title: 'Tamaño (Ej: Chica 18cm)', type: 'string' },
            { name: 'precio', title: 'Precio ($)', type: 'number' }
          ]
        }
      ]
    }),
    defineField({
      name: 'image',
      title: 'Foto del Producto',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'description',
      title: 'Descripción (Ingredientes)',
      type: 'text',
      rows: 3,
    }),
  ],
})