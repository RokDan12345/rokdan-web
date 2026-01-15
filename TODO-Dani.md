# 📋 TO-DO: Proyecto Web Dani

**Fecha inicio**: 10 de enero de 2026  
**Repositorio**: https://github.com/LucasSA97/daniel-web-project.git  
**Rama**: `feat/new-ux-dani`

---

## ✅ Configuración Inicial (Completado)

- [x] Crear repositorio en GitHub
- [x] Eliminar configuración dual-push de SatFuncional
- [x] Conectar repositorio nuevo
- [x] Crear rama `feat/new-ux-dani`
- [x] Primer push al repositorio
- [ ] Actualizar credenciales Git locales (user.name y user.email)

---

## 📝 INFORMACIÓN NECESARIA DEL CLIENTE

### Datos Básicos
- [x] **Nombre comercial completo**: ROKDAN
- [ ] **Slogan o frase destacada**: _________________________ (usar similar a SatFuncional)
- [ ] **Descripción del negocio** (1-2 párrafos): _________________________ (adaptar de SatFuncional)
- [ ] **Años de experiencia**: _________________________ (preguntar)
- [ ] **Zona geográfica de servicio**: _________________________ (preguntar)

### Contacto
- [x] **Teléfono principal**: +34 606 023 698
- [x] **WhatsApp**: +34 618 794 696
- [ ] **Email para recibir leads**: _________________________
- [ ] **Dirección física** (opcional): _________________________
- [x] **Horarios de atención**: Atención telefónica 9-17h, Horario laboral 9-19h

### Servicios Ofrecidos
Lista de servicios que aparecerán en la web (mínimo 6-12):

1. [x] Aires Acondicionados
2. [x] Calderas a Gas y Gasoil
3. [x] Lavadoras
4. [x] Lavavajillas
5. [x] Hornos
6. [x] Vitrocerámica
7. [x] Inducción
8. [x] Cocinas a Gas
9. [x] Neveras
10. [x] Campanas Extractoras
11. [x] Televisores
12. [x] Calentadores de Agua

### Identidad Visual
- [x] **Logo** (formato PNG/SVG, alta resolución) - ✅ RECIBIDO
- [x] **Colores corporativos** (basados en logo):
  - Color primario (hex): #1B4079 (azul oscuro principal)
  - Color secundario (hex): #7F9C96 (verde grisáceo)
  - Color acento 1 (hex): #8FAD88 (verde medio)
  - Color acento 2 (hex): #CBDF90 (verde claro/amarillento)
- [ ] **Fuentes** (si tiene preferencia): _________________________

### Assets Multimedia
- [ ] **Imágenes de servicios** (6-12 fotos .jpg/.png para convertir a .webp)
- [ ] **Foto del equipo/profesional** (opcional)
- [ ] **Foto de portada hero** (opcional)
- [ ] **Videos** (opcional)

---

## 🔧 CONFIGURACIÓN TÉCNICA REQUERIDA

### Cuentas de Email (Gmail)
- [ ] **Crear cuenta servicios**: `[nombre-dani].web@gmail.com`
  - Usuario: _________________________
  - Contraseña: _________________________ (guardar en gestor)
  - Uso: GitHub, Vercel, Resend, reCAPTCHA
  
- [ ] **Cuenta destino leads**: _________________________
  - (Puede ser email existente del cliente o crear nueva)

### Dominio
- [ ] **Dominio a usar**: _________________________
- [ ] **Proveedor actual**: _________________________ (si ya lo tiene)
- [ ] **Acceso al panel DNS**: _________________________ (usuario/pass)
- [ ] **Comprar dominio** (si no tiene):
  - Opción 1: Vercel (durante deployment)
  - Opción 2: Namecheap, GoDaddy, etc.

### Servicios Externos

#### 1. Resend (Email)
- [ ] Crear cuenta en https://resend.com con email de servicios
- [ ] Generar API Key
- [ ] Agregar dominio del cliente
- [ ] Configurar DNS (SPF, DKIM, DMARC)
- [ ] Esperar verificación (5 min - 48 hrs)
- [ ] **API Key generada**: _________________________ (guardar seguro)

#### 2. Google reCAPTCHA v3
- [ ] Ir a https://www.google.com/recaptcha/admin/create
- [ ] Registrar dominio del cliente
- [ ] Tipo: reCAPTCHA v3
- [ ] Dominios permitidos: `[dominio-cliente.com]`
- [ ] **Site Key**: _________________________ (guardar)
- [ ] **Secret Key**: _________________________ (guardar seguro)

