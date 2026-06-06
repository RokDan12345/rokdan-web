# 🛡️ Configuración de Google reCAPTCHA v3

## ¿Por qué reCAPTCHA?

Protege tu formulario de contacto contra:
- 🤖 **Bots automatizados** que envían spam
- 📧 **Emails masivos** no deseados
- 🔒 **Abuso del servicio** de envío de emails
- 💸 **Gasto innecesario** en la cuota de Resend

---

## 📋 Paso a Paso para Configurar

### 1️⃣ Registrar tu sitio en Google reCAPTCHA

1. **Ir a Google reCAPTCHA Admin Console**:
   - URL: https://www.google.com/recaptcha/admin/create
   - Debes estar logueado con una cuenta de Google

2. **Rellenar el formulario**:
   ```
    Label: ROKDAN Mallorca
    
    reCAPTCHA type: 
    ✅ reCAPTCHA v3 (recomendado - invisible, no molesta al usuario)
    
    Domains:
    - rokdan-web.vercel.app
    - localhost (para desarrollo)
   
   ✅ Accept the reCAPTCHA Terms of Service
   
   ⚠️ Send alerts to owners: (opcional)
   ```

3. **Copiar las keys que te da Google**:
   ```
   ✅ Site Key (pública - va en el frontend):
   Ejemplo: 6LcxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxXX
   
   ✅ Secret Key (privada - va en el backend):
   Ejemplo: 6LcxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxXX
   ```

---

### 2️⃣ Configurar Variables de Entorno

#### **Local** (`.env.local`):
```env
# Resend API Key (ya existe)
RESEND_API_KEY=re_T5vNMqP5_GPP2veZKnV9hN5yZzg8uzKrd

# reCAPTCHA Keys (NUEVAS)
VITE_RECAPTCHA_SITE_KEY=tu_site_key_aqui
RECAPTCHA_SECRET_KEY=tu_secret_key_aqui
```

⚠️ **Importante**: 
- Las variables que empiezan con `VITE_` son visibles en el frontend
- `RECAPTCHA_SECRET_KEY` **NO** tiene prefijo `VITE_` porque solo se usa en el backend

#### **Vercel** (Dashboard → Settings → Environment Variables):
```
1. VITE_RECAPTCHA_SITE_KEY
   Value: tu_site_key_aqui
   Environments: Production, Preview, Development

2. RECAPTCHA_SECRET_KEY
   Value: tu_secret_key_aqui
   Environments: Production, Preview, Development
```

---

### 3️⃣ Actualizar `.env.example`

```env
# Resend API Key
RESEND_API_KEY=re_your_api_key_here

# Google reCAPTCHA v3
VITE_RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

---

## 🔧 Implementación Técnica

### Frontend (ContactForm.tsx)
- Se envuelve la app con `GoogleReCaptchaProvider`
- Antes de enviar el formulario, se ejecuta `executeRecaptcha()`
- Se obtiene un **token** único
- El token se envía junto con los datos del formulario

### Backend (api/send-email.js)
- Recibe el token de reCAPTCHA
- Hace una petición a la API de Google para verificar el token
- Google responde con un **score** (0.0 - 1.0):
  - **0.0**: Definitivamente un bot
  - **0.5**: Sospechoso
  - **1.0**: Definitivamente humano
- Si el score es menor a 0.5, rechaza el email
- Si es mayor, lo envía normalmente

---

## 🎯 ¿Cómo funciona reCAPTCHA v3?

**reCAPTCHA v3 es invisible:**
- ❌ No muestra el "No soy un robot"
- ❌ No pide seleccionar semáforos o bicicletas
- ✅ Analiza el comportamiento del usuario en segundo plano
- ✅ Asigna un score de 0.0 (bot) a 1.0 (humano)

**Factores que analiza:**
- Movimientos del mouse
- Tiempo en la página
- Interacciones con el formulario
- Historial de navegación
- Dirección IP

---

## 📊 Umbrales Recomendados

```javascript
score >= 0.7  → ✅ Humano confiable
score >= 0.5  → ⚠️ Sospechoso pero aceptable
score < 0.5   → ❌ Probablemente bot - RECHAZAR
score < 0.3   → 🚫 Definitivamente bot
```

**En nuestra implementación usamos 0.5** como umbral por defecto.

---

## 🧪 Testing

### Desarrollo Local
```bash
npm run dev
# Ir a http://localhost:5173
# El reCAPTCHA funciona en localhost sin problemas
```

### Producción
```bash
# Debe estar desplegado en rokdan-web.vercel.app
# O en el dominio que hayas registrado en reCAPTCHA
```

---

## 🔍 Monitoreo

### Ver estadísticas de reCAPTCHA:
1. Ir a https://www.google.com/recaptcha/admin
 2. Seleccionar tu sitio "ROKDAN Mallorca"
3. Ver métricas:
   - Requests totales
   - Score promedio
   - Intentos bloqueados

---

## ⚠️ Troubleshooting

### Error: "Invalid site key"
- ✅ Verifica que `VITE_RECAPTCHA_SITE_KEY` esté configurada
- ✅ Asegúrate de que el dominio esté registrado en Google reCAPTCHA
- ✅ Recarga la página después de cambiar variables de entorno

### Error: "Verification failed"
- ✅ Verifica que `RECAPTCHA_SECRET_KEY` esté en Vercel
- ✅ Revisa los logs de la función serverless
- ✅ Confirma que el token no haya expirado (válido por 2 minutos)

### Score siempre bajo en desarrollo
- Es normal en localhost tener scores más bajos
- Google mejora el score con datos históricos del dominio
- En producción con tráfico real, el score será más preciso

---

## 🔒 Seguridad

- ✅ Site Key es pública (visible en HTML) - esto es normal
- ✅ Secret Key es privada (solo en backend)
- ✅ Los tokens expiran en 2 minutos
- ✅ No se puede reutilizar un token
- ✅ Google valida el dominio de origen

---

## 📝 Archivos Modificados

```
✅ src/main.tsx (agregado GoogleReCaptchaProvider)
✅ src/components/ContactForm.tsx (integrado useGoogleReCaptcha)
✅ api/send-email.js (verificación del token)
✅ .env.local (nuevas variables)
✅ .env.example (ejemplo actualizado)
✅ package.json (nueva dependencia)
```

---

## 🎉 Resultado Final

Con reCAPTCHA v3 implementado:
- ✅ Formulario protegido contra spam
- ✅ Experiencia de usuario no interrumpida (invisible)
- ✅ Ahorro en cuota de emails de Resend
- ✅ Logs de intentos bloqueados
- ✅ Estadísticas de Google reCAPTCHA

---

## 📞 Soporte

**Documentación oficial**:
- https://developers.google.com/recaptcha/docs/v3
- https://cloud.google.com/recaptcha-enterprise/docs

**Librería React**:
- https://github.com/t49tran/react-google-recaptcha-v3
