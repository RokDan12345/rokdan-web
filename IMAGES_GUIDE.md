# 📸 Guía de Imágenes para el Proyecto

## 🎯 Imágenes necesarias

### **Carousel de Servicios** (12 imágenes)

Necesitas una imagen para cada servicio. Tamaño recomendado: **800x600px** (4:3)

```
/public/services/
├── aire-acondicionado.webp
├── calderas.webp
├── lavadoras.webp
├── lavavajillas.webp
├── hornos.webp
├── vitroceramica.webp
├── induccion.webp
├── cocinas-gas.webp
├── neveras.webp
├── campanas.webp
├── televisores.webp
└── calentadores.webp
```

---

## 🌐 Dónde conseguir imágenes gratis

### **1. Unsplash** (Recomendado)
- URL: https://unsplash.com/
- Licencia: Gratuita para uso comercial
- Calidad: Excelente
- Búsqueda en español: ✅

**Ejemplo de búsquedas**:
```
- "air conditioner repair"
- "washing machine"
- "dishwasher"
- "kitchen stove"
- "refrigerator"
- "water heater"
- "range hood"
- "induction cooktop"
```

### **2. Pexels**
- URL: https://www.pexels.com/
- Licencia: Gratuita
- Similar a Unsplash

### **3. Pixabay**
- URL: https://pixabay.com/
- Licencia: Gratuita
- Buena variedad

### **4. Fotos propias** (Lo mejor)
- Si tienes fotos de trabajos realizados
- Más auténtico y profesional
- Genera confianza en los clientes

---

## 🎨 Herramientas para optimizar imágenes

### **Squoosh.app** (Recomendado - Online)
1. Ve a https://squoosh.app/
2. Arrastra tu imagen
3. Configura:
   - **Formato**: WebP
   - **Calidad**: 80-85%
   - **Resize**: 800 × 600px (para carousel)
4. Descarga

### **ImageOptim** (Mac)
- URL: https://imageoptim.com/
- Arrastra y suelta

### **TinyPNG** (Online)
- URL: https://tinypng.com/
- Hasta 20 imágenes a la vez
- Convierte a WebP

---

## 📐 Dimensiones recomendadas

### **Carousel de servicios**:
```
Tamaño: 800 × 600px (ratio 4:3)
Formato: WebP
Calidad: 80-85%
Peso: < 50KB por imagen
```

### **Logo del navbar** (ya tienes):
```
Tamaño: 240 × 80px (proporción de tu logo)
Formato: WebP
Calidad: 90%
Peso: < 15KB
```

### **Favicon**:
```
Tamaño: 512 × 512px
Formato: SVG o PNG
Ya tienes: logo_embedded.svg ✅
```

---

## 🚀 Proceso paso a paso

### **Paso 1: Descargar imágenes**
1. Buscar en Unsplash cada servicio
2. Descargar en tamaño "Medium" o "Large"
3. Guardar con nombres descriptivos

### **Paso 2: Optimizar**
1. Abrir cada imagen en Squoosh.app
2. Configurar:
   - Resize: 800 × 600px
   - Format: WebP
   - Quality: 80-85%
3. Descargar optimizada

### **Paso 3: Renombrar**
```
Renombrar según el mapa:
- aire-acondicionado.webp
- calderas.webp
- lavadoras.webp
- etc.
```

### **Paso 4: Subir al proyecto**
1. Crear carpeta `/public/services/`
2. Copiar todas las imágenes optimizadas
3. Verificar que los nombres coincidan con el código

### **Paso 5: Probar**
```bash
npm run dev
```
Ve a http://localhost:5173 y prueba el carousel

---

## 💡 Tips para elegir buenas imágenes

### ✅ **Buenas prácticas**:
- **Alta resolución** (mínimo 800px de ancho)
- **Enfoque claro** en el servicio
- **Bien iluminadas** (evitar fotos oscuras)
- **Profesionales** (evitar fotos caseras de baja calidad)
- **Ángulos atractivos** (perspectiva interesante)
- **Fondo limpio** (sin desorden)

### ❌ **Evitar**:
- Imágenes pixeladas o borrosas
- Fotos con marcas de agua
- Ángulos extraños
- Demasiado texto en la imagen
- Colores muy saturados o irreales

---

## 🎯 Búsquedas sugeridas en Unsplash

```
1. Aires Acondicionados → "air conditioner installation"
2. Calderas → "boiler repair" o "heating system"
3. Lavadoras → "washing machine" o "laundry appliance"
4. Lavavajillas → "dishwasher"
5. Hornos → "oven repair" o "kitchen oven"
6. Vitrocerámica → "ceramic cooktop" o "electric stove"
7. Inducción → "induction cooktop"
8. Cocinas a Gas → "gas stove"
9. Neveras → "refrigerator" o "fridge"
10. Campanas Extractoras → "range hood" o "kitchen exhaust"
11. Televisores → "TV repair" o "television"
12. Calentadores de Agua → "water heater"
```

---

## 🔧 Alternativa: Generar con IA

Si no encuentras imágenes adecuadas, puedes generarlas con:

### **DALL-E / Midjourney** (Pago):
```
Prompt ejemplo:
"Professional photo of a modern air conditioner being installed, 
clean white background, high quality, product photography"
```

### **Leonardo.ai** (Gratis con límite):
- URL: https://leonardo.ai/
- 150 créditos gratis al día

---

## 📦 Estructura final

```
tech-trio-pages/
├── public/
│   ├── services/              ← NUEVA CARPETA
│   │   ├── aire-acondicionado.webp
│   │   ├── calderas.webp
│   │   ├── lavadoras.webp
│   │   ├── lavavajillas.webp
│   │   ├── hornos.webp
│   │   ├── vitroceramica.webp
│   │   ├── induccion.webp
│   │   ├── cocinas-gas.webp
│   │   ├── neveras.webp
│   │   ├── campanas.webp
│   │   ├── televisores.webp
│   │   └── calentadores.webp
│   ├── logo-navbar.webp        ← Ya existe
│   ├── logo_embedded.svg       ← Ya existe
│   └── robots.txt
```

---

## ✅ Checklist

- [ ] Crear carpeta `/public/services/`
- [ ] Descargar 12 imágenes de Unsplash
- [ ] Optimizar todas a WebP (800×600px, 80% quality)
- [ ] Renombrar según el mapa
- [ ] Copiar a `/public/services/`
- [ ] Probar en `npm run dev`
- [ ] Verificar que todas las imágenes carguen
- [ ] Si alguna falla, verifica el nombre del archivo
- [ ] Commit y push

---

## 🚨 Fallback automático

El código ya tiene un **fallback automático**:
- Si la imagen no existe o falla al cargar → muestra el gradiente de colores
- No necesitas hacer nada extra, funcionará con o sin imágenes

---

## 📞 Ayuda

Si necesitas ayuda para encontrar imágenes específicas o tienes dudas sobre optimización, avísame.
