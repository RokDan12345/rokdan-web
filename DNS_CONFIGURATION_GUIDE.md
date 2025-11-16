# 📧 Configuración DNS de Resend para satfuncionalmallorca.com

## ⚠️ IMPORTANTE - LEER ANTES DE EMPEZAR

Estos son los **registros DNS exactos** que debes agregar en tu proveedor de dominio (GoDaddy, Namecheap, etc.).

**Estado actual en Resend**: ⏳ Pendiente (Status: Pending)
**Tiempo estimado de verificación**: 5 minutos - 48 horas (normalmente 10-30 minutos)

---

## 📋 REGISTROS DNS A AGREGAR

Debes agregar **4 registros** en total (1 para verificación + 3 para envío).

---

### ✅ REGISTRO 1 - Domain Verification (DKIM)

Este registro verifica que eres dueño del dominio.

```
Type:     TXT
Name:     resend._domainkey
Content:  p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC+thMHtvUROpIjgsA4BvVlc8ZpteRGdDeMn6arKp6KIwErFTG/+yumv4lm+TLgsprdhtecepqrXlqxhVLbRWg4N1+yVphbG+aa27+95penpln4Vil1fBlu709Rzj6LfAD0Am9Jt9xKM9vnY2HwyLXjXRgI17VlKMFYBZrg0zQGAwIDAQAB
TTL:      Auto (o 3600)
Priority: -
```

---

### ✅ REGISTRO 2 - Enable Sending (MX Record)

Este configura el servidor de correo.

```
Type:     MX
Name:     send
Content:  feedback-smtp.eu-west-1.amazonses.com
TTL:      60 (o Auto)
Priority: 10
```

---

### ✅ REGISTRO 3 - Enable Sending (SPF)

Este autoriza a Resend para enviar emails desde tu dominio.

```
Type:     TXT
Name:     send
Content:  v=spf1 include:amazonses.com ~all
TTL:      60 (o Auto)
Priority: -
```

---

### ✅ REGISTRO 4 - Enable Sending (DMARC) - OPCIONAL

Este configura la política de autenticación de emails.

```
Type:     TXT
Name:     _dmarc
Content:  v=DMARC1; p=none;
TTL:      Auto (o 3600)
Priority: -
```

**Nota**: Este registro es opcional pero recomendado para mejor reputación de email.

---

## 🔧 CÓMO AGREGAR LOS REGISTROS

### Si usas **GoDaddy**:

1. Ir a **GoDaddy.com** → Login
2. **My Products** → **Domains**
3. Click en **satfuncionalmallorca.com**
4. Click en **DNS** o **Manage DNS**
5. Scroll hasta **Records**
6. Para cada registro:
   - Click en **Add**
   - Seleccionar **Type** (TXT o MX)
   - En **Name**: poner exactamente lo que dice arriba
   - En **Value** (o Content): copiar y pegar el texto completo
   - En **TTL**: dejar Auto o poner 3600
   - En **Priority** (solo para MX): poner 10
   - Click **Save**

### Si usas **Namecheap**:

1. Ir a **Namecheap.com** → Login
2. **Dashboard** → **Domain List**
3. Click en **Manage** junto a satfuncionalmallorca.com
4. Tab **Advanced DNS**
5. Click **Add New Record**
6. Para cada registro:
   - **Type**: TXT o MX Record
   - **Host**: poner lo que dice en "Name" arriba
   - **Value**: copiar el texto de "Content"
   - **TTL**: Automatic o 3600
   - **Priority** (solo MX): 10
   - Click **Save All Changes**

### Si usas **Google Domains** / **Cloudflare** / **Otros**:

1. Buscar "DNS Management" o "DNS Settings"
2. Buscar "Add Record" o "Add DNS Record"
3. Seguir el mismo patrón que arriba

---

## ⚠️ NOTAS MUY IMPORTANTES

### ❗ Sobre el campo "Name":

Algunos proveedores agregan automáticamente el dominio al final. Por ejemplo:

- **GoDaddy**: Si pones `send`, ellos guardan como `send.satfuncionalmallorca.com` ✅ CORRECTO
- **Namecheap**: Si pones `send`, ellos guardan como `send.satfuncionalmallorca.com` ✅ CORRECTO
- **Cloudflare**: Tienes que poner `send.satfuncionalmallorca.com` COMPLETO