#### 3. Vercel
- [ ] Crear nuevo proyecto en Vercel
- [ ] Conectar repositorio `daniel-web-project`
- [ ] Conectar dominio
- [ ] Configurar variables de entorno:
  - [ ] `RESEND_API_KEY`
  - [ ] `RECAPTCHA_SECRET_KEY`
  - [ ] `VITE_RECAPTCHA_SITE_KEY`

---

## 💻 DESARROLLO - Modificaciones de Código

### Frontend

#### `index.html`
- [x] Actualizar `<title>`: "ROKDAN | Reparación e Instalación de Electrodomésticos"
- [x] Actualizar `<meta name="description">` (pendiente personalizar más)
- [x] Actualizar `<meta property="og:title">`
- [x] Actualizar `<meta property="og:description">` (pendiente personalizar más)
- [x] Actualizar `<meta name="author">`

#### `src/pages/Landing3.tsx`
- [x] Línea 55, 169, 359, 378: Cambiar nombre "SatFuncional" por "ROKDAN"
- [x] Líneas 10-22: Array `services` mantenido (mismos servicios)
- [x] Líneas 87, 96, 368: Cambiar teléfonos a +34 606 023 698 y +34 618 794 696
- [x] Línea 87: Actualizar link WhatsApp a wa.me/34618794696
- [x] Línea 369: Email footer cambiado a contacto@rokdan.com (placeholder)
- [ ] Hero section: Actualizar slogan y textos principales (pendiente personalización)
- [ ] About section: Cambiar "15 años experiencia" y descripción (pendiente info cliente)
- [x] Footer: Textos y links actualizados con ROKDAN

#### `src/components/ContactBanner.tsx`
- [x] Ambos teléfonos agregados: +34 606 023 698 y +34 618 794 696

### Backend

#### `api/send-email.js`
- [x] Línea 49: Cambiado `from: 'contacto@rokdan.com'` (placeholder)
- [x] Línea 50: Cambiado array de destinatarios a info@rokdan.com (placeholder)
- [x] Líneas 54-238: Template HTML actualizado:
  - [x] Nombre empresa en footer: ROKDAN
  - [ ] Colores corporativos inline (pendiente si queremos personalizar más)
  - [x] Footer copyright: 2026 ROKDAN
  - [x] Textos generales actualizados

### Estilos

#### `tailwind.config.ts` y `src/index.css`
- [x] Actualizar paleta `landing3-*` con colores corporativos ROKDAN:
  - [x] `landing3-orange` → #1B4079 (azul oscuro principal)
  - [x] `landing3-blue-dark` → #1B4079 (azul oscuro)
  - [x] `landing3-blue-light` → #7F9C96 (verde grisáceo)
  - [x] `landing3-cream` → #CBDF90 (verde claro/amarillento)
  - [x] Colores adicionales: #8FAD88 (verde medio - disponible si se necesita)
- [ ] (Opcional) Cambiar fuentes en `fontFamily` - MANTENEMOS Poppins

### Assets - `public/`

#### Logos
- [ ] Reemplazar `logo-navbar.webp`
- [ ] Reemplazar `logo.webp`
- [ ] Reemplazar `favicon.ico`

#### Imágenes de Servicios
- [ ] Revisar/reemplazar 13 archivos .webp/.avif:
  - [ ] air-repair-2.webp
  - [ ] cocina-gas.webp
  - [ ] gas-boiler.avif
  - [ ] mantenimiento-horno.webp
  - [ ] mantenimiento-induccion.webp
  - [ ] mantenimiento-lavavajillas.webp
  - [ ] mantenimiento-nevera.webp
  - [ ] mantenimiento-vitroceramica.webp
  - [ ] reparacion-calentador.webp
  - [ ] reparacion-campanas.webp
  - [ ] reparacion-lavadora.webp
  - [ ] reparacion-television.webp
  - [ ] servicio-aire-acondicionado.webp

**Acción**: Eliminar las no relevantes, agregar nuevas si es necesario

### Configuración Local

#### `.env.local`
Crear archivo con:
```
RESEND_API_KEY=re_XXXXXXXXXXXXXXXXX
RECAPTCHA_SECRET_KEY=6LeXXXXXXXXXXXXXXXXXXXXXXXX
VITE_RECAPTCHA_SITE_KEY=6LeXXXXXXXXXXXXXXXXXXXXXXXX
```

