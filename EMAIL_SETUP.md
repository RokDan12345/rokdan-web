# 📧 Configuración del Sistema de Emails

## Paso a paso para configurar Resend

### 1️⃣ Crear cuenta en Resend

1. Ve a [https://resend.com/signup](https://resend.com/signup)
2. Crea una cuenta gratuita (3,000 emails/mes gratis)
3. Verifica tu email

### 2️⃣ Obtener tu API Key

1. Ve a [https://resend.com/api-keys](https://resend.com/api-keys)
2. Haz clic en "Create API Key"
3. Dale un nombre (ej: "SatFuncional Production")
4. Selecciona permisos: "Sending access"
5. Copia la API key (solo se muestra una vez)

### 3️⃣ Configurar localmente

1. Abre el archivo `.env.local`
2. Pega tu API key:
   ```
   RESEND_API_KEY=re_tu_api_key_aqui
   ```
3. Guarda el archivo

### 4️⃣ Configurar en Vercel

1. Ve a tu proyecto en [Vercel Dashboard](https://vercel.com/dashboard)
2. Settings → Environment Variables
3. Agrega:
   - **Name**: `RESEND_API_KEY`
   - **Value**: tu API key de Resend
   - **Environment**: Production, Preview, Development
4. Haz clic en "Save"

### 5️⃣ Verificar dominio (OPCIONAL - Para producción)

**Nota**: Para desarrollo puedes usar `onboarding@resend.dev`

Para usar tu propio dominio:
1. Ve a [https://resend.com/domains](https://resend.com/domains)
2. Agrega tu dominio (ej: `satfuncional.com`)
3. Configura los registros DNS según las instrucciones
4. Espera la verificación (puede tomar hasta 48 horas)
5. En `api/send-email.ts`, cambia:
   ```typescript
   from: 'SatFuncional <contacto@satfuncional.com>'
   ```

## 🧪 Probar localmente

1. Asegúrate de tener `.env.local` configurado
2. Ejecuta: `npm run dev`
3. Ve a `http://localhost:5173`
4. Llena el formulario de contacto
5. Verifica que el email llegue a `lucas.workspace.1997@gmail.com`

## 📊 Límites de la capa gratuita

- **3,000 emails/mes**
- **100 emails/día**
- Solo puedes enviar desde `onboarding@resend.dev` hasta que verifiques un dominio

## 🚀 Deploy en Vercel

1. Sube tu código a GitHub
2. Conecta el repositorio en Vercel
3. Asegúrate de agregar `RESEND_API_KEY` en las variables de entorno
4. Deploy automático

## ✅ Características implementadas

- ✅ Validación de formulario con Zod
- ✅ Estados de loading, success y error
- ✅ Email HTML profesional con estilos
- ✅ API route segura en Vercel
- ✅ Variables de entorno protegidas
- ✅ Componente reutilizable
- ✅ Feedback visual para el usuario

## 📧 Email enviado a

- **Destinatario**: `lucas.workspace.1997@gmail.com`
- **Formato**: HTML con estilos profesionales
- **Información incluida**:
  - Nombre del cliente
  - Teléfono (con enlace para llamar)
  - Email (con enlace mailto)
  - Servicio solicitado
  - Descripción del problema

## 🔒 Seguridad

- API key nunca expuesta en el frontend
- Validación en backend
- CORS configurado automáticamente por Vercel
- Rate limiting incluido por Vercel

## 💡 Notas importantes

1. **No commitees** el archivo `.env.local` (ya está en `.gitignore`)
2. **Siempre usa** variables de entorno para la API key
3. **Revisa** el dashboard de Resend para ver estadísticas de emails
4. **Monitorea** el uso para no exceder límites gratuitos