**Regla general**: 
- Si tu proveedor tiene un campo separado para el dominio → pon solo `send`, `resend._domainkey`, etc.
- Si NO tiene campo separado → pon el nombre completo: `send.satfuncionalmallorca.com`

### ❗ Sobre registros existentes:

- **NO BORRES** otros registros DNS que ya tengas
- **AGREGA** estos nuevos registros
- Si ya existe un registro `@` de tipo TXT (para verificar el dominio con otro servicio), déjalo y agrega los nuevos

### ❗ Sobre el registro `@`:

En el panel de Resend NO veo un registro con `Name: @`, así que **NO agregues ningún registro con `@`** por ahora. Solo agrega los 4 que te di arriba.

---

## ✅ VERIFICACIÓN

### Después de agregar los registros:

1. **Esperar** entre 5 minutos y 48 horas (normalmente 15-30 minutos)

2. **Revisar en Resend**:
   - Ir a https://resend.com/domains
   - Click en `satfuncionalmallorca.com`
   - Ver si el **Status** cambió de "Pending" a "Verified" ✅

3. **Recibirás un email** cuando esté verificado

4. **Una vez verificado**, actualizar el código en `api/send-email.js`:
   ```javascript
   // Línea 42:
   from: 'SatFuncional <contacto@satfuncionalmallorca.com>',
   
   // Línea 43:
   to: ['satfuncionalmallorca.web@gmail.com'],
   ```

5. **Hacer commit y push**:
   ```bash
   git add api/send-email.js
   git commit -m "Update email addresses to production domain"
   git push
   ```

---

## 🧪 PROBAR LOS REGISTROS DNS

Puedes verificar si los registros están propagados usando estas herramientas:

1. **MXToolbox**: https://mxtoolbox.com/SuperTool.aspx
   - Buscar: `send.satfuncionalmallorca.com`
   - Tipo: MX Lookup

2. **DNS Checker**: https://dnschecker.org/
   - Buscar: `resend._domainkey.satfuncionalmallorca.com`
   - Tipo: TXT Record

3. **Command Line** (PowerShell):
   ```powershell
   # Verificar registro TXT (DKIM)
   nslookup -type=TXT resend._domainkey.satfuncionalmallorca.com

   # Verificar registro MX
   nslookup -type=MX send.satfuncionalmallorca.com
   ```

---

## 🚨 TROUBLESHOOTING

### Los registros no aparecen después de 1 hora:

1. **Verificar que los copiaste exactamente**
   - Sin espacios extra
   - Sin saltos de línea
   - Todo el texto de "Content"

2. **Verificar el campo "Name"**
   - Puede que necesites poner `send.satfuncionalmallorca.com` en lugar de solo `send`
   - Depende del proveedor

3. **TTL muy alto**
   - Si pusiste TTL de 86400 (24 horas), tardará mucho
   - Cambia a 60 o 3600 (1 hora)

4. **Cache DNS**
   - En PowerShell ejecuta: `ipconfig /flushdns`

### Resend sigue mostrando "Pending":

- Es normal que tarde hasta 48 horas
- Revisa tu email por si Resend te envió alguna notificación
- Si después de 48 horas sigue pending, contacta soporte de Resend

---

## 📊 RESUMEN VISUAL

```
satfuncionalmallorca.com
│
├── resend._domainkey (TXT) → Verificación DKIM ✅
│
└── send (subdomain)
    ├── MX  → feedback-smtp.eu-west-1.amazonses.com
    ├── TXT → v=spf1 include:amazonses.com ~all
    │
    └── _dmarc
        └── TXT → v=DMARC1; p=none;
```

---

## ✅ CHECKLIST

Marca con ✅ cuando completes cada paso:

- [ ] Agregué registro TXT para `resend._domainkey`
- [ ] Agregué registro MX para `send`
- [ ] Agregué registro TXT (SPF) para `send`
- [ ] Agregué registro TXT (DMARC) para `_dmarc` (opcional)
- [ ] Guardé todos los cambios en mi proveedor de DNS
- [ ] Esperé al menos 15 minutos
- [ ] Verifiqué el status en https://resend.com/domains
- [ ] El dominio está verificado en Resend ✅
- [ ] Actualicé `api/send-email.js` con los nuevos emails
- [ ] Hice commit y push del código
- [ ] Probé el formulario en producción

---

**¡Una vez que el dominio esté verificado en Resend, estaremos listos para enviar emails profesionales!** 📧✨