---

## 🧹 LIMPIEZA - Archivos a Eliminar/Actualizar

### Documentación Específica de SatFuncional (ELIMINAR)
- [ ] `GUIA_PLATAFORMAS.md`
- [ ] `FINAL_STEPS.md`
- [ ] `STATUS_SUMMARY.md`
- [ ] `DNS_CONFIGURATION_GUIDE.md` (o reescribir para Dani)

### Documentación Genérica (ACTUALIZAR)
- [ ] `README.md` - Cambiar nombre proyecto y detalles
- [ ] `RECAPTCHA_SETUP.md` - Actualizar dominio
- [ ] `EMAIL_SETUP.md` - Actualizar credenciales
- [ ] `IMPLEMENTACION_EMAILS.md` - Verificar referencias

### Otros
- [ ] `.gitignore` - Verificar que `.env.local` está ignorado ✅
- [x] `package.json` - Campo `name` cambiado a "rokdan-web"

---

## 🧪 TESTING

### Local
- [ ] `bun dev` - Verificar que levanta sin errores
- [ ] Probar formulario localmente (con API keys de testing)
- [ ] Revisar responsive en móvil/tablet/desktop
- [ ] Verificar todos los links funcionan
- [ ] Probar botón WhatsApp
- [ ] Verificar tel: links en móvil

### Pre-Deployment
- [ ] `bun build` - Verificar que builda sin errores
- [ ] `bun preview` - Probar build de producción localmente
- [ ] Verificar imágenes optimizadas (peso, formato)
- [ ] Lighthouse audit (performance, SEO, accessibility)

### Post-Deployment
- [ ] Formulario envía emails correctamente
- [ ] Emails llegan a la bandeja correcta (no spam)
- [ ] reCAPTCHA funciona (score > 0.5)
- [ ] Dominio resuelve correctamente
- [ ] SSL/HTTPS activo
- [ ] Todas las páginas cargan
- [ ] Meta tags aparecen en preview de redes sociales
- [ ] Verificar en diferentes navegadores

---

## 📤 DEPLOYMENT

### Configuración DNS
- [ ] Apuntar dominio a Vercel (A/CNAME records)
- [ ] Configurar registros de email (SPF, DKIM, DMARC)
- [ ] Esperar propagación DNS (24-48 hrs)

### Vercel Dashboard
- [ ] Deploy inicial de prueba
- [ ] Configurar dominio custom
- [ ] Agregar variables de entorno
- [ ] Verificar deployment exitoso
- [ ] Configurar auto-deploy desde rama main

### Resend
- [ ] Verificar dominio aprobado
- [ ] Enviar email de prueba
- [ ] Monitorear dashboard de envíos

---

## 📚 DOCUMENTACIÓN FINAL (Entregar al Cliente)

- [ ] Crear `GUIA_CLIENTE_DANI.md` estilo GUIA_PLATAFORMAS.md con:
  - [ ] Accesos a todas las plataformas
  - [ ] Cómo revisar emails recibidos
  - [ ] Cómo ver analytics
  - [ ] Contacto de soporte
  - [ ] Diagrama de flujo del sistema
  
- [ ] Crear checklist de mantenimiento mensual/anual

---

## 🎯 FUTURAS MEJORAS (Post-Launch)

- [ ] Google Analytics 4
- [ ] Google Search Console
- [ ] Schema markup para SEO local
- [ ] Blog/sección noticias
- [ ] Galería de trabajos realizados
- [ ] Sistema de testimonios
- [ ] FAQ section
- [ ] Integración calendario de citas
- [ ] Chat en vivo (Tawk.to, Crisp, etc.)

---

## 🔮 PROYECTO FUTURO: Template Base

**Objetivo**: Crear rama `template-base` genérica sin datos de clientes para reutilizar en futuros proyectos freelance.

**Tareas**:
- [ ] Crear rama desde main original
- [ ] Eliminar TODOS los datos específicos de clientes
- [ ] Usar placeholders tipo `[NOMBRE_EMPRESA]`, `[TELEFONO]`, etc.
- [ ] Documentar proceso de personalización
- [ ] Crear script de reemplazo automático
- [ ] Probar creando proyecto de prueba desde template
