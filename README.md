# SatFuncional - Página Web Corporativa

Página web profesional para **SatFuncional**, empresa de servicios técnicos especializados.

---

## 📋 Estado del Proyecto

**Estado actual**: ✅ Funcional en modo de prueba  
**URL temporal**: https://tech-trio-pages.vercel.app  
**Repositorio**: https://github.com/LucasSA97/sat-funcional-web (Privado)

---

## 🚀 Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript + Vite 5
- **UI Components**: shadcn/ui (Radix UI + Tailwind CSS)
- **Formularios**: React Hook Form + Zod validation
- **Email Service**: Resend API
- **Hosting**: Vercel (Serverless Functions)
- **Estilo**: Tailwind CSS 3.4
- **Íconos**: Lucide React

---

## ✅ Funcionalidades Implementadas

- ✅ Landing page responsive (desktop + mobile)
- ✅ Carrusel de servicios con navegación y swipe
- ✅ Sección de servicios con acordeón interactivo
- ✅ Formulario de contacto con validación completa
- ✅ Sistema de envío de emails (Resend)
- ✅ Email HTML profesional y responsive
- ✅ Estados de UI (loading, success, error)
- ✅ Scroll suave entre secciones
- ✅ Botón "Scroll to Top"
- ✅ Optimización para SEO

---

## 📝 TO DO LIST - Tareas Pendientes

### 🔴 **Prioridad Alta - Configuración de Producción**

- [x] **1. Comprar dominio**
  - ✅ Dominio adquirido: **satfuncionalmallorca.com**

- [ ] **2. Configurar Resend con el dominio nuevo**
  - Crear cuenta en Resend 
  - Agregar dominio en https://resend.com/domains
  - Configurar registros DNS (ver sección "Configuración DNS" abajo)
  - Esperar verificación del dominio
  - Actualizar `from:` en `api/send-email.js` (cambiar de `onboarding@resend.dev` a `contacto@tudominio.com`)

- [ ] **3. Crear cuenta Gmail para el proyecto**
  - Creada ya cuenta de gmail satfuncionalmallorca.web@gmail.com
  - Usar para recibir emails del formulario de contacto
  - Actualizar `to:` en `api/send-email.js`

- [ ] **4. Crear cuenta GitHub con el email del proyecto**
  - Creada ya cuenta de github con satfuncionalmallorca.web@gmail.com
  - Registrarse en GitHub con el nuevo email de empresa
  - Usuario sugerido: `satfuncional` o `satfuncional-empresa`
  - Habilitar 2FA (autenticación de dos factores)

- [ ] **5. Crear cuenta Vercel con GitHub de empresa**
  - Registrarse en Vercel usando la cuenta GitHub de empresa
  - Conectar cuenta GitHub
  - Plan gratuito es suficiente para empezar

- [ ] **6. Migrar proyecto de cuenta personal a cuenta de empresa**
  - **Opción A - Transfer Ownership** (recomendado):
    - Settings del repo → Danger Zone → Transfer ownership
    - Transferir de `LucasSA97` a la nueva cuenta de empresa
  - **Opción B - Fork + Archive**:
    - Hacer fork del repo a la cuenta de empresa
    - Archivar el repo en `LucasSA97`
  - **Nota**: Asegúrate de cambiar el repo de privado a privado en la nueva cuenta

- [ ] **7. Deploy en Vercel con cuenta de empresa**
  - Import proyecto desde GitHub de empresa
  - Configurar variables de entorno:
    - `RESEND_API_KEY` = [tu API key de Resend]
  - Conectar dominio personalizado
  - Deploy automático

### 🟡 **Prioridad Media - Contenido y Diseño**

- [ ] **8. Actualizar detalles del frontend**
  - [ ] Agregar imágenes reales de la empresa
    - Logo de SatFuncional
    - Fotos del equipo
    - Imágenes de trabajos realizados
    - Antes/después de reparaciones
  - [ ] Actualizar horarios de atención
  - [ ] Agregar datos reales de contacto
    - Teléfono principal
    - WhatsApp
    - Dirección física (si aplica)
  - [ ] Actualizar textos de servicios
  - [ ] Revisar descripciones de cada servicio

### 🟢 **Prioridad Baja - Mejoras Futuras**

- [ ] Agregar página de "Sobre Nosotros"
- [ ] Galería de trabajos realizados
- [ ] Testimonios de clientes
- [ ] Blog/Noticias
- [ ] Integración con WhatsApp Business
- [ ] Sistema de citas online
- [ ] Panel de administración
- [ ] Google Analytics
- [ ] Google Search Console

---

## 🔧 Configuración DNS (Punto 3 - Explicado)

### ¿Qué son los registros DNS?

Los **registros DNS** son como la "agenda de contactos" de Internet. Le dicen a los servidores cómo encontrar y verificar tu sitio web y emails.

### ¿Qué hace Resend con los registros DNS?

Cuando agregas un dominio en Resend, te da **3 registros DNS** que debes copiar a tu proveedor de dominio (GoDaddy, Namecheap, etc.). Estos registros sirven para:

1. **Verificar que eres dueño del dominio**
2. **Autenticar tus emails** (para que no vayan a spam)
3. **Configurar el servidor de emails**

### Paso a paso de configuración DNS:

#### **1. Agregar dominio en Resend**
```
1. Ir a https://resend.com/domains
2. Click en "Add Domain"
3. Escribir tu dominio: ejemplo.com
4. Click en "Add"
```

#### **2. Resend te dará 3 registros DNS como estos:**

