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

## ✅ INFORMACIÓN DEL CLIENTE (Completado)

- [x] Nombre comercial: ROKDAN
- [x] Slogan y descripción del negocio
- [x] Años de experiencia y zona de servicio
- [x] Email para leads y contacto
- [x] 12 servicios definidos
- [x] Logo y colores corporativos
- [x] Fuentes e imágenes de servicios

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

## ✅ DESARROLLO FRONTEND (Completado)

- [x] index.html - Meta tags y título actualizados
- [x] Landing3.tsx - Nombre, teléfonos, emails, servicios
- [x] ContactBanner.tsx - Teléfonos actualizados
- [x] api/send-email.js - Template y datos actualizados
- [x] tailwind.config.ts - Paleta ROKDAN configurada
- [x] package.json - Nombre cambiado a "rokdan-web"

### Assets pendientes (opcional)
- [ ] Reemplazar logos y favicon
- [ ] Revisar imágenes de servicios

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
