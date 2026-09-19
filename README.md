# 🍰 Con Amore | E-commerce de Pastelería Artesanal

Proyecto web e-commerce de desarrollo full-stack orientado a la gestión dinámica de productos de pastelería, diseñado con una arquitectura moderna de tipo Jamstack y desacoplada.

## 🚀 Stack Tecnológico

*   **Frontend:** Astro (Framework optimizado para velocidad y rendimiento).
*   **Estilos:** Tailwind CSS (Diseño responsivo, limpio y de estética minimalista).
*   **CMS / Backend:** Sanity Headless CMS (Panel de administración personalizado para la gestión autónoma del catálogo).
*   **Interactividad:** JavaScript Vanilla para la lógica reactiva del carrito y selector de variantes.

## 🛠️ Decisiones de Arquitectura y Arquitectura de Datos

*   **Gestión de Contenido Desacoplada:** Se integró Sanity CMS para permitir que un usuario sin conocimientos técnicos pueda administrar precios, descripciones e imágenes en tiempo real sin tocar código fuente.
*   **Sistema Dinámico de Variantes:** Implementación de un esquema de objetos anidados (`variantes`) en el CMS que permite asociar múltiples tamaños y precios a un mismo producto (ej. 18 cm vs 24 cm).
*   **Identidades Únicas en Carrito:** Resolución de conflictos de estado mediante la composición de IDs compuestos (`id-tamaño`), permitiendo manejar variantes de un mismo producto de forma independiente en el carrito de compras.

## ✨ Características Principales

*   **UI/UX Refinada:** Tarjetas de productos minimalistas con botones interactivos estilo "píldora" para la selección de tamaños con actualización de precio en tiempo real.
*   **Tipografía y Copywriting Sensorial:** Enfoque comercial orientado a la descripción de texturas y sabores.
*   **Formato de Moneda Local:** Renderizado de precios adaptados al formato numérico regional (`es-AR`).

---
Desarrollado con enfoque en rendimiento, escalabilidad y experiencia de usuario.