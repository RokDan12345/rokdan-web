# ✅ PRÓXIMOS PASOS - Configuración Final

## 🎯 Estado Actual del Proyecto

✅ **Completado**:
- ✅ Dominio comprado: **satfuncionalmallorca.com**
- ✅ Sistema de emails implementado (Resend)
- ✅ reCAPTCHA v3 integrado (frontend + backend)
- ✅ Formulario de contacto funcional
- ✅ Email HTML profesional
- ✅ Código pusheado a GitHub

⚠️ **Pendiente de configurar**:
- [ ] Registrar sitio en Google reCAPTCHA
- [ ] Configurar DNS de Resend
- [ ] Actualizar variables de entorno en Vercel

---

## 📋 CHECKLIST FINAL - HAZ ESTO AHORA

### ✅ Paso 1: Registrar sitio en Google reCAPTCHA (5 minutos)

1. **Ir a**: https://www.google.com/recaptcha/admin/create

2. **Rellenar el formulario**:
   ```
   Label: SatFuncional Mallorca
   
   reCAPTCHA type: 
   ✅ Score based (v3) reCAPTCHA
   
   Domains (agregar estos 3):
   - satfuncionalmallorca.com
   - www.satfuncionalmallorca.com
   - localhost
   
   ✅ Accept the reCAPTCHA Terms of Service
   ```

3. **Copiar las keys**:
   ```
   Site Key:   6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   Secret Key: 6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
   ```

4. **Actualizar `.env.local`**:
   ```bash
   VITE_RECAPTCHA_SITE_KEY=tu_site_key_aqui
   RECAPTCHA_SECRET_KEY=tu_secret_key_aqui
   ```

---

### ✅ Paso 2: Configurar Resend con el dominio (10 minutos)

1. **Ir a**: https://resend.com/domains

2. **Click en "Add Domain"**

3. **Escribir**: `satfuncionalmallorca.com`

4. **Resend te dará 3 registros DNS**:
   ```
   📌 Registro 1 - DKIM
   Tipo:    TXT
   Nombre:  resend._domainkey
   Valor:   p=MIGfMA0GCSq... (muy largo)
   TTL:     3600

   📌 Registro 2 - SPF
   Tipo:    TXT
   Nombre:  @
   Valor:   v=spf1 include:resend.com ~all
   TTL:     3600

   📌 Registro 3 - MX
   Tipo:    MX
   Nombre:  @
   Valor:   feedback-smtp.resend.com
   Prioridad: 10
   TTL:     3600
   ```

5. **Ir al panel de tu proveedor de dominio** (GoDaddy, Namecheap, etc.)

6. **Buscar "DNS Management" o "Advanced DNS"**

7. **Agregar cada uno de los 3 registros** (copiar y pegar exactamente)

8. **Guardar cambios**

9. **Esperar verificación** (puede tardar 5 min - 48 horas)
   - Revisar en https://resend.com/domains
   - Recibirás un email cuando esté verificado

10. **Una vez verificado, actualizar el código**:

Abrir: `api/send-email.js`

Buscar línea 22:
```javascript
// ANTES:
from: 'SatFuncional <onboarding@resend.dev>',

// CAMBIAR A:
from: 'SatFuncional <contacto@satfuncionalmallorca.com>',
```

Buscar línea 23:
```javascript
// ANTES:
to: ['lucassarachu7@gmail.com'],

// CAMBIAR A:
to: ['satfuncionalmallorca.web@gmail.com'],
```

Hacer commit y push:
```bash
git add api/send-email.js
git commit -m "Update email sender and recipient to production domain"
git push
```

---

### ✅ Paso 3: Configurar variables de entorno en Vercel (5 minutos)

1. **Ir a**: https://vercel.com/dashboard

2. **Seleccionar tu proyecto**: tech-trio-pages (o sat-funcional-web)

3. **Settings → Environment Variables**

4. **Agregar estas 3 variables**:

   **Variable 1**:
   ```
   Name: RESEND_API_KEY
   Value: re_T5vNMqP5_GPP2veZKnV9hN5yZzg8uzKrd
   Environments: ✅ Production ✅ Preview ✅ Development
   ```

   **Variable 2**:
   ```
   Name: VITE_RECAPTCHA_SITE_KEY
   Value: [tu site key de Google reCAPTCHA]
   Environments: ✅ Production ✅ Preview ✅ Development
   ```

   **Variable 3**:
   ```
   Name: RECAPTCHA_SECRET_KEY
   Value: [tu secret key de Google reCAPTCHA]
   Environments: ✅ Production ✅ Preview ✅ Development
   ```

5. **Click "Save" en cada una**

6. **Forzar redeploy**:
   - Deployments → Click en el último deployment
   - Click en "..." → "Redeploy"

---

### ✅ Paso 4: Probar todo en producción (2 minutos)

1. **Esperar a que termine el redeploy** (1-2 minutos)

2. **Abrir**: https://satfuncionalmallorca.com (o tu URL de Vercel)

3. **Ir al formulario de contacto**

4. **Llenar el formulario de prueba**:
   ```
   Nombre: Test
   Teléfono: 123456789
   Email: tu@email.com
   Servicio: Prueba
   Mensaje: Esto es una prueba del formulario
   ```

5. **Click en "Enviar mensaje"**

6. **Verificar**:
   - ✅ Debe mostrar mensaje de éxito
   - ✅ Debe llegar email a satfuncionalmallorca.web@gmail.com
   - ✅ El email debe venir de contacto@satfuncionalmallorca.com
   - ✅ El email debe tener buen formato

---

## 🐛 Si algo falla...

### reCAPTCHA no funciona:
```bash
# Verificar que las variables estén en .env.local
cat .env.local

# Reiniciar servidor de desarrollo
npm run dev
```

### Email no llega:
1. Verificar logs en Vercel: Deployments → Functions → /api/send-email
2. Verificar que DNS esté verificado en Resend
3. Revisar carpeta de spam en Gmail

### Error 500 en producción:
1. Ir a Vercel Dashboard → Functions → View logs
2. Buscar errores en consola
3. Verificar que todas las variables de entorno estén configuradas

---

## 📊 Monitoreo Post-Deploy

### Google reCAPTCHA:
- Dashboard: https://www.google.com/recaptcha/admin
- Ver requests, scores promedio, bots bloqueados

### Resend:
- Dashboard: https://resend.com/emails
- Ver emails enviados, tasa de entrega, errores

### Vercel:
- Analytics: https://vercel.com/analytics
- Ver tráfico, funciones ejecutadas, errores

---

## ✅ RESUMEN

Después de completar estos pasos tendrás:

✅ **Protección anti-spam** con reCAPTCHA v3
✅ **Emails profesionales** desde @satfuncionalmallorca.com
✅ **Sistema de contacto** 100% funcional
✅ **Dominio propio** conectado
✅ **Variables de entorno** configuradas
✅ **Deployment en producción** listo

---

## 📝 Archivos a modificar después de configurar Resend:

```bash
# Después de verificar dominio en Resend:
1. api/send-email.js (líneas 22 y 23)
2. Commit y push
3. Vercel desplegará automáticamente
```

---

## 🎉 ¡ÚLTIMO PASO!

Una vez todo configurado, actualizar el README:

```markdown
- [x] **2. Configurar Resend con el dominio nuevo**
  - ✅ DNS verificado
  - ✅ Emails enviados desde contacto@satfuncionalmallorca.com
```

---

**¡Ya casi estás listo para producción!** 🚀