```
📌 Registro 1 - DKIM (Autenticación de email)
Tipo:     TXT
Nombre:   resend._domainkey
Valor:    p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC... (muy largo)
TTL:      3600

📌 Registro 2 - SPF (Verificación de remitente)
Tipo:     TXT
Nombre:   @
Valor:    v=spf1 include:resend.com ~all
TTL:      3600

📌 Registro 3 - MX (Servidor de correo)
Tipo:     MX
Nombre:   @
Valor:    feedback-smtp.resend.com
Prioridad: 10
TTL:      3600
```

#### **3. Agregar registros en tu proveedor de dominio**

**Ejemplo con GoDaddy:**
```
1. Ir a GoDaddy.com → My Products → Domains
2. Click en tu dominio
3. Click en "DNS" o "Manage DNS"
4. Scroll hasta "Records"
5. Click en "Add" para cada registro
6. Copiar y pegar EXACTAMENTE como Resend te lo dio:
   - Type: TXT o MX
   - Name: @ o resend._domainkey
   - Value: el texto largo que te dio Resend
   - TTL: 3600 (o dejar por defecto)
```

**Ejemplo con Namecheap:**
```
1. Dashboard → Domain List
2. Click en "Manage" al lado de tu dominio
3. Tab "Advanced DNS"
4. Click "Add New Record"
5. Agregar cada uno de los 3 registros
```

#### **4. Esperar verificación**
- Los cambios DNS pueden tardar **5 minutos - 48 horas**
- Resend verificará automáticamente
- Recibirás un email cuando esté verificado
- Puedes revisar el estado en https://resend.com/domains

#### **5. Una vez verificado**
Actualizar el código en `api/send-email.js`:

```javascript
// ANTES (modo prueba):
from: 'SatFuncional <onboarding@resend.dev>',

// DESPUÉS (producción):
from: 'SatFuncional <contacto@tudominio.com>',
```

### ⚠️ Notas importantes sobre DNS:

- **No borres registros existentes** en tu proveedor de dominio
- **Agrega los 3 registros**, no reemplaces otros
- **Copia EXACTAMENTE** como te lo da Resend (incluyendo puntos, guiones, etc.)
- **Si tu dominio ya tiene un registro MX** (como Google Workspace), consulta con Resend sobre configuración

---

## 🛠️ Desarrollo Local

### Requisitos
- Node.js 22.x (usa NVM para instalarlo)
- npm o bun
- Git

### Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/LucasSA97/tech-trio-pages.git
cd tech-trio-pages

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
# Crear archivo .env.local con:
RESEND_API_KEY=tu_api_key_aqui

# 4. Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:5173`

### Comandos disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build para producción
npm run preview      # Preview del build
npm run lint         # Linter de código
```

---

## 📧 Sistema de Emails

### Estado actual (Modo Prueba)
- ✅ **Funcional**: Los emails se envían correctamente
- 📧 **Remitente**: `onboarding@resend.dev`
- 📬 **Destinatario**: `lucassarachu7@gmail.com`
- ⚠️ **Limitación**: Solo puede enviar a tu email de cuenta Resend

### Producción (Después de configurar dominio)
- 📧 **Remitente**: `contacto@tudominio.com`
- 📬 **Destinatario**: Email de empresa que elijas
- ✅ **Sin limitaciones**: Puedes enviar a cualquier email

### Configuración de variables de entorno

**Local** (`.env.local`):
```env
RESEND_API_KEY=re_tu_api_key_aqui
```

**Vercel** (Dashboard → Settings → Environment Variables):
```
Name: RESEND_API_KEY
Value: re_tu_api_key_aqui
Environments: Production, Preview, Development
```

---

## 📁 Estructura del Proyecto

```
tech-trio-pages/
├── api/
│   └── send-email.js          # Función serverless de Resend
├── public/
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ContactForm.tsx    # Formulario de contacto
│   │   ├── ServicesCarousel.tsx
│   │   ├── ScrollToTopButton.tsx
│   │   └── ui/                # Componentes shadcn/ui
│   ├── pages/
│   │   └── Landing3.tsx       # Página principal
│   ├── App.tsx
│   └── main.tsx
├── .env.local                 # Variables de entorno (NO commitear)
├── .env.example               # Ejemplo de variables
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vercel.json                # Configuración de Vercel
├── EMAIL_SETUP.md             # Guía de configuración de emails
└── README.md                  # Este archivo
```

---

## 🔒 Seguridad

- ✅ Variables de entorno nunca expuestas en frontend
- ✅ Validación frontend + backend
- ✅ CORS configurado automáticamente por Vercel
- ✅ Rate limiting de Vercel
- ✅ API key protegida

---

## 📊 Límites y Cuotas

### Resend (Plan Gratuito)
- **3,000 emails/mes**
- **100 emails/día**
- Suficiente para empezar

### Vercel (Plan Hobby - Gratuito)
- **100 GB ancho de banda/mes**
- **100 GB-Horas serverless/mes**
- **1000 ejecuciones de funciones/día**
- Suficiente para un sitio corporativo

---

## 🚀 Deploy en Vercel

### Primera vez (con cuenta personal - YA HECHO)
```bash
# Ya deployado en:
https://tech-trio-pages.vercel.app
```

### Con cuenta de empresa (PENDIENTE)
1. Import proyecto en Vercel
2. Conectar GitHub de empresa
3. Configurar `RESEND_API_KEY`
4. Deploy automático en cada push a `main`

---

## 📞 Contacto del Proyecto

**Desarrollador actual**: Lucas Sarachú (lsarachu)  
**Cliente**: SatFuncional  
**Estado**: En desarrollo → Próximo a producción

---

## 📝 Notas de Migración

Cuando transfieran el proyecto a la cuenta de empresa:
1. Actualizar este README con nueva información
2. Cambiar URLs de repositorio
3. Actualizar credenciales de Vercel
4. Configurar webhooks si es necesario
5. Revisar permisos de colaboradores
